<template>
<div class="flex flex-col items-center justify-center text-xl text-red-500">
  <h1>index.vue</h1>
  <p>{{ t('test') }}</p>
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
