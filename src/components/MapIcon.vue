<template>
  <l-icon v-if="leaflet" :icon-size="[iconSize, iconSize]" :icon-url="svgDataUrl" />
  <img v-else :src="svgDataUrl" alt="icon" :width="`${iconSize}px`" />
</template>

<script setup lang="ts">
import { ref, computed, defineProps, withDefaults } from 'vue'
import { LIcon } from '@vue-leaflet/vue-leaflet'

import { useNATOIcon } from '@/composables/useNatoIcon'

import { EntityType } from '@/types'

const { icon } = useNATOIcon()

const props = withDefaults(
  defineProps<{
    leaflet?: boolean
    iconSize?: number
    baseType: string
    color: string
    heading?: string
  }>(),
  {
    iconSize: 48,
    leaflet: false,
  }
)

const computedBaseType = computed(() => {
  let domain = ''
  //if props.baseType contains Ground
  if (props.baseType.includes('Ground')) {
    domain = 'Ground'
  }
  //if props.baseType contains Air
  else if (props.baseType.includes('Air')) {
    domain = 'Air'
  }
  //if props.baseType contains Sea
  else if (props.baseType.includes('Sea')) {
    domain = 'Sea'
  }

  let friendly = props.color === 'Blue' ? 'Friendly' : 'Hostile'

  switch (`${friendly}${domain}`) {
    case 'FriendlyGround':
      return EntityType.FriendlyGround
    case 'FriendlyAir':
      return EntityType.FriendlyAir
    case 'FriendlySea':
      return EntityType.FriendlySea
    case 'HostileGround':
      return EntityType.HostileGround
    case 'HostileAir':
      return EntityType.HostileAir
    case 'HostileSea':
      return EntityType.HostileGround
    default:
      return EntityType.FriendlyAir
  }
})

const computedHeading = computed(() => {
  if (props.heading && !isNaN(+props.heading)) {
    return +props.heading
  }
  return -1
})

const svgDataUrl = icon(computedBaseType.value, props.baseType, computedHeading.value)
</script>

<style scoped></style>
