<template>
  <div class="text-center">
    <NuxtImg
      @click="isOpen = true"
      v-if="blok.foto?.filename"
      class="rounded-md sm:h-48 w-64 mx-auto object-cover bg-cover object-center bg-center"
      :src="blok.foto.filename + '/m/500x0/smart'"
      :alt="blok.nama"
      height="450"
      width="450"
      loading="lazy" />
    <div class="mt-2 sm:mt-4">
      <h3 class="text-sm font-medium sm:text-base lg:text-lg">
        {{ blok.title }}
      </h3>
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
            {{ blok.title }}
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
