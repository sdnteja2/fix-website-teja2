<template>
  <NuxtLink
    :to="'/' + slug"
    v-editable="berita"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    <UCard
      class="hover:border-merah duration-100 border border-slate-200 dark:border-slate-800 dark:hover:border-merah">
      <div>
        <UBadge class="mb-4">
          <p class="text-sm">
            {{
              new Date(berita.tanggal).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </p>
        </UBadge>
        <h2
          class="mb-2 font-extrabold tracking-tight md:text-xl line-clamp-4 leading-tight md:line-clamp-3">
          {{ berita.title }}
        </h2>
      </div>
    </UCard>
  </NuxtLink>
</template>
<script setup>
  defineProps({ berita: Object, slug: String });
</script>
