<template>
  <article
    class="relative px-2 sm:px-14 py-16 mx-auto max-w-full"
    v-editable="blok">
    <!-- <SBreadcrumb :items="items" :ui="ui" /> -->
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
              {{ blok.title }}
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
    <div class="sticky top-[4.05rem] my-8 w-full mx-auto md:w-4/5">
      <UDropdown
        :ui="{ width: 'w-2/3', popper: 'fixed w-full mx-auto left-1/2' }"
        class="w-full"
        :items="categoryItem">
        <UButton block color="merah" variant="solid" label="Daftar Isi" />
      </UDropdown>
    </div>
    <div class="w-full mx-auto md:w-4/5">
      <div
        v-html="resolvedRichText"
        class="prose prose-slate prose-img:mx-auto prose-img:h-96 prose-img:w-40 prose-img:rounded-md prose-img:object-cover p-2 max-w-full dark:prose-invert"></div>
    </div>
  </article>
</template>
<script setup>
  const { slug } = useRoute().params;
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "artikel",
    is_startpage: false,
  });
  const props = defineProps({ story: Object, blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.content));
  const title = props.blok.title;
  const description = props.blok.description;
  useServerSeoMeta({
    title: () => title,
    ogTitle: () => title,
    description: () => description,
    ogDescription: () => description,
    twitterTitle: () => title,
    twitterDescription: () => description,
    twitterCard: () => "summary_large_image",
    ogType: () => "website",
    ogSiteName: () => "SDN Teja 2",
    twitterImage: "https://sdnteja2.sch.id/artikel/${slug}/__og_image__/og.png",
  });
  defineOgImage({
    component: "OgTemplate",
    title: title,
    description: description,
  });
  useSchemaOrg([
    defineWebPage({
      name: () => title,
      description: () => description,
      author: "SDN Teja 2",
      publisher: "SDN Teja 2",
    }),
    defineArticle({
      headline: () => title,
      description: () => description,
      image: "https://sdnteja2.sch.id/artikel/${slug}/__og_image__/og.png",
      // attaching an author when the identity is an organization
      author: {
        name: "sdnteja2",
      },
    }),
  ]);
  // Generate daftar isi
  const headings = computed(() => {
    const headings = props.blok.content.content.filter(
      (section) => section.type === "heading" && section.attrs.level === 2
    );
    return headings.map((heading) => {
      console.log(`id: ${heading.id}, text: ${heading.content[0].text}`);
      return {
        id: heading.content[0].marks[0].attrs.id,
        text: heading.content[0].text,
      };
    });
  });
  // Create categoryItem for dropdown
  const categoryItem = computed(() => {
    return headings.value.map((heading) => [
      {
        label: heading.text,
        to: "#" + heading.id,
      },
    ]);
  });
</script>
