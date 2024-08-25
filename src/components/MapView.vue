<template>
  <div class="h-[100vh] w-full mx-auto bg-zinc-900">
    <l-map v-if="lat !== 0" ref="map" v-model:zoom="mapZoom" :center="[lat, lon]" @click="(e: any) => setLatLon(e.latlng)">
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker class="bg-blue-500" v-for="entity in computedMarkers" :key="entity.Name" :lat-lng="[entity.Latitude, entity.Longitude]">
        <MapIcon :baseType="entity.Type ?? ''" :color="entity.Color ?? ''" :heading="`${entity.Heading}`" leaflet />
        <l-popup>
          <div class="flex flex-col justify-between">
            <h1 class="font-bold mb-2">{{ entity.Name }}</h1>
            <table>
              <tr>
                <td class="font-semibold">Pilot:</td>
                <td>{{ entity.Pilot }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Coalition:</td>
                <td>{{ entity.Coalition }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Country:</td>
                <td>{{ entity.Country }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Group:</td>
                <td>{{ entity.Group }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Heading:</td>
                <td>{{ entity.Heading }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Altitude:</td>
                <td>{{ entity.Altitude }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Latitude:</td>
                <td>{{ entity.Latitude }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Longitude:</td>
                <td>{{ entity.Longitude }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Type:</td>
                <td>{{ entity.Type }}</td>
              </tr>
            </table>
          </div>
        </l-popup>
      </l-marker>
      <l-circle
        v-for="entity in computedMarkers"
        :key="entity.Name"
        :lat-lng="[entity.Latitude, entity.Longitude]"
        :radius="20000"
        :fill="false"
        :interactive="false"
        :color="entity.Color == 'Blue' ? '#93cde4' : '#ea827e'"
        dash-array="10, 20"
        :weight="1"
      />
    </l-map>
    <div v-else class="flex items-center justify-center h-[100vh] w-full">
      <h1 class="text-4xl font-light text-white">Connect to DCS War Room Server to see map...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { GlobalProperties, Entity, Coordinates, EntityType } from '@/types'
import { useStore } from '@/composables/useStore'
import 'leaflet/dist/leaflet.css'

import { LMap, LTileLayer, LMarker, LIcon, LPopup, LCircle } from '@vue-leaflet/vue-leaflet'

import MapIcon from './MapIcon.vue'
import { useNATOIcon } from '@/composables/useNatoIcon'

const { globalProperties, entities, mapLatLong, mapZoom } = useStore()

const lat = computed(() => {
  if (mapLatLong.value && mapLatLong.value.lat !== 0 && mapLatLong.value.lat.toString() !== 'NaN') {
    console.log(mapLatLong.value.lat)
    return mapLatLong.value.lat
  } else {
    return globalProperties.value.ReferenceLatitude || 0
  }
})
const lon = computed(() => {
  if (mapLatLong.value && mapLatLong.value.long !== 0 && mapLatLong.value.long.toString() !== 'NaN') {
    console.log(mapLatLong.value.long)
    return mapLatLong.value.long
  } else {
    return globalProperties.value.ReferenceLongitude || 0
  }
})

// globalProperties.value.ReferenceLatitude || 0)
// const lon = computed(() => globalProperties.value.ReferenceLongitude || 0)

const computedMarkers = computed(() => {
  const markers: Entity[] = []

  Object.keys(entities.value).forEach((key) => {
    //@ts-expect-error - fix this
    const entity = { ...entities.value[key] }
    if (!entity.Latitude || !entity.Longitude || !entity.Type || !entity.Color) return
    //if entity.Type !contains Ground, Air, or Sea
    if (!entity.Type.includes('Ground') && !entity.Type.includes('Air') && !entity.Type.includes('Sea')) return

    if (entity.Pilot == entity.Group) return

    entity.Latitude = +(globalProperties.value.ReferenceLatitude ?? 0) + +entity.Latitude
    entity.Longitude = +(globalProperties.value.ReferenceLongitude ?? 0) + +entity.Longitude

    if (key === 'Heading') entity.Heading = +entity.Heading
    markers.push(entity)
  })

  return markers
})

const zoom = ref(5)

const setLatLon = (latlng: Coordinates) => {
  //   globalProperties.ReferenceLatitude.value = latlng.lat
  //   globalProperties.ReferenceLongitude.value = latlng.lng
}
</script>

<style scoped></style>
