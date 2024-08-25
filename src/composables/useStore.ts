import { computed, ref } from 'vue'
import { Properties, GlobalProperties, Entity, Coordinates } from '@/types'

const globalProperties = ref<GlobalProperties>({})
// const entities = ref<{ [id: string]: Entity }>({})
const entities = ref<Entity[]>([])
const timeFrame = ref<number>(0)
const dcsHost = ref<string>('localhost')
const dcsPort = ref<number>(18080)
const dcsPassword = ref<string>('')
const mapLatLong = ref<{ lat: number; long: number }>({ lat: 0, long: 0 })
const mapZoom = ref<number>(5)

export const useStore = () => {
  return {
    dcsHost,
    dcsPort,
    dcsPassword,
    timeFrame,
    globalProperties,
    entities,
    mapLatLong,
    mapZoom,
    baseURL: computed(() => `http://${dcsHost.value}:${dcsPort.value}/api/v1`),
  }
}
