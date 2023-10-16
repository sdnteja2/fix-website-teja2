<template>
  <section class="px-2 sm:px-14 my-6">
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="bg-merah rounded-md shadow-md dark:bg-merah-600 px-5 py-10 mx-auto flex flex-col">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="mb-8 text-3xl text-center sm:text-5xl dark:text-slate-100 text-white">
        Selayang Pandang
      </h2>
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div
              class="p-2 bg-white rounded-md inline-flex items-center justify-center">
              <NuxtImg
                :src="blok.image.filename + '/m/500x0/smart'"
                alt="content"
                height="128"
                width="128"
                class="w-32 h-40 bg-cover flex-shrink-0 rounded-md object-cover object-center" />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2
                class="dark:text-slate-100 text-slate-900 font-bold mt-4 text-lg">
                {{ blok.nama }}
              </h2>
              <div class="w-12 h-1 bg-kuning rounded mt-2 mb-4"></div>
              <p class="text-base">{{ blok.jabatan }}</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <div
              v-html="resolvedRichText"
              class="prose prose-p:text-slate-900 dark:prose-p:text-slate-50"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.sambutan));
</script>
