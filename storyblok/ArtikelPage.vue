<template>
  <div class="py-10 px-2 md:px-14">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object })
const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artikel',
  is_startpage: false,
})
articles.value = data.stories
</script>