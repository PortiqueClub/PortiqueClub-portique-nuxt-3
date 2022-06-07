import type { InjectionKey, Ref } from 'vue'
import type { Map } from 'mapbox-gl'

export const MAP_KEY: InjectionKey<Ref<Map>> = Symbol('map')
export const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string
