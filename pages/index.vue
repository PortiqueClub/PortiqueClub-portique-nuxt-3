<template>
<div class="flex flex-col items-center ">
  <ActivitySection />
  <Activities />
  <Schedule />
  <Needs />
  <Pricings />
  <History />
  <Map />
</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('meta.title'),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: t('meta.description') },
  ],
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    font-family: 'Chewy', cursive;
  }
}
</style>
