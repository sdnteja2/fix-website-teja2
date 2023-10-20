<template>
  <section class="py-24 px-2 sm:px-16">
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="py-6">
      <h2 class="text-3xl text-center sm:text-5xl">Alamat</h2>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      class="mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="md:w-2/3 w-full rounded-lg overflow-hidden flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Sdn%20Teja%20II,%20Blok%20nanggerang,%20Teja,%20Majalengka%20Regency,%20West%20Java+(SDN%20TEJA%20II)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          class="rounded-lg h-96"></iframe>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="md:w-1/3 w-full py-6 px-2">
        <div class="md:py-0">
          <a
            class="flex items-center"
            href="https://www.google.com/maps/place/Sdn+Teja+II/@-6.8226144,108.3441018,674m/data=!3m2!1e3!4b1!4m5!3m4!1s0x2e6f23e3619f93c9:0x1c4e3d2ede455603!8m2!3d-6.8226197!4d108.3462959?hl=en"
            target="_blank"
            rel="noopener noreferrer">
            <UIcon class="mr-4" name="i-heroicons-map-pin" />
            <p>{{ blok.alamat }}</p>
          </a>
        </div>
        <div class="md:py-0 justify-start items-start">
          <a
            class="flex items-center"
            href="mailto:sdnteja2@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <UIcon class="mr-4" name="i-basil-envelope-outline" />
            <p>sdnteja2@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
