<template>
  <div class="text-center">
    <img
      v-if="blok.foto?.filename"
      class="rounded-md sm:h-48 lg:h-60 mx-auto object-cover bg-cover bg-center"
      :src="blok.foto.filename + '/m/500x0/smart'"
      :alt="blok.nama"
      height="450"
      width="230"
      loading="lazy" />
    <div class="mt-2 sm:mt-4">
      <h3
        class="text-sm font-medium sm:text-base lg:text-lg ">
        {{ blok.nama }}
      </h3>
      <p
        class="text-xs  sm:text-sm lg:text-base ">
        {{ blok.jabatan }}
      </p>
    </div>
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
