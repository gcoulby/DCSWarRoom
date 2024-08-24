<template>
  <div class="h-[800px] w-full mx-auto">
    <p>{{ lat }}</p>
    <l-map v-if="lat !== 0" ref="map" v-model:zoom="zoom" :center="[lat, lon]" @click="(e: any) => setLatLon(e.latlng)">
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <!-- <l-marker :lat-lng="[globalProperties.ReferenceLatitude, globalProperties.ReferenceLongitude]" /> -->
      <l-marker v-for="entity in computedMarkers" :key="entity.name" :lat-lng="[entity.lat, entity.lon]" :options="{ rotationAngle: 45 }">
        <l-icon :icon-size="[32, 32]" :icon-url="fixedWingIcon" />
      </l-marker>
      <!-- <l-popup>
          <h1 class="font-bold">{{ entity.name }}</h1>
          <span>Distance: {{ entity.distance }} miles</span>
          <p>Post Code:{{ entity.zipCode }}</p>
          <p class="m-0">Lat: {{ entity.lat.toFixed(6) }}</p>
          <p>Lon: {{ entity.lon.toFixed(6) }}</p>
        </l-popup> -->
      <!-- </l-marker> -->

      <!-- <l-marker :lat-lng="[lat, lon]" :lat="lat"> </l-marker> -->
      <!-- <l-marker
        v-for="course in courses"
        :key="course.id_course"
        :lat-lng="[course.latitude, course.longitude]"
        @click="() => getCourseDetails(course)"
      >
        <l-icon :icon-size="[32, 32]" :icon-url="golfIcon" />
        <l-popup>
          <h1 class="font-bold">{{ course.courseName }}</h1>
          <span>Distance: {{ course.distance }} miles</span>
          <p>Post Code:{{ course.zipCode }}</p>
          <p class="m-0">Lat: {{ course.latitude.toFixed(6) }}</p>
          <p>Lon: {{ course.longitude.toFixed(6) }}</p>
        </l-popup>
      </l-marker> -->
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { GlobalProperties, Entity, Coordinates } from '@/types'
import { useStore } from '@/composables/useStore'
import 'leaflet/dist/leaflet.css'

import { LMap, LTileLayer, LMarker, LIcon, LPopup } from '@vue-leaflet/vue-leaflet'

const { globalProperties, entities } = useStore()

import fixedWingIcon from '../assets/FixedWing.png'

const lat = computed(() => globalProperties.value.ReferenceLatitude || 0)
const lon = computed(() => globalProperties.value.ReferenceLongitude || 0)

const computedMarkers = computed(() => {
  const markers: { lat: number; lon: number; name: string }[] = []
  Object.keys(entities.value).forEach((key) => {
    //@ts-expect-error - fix this
    const entity = entities.value[key]

    if (entity.Latitude && entity.Longitude && entity.Name) {
      console.log(entity)
      //convert to number
      let a = '1'
      let convertedA = +a

      let lat1 = +(globalProperties.value.ReferenceLatitude ?? 0) + +entity.Latitude
      let lon1 = +(globalProperties.value.ReferenceLongitude ?? 0) + +entity.Longitude

      markers.push({
        lat: lat1,
        lon: lon1,
        name: entity.Name,
      })
    }
  })
  console.log(markers)

  return markers
})

const zoom = ref(5)

const setLatLon = (latlng: Coordinates) => {
  //   globalProperties.ReferenceLatitude.value = latlng.lat
  //   globalProperties.ReferenceLongitude.value = latlng.lng
}
</script>

<style scoped></style>
