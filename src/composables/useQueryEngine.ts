import { ref } from 'vue'
import { useFetch } from './useFetch'
import { useStore } from './useStore'
import { GlobalProperties } from '@/types'

const { dcsHost, dcsPort, baseURL } = useStore()

export const useQueryEngine = () => {
  return {
    getEntities: async (mode = 'full') => {
      return await useFetch(`${baseURL.value}/entities`, { mode: mode }, 'GET')
    },

    getEntity: async (id: string) => {
      return await useFetch(`${baseURL.value}/entities/${id}`, {}, 'GET')
    },

    getGlobalProperties: async () => {
      const res = useFetch(`${baseURL.value}/entities/0`, {}, 'GET')

      //convert response to GlobalProperties type
      return res as GlobalProperties
    },
  }
}
