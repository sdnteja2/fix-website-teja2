<template>
  <!-- Hero -->
  <div v-editable="blok" :class="svgClass">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div class="mt-5 max-w-2xl text-center mx-auto">
        <div
          v-editable="blok"
          class="block headline text-xl md:text-5xl lg:text-5xl">
          {{ blok.headline }} <br />
          <span
            class="mt-5 font-body text-slate-900 text-base font-normal dark:text-slate-100 max-w-3xl text-center mx-auto">
            {{ blok.subheadline }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const { svgClass } = useSvg(ref(props.blok));
</script>
