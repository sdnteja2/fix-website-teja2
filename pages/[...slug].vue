<script setup>
  const { slug } = useRoute().params;
  const resolveRelations = ["artikel-populer.articles"];
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
  useSchemaOrg([
    defineOrganization({
      name: "SDN Teja 2",
      url: "https://sdnteja2.sch.id/",
      logo: "https://sdnteja2.sch.id/sdnteja2.png",
      description:
        "Sekolah Dasar Negeri Teja 2 atau Teja II adalah sekolah dasar negeri yang berada di Desa Teja, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawabarat, Indonesia. Sekolah ini berdiri sejak tahun 1960.",
    }),
    defineLocalBusiness({
      name: "SDN Teja 2",
      address: {
        streetAddress:
          "Blok Desa, Desa Teja, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawabarat, Indonesia",
        addressLocality: "Rajagaluh",
        addressRegion: "Majalengka - Jawa Barat",
        postalCode: "45472",
        addressCountry: "ID",
      },
      // image: 'https://emojiguide.org/images/emoji/n/3ep4zx1jztp0n.png',
    }),
  ]);
  const metadata = story.value.content.metadata;
  const defaultTitle = "SDN Teja 2";
  const defaultDescription = "Sekolah Dasar Negeri Teja 2";
  const title = metadata && metadata.title ? metadata.title : defaultTitle;
  const description =
    metadata && metadata.description
      ? metadata.description
      : defaultDescription;
  useServerSeoMeta({
    title: () => title,
    ogTitle: () => title,
    description: () => description,
    ogDescription: () => description,
  });
  defineOgImage({
    component: "OgTemplate",
    title: title,
    description: title,
  });
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
