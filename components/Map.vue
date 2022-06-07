<template>
<section
  id="map"
  class="py-48 space-y-16 bg-blue-dark"
>
  <h2 class="mb-20 text-3xl font-bold text-center font-heading text-yellow-light">
    {{ $t('club.accessibility.title') }}
  </h2>

  <div class="grid grid-cols-1 md:gap-32 md:container md:grid-cols-3">
    <div class="px-20 py-24">
      <p class="text-yellow-light">
        {{ $t('club.accessibility.content') }}
      </p>
    </div>
    <div class="col-span-2">
      <mapbox-map
        :access-token="MAPBOX_ACCESS_TOKEN"
        height="450px"
        width="100%"
        :auto-resize="true"
        :center="[-1.4320995, 46.3436326]"
        :zoom="14"
      >
        <mapbox-marker
          :lng-lat="[-1.4320995, 46.3436326]"
        />
      </mapbox-map>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import { MAPBOX_ACCESS_TOKEN } from '@/symbols'
</script>
