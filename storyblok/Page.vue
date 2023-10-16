<template>
  <div v-editable="blok" class="">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok" />
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
