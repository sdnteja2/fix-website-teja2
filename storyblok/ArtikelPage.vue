<template>
  <div class="py-10 px-2 md:px-14">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
      <ArtikelCard
        v-for="artikel in artikels"
        :key="artikel.uuid"
        :artikel="artikel.content"
        :slug="artikel.full_slug"
      />
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object })
const artikels = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artikel',
  is_startpage: false,
})
artikels.value = data.stories
</script>