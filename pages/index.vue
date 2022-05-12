<template>
<div class="flex items-center justify-center text-xl text-red-500">
  {{ t('test') }}
</div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
