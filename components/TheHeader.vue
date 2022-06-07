<template>
<header class="z-10 px-40 py-8 border-b shadow-md md:mb-24 h-80 bg-yellow-light border-blue-dark">
  <div class="flex items-center justify-between md:container">
    <img
      class="object-cover w-56"
      src="../../public/static/logo-bleu.svg"
      alt="Portique club Logo"
    />
    <nav class="items-center hidden space-x-24 md:flex">
      <a
        v-for="(item, index) in MENU_ITEMS"
        :key="index"
        :href="item.path"
        class="text-lg font-semibold text-blue-dark font-heading"
      >
      {{ item.trad }}
      </a>
      <a
        href="#contact"
        class="px-12 py-8 font-bold rounded-full bg-blue-dark text-yellow-light font-heading"
      >
        Contact
      </a>
    </nav>
  </div>
</header>
</template>

<script setup lang="ts">
import { MENU_ITEMS } from '@/helpers/constants'
</script>
