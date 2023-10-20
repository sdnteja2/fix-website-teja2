<template>
  <nav>
    <div class="fixed w-full z-50 top-0">
      <div
        :class="[
          'dark:bg-slate-900',
          'h-16',
          'px-1 sm:px-12',
          'bg-slate-100 shadow backdrop-blur-md bg-opacity-75 p-2 justify-between flex items-center dark:bg-opacity-75 w-full',
        ]">
        <div>
          <NuxtLink
            aria-label="logo"
            class="flex space-x-3 items-center"
            to="/">
            <div>
              <Logo />
            </div>
            <div
              :class="{
                'font-title': true,
                'dark:text-merah': true,
                'text-merah-600': true,
                'font-black': true,
              }">
              SDN Teja II
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div :class="['sm:block hidden space-x-2 mr-4']">
            <NuxtLink class="nav" to="/">Home </NuxtLink>
            <NuxtLink class="nav" to="/guru">Guru </NuxtLink>
            <NuxtLink class="nav" to="/berita">Berita </NuxtLink>
            <NuxtLink class="nav" to="/artikel">Artikel </NuxtLink>
            <NuxtLink class="nav" to="/galeri">Galeri </NuxtLink>
            <NuxtLink class="nav" to="/pembelajaran">Pembelajaran </NuxtLink>
          </div>
          <div class="mr-2">
            <DarkMode />
          </div>
          <UDropdown
            size="text-lg"
            class="sm:hidden"
            :items="items"
            :popper="{ placement: 'bottom-start' }">
            <NuxtLink>
              <UButton
                color="merah"
                variant="ghost"
                aria-label="Menu"
                icon="i-heroicons-bars-3-20-solid" />
            </NuxtLink>
          </UDropdown>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
  const items = [
    [
      {
        label: "Home",
        icon: "i-heroicons-home-20-solid",
        to: "/",
        activeClass: "border-merah border ",
      },
    ],
    [
      {
        label: "Guru",
        icon: "i-heroicons-user-20-solid",
        to: "/guru",
        activeClass: "border-merah border ",
      },
    ],
    [
      {
        label: "Berita",
        icon: "i-heroicons-newspaper",
        to: "/berita",
        activeClass: " border-merah border ",
      },
    ],
    [
      {
        label: "Artikel",
        icon: "i-basil-book-outline",
        to: "/artikel",
        activeClass: " border-merah border ",
      },
    ],
    [
      {
        label: "Galeri",
        icon: "i-basil-picture-outline",
        to: "/galeri",
        activeClass: " border-merah border ",
      },
    ],
    [
      {
        label: "Pembelajaran",
        icon: "i-basil-youtube-outline",
        to: "/pembelajaran",
        activeClass: " border-merah border ",
      },
    ],
  ];
</script>
