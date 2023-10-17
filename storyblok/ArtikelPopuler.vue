<template>
  <div class="py-16  px-2 md:px-14">
    <div class="space-y-4">
      <h3
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="text-3xl text-center sm:text-5xl">
        Artikel Populer
      </h3>
    </div>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 my-8">
      <ArtikelCard
        v-for="artikel in blok.artikels"
        :key="artikel.uuid"
        :artikel="artikel.content"
        :slug="artikel.full_slug" />
    </div>
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
