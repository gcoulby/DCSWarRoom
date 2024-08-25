import { EntityType } from '@/types'

export const useNATOIcon = () => {
  const friendlyAir = `<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyAir" x="0" y="0" width="64" height="64" style="fill:none;"/><path d="M10.049,56.932c0,-27.521 9.836,-49.864 21.951,-49.864c12.115,-0 21.951,22.343 21.951,49.864l-43.902,0Z" style="fill:{SIDE_COLOR};"/><path d="M10.049,56.932c0,0 0.168,-49.864 21.951,-49.864c21.783,-0 21.951,49.864 21.951,49.864" style="fill:none;stroke:#000;stroke-width:1px;"/><rect id="Heading" x="30.5" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M33.5,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32" cy="35.638" r="13.834" style="fill:{SIDE_COLOR}"/><text x="27.113px" y="41.368px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const friendlyAirNoHeading = `<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyAir" x="0" y="0" width="64" height="64" style="fill:none;"/><path d="M10.049,56.932c0,-27.521 9.836,-49.864 21.951,-49.864c12.115,-0 21.951,22.343 21.951,49.864l-43.902,0Z" style="fill:{SIDE_COLOR};"/><path d="M10.049,56.932c0,0 0.168,-49.864 21.951,-49.864c21.783,-0 21.951,49.864 21.951,49.864" style="fill:none;stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32" cy="35.638" r="13.834" style="fill:{SIDE_COLOR}"/><text x="27.113px" y="41.368px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const friendlyGround = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyGround" x="0.86" y="0" width="64" height="64" style="fill:none;"/><rect x="7.863" y="12.129" width="49.995" height="44.208" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.36" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.36,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.86" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.974px" y="39.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const friendlyGroundNOHeading = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyGround" x="0.86" y="0" width="64" height="64" style="fill:none;"/><rect x="7.863" y="12.129" width="49.995" height="44.208" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.86" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.974px" y="39.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const friendlySea = `<svg width="100%" height="100%" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlySea" x="0.827" y="0.035" width="64" height="64" style="fill:none;"/><circle cx="32.793" cy="32" r="24.932" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.327" y="0.035" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.327,0.035l-3,-0l0,32l3,-0l0,-32Zm-1,1l0,30c0,-0 -1,-0 -1,-0c0,-0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.827" cy="32.035" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.941px" y="37.765px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const friendlySeaNoHeading = `<svg width="100%" height="100%" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlySea" x="0.827" y="0.035" width="64" height="64" style="fill:none;"/><circle cx="32.793" cy="32" r="24.932" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.827" cy="32.035" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.941px" y="37.765px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const hostileAir = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileAir" x="0.581" y="0" width="64" height="64" style="fill:none;"/><path d="M53.768,26.633l-20.917,-19.565l-21.211,19.565l0,30.299l42.128,0l-0,-30.299Z" style="fill:{SIDE_COLOR};"/><path d="M11.64,56.932l0,-30.299l21.064,-19.565l21.064,18.576l-0,31.288" style="fill:none;stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.081" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.081,0l-3,0l-0,32l3,0l-0,-32Zm-1,1l-0,30c-0,0 -1,0 -1,0c-0,0 -0,-30 -0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.704" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.817px" y="39.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const hostileAirNoHeading = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileAir" x="0.581" y="0" width="64" height="64" style="fill:none;"/><path d="M53.768,26.633l-20.917,-19.565l-21.211,19.565l0,30.299l42.128,0l-0,-30.299Z" style="fill:{SIDE_COLOR};"/><path d="M11.64,56.932l0,-30.299l21.064,-19.565l21.064,18.576l-0,31.288" style="fill:none;stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.704" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.817px" y="39.963px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  //   const hostileAir = `<svg width="100%" height="100%" viewBox="0 0 64 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileAir" x="0" y="0.838" width="64" height="64" style="fill:none;"/><clipPath id="_clip1"><rect x="0" y="0.838" width="64" height="64"/></clipPath><g clip-path="url(#_clip1)"><path d="M59.54,30.121l-27.348,-25.581l-27.732,25.581l-0,39.616l55.08,-0l0,-39.616Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><text x="27.113px" y="36.219px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></g></svg>`
  //   const hostileGround = `<svg width="100%" height="100%" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileGround" x="0.86" y="0.838" width="64" height="64" style="fill:none;"/><path d="M32.966,3.641l-29.231,29.231l29.231,29.231l29.231,-29.231l-29.231,-29.231Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><text x="28.079px" y="38.603px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>`
  const hostileGround = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileGround" x="0.632" y="0" width="64" height="64" style="fill:none;"/><clipPath id="_clip1"><rect x="0.632" y="0" width="64" height="64"/></clipPath><g clip-path="url(#_clip1)"><path d="M32.738,7.068l-24.933,24.932l24.933,24.932l24.932,-24.932l-24.932,-24.932Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.132" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.132,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.632" cy="32" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.745px" y="37.73px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></g></svg>`
  const hostileGroundNoHeading = `<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileGround" x="0.632" y="0" width="64" height="64" style="fill:none;"/><clipPath id="_clip1"><rect x="0.632" y="0" width="64" height="64"/></clipPath><g clip-path="url(#_clip1)"><path d="M32.738,7.068l-24.933,24.932l24.933,24.932l24.932,-24.932l-24.932,-24.932Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.632" cy="32" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.745px" y="37.73px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></g></svg>`
  return {
    icon: (type: EntityType, baseType: string, heading: number) => {
      let icon = ''
      switch (type) {
        case EntityType.FriendlyAir: {
          icon = heading == -1 ? friendlyAirNoHeading : friendlyAir
          icon = icon.replaceAll('{SIDE_COLOR}', '#93cde4')
          icon = icon.replaceAll('{ENTITY_TYPE}', 'F')
          icon = icon.replaceAll('{HEADING}', heading.toString())
          break
        }
        case EntityType.FriendlyGround: {
          icon = heading == -1 ? friendlyGroundNOHeading : friendlyGround
          icon = icon.replaceAll('{SIDE_COLOR}', '#93cde4')
          icon = icon.replaceAll('{ENTITY_TYPE}', 'F')
          icon = icon.replaceAll('{HEADING}', heading.toString())
          break
        }
        case EntityType.FriendlySea: {
          icon = heading == -1 ? friendlySeaNoHeading : friendlySea
          icon = icon.replaceAll('{SIDE_COLOR}', '#93cde4')
          icon = icon.replaceAll('{ENTITY_TYPE}', 'F')
          icon = icon.replaceAll('{HEADING}', heading.toString())
          break
        }
        case EntityType.HostileAir: {
          icon = heading == -1 ? hostileAirNoHeading : hostileAir
          icon = icon.replaceAll('{SIDE_COLOR}', '#ea827e')
          icon = icon.replaceAll('{ENTITY_TYPE}', 'H')
          icon = icon.replaceAll('{HEADING}', heading.toString())
          break
        }
        case EntityType.HostileGround: {
          icon = heading == -1 ? hostileGroundNoHeading : hostileGround
          icon = icon.replaceAll('{SIDE_COLOR}', '#ea827e')
          icon = icon.replaceAll('{ENTITY_TYPE}', 'H')
          icon = icon.replaceAll('{HEADING}', heading.toString())
          break
        }

        default:
        // Do nothing
      }
      return `data:image/svg+xml;base64,${btoa(icon)}`
    },
  }
}
