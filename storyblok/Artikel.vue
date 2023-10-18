<template>
  <article
    class="relative px-2 sm:px-14 py-16 mx-auto max-w-full"
    v-editable="blok">
    <div
      class="w-full mx-auto md:w-4/5"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting">
      <div class="">
        <UCard>
          <template #header>
            <div class="">
              <NuxtImg
                v-if="blok.image?.filename"
                :src="blok.image.filename + '/m/1600x0'"
                :alt="blok.image.alt"
                class="object-cover w-full h-52 md:h-96 bg-center rounded-lg" />
            </div>
            <UBadge class="shadow-md mt-4">
              {{
                new Date(blok.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}</UBadge
            >
            <h1
              class="mt-3 text-3xl leading-tight md:text-4xl"
              itemprop="headline"
              title="Rise of Tailwind - A Utility First CSS Framework">
              {{ story.name }}
            </h1>
          </template>
          <p>
            {{ blok.description }}
          </p>
          <template #footer>
            <div class="flex space-x-2">
              <UBadge
                v-for="(kategori, index) in blok.kategori"
                :key="index"
                class="mr-2 text-xs"
                >{{ kategori }}</UBadge
              >
            </div>
          </template>
        </UCard>
      </div>
    </div>
    <!-- daftar isi -->
    <div class="sticky top-[4.1rem] my-8 w-full mx-auto md:w-4/5">
      <UDropdown
        :ui="{ width: 'w-2/3' }"
        class="w-full"
        :items="categoryItem"
        :popper="{ placement: 'bottom-start' }">
        <UButton block color="merah" variant="soft" label="Daftar Isi" />
      </UDropdown>
    </div>
    <!-- artikel -->
    <div class="w-full mx-auto md:w-4/5">
      <div
        v-html="resolvedRichText"
        class="prose prose-slate p-2 max-w-full dark:prose-invert"></div>
    </div>
  </article>
</template>
<script setup>
  const props = defineProps({ story: Object, blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.content));
  const { slug } = useRoute().params;
  const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join("/") : "artikel",
    { version: "draft" }
  );
  const toc = ref([]);
  onMounted(() => {
    resolvedRichText.value = renderRichText(props.blok.content);
    generateTOC();
  });
  const generateTOC = () => {
    const headings = document.querySelectorAll(".prose span[id]");
    const tocData = [];
    headings.forEach((heading) => {
      const id = `#${heading.id}`;
      const text = heading.textContent;
      // Assign a click event listener to each heading
      heading.addEventListener("click", () => {
        scrollToHeading(id);
      });
      tocData.push({
        id,
        text,
      });
    });
    toc.value = tocData;
    console.log("TOC Data:", tocData);
  };
  const scrollToHeading = (id) => {
    const heading = $nuxt.$el.querySelector(`#${id}`);
    if (heading) {
      const offset = 100; // Sesuaikan offset yang diinginkan di sini
      const scrollPosition = heading.offsetTop - offset;
      window.scrollBy({ top: scrollPosition, behavior: "smooth" });
    }
  };
  const categoryItem = computed(() => {
    const items = toc.value.map((heading) => [
      {
        label: heading.text,
        to: heading.id,
      },
    ]);
    return items;
  });
  // const categoryItem = [
  //   [
  //     {
  //       label: heading.text,
  //       to: heading.id,
  //     },
  //   ],
  // ];
</script>
