<template>
  <div v-editable="blok"  :class="svgClass" class="px-2 sm:px-14">
    <div class="container  py-8 mx-auto">
      <h1
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
       {{  blok.headline }}
      </h1>
    </div>
    <div class="grid px-2 sm:px-14 gap-8 mt-8 md:grid-cols-2 ">
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
