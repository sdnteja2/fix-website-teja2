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
            <UBadge class="shadow-md mt-4">
              {{
                new Date(blok.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}</UBadge
            >
          </template>
          <h1
            class="mt-3 text-3xl leading-tight md:text-4xl"
            itemprop="headline"
            title="Rise of Tailwind - A Utility First CSS Framework">
            {{ blok.title }}
          </h1>
        </UCard>
      </div>
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
    starts_with: "berita",
    is_startpage: false,
  });
  const props = defineProps({ story: Object, blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.content));
  const title = props.blok.title;
  useServerSeoMeta({
    title: () => title,
    ogTitle: () => title,
    description: () => title,
    ogDescription: () => title,
    twitterTitle: () => title,
    twitterDescription: () => title,
    ogType: () => "article",
  });
  defineOgImage({
    component: "OgTemplate",
    title: title,
    description: title,
  });
  useSchemaOrg([
    defineWebPage({
      name: () => title,
      description: () => title,
      author: "SDN Teja 2",
      publisher: "SDN Teja 2",
    }),
    defineArticle({
      headline: () => title,
      description: () => title,
      author: {
        name: "sdnteja2",
      },
    }),
  ]);
</script>
