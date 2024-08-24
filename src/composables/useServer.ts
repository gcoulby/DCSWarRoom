import { ref } from 'vue'
import { Properties, GlobalProperties, Entity, Coordinates, MessageParser } from '@/types'
import { useStore } from '@/composables/useStore'

// import { useMessageParser } from './useMessageParser'
import { useQueryEngine } from './useQueryEngine'

const { dcsHost, dcsPort, dcsPassword, globalProperties, entities } = useStore()
const { getEntities, getEntity, getGlobalProperties } = useQueryEngine()

const connected = ref(false)

// const parser: MessageParser = useMessageParser()
// const parsedMessage = parser.parseMessage
const connectionIds = ref<number[]>([])

export const useServer = () => {
  const connect = () => {
    getGlobalProperties().then((data) => {
      globalProperties.value = data
    })
    connectionIds.value.push(
      setInterval(() => {
        // Get global properties every 30 seconds
        getGlobalProperties().then((data) => {
          globalProperties.value = data
        })
      }, 30000)
    )

    connectionIds.value.push(
      setInterval(() => {
        getEntities().then((data) => {
          // console.log(data)

          entities.value = data as Entity[]

          // console.log(entities.value)

          // //loop through entity keys
          // Object.keys(entities.value).forEach((key) => {
          //   //get entity by key
          //   //@ts-expect-error - fix this
          //   const entity = entities.value[key]
          //   console.log('Object - Callsign', key, entity.Name, entity.Pilot)
          // })

          // data.forEach((entity: Entity) => {
          //   console.log(entity)
          // })
        })

        // getEntity('0').then((data) => console.log(data))
      }, 1000)
    )
    connected.value = true
  }

  const disconnect = () => {
    console.log('Disconnecting from server...')
    connected.value = false
    connectionIds.value.forEach((connectionId) => clearInterval(connectionId))
  }

  //   const connect = () => tacviewClient.connect()
  //   const disconnect = () => tacviewClient.disconnect()

  return {
    connect,
    disconnect,
    connected,
  }
}
