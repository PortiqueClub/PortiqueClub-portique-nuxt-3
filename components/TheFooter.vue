<template>
<footer id="contact" class="relative px-32 py-48 text-center duration-500 ease-in-out transform mt-18 bg-yellow-light text-blue-dark">
  <img
    class="absolute left-0 z-0 hidden object-cover md:block w-450 h-450 -top-288"
    src="/static/castle.svg"
    alt="castle"
  />
  <img
    class="absolute left-0 z-0 hidden w-full md:block -top-56"
    src="/static/wave-footergold.svg"
    alt="waves footer"
  />

  <div class="z-10 grid grid-cols-1 gap-24 md:grid-cols-3">
    <div class="z-10 flex flex-col items-center justify-center space-y-16">
      <p>{{ t('footer.localisation') }}</p>
  
      <a class="flex items-center space-x-4 text-center cursor-pointer" href="mailto:leportiqueclub@gmail.com">
        <span class="font-bold">leportiqueclub@gmail.com</span>
      </a>
      <a class="flex items-center space-x-4 text-center cursor-pointer" href="tel:0613792562">
        <span class="font-bold">06 13 79 25 62</span>
      </a>
    </div>

    <div class="z-10 flex items-center justify-center">
      <p>{{ t('footer.copyright') }} - {{ new Date().getFullYear() }}</p>
    </div>

    <div class="z-10 flex items-center justify-around">
      <a class="cursor-pointer" href="https://www.facebook.com/Le-Portique-Club-112920581057535" target="_blank">
        <img
          class="w-48"
          src="/static/fb-logo.svg"
          alt="Facebook logo"
        />
      </a>
      <a class="cursor-pointer" href="https://www.instagram.com/leportiqueclub/" target="_blank">
        <img
          class="w-48"
          src="/static/instalogo.svg"
          alt="Instagram logo"
        />
      </a>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
