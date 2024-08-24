import { computed, ref } from 'vue'
import { Properties, GlobalProperties, Entity, Coordinates } from '@/types'

const globalProperties = ref<GlobalProperties>({})
// const entities = ref<{ [id: string]: Entity }>({})
const entities = ref<Entity[]>([])
const timeFrame = ref<number>(0)
const dcsHost = ref<string>('localhost')
const dcsPort = ref<number>(18080)
const dcsPassword = ref<string>('')

export const useStore = () => {
  return {
    dcsHost,
    dcsPort,
    dcsPassword,
    timeFrame,
    globalProperties,
    entities,
    baseURL: computed(() => `http://${dcsHost.value}:${dcsPort.value}/api/v1`),

    // setGlobalProperty: (key: keyof GlobalProperties, value: string) => {
    //   switch (key) {
    //     case 'ReferenceTime':
    //     case 'RecordingTime':
    //       globalProperties.value[key] = new Date(value) as any
    //       break
    //     case 'ReferenceLongitude':
    //     case 'ReferenceLatitude':
    //       globalProperties.value[key] = parseFloat(value) as any
    //       break
    //     default:
    //       globalProperties.value[key] = value as any
    //   }
    // },
    // setEntityProperty: (id: string, key: keyof Entity, value: string) => {
    //   if (!entities.value[id]) {
    //     entities.value[id] = {}
    //   }

    //   if (typeof entities.value[id][key] === 'number') {
    //     // Convert value to number before assigning
    //     entities.value[id][key] = parseFloat(value) as any
    //   } else if (Array.isArray(entities.value[id][key])) {
    //     // Convert value to array or handle appropriately
    //     entities.value[id][key] = [value] as any
    //   } else {
    //     // Assign as string
    //     entities.value[id][key] = value as any
    //   }
    // },
    // addEntityCoordinates: (id: string, coordinates: Coordinates) => {
    //   if (!entities.value[id]) {
    //     entities.value[id] = {}
    //   }

    //   if (!entities.value[id].Coordinates) {
    //     entities.value[id].Coordinates = []
    //   }

    //   if (Array.isArray(entities.value[id].Coordinates)) {
    //     //check to see if coordinates already exist in array (timeFrame should be unique)
    //     const existing = entities.value[id].Coordinates?.find((coord) => coord.timeFrame === coordinates.timeFrame)
    //     if (existing) {
    //       //do nothing
    //     } else {
    //       //add new coordinates
    //       entities?.value[id]?.Coordinates?.push(coordinates)
    //     }
    //   }
    // },
  }
}
