<template>
<div
  :id="options.container || 'map'"
  class="h-full"
>
  <template v-if="loaded">
    <slot />
  </template>
</div>
</template>

<script lang="ts" setup>
import type { MapboxOptions } from 'mapbox-gl'
import { Map } from 'mapbox-gl'
import { MAP_KEY } from '../../symbols'

// Remove the ability to provide an HTML element as a container
type Options = Omit<MapboxOptions, 'container'> & { container: string }

interface Props {
  options: Options
}

const props = defineProps<Props>()

const loaded = ref(false)
const map = ref<Map | null>(null)

onMounted(() => {
  const options: MapboxOptions = props.options?.container
    ? props.options
    : { ...props.options, container: 'map' }
  map.value = new Map(options)
  map.value.on('load', () => map.value.resize())
  loaded.value = true
  provide(MAP_KEY, map)
})

watch(
  () => props.options.center,
  newValue => {
    if (map.value) {
      map.value.flyTo({
        animate: false,
        center: newValue,
      })
      if (props.options.zoom) {
        map.value.zoomTo(props.options.zoom)
      }
    }
  },
)
</script>
