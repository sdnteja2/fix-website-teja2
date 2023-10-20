<template>
  <div
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="text-center">
    <img
      v-editable="berita"
      @click="isOpen = true"
      v-if="blok.foto?.filename"
      class="rounded-md sm:h-48 lg:h-60 mx-auto object-cover bg-cover bg-center"
      :src="blok.foto.filename + '/m/500x0/smart'"
      :alt="blok.nama"
      height="450"
      width="230"
      loading="lazy" />
    <div class="mt-2 sm:mt-4">
      <h2 class="text-sm font-medium sm:text-base lg:text-lg">
        {{ blok.nama }}
      </h2>
      <p class="text-xs sm:text-sm lg:text-base">
        {{ blok.jabatan }}
      </p>
    </div>
  </div>
  <UModal
    :ui="{
      inner: 'inset-4  ',
      // wrapper: 'z-20',
      container: ' items-center  ',
      padding: 'p-2 sm:p-0',
      ring: 'ring-2 ring-merah',
    }"
    :overlay="true"
    v-model="isOpen">
    <UCard>
      <div class="justify-center items-center flex flex-col">
        <NuxtImg
          :src="blok.foto.filename + '/m/1000x0/smart'"
          :alt="blok.title"
          height="500"
          width="200"
          loading="lazy"
          class="rounded-md object-cover bg-center" />
        <div class="text-center">
          <p class="text-base font-semibold leading-6">
            {{ blok.nama }}
          </p>
          <p class="text-base font-semibold leading-6">
            {{ blok.nip }}
          </p>
          <p class="text-base font-semibold leading-6">
            {{ blok.jabatan }}
          </p>
          <p class="text-base font-semibold leading-6">
            {{ blok.pendidikan }}
          </p>
        </div>
      </div>
      <template #footer>
        <div class="md:hidden flex items-center justify-end">
          <UButton
            color="merah"
            variant="outline"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
<script setup>
  defineProps({ blok: Object });
  const isOpen = ref(false);
</script>
