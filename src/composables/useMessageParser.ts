// import { Properties, ParsedMessage, GlobalProperties, Entity, Coordinates } from '@/types'

// import { useStore } from '@/composables/useStore'

// const { timeFrame, globalProperties, entities, setGlobalProperty, setEntityProperty, addEntityCoordinates } = useStore()

// export const useMessageParser = () => {
//   const escapeSpecialCharacters = (text: string) => {
//     return text
//       .replace(/\\\n/g, '\u2B1A') // Replace escaped newlines with a dotted square
//       .replace(/\\,/g, '\u2B24') // Replace escaped commas with a black large circle
//   }

//   const unescapeSpecialCharacters = (text: string) => {
//     return text
//       .replace(/\u2B1A/g, '\n') // Convert back to escaped newlines
//       .replace(/\u2B24/g, ',') // Convert back to commas
//   }

//   const parseObjectCoordinates = (coordString: string): Coordinates | null => {
//     const parts = coordString.split('|').map((part) => parseFloat(part))

//     parts.forEach((part, index) => {
//       if (isNaN(part)) {
//         parts[index] = NaN
//       }
//     })

//     switch (parts.length) {
//       case 3:
//         return { timeFrame: timeFrame.value, longitude: parts[0], latitude: parts[1], altitude: parts[2] }
//       case 5:
//         return { timeFrame: timeFrame.value, longitude: parts[0], latitude: parts[1], altitude: parts[2], u: parts[3], v: parts[4] }
//       case 6:
//         return {
//           timeFrame: timeFrame.value,
//           longitude: parts[0],
//           latitude: parts[1],
//           altitude: parts[2],
//           roll: parts[3],
//           pitch: parts[4],
//           yaw: parts[5],
//         }
//       case 9:
//         return {
//           timeFrame: timeFrame.value,
//           longitude: parts[0],
//           latitude: parts[1],
//           altitude: parts[2],
//           roll: parts[3],
//           pitch: parts[4],
//           yaw: parts[5],
//           u: parts[6],
//           v: parts[7],
//           heading: parts[8],
//         }
//       default:
//         console.error('Coordinate string does not match any expected format:', coordString)
//         return null
//     }
//   }

//   const parseTimeFrame = (timeFrame: string) => {
//     //e.g. "#47.54" <- number of seconds since the start of the recording
//     if (!timeFrame.startsWith('#')) return NaN
//     return parseFloat(timeFrame.replace('#', ''))
//   }

//   const parseHeaderMessage = (line: string) => {
//     const pattern =
//       /^(FileType|FileVersion|ReferenceTime|RecordingTime|Title|DataRecorder|DataSource|Author|Comments|ReferenceLongitude|ReferenceLatitude)=/
//     const matches = line.match(pattern)
//     if (matches) {
//       const [key, value] = line.split('=')
//       return { key, value: value.replace(/\\n/g, '\n') } // Unescape newline characters
//     }
//     return null
//   }

//   const parseDataMessage = (line: string) => {
//     const dataPattern = /^([a-f0-9]+),(.+)/i // Updated regex to handle hexadecimal IDs
//     const matches = line.match(dataPattern)
//     if (matches) {
//       const [, id, properties] = matches
//       const props = properties.split(',')
//       const result: { id: string; properties: Properties } = { id, properties: {} }
//       props.forEach((prop) => {
//         const [key, value] = prop.split('=')
//         if (key && value) {
//           result.properties[key] = value // Unescape newline characters are commented out; adjust as needed
//         }
//       })
//       return result
//     }
//     return null
//   }

//   const unescapeMessage = (parsedMessage: ParsedMessage) => {
//     if (parsedMessage.key) {
//       return {
//         key: parsedMessage.key,
//         value: unescapeSpecialCharacters(parsedMessage.value || ''),
//       }
//     } else if (parsedMessage.id) {
//       return {
//         id: parsedMessage.id,
//         properties: Object.fromEntries(Object.entries(parsedMessage.properties || {}).map(([key, value]) => [key, unescapeSpecialCharacters(value)])),
//       }
//     }
//     return null
//   }

//   const parseMessage = (line: string) => {
//     const parsedLines: ParsedMessage[] = []

//     const escapedLine = escapeSpecialCharacters(line)
//     const lines = escapedLine.split('\n')

//     lines.forEach((line) => {
//       const tf = parseTimeFrame(line)
//       if (!isNaN(tf)) {
//         timeFrame.value = tf
//         parsedLines.push({ key: 'Time', value: timeFrame.toString() })
//         return
//       }

//       // Check for a header line first
//       const header = parseHeaderMessage(line)
//       if (header) {
//         const unescapedHeader = unescapeMessage(header) as ParsedMessage
//         parsedLines.push(unescapedHeader)
//         // if header.key in Object.keys(globalProperties) {
//         if (header.key) {
//           setGlobalProperty(header.key as keyof GlobalProperties, header.value)
//         }
//         return
//       }

//       const data = parseDataMessage(line) as ParsedMessage
//       if (!data) return
//       const unescapedData = unescapeMessage(data) as ParsedMessage
//       if (data.id && data.id === '0' && data.properties) {
//         const keys = Object.keys(data.properties)
//         keys.forEach((key) => {
//           if (!unescapedData.properties) return
//           setGlobalProperty(key as keyof GlobalProperties, unescapedData.properties[key])
//         })
//       } else if (data.id && data.id && data.properties) {
//         const keys = Object.keys(data.properties)
//         keys.forEach((key) => {
//           if (!unescapedData.properties || !data.id) return
//           if (key === 'T') {
//             const coordinates = parseObjectCoordinates(data.properties?.T || '')
//             if (coordinates) {
//               addEntityCoordinates(data.id, coordinates)
//             }
//           } else {
//             setEntityProperty(data.id, key as keyof Entity, unescapedData.properties[key])
//           }
//         })
//       }

//       // If not a header, parse as a data line
//       parsedLines.push(unescapedData)
//     })

//     return parsedLines
//   }

//   return { parseMessage }
// }
