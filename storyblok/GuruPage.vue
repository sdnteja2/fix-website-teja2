<template>
  <main>
    <div v-editable="blok" :class="svgClass">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="mt-5 max-w-2xl text-center mx-auto">
          <h1
            v-editable="blok"
            class="block headline text-xl md:text-5xl ">
            {{ blok.headline }}
          </h1>
        </div>
      </div>
    </div>
    <div class="max-w-[85rem] px-2 py-10 md:px-14 lg:py-14 mx-auto">
      <div class="">
        <div v-editable="blok" class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StoryblokComponent
            v-for="blok in blok.list"
            :key="blok._uid"
            :blok="blok" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const { svgClass } = useSvg(ref(props.blok));
</script>
