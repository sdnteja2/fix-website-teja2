<template>
  <div class="py-10 px-2 md:px-14">
    <div
      class="flex w-full pb-16 justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <UButton
        label="Cari Artikel"
        icon="i-basil-search-outline"
        @click="isOpen = true" />
      <UModal
        :ui="{
          inner: 'inset-4',
          container: ' items-center',
          padding: 'p-2 sm:p-0',
        }"
        v-model="isOpen">
        <UCard>
          <template #header>
            <UInput
              v-model="query"
              name="query"
              placeholder="Cari Artikel ..."
              icon="i-heroicons-magnifying-glass-20-solid"
              :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing>
                <UButton
                  v-show="query !== ''"
                  color="merah"
                  variant="link"
                  icon="i-heroicons-x-mark-20-solid"
                  :padded="false"
                  @click="query = ''" />
              </template>
            </UInput>
          </template>
          <ul class="w-full h-80 overflow-y-auto scroll-py-3">
            <li
              class="flex duration-200 cursor-default"
              v-for="hit in searchResults"
              :key="hit.uuid">
              <NuxtLink class="w-full p-1 font-normal" :to="hit.full_slug">
                <UCard>
                  <h3 class="line-clamp-2 font-bold">
                    {{ hit.content.title }}
                  </h3>
                </UCard>
              </NuxtLink>
            </li>
          </ul>
        </UCard>
      </UModal>
    </div>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
      <ArtikelCard
        v-for="artikel in paginatedArtikels"
        :key="artikel.uuid"
        :artikel="artikel.content"
        :slug="artikel.full_slug" />
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="mt-16 flex justify-center">
      <UPagination
        v-model="page"
        :max="5"
        :page-count="perPage"
        :total="jumlahTotal" />
    </div>
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
  const isOpen = ref(false);
  const query = ref("");
  const searchResults = ref([]);
  const articles = ref(null);
  const selectedCategory = ref("");
  const artikels = ref(null);
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "artikel",
    is_startpage: false,
  });
  artikels.value = data.stories;
  // searh
  async function search() {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "artikel",
      is_startpage: false,
      cv: Date.now(),
      per_page: 10,
    });
    const hits = data.stories.filter((story) => {
      return story.content.title
        .toLowerCase()
        .includes(query.value.toLowerCase());
    });
    searchResults.value = hits;
  }
  watch(query, search);
  // pagiatio
  const page = ref(1);
  const jumlahTotal = artikels.value.length;
  const perPage = 10; // Jumlah berita per halaman
  const paginatedArtikels = computed(() => {
    const startIndex = (page.value - 1) * perPage;
    const endIndex = startIndex + perPage;
    return artikels.value.slice(startIndex, endIndex);
  });
</script>
