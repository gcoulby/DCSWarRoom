if(!self.define){let o,r={};const e=(e,s)=>(e=new URL(e+".js",s).href,r[e]||new Promise((r=>{if("document"in self){const o=document.createElement("script");o.src=e,o.onload=r,document.head.appendChild(o)}else o=e,importScripts(e),r()})).then((()=>{let o=r[e];if(!o)throw new Error(`Module ${e} didn’t register its module`);return o})));self.define=(s,i)=>{const n=o||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let l={};const u=o=>e(o,n),a={module:{uri:n},exports:l,require:u};r[n]=Promise.all(s.map((o=>a[o]||u(o)))).then((o=>(i(...o),l)))}}define(["./workbox-6567b62a"],(function(o){"use strict";o.setCacheNameDetails({prefix:"dcs-warroom"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/DCSWarRoom/css/app.f1183bf5.css",revision:null},{url:"/DCSWarRoom/index.html",revision:"f1331c028685b5f3c86410b4f1cf0a88"},{url:"/DCSWarRoom/js/24.d7e0a2a8.js",revision:null},{url:"/DCSWarRoom/js/249.8aaf5550.js",revision:null},{url:"/DCSWarRoom/js/700.d407db29.js",revision:null},{url:"/DCSWarRoom/js/71.6112495b.js",revision:null},{url:"/DCSWarRoom/js/791.1d02d402.js",revision:null},{url:"/DCSWarRoom/js/886.063c4534.js",revision:null},{url:"/DCSWarRoom/js/app.11ce145e.js",revision:null},{url:"/DCSWarRoom/js/chunk-vendors.fa5a2033.js",revision:null},{url:"/DCSWarRoom/manifest.json",revision:"58a01d078dd60335b54d7207ea9cbeb5"},{url:"/DCSWarRoom/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
