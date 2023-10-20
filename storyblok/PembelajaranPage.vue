<template>
  <div v-editable="blok" class="px-2 md:px-14">
    <div :class="svgClass" class="container py-8 mx-auto">
      <h1 class=" text-center capitalize text-xl md:text-5xl lg:text-5xl">
        {{ blok.headline }}
      </h1>
    </div>
    <div class="grid px-2 sm:px-14 gap-8 mt-8 md:grid-cols-2">
      <StoryblokComponent
        v-for="blok in blok.list"
        :key="blok._uid"
        :blok="blok" />
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const { svgClass } = useSvg(ref(props.blok));
</script>
