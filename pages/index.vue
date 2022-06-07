<template>
<div class="flex flex-col items-center justify-center text-xl text-red-500">
  <h1>index.vue</h1>
  <p>{{ t('test') }}</p>
</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
