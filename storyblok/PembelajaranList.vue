<template>
  <div class="w-full">
    <UCard>
      <template #header>
        <UBadge>
          <div>{{ blok.kelas }}</div>
        </UBadge>
      </template>
      <lite-youtube
        class="rounded-md"
        :videoid="blok.id"
        :playlabel="blok.title"
        :start="blok.start ? blok.start : 0" />
      <template #footer>
        <div class="mb-2">
          <h3 class=" md:text-lg font-medium leading-snug tracking-tight">
            {{ blok.title }}
          </h3>
        </div>
        <p class="text-sm">
          Sumber: <span class="font-bold ">
            {{ blok.sumber }}
          </span>
        </p>
      </template>
    </UCard>
  </div>
</template>
<script setup>
  defineProps({ blok: Object });
</script>
