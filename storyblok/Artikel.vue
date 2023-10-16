<template>
  <div v-editable="blok">
    <article
      class="px-2 sm:px-14 py-16 mx-auto max-w-full"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting">
      <div class="w-full mx-auto mb-6 md:w-4/5">
        <UCard>
          <template #header>
            <div class="">
              <NuxtImg
                v-if="blok.image?.filename"
                :src="blok.image.filename + '/m/1600x0'"
                :alt="blok.image.alt"
                class="object-cover w-full h-52 md:h-96 bg-center rounded-lg" />
            </div>
            <UBadge class="shadow-md mt-4">
              {{
                new Date(blok.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}</UBadge
            >
            <h1
              class="mt-3 text-3xl  leading-tight md:text-4xl"
              itemprop="headline"
              title="Rise of Tailwind - A Utility First CSS Framework">
              {{ story.name }}
            </h1>
          </template>
          <p>
            {{ blok.description }}
          </p>
          <template #footer>
            <div class="flex  space-x-2">
              <UBadge
                v-for="(kategori, index) in blok.kategori"
                :key="index"
                class="mr-2 text-xs"
                >{{ kategori }}</UBadge
              >
            </div>
          </template>
        </UCard>
      </div>
      <div class="w-full mx-auto md:w-4/5">
        <div
          v-html="resolvedRichText"
          class="prose prose-slate p-2 max-w-full dark:prose-invert"></div>
      </div>
    </article>
  </div>
</template>
<script setup>
  const props = defineProps({ story: Object, blok: Object });
  const resolvedRichText = computed(() => renderRichText(props.blok.content));
  const { slug } = useRoute().params;
  const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join("/") : "artikel",
    { version: "draft" }
  );
</script>
