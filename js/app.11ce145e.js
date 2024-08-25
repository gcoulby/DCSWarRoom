(function(){"use strict";var e={8109:function(e,t,l){var r=l(5130),n=l(6768);function i(e,t,l,r,i,o){const s=(0,n.g2)("WelcomeScreen");return(0,n.uX)(),(0,n.Wv)(s)}l(4114);var o=l(144),s=l(4232);const a=(0,o.KR)({}),c=(0,o.KR)([]),d=(0,o.KR)(0),u=(0,o.KR)("localhost"),p=(0,o.KR)(18080),f=(0,o.KR)(""),v=(0,o.KR)({lat:0,long:0}),h=(0,o.KR)(5),g=()=>({dcsHost:u,dcsPort:p,dcsPassword:f,timeFrame:d,globalProperties:a,entities:c,mapLatLong:v,mapZoom:h,baseURL:(0,n.EW)((()=>`http://${u.value}:${p.value}/api/v1`))});var y=l(1614);l(4979);parseFloat,parseFloat;var x;(function(e){e[e["FriendlyAir"]=0]="FriendlyAir",e[e["FriendlyGround"]=1]="FriendlyGround",e[e["FriendlySea"]=2]="FriendlySea",e[e["HostileAir"]=3]="HostileAir",e[e["HostileGround"]=4]="HostileGround"})(x||(x={}));const m=()=>{const e='<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyAir" x="0" y="0" width="64" height="64" style="fill:none;"/><path d="M10.049,56.932c0,-27.521 9.836,-49.864 21.951,-49.864c12.115,-0 21.951,22.343 21.951,49.864l-43.902,0Z" style="fill:{SIDE_COLOR};"/><path d="M10.049,56.932c0,0 0.168,-49.864 21.951,-49.864c21.783,-0 21.951,49.864 21.951,49.864" style="fill:none;stroke:#000;stroke-width:1px;"/><rect id="Heading" x="30.5" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M33.5,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32" cy="35.638" r="13.834" style="fill:{SIDE_COLOR}"/><text x="27.113px" y="41.368px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',t='<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyAir" x="0" y="0" width="64" height="64" style="fill:none;"/><path d="M10.049,56.932c0,-27.521 9.836,-49.864 21.951,-49.864c12.115,-0 21.951,22.343 21.951,49.864l-43.902,0Z" style="fill:{SIDE_COLOR};"/><path d="M10.049,56.932c0,0 0.168,-49.864 21.951,-49.864c21.783,-0 21.951,49.864 21.951,49.864" style="fill:none;stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32" cy="35.638" r="13.834" style="fill:{SIDE_COLOR}"/><text x="27.113px" y="41.368px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',l='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyGround" x="0.86" y="0" width="64" height="64" style="fill:none;"/><rect x="7.863" y="12.129" width="49.995" height="44.208" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.36" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.36,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.86" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.974px" y="39.963px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',r='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlyGround" x="0.86" y="0" width="64" height="64" style="fill:none;"/><rect x="7.863" y="12.129" width="49.995" height="44.208" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.86" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.974px" y="39.963px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',n='<svg width="100%" height="100%" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlySea" x="0.827" y="0.035" width="64" height="64" style="fill:none;"/><circle cx="32.793" cy="32" r="24.932" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.327" y="0.035" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.327,0.035l-3,-0l0,32l3,-0l0,-32Zm-1,1l0,30c0,-0 -1,-0 -1,-0c0,-0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.827" cy="32.035" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.941px" y="37.765px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',i='<svg width="100%" height="100%" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="FriendlySea" x="0.827" y="0.035" width="64" height="64" style="fill:none;"/><circle cx="32.793" cy="32" r="24.932" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.827" cy="32.035" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.941px" y="37.765px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',o='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileAir" x="0.581" y="0" width="64" height="64" style="fill:none;"/><path d="M53.768,26.633l-20.917,-19.565l-21.211,19.565l0,30.299l42.128,0l-0,-30.299Z" style="fill:{SIDE_COLOR};"/><path d="M11.64,56.932l0,-30.299l21.064,-19.565l21.064,18.576l-0,31.288" style="fill:none;stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.081" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.081,0l-3,0l-0,32l3,0l-0,-32Zm-1,1l-0,30c-0,0 -1,0 -1,0c-0,0 -0,-30 -0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.704" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.817px" y="39.963px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',s='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileAir" x="0.581" y="0" width="64" height="64" style="fill:none;"/><path d="M53.768,26.633l-20.917,-19.565l-21.211,19.565l0,30.299l42.128,0l-0,-30.299Z" style="fill:{SIDE_COLOR};"/><path d="M11.64,56.932l0,-30.299l21.064,-19.565l21.064,18.576l-0,31.288" style="fill:none;stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.704" cy="34.233" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.817px" y="39.963px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></svg>',a='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileGround" x="0.632" y="0" width="64" height="64" style="fill:none;"/><clipPath id="_clip1"><rect x="0.632" y="0" width="64" height="64"/></clipPath><g clip-path="url(#_clip1)"><path d="M32.738,7.068l-24.933,24.932l24.933,24.932l24.932,-24.932l-24.932,-24.932Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><rect id="Heading" x="31.132" y="0" width="3" height="32" style="fill:{SIDE_COLOR};transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><path d="M34.132,0l-3,0l0,32l3,0l0,-32Zm-1,1l0,30c0,0 -1,0 -1,0c0,0 0,-30 0,-30l1,-0Z" style="transform-origin: 50% 55%; transform: rotate({HEADING}deg)"/><circle id="Cover" cx="32.632" cy="32" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.745px" y="37.73px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></g></svg>',c='<svg width="100%" height="100%" viewBox="0 0 65 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="HostileGround" x="0.632" y="0" width="64" height="64" style="fill:none;"/><clipPath id="_clip1"><rect x="0.632" y="0" width="64" height="64"/></clipPath><g clip-path="url(#_clip1)"><path d="M32.738,7.068l-24.933,24.932l24.933,24.932l24.932,-24.932l-24.932,-24.932Z" style="fill:{SIDE_COLOR};stroke:#000;stroke-width:1px;"/><circle id="Cover" cx="32.632" cy="32" r="13.834" style="fill:{SIDE_COLOR};"/><text x="27.745px" y="37.73px" style="font-family:\'ArialMT\', \'Arial\', sans-serif;font-size:16px;">{ENTITY_TYPE}</text></g></svg>';return{icon:(d,u,p)=>{let f="";switch(d){case x.FriendlyAir:f=-1==p?t:e,f=f.replaceAll("{SIDE_COLOR}","#93cde4"),f=f.replaceAll("{ENTITY_TYPE}","F"),f=f.replaceAll("{HEADING}",p.toString());break;case x.FriendlyGround:f=-1==p?r:l,f=f.replaceAll("{SIDE_COLOR}","#93cde4"),f=f.replaceAll("{ENTITY_TYPE}","F"),f=f.replaceAll("{HEADING}",p.toString());break;case x.FriendlySea:f=-1==p?i:n,f=f.replaceAll("{SIDE_COLOR}","#93cde4"),f=f.replaceAll("{ENTITY_TYPE}","F"),f=f.replaceAll("{HEADING}",p.toString());break;case x.HostileAir:f=-1==p?s:o,f=f.replaceAll("{SIDE_COLOR}","#ea827e"),f=f.replaceAll("{ENTITY_TYPE}","H"),f=f.replaceAll("{HEADING}",p.toString());break;case x.HostileGround:f=-1==p?c:a,f=f.replaceAll("{SIDE_COLOR}","#ea827e"),f=f.replaceAll("{ENTITY_TYPE}","H"),f=f.replaceAll("{HEADING}",p.toString());break;default:}return`data:image/svg+xml;base64,${btoa(f)}`}}},w=["src","width"];var k=(0,n.pM)({__name:"MapIcon",props:{leaflet:{type:Boolean,default:!1},iconSize:{default:48},baseType:{},color:{},heading:{}},setup(e){const{icon:t}=m(),l=e,r=(0,n.EW)((()=>{let e="";l.baseType.includes("Ground")?e="Ground":l.baseType.includes("Air")?e="Air":l.baseType.includes("Sea")&&(e="Sea");let t="Blue"===l.color?"Friendly":"Hostile";switch(`${t}${e}`){case"FriendlyGround":return x.FriendlyGround;case"FriendlyAir":return x.FriendlyAir;case"FriendlySea":return x.FriendlySea;case"HostileGround":return x.HostileGround;case"HostileAir":return x.HostileAir;case"HostileSea":return x.HostileGround;default:return x.FriendlyAir}})),i=(0,n.EW)((()=>l.heading&&!isNaN(+l.heading)?+l.heading:-1)),s=t(r.value,l.baseType,i.value);return(e,t)=>e.leaflet?((0,n.uX)(),(0,n.Wv)((0,o.R1)(y.up),{key:0,"icon-size":[e.iconSize,e.iconSize],"icon-url":(0,o.R1)(s)},null,8,["icon-size","icon-url"])):((0,n.uX)(),(0,n.CE)("img",{key:1,src:(0,o.R1)(s),alt:"icon",width:`${e.iconSize}px`},null,8,w))}});const E=k;var b=E;const L={class:"h-[100vh] w-full mx-auto bg-zinc-900"},T={class:"flex flex-col justify-between"},_={class:"font-bold mb-2"},O=(0,n.Lk)("td",{class:"font-semibold"},"Pilot:",-1),C=(0,n.Lk)("td",{class:"font-semibold"},"Coalition:",-1),A=(0,n.Lk)("td",{class:"font-semibold"},"Country:",-1),S=(0,n.Lk)("td",{class:"font-semibold"},"Group:",-1),R=(0,n.Lk)("td",{class:"font-semibold"},"Heading:",-1),I=(0,n.Lk)("td",{class:"font-semibold"},"Altitude:",-1),D=(0,n.Lk)("td",{class:"font-semibold"},"Latitude:",-1),H=(0,n.Lk)("td",{class:"font-semibold"},"Longitude:",-1),N=(0,n.Lk)("td",{class:"font-semibold"},"Type:",-1),P={key:1,class:"flex items-center justify-center h-[100vh] w-full"},F=(0,n.Lk)("h1",{class:"text-4xl font-light text-white"},"Connect to DCS War Room Server to see map...",-1),G=[F];var M=(0,n.pM)({__name:"MapView",setup(e){const{globalProperties:t,entities:l,mapLatLong:r,mapZoom:i}=g(),a=(0,n.EW)((()=>r.value&&0!==r.value.lat&&"NaN"!==r.value.lat.toString()?(console.log(r.value.lat),r.value.lat):t.value.ReferenceLatitude||0)),c=(0,n.EW)((()=>r.value&&0!==r.value.long&&"NaN"!==r.value.long.toString()?(console.log(r.value.long),r.value.long):t.value.ReferenceLongitude||0)),d=(0,n.EW)((()=>{const e=[];return Object.keys(l.value).forEach((r=>{const n={...l.value[r]};n.Latitude&&n.Longitude&&n.Type&&n.Color&&(n.Type.includes("Ground")||n.Type.includes("Air")||n.Type.includes("Sea"))&&n.Pilot!=n.Group&&(n.Latitude=+(t.value.ReferenceLatitude??0)+ +n.Latitude,n.Longitude=+(t.value.ReferenceLongitude??0)+ +n.Longitude,"Heading"===r&&(n.Heading=+n.Heading),e.push(n))})),e})),u=((0,o.KR)(5),e=>{});return(e,t)=>((0,n.uX)(),(0,n.CE)("div",L,[0!==a.value?((0,n.uX)(),(0,n.Wv)((0,o.R1)(y.Do),{key:0,ref:"map",zoom:(0,o.R1)(i),"onUpdate:zoom":t[0]||(t[0]=e=>(0,o.i9)(i)?i.value=e:null),center:[a.value,c.value],onClick:t[1]||(t[1]=e=>u(e.latlng))},{default:(0,n.k6)((()=>[(0,n.bF)((0,o.R1)(y.a),{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png","layer-type":"base",name:"OpenStreetMap"}),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.value,(e=>((0,n.uX)(),(0,n.Wv)((0,o.R1)(y.li),{class:"bg-blue-500",key:e.Name,"lat-lng":[e.Latitude,e.Longitude]},{default:(0,n.k6)((()=>[(0,n.bF)(b,{baseType:e.Type??"",color:e.Color??"",heading:`${e.Heading}`,leaflet:""},null,8,["baseType","color","heading"]),(0,n.bF)((0,o.R1)(y.nA),null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",T,[(0,n.Lk)("h1",_,(0,s.v_)(e.Name),1),(0,n.Lk)("table",null,[(0,n.Lk)("tr",null,[O,(0,n.Lk)("td",null,(0,s.v_)(e.Pilot),1)]),(0,n.Lk)("tr",null,[C,(0,n.Lk)("td",null,(0,s.v_)(e.Coalition),1)]),(0,n.Lk)("tr",null,[A,(0,n.Lk)("td",null,(0,s.v_)(e.Country),1)]),(0,n.Lk)("tr",null,[S,(0,n.Lk)("td",null,(0,s.v_)(e.Group),1)]),(0,n.Lk)("tr",null,[R,(0,n.Lk)("td",null,(0,s.v_)(e.Heading),1)]),(0,n.Lk)("tr",null,[I,(0,n.Lk)("td",null,(0,s.v_)(e.Altitude),1)]),(0,n.Lk)("tr",null,[D,(0,n.Lk)("td",null,(0,s.v_)(e.Latitude),1)]),(0,n.Lk)("tr",null,[H,(0,n.Lk)("td",null,(0,s.v_)(e.Longitude),1)]),(0,n.Lk)("tr",null,[N,(0,n.Lk)("td",null,(0,s.v_)(e.Type),1)])])])])),_:2},1024)])),_:2},1032,["lat-lng"])))),128)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.value,(e=>((0,n.uX)(),(0,n.Wv)((0,o.R1)(y.r8),{key:e.Name,"lat-lng":[e.Latitude,e.Longitude],radius:2e4,fill:!1,interactive:!1,color:"Blue"==e.Color?"#93cde4":"#ea827e","dash-array":"10, 20",weight:1},null,8,["lat-lng","color"])))),128))])),_:1},8,["zoom","center"])):((0,n.uX)(),(0,n.CE)("div",P,G))]))}});const j=M;var z=j;l(4603),l(7566),l(8721);const Y=async(e,t,l)=>{try{if("POST"!==l){if(t){const l=new URLSearchParams(t).toString();e=e+"?"+l}const l=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}});return l.json()}await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t})}catch(r){return console.error("Error fetching data",r),null}},{dcsHost:Z,dcsPort:W,baseURL:X}=g(),B=()=>({getEntities:async(e="full")=>await Y(`${X.value}/entities`,{mode:e},"GET"),getEntity:async e=>await Y(`${X.value}/entities/${e}`,{},"GET"),getGlobalProperties:async()=>{const e=Y(`${X.value}/entities/0`,{},"GET");return e}}),{dcsHost:K,dcsPort:$,dcsPassword:U,globalProperties:V,entities:q}=g(),{getEntities:J,getEntity:Q,getGlobalProperties:ee}=B(),te=(0,o.KR)(!1),le=(0,o.KR)(0),re=(0,o.KR)([]),ne=()=>{const e=e=>!(!e&&(le.value++,le.value>3))||(n(),!1),t=()=>{ee().then((t=>{e(t)&&(V.value=t)}))},l=()=>{J().then((t=>{e(t)&&(q.value=t)}))},r=()=>{t(),re.value.push(setInterval((()=>{t()}),3e4)),re.value.push(setInterval((()=>{l()}),1e3)),te.value=!0},n=()=>{console.log("Disconnecting from server..."),te.value=!1,re.value.forEach((e=>clearInterval(e)))};return{connect:r,disconnect:n,connected:te}},ie={class:"flex flex-col gap-1 justify-center"},oe=(0,n.Lk)("label",{for:"dcsHost",class:"mt-2"},"DCS Host: ",-1),se=(0,n.Lk)("label",{for:"dcsPort",class:"mt-2"},"DCS Port: ",-1);var ae=(0,n.pM)({__name:"LoginForm",setup(e){const{dcsHost:t,dcsPort:l}=g(),{connect:i,connected:s,disconnect:a}=ne();return(e,c)=>((0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",ie,[oe,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"py-1 px-4 border bg-zinc-900 border-zinc-800 text-zinc-100","onUpdate:modelValue":c[0]||(c[0]=e=>(0,o.i9)(t)?t.value=e:null)},null,512),[[r.Jo,(0,o.R1)(t)]]),se,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"py-1 px-4 border bg-zinc-900 border-zinc-800 text-zinc-100","onUpdate:modelValue":c[1]||(c[1]=e=>(0,o.i9)(l)?l.value=e:null)},null,512),[[r.Jo,(0,o.R1)(l)]])]),(0,o.R1)(s)?((0,n.uX)(),(0,n.CE)("button",{key:1,class:"mt-8 p-2 w-full bg-red-600 text-white",onClick:c[3]||(c[3]=(...e)=>(0,o.R1)(a)&&(0,o.R1)(a)(...e))},"Disconnect")):((0,n.uX)(),(0,n.CE)("button",{key:0,class:"mt-8 p-2 w-full bg-green-600 text-white",onClick:c[2]||(c[2]=(...e)=>(0,o.R1)(i)&&(0,o.R1)(i)(...e))},"Connect"))]))}});const ce=ae;var de=ce;const ue=(0,n.Lk)("h1",{class:"text-2xl mb-8"},"DCS War Room",-1),pe=(0,n.Lk)("h2",{class:"text-xl mt-8 text-left"},"Entities",-1),fe={class:"flex flex-col h-[70vh] overflow-y-auto"},ve=["onClick"],he={class:"text-xs"};var ge=(0,n.pM)({__name:"SideBar",setup(e){const{entities:t,globalProperties:l,mapLatLong:r,mapZoom:i}=g(),a=e=>{r.value={lat:+(l.value.ReferenceLatitude??0)+ +e.Latitude,long:+(l.value.ReferenceLongitude??0)+ +e.Longitude},i.value=10};return(e,l)=>((0,n.uX)(),(0,n.CE)("div",null,[ue,(0,n.bF)(de),pe,(0,n.Lk)("div",fe,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,o.R1)(t),(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.Name},[e.Name&&e.Pilot!=e.Group&&e.Latitude&&e.Longitude&&(e.Type?.includes("Ground")||e.Type?.includes("Air")||e.Type?.includes("Sea"))?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"p-2 mb-2 bg-zinc-800 text-slate-50 flex items-center",onClick:()=>a(e)},[(0,n.Lk)("span",null,[(0,n.bF)(b,{baseType:e.Type??"",color:e.Color??"",heading:`${e.Heading}`,leafet:!1,iconSize:48},null,8,["baseType","color","heading"])]),(0,n.Lk)("span",he,(0,s.v_)(e.Name),1)],8,ve)):(0,n.Q3)("",!0)])))),128))])]))}});const ye=ge;var xe=ye;const me={class:"flex justify-between items-center"},we={class:"w-2/12 h-[100vh] p-4 bg-zinc-800 text-slate-50"},ke={class:"w-10/12 h-full"};var Ee=(0,n.pM)({__name:"WelcomeScreen",setup(e){return(e,t)=>((0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",me,[(0,n.Lk)("div",we,[(0,n.bF)(xe)]),(0,n.Lk)("div",ke,[(0,n.bF)(z)])])]))}});const be=Ee;var Le=be,Te=(0,n.pM)({name:"App",components:{WelcomeScreen:Le}}),_e=l(1241);const Oe=(0,_e.A)(Te,[["render",i]]);var Ce=Oe,Ae=l(4458);(0,Ae.k)("/DCSWarRoom/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,r.Ef)(Ce).mount("#app")}},t={};function l(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,r,n,i){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],i=e[d][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||o>=i)&&Object.keys(l.O).every((function(e){return l.O[e](r[a])}))?r.splice(a--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,n,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var i=Object.create(null);l.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},l.d(i,o),i}}(),function(){l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,r){return l.f[r](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/"+e+"."+{24:"d7e0a2a8",71:"6112495b",249:"8aaf5550",700:"d407db29",791:"1d02d402",886:"063c4534"}[e]+".js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dcs-warroom:";l.l=function(r,n,i,o){if(e[r])e[r].push(n);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var p=function(t,l){s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(l)})),t)return t(l)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/DCSWarRoom/"}(),function(){var e={524:0};l.f.j=function(t,r){var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(l,r){n=e[t]=[l,r]}));r.push(n[2]=i);var o=l.p+l.u(t),s=new Error,a=function(r){if(l.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,n[1](s)}};l.l(o,a,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,o=r[0],s=r[1],a=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(a)var d=a(l)}for(t&&t(r);c<o.length;c++)i=o[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},r=self["webpackChunkdcs_warroom"]=self["webpackChunkdcs_warroom"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=l.O(void 0,[504],(function(){return l(8109)}));r=l.O(r)})();
//# sourceMappingURL=app.11ce145e.js.map