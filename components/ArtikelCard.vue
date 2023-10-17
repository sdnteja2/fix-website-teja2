<template>
  <UCard
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="hover:border-merah  border  border-slate-200 dark:border-slate-800 dark:hover:border-merah">
    <div v-editable="artikel">
      <div class="">
        <NuxtImg
          v-if="artikel.image?.filename"
          :src="artikel.image.filename + '/m/600x0'"
          :alt="artikel.image.alt"
          class="object-cover w-full h-56 mb-5 bg-cover bg-center rounded"
          loading="lazy" />
        <div class=""></div>
      </div>
    </div>
    <div class="mb-2 flex justify-end">
      <UBadge color="black" class="shadow-md">
        {{
          new Date(artikel.tanggal).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}</UBadge
      >
    </div>
    <UBadge
      v-for="(kategori, index) in artikel.kategori"
      :key="index"
      class="mr-2 text-xs"
      >{{ kategori }}</UBadge
    >
    <div class="pb-2 pt-4">
      <NuxtLink :to="'/' + slug" class="">
        <h2 class="mb-2 text-lg md:text-2xl  line-clamp-3 leading-snug">
          {{ artikel.title }}
        </h2></NuxtLink
      >
    </div>
    <p class="mb-3 text-sm line-clamp-5 font-normal">
      {{ artikel.description }}
    </p>
    <div class="w-full flex justify-end">
      <NuxtLink :to="'/' + slug" class="">
        <UButton label="Baca">
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" />
          </template>
        </UButton>
      </NuxtLink>
    </div>
  </UCard>
</template>
<script setup>
  defineProps({ artikel: Object, slug: String });
</script>
