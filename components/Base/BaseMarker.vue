<template>
<section :id="`marker-${Date.now()}`" />
</template>

<script lang="ts" setup>
import type { LngLatLike, MarkerOptions } from 'mapbox-gl'
import { Marker } from 'mapbox-gl'
import { MAP_KEY } from '../../symbols'
import { injectStrict } from '../../utils/vue-utils'

interface Emits {
  (e: 'click', coordinates: LngLatLike): void
}

interface Props {
  coordinates: LngLatLike
  options?: MarkerOptions
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
})
const emit = defineEmits<Emits>()

const map = injectStrict(MAP_KEY)
const marker = new Marker(props.options)

onMounted(() => {
  setMarkerCoordinates()
  addToMap()
  setupEvents()
  setupCursor()
})

onUnmounted(() => {
  removeEvents()
  removeFromMap()
})

function setMarkerCoordinates(): void {
  marker.setLngLat(props.coordinates)
}

function addToMap(): void {
  marker.addTo(map.value)
}

function setupEvents() {
  marker.getElement().addEventListener('click', () => {
    emit('click', props.coordinates)
  })
}

function setupCursor() {
  marker.getElement().style.cursor = 'pointer'
}

function removeFromMap() {
  marker.remove()
}

function removeEvents() {
  marker.getElement().removeEventListener('click', () => {
    emit('click', props.coordinates)
  })
}
</script>
