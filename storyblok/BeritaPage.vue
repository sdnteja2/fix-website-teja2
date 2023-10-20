<template>
  <div class="py-10 px-2 md:px-14">
    <div
      class="flex pb-10 w-full justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <UButton
        label="Cari Berita"
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
              placeholder="Cari Berita ..."
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
          <ul class="w-full h-64 overflow-y-auto scroll-py-3">
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
          <template #footer>
            <div class="w-full justify-end flex">
              <UButton
              color="merah"
              variant="outline"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1 justify-end"
              @click="isOpen = false" />
            </div>
          </template>
        </UCard>
      </UModal>
    </div>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl mx-auto">
      <BeritaCard
        v-for="berita in paginatedBeritas"
        :key="berita.uuid"
        :berita="berita.content"
        :slug="berita.full_slug" />
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
  const beritas = ref(null);
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "berita",
    is_startpage: false,
    sort_by: "content.tanggal:desc",
  });
  beritas.value = data.stories;
  //paihtanation
  const page = ref(1);
  const jumlahTotal = beritas.value.length;
  const perPage = 10; // Jumlah berita per halaman
  const paginatedBeritas = computed(() => {
    const startIndex = (page.value - 1) * perPage;
    const endIndex = startIndex + perPage;
    return beritas.value.slice(startIndex, endIndex);
  });
  async function search() {
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "berita",
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
</script>
