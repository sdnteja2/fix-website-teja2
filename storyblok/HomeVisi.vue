<template>
  <section class="my-8 relative px-2 sm:px-14" :class="svgClass">
    <div
      class="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Visi</h2>
      <h3
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">
        {{ blok.visi }}
      </h3>
    </div>
    <UTabs
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :items="items">
      <template #misi="{ item }">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md">
          <div
            v-html="resolvedRichText"
            class="prose prose-slate dark:prose-invert"></div>
        </div>
      </template>
      <template #tujuan="{ item }">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md">
          <div
            v-html="resolvedRichText1"
            class="prose prose-slate dark:prose-invert"></div>
        </div>
      </template>
    </UTabs>
  </section>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const { svgClass } = useSvg(ref(props.blok), {
    loading: "lazy",
    alt: "Visi dan Misi",
  });
  const resolvedRichText = computed(() => renderRichText(props.blok.misi));
  const resolvedRichText1 = computed(() => renderRichText(props.blok.tujuan));
  const items = [
    {
      label: "Misi",
      slot: "misi",
    },
    {
      label: "Tujuan",
      slot: "tujuan",
    },
  ];
</script>
