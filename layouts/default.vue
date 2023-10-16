import { Navbar } from '#ui-colors/components';
<template>
  <div>
    <Navbar />
    <div class="py-16">
      <slot />
    </div>
    <Footer />
  </div>
</template>
