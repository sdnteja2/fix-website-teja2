<template>
  <section
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="px-2 pt-20 relative overflow-hidden before:absolute before:top-0 before:bg-[url('/yes.svg')] before:bg-no-repeat before:bg-top md:before:bg-cover before:bg-contain before:w-full before:h-full before:-z-[1] before:transform md:px-14 items-center justify-center flex -mt-16">
    <div v-editable="blok" class="w-full flex flex-col md:flex-row">
      <div
        class="w-full md:justify-start md:w-1/2 items-center justify-center flex">
        <div class="py-6">
          <div class="pb-2">
            <h1
              class="text-lg -mb-4 text-center sm:text-left font-normal text-slate-800 dark:text-slate-100 leading-relaxed">
              Selamat Datang Di Website Resmi
            </h1>
            <br />
            <h2 class="text-4xl text-center sm:text-left lg:text-6xl">
              {{ blok.title }}
            </h2>
          </div>
          <p class="text-center sm:text-left">{{ blok.subtitle }}</p>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 items-center justify-center flex h-64 lg:h-72">
        <NuxtImg
          loading="lazy"
          title="SDN Teja II"
          class="h-full w-full object-contain bg-cover rounded-md bg-center"
          height="500"
          width="360"
          alt="Gambar SDN Teja II"
          :src="blok.image.filename + '/m/1000x0'" />
      </div>
    </div>
  </section>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
