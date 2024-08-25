import { ref } from 'vue'
import { Properties, GlobalProperties, Entity, Coordinates, MessageParser } from '@/types'
import { useStore } from '@/composables/useStore'

// import { useMessageParser } from './useMessageParser'
import { useQueryEngine } from './useQueryEngine'

const { dcsHost, dcsPort, dcsPassword, globalProperties, entities } = useStore()
const { getEntities, getEntity, getGlobalProperties } = useQueryEngine()

const connected = ref(false)
const attempts = ref(0)
const connectionIds = ref<number[]>([])

export const useServer = () => {
  const isValid = (data: any) => {
    if (!data) {
      attempts.value++
      if (attempts.value > 3) {
        disconnect()
        return false
      }
    }
    return true
  }
  const tryGetGlobalProperties = () => {
    getGlobalProperties().then((data) => {
      if (!isValid(data)) return
      globalProperties.value = data
    })
  }

  const tryGetEntities = () => {
    getEntities().then((data) => {
      if (!isValid(data)) return
      entities.value = data as Entity[]
    })
  }

  const connect = () => {
    tryGetGlobalProperties()
    connectionIds.value.push(
      setInterval(() => {
        tryGetGlobalProperties()
      }, 30000)
    )

    connectionIds.value.push(
      setInterval(() => {
        tryGetEntities()
      }, 1000)
    )
    connected.value = true
  }

  const disconnect = () => {
    console.log('Disconnecting from server...')
    connected.value = false
    connectionIds.value.forEach((connectionId) => clearInterval(connectionId))
  }

  return {
    connect,
    disconnect,
    connected,
  }
}
