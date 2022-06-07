<template>
<div class="">
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
