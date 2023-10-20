<template>
  <div class="py-10 px-2 md:px-14">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl mx-auto">
      <BeritaCard
        v-for="berita in beritas"
        :key="berita.uuid"
        :berita="berita.content"
        :slug="berita.full_slug" />
    </div>
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
  const beritas = ref(null);
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "berita",
    is_startpage: false,
  });
  beritas.value = data.stories;
</script>
