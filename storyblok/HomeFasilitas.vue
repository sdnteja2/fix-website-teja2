<template>
  <div
    v-editable="blok"
    :class="svgClass"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    class="max-w-[85rem] px-2 py-10 md:px-14 lg:py-14 mx-auto">
    <UCard>
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Swiper
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :pagination="{
              dynamicBullets: false,
            }"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -30],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }">
            <SwiperSlide v-for="(image, index) in blok.image" :key="index">
              <NuxtImg
                class="bg-cover rounded-md h-52 md:h-72 object-cover w-full"
                :src="image.filename"
                alt="Fasilitas Sekolah" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <div class="space-y-2 md:space-y-4">
              <h2
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                class="font-bold text-3xl lg:text-4xl">
                {{ blok.headline }}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                class="">
                {{ blok.subheadline }}
              </p>
            </div>
            <ul role="list" class="space-y-2 sm:space-y-4">
              <StoryblokComponent
                v-for="blok in blok.list"
                :key="blok._uid"
                :blok="blok" />
            </ul>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const { svgClass } = useSvg(ref(props.blok));
</script>
<style>
  .swiper-pagination-bullet-active {
    background: red; /* Ganti warna bullet yang aktif sesuai keinginan Anda */
  }
  .swiper-navigation {
    background: red; /* Ganti warna bullet yang aktif sesuai keinginan Anda */
  }
</style>
