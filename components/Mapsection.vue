<!-- <template>
<section
  id="map"
  class="py-48 space-y-16 bg-blue-dark"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">Accessibilité / S'y rendre</h2>

  <div class="grid grid-cols-1 md:gap-32 md:container md:grid-cols-3">
    <div class="px-20 py-24">
      <p class="text-yellow-light">
        Accessible à pied, en vélo (piste cyclable), en bus (Fun Bus, arrêt Rond-Point L’Auniscéane Piscine ou Centre ville – Place de la Liberté), en voiture (parking du Maupas)
      </p>
    </div>
    <div class="col-span-2">
    <BaseMap
      :options="mapState.map"
      class="w-full h-3/4"
    />
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import type { MapboxOptions } from 'mapbox-gl'
import { MAPBOX_ACCESS_TOKEN } from '@/symbols'

// Remove the ability to provide an HTML element as a container
type Options = Omit<MapboxOptions, 'container'> & { container: string }

const mapState = reactive<{ map: Options; mapLoaded: boolean }>({
  map: {
    container: 'trashMap',
    accessToken: MAPBOX_ACCESS_TOKEN,
    style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
    center: [2.5764592, 46.5134734],
    zoom: 11,
    maxZoom: 22,
    crossSourceCollisions: false,
    failIfMajorPerformanceCaveat: false,
    attributionControl: false,
    preserveDrawingBuffer: true,
    hash: false,
    minPitch: 0,
    maxPitch: 60,
  },
  mapLoaded: false,
})

</script> -->
