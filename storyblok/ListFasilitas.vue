<template>
  <li class="flex space-x-3 items-center">
    <UIcon name="i-basil-checked-box-outline" />
    <span class="text-sm sm:text-base">
      {{ blok.title }}
    </span>
  </li>
</template>
<script setup>
const { blok } = defineProps(['blok']);
</script>
