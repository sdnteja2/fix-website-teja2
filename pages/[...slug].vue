<script setup>
  const { slug } = useRoute().params;
  const resolveRelations = ["artikel-populer.artikels"];
  const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join("/") : "home",
    {
      version: "draft",
      resolve_relations: resolveRelations,
    },
    {
      resolveRelations,
    }
  );
  const metadata = story.value.content.metadata;
  const defaultTitle = "SDN Teja 2";
  const defaultDescription = "Sekolah Dasar Negeri Teja 2";
  const title = metadata && metadata.title ? metadata.title : defaultTitle;
  const description =
    metadata && metadata.description
      ? metadata.description
      : defaultDescription;
  useServerSeoMeta({
    canonical: () => "https://sdnteja2.sch.id/" + story.value.content.full_slug,
    title: () => title,
    ogTitle: () => title,
    description: () => description,
    ogDescription: () => description,
    themeColor: () => "#F22727",
    twitterTitle: () => title,
    twitterDescription: () => description,
    ogType: () => "website",
    ogSiteName: () => "SDN Teja 2",
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
      author:  "SDN Teja 2",
      publisher: "SDN Teja 2",
    }),
  ]);
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
