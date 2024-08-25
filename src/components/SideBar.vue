<template>
  <div>
    <h1 class="text-2xl mb-8">DCS War Room</h1>
    <LoginForm />

    <h2 class="text-xl mt-8 text-left">Entities</h2>
    <div class="flex flex-col h-[70vh] overflow-y-auto">
      <div v-for="entity in entities" :key="entity.Name">
        <button
          class="p-2 mb-2 bg-zinc-800 text-slate-50 flex items-center"
          v-if="
            entity.Name &&
            entity.Pilot != entity.Group &&
            entity.Latitude &&
            entity.Longitude &&
            (entity.Type?.includes('Ground') || entity.Type?.includes('Air') || entity.Type?.includes('Sea'))
          "
          @click="() => setLatLong(entity)"
        >
          <span>
            <MapIcon :baseType="entity.Type ?? ''" :color="entity.Color ?? ''" :heading="`${entity.Heading}`" :leafet="false" :iconSize="48" />
          </span>
          <span class="text-xs">{{ entity.Name }}</span>
          <!-- {{ entity.Name }} -->
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/composables/useStore'
import LoginForm from './LoginForm.vue'
import MapIcon from './MapIcon.vue'

const { entities, globalProperties, mapLatLong, mapZoom } = useStore()

const setLatLong = (entity: any) => {
  mapLatLong.value = {
    lat: +(globalProperties.value.ReferenceLatitude ?? 0) + +entity.Latitude,
    long: +(globalProperties.value.ReferenceLongitude ?? 0) + +entity.Longitude,
  }
  mapZoom.value = 10
}
</script>
