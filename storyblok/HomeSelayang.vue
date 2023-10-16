<template>
  <!-- Testimonials -->
<div class="relative overflow-hidden px-2 sm:px-14 py-20">
  <div class="max-w-[85rem] mx-auto">
    <UCard>
    <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div class="hidden  justify-center lg:flex lg:col-span-2 ">
        <NuxtImg class="rounded-md bg-contain h-44  bg-center " :src="blok.image.filename + '/m/1000x0/smart'" :alt="blok.nama" />
      </div>
      <!-- End Col -->
      <div class="lg:col-span-4">
        <!-- Blockquote -->
        <blockquote>
          <p class="text-xl font-medium  lg:text-2xl lg:leading-normal ">
            <div
            v-html="resolvedRichText"
            class="prose prose-slate dark:prose-invert"></div>
          </p>
          <footer class="mt-6">
            <div class="flex items-center">
              <div class="lg:hidden flex-shrink-0">
                <NuxtImg class="h-16 w-16 bg-cover object-cover object-center bg-center rounded-full"
                height="100"
                width="100" :src="blok.image.filename + '/m/1000x0/smart'" :alt="blok.nama" />
              </div>
              <div class="ml-4 lg:ml-0">
                <p class="font-medium text-gray-800 dark:text-gray-200">
                  {{ blok.nama }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ blok.jabatan}}
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
        <!-- End Blockquote -->
      </div>
      <!-- End Col -->
    </div>
  </UCard>
  </div>
</div>
<!-- End Testimonials -->
</template>
<script setup>
  const props = defineProps({ blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.sambutan));
</script>
