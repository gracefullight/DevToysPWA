if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const i=e=>n(e,a),r={module:{uri:a},exports:c,require:i};s[a]=Promise.all(t.map((e=>r[e]||i(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7ec548a6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/DevToysPWA/_next/static/chunks/156-126f6d1334e17fa1.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/543-c44b9b91876702f8.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/fe5848d6-7de4ca262aec8d15.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/framework-25f3fa37174f3cfc.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/main-44e4cd6476f776da.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/%5Blocale%5D-8732672778cf6c76.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/%5Blocale%5D/converters/json-to-yaml-817d1ab05adafb46.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/_app-65e881e93abec702.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/_error-38ce0e421e60eaac.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/converters/json-to-yaml-c04c864830c9088f.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/pages/index-9cc3febd83071e5e.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/chunks/webpack-8c0696879f7f346b.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/dRCZUHwLu7oe2p-47tRkW/_buildManifest.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/dRCZUHwLu7oe2p-47tRkW/_middlewareManifest.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/_next/static/dRCZUHwLu7oe2p-47tRkW/_ssgManifest.js",revision:"dRCZUHwLu7oe2p-47tRkW"},{url:"/DevToysPWA/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/DevToysPWA/icons/192.png",revision:"98108019fe0f758d01809cc3143ba3db"},{url:"/DevToysPWA/icons/512.png",revision:"1bc548dca511fb78ec3522b300607d01"},{url:"/DevToysPWA/locales/en/common.json",revision:"072291006f7a67bbc35ba5d22a875b2f"},{url:"/DevToysPWA/locales/ko/common.json",revision:"dcfc016fca0c8ef6b9659f91ac392bca"},{url:"/DevToysPWA/manifest.json",revision:"b529be9888dcb43a805c3d707a731ac9"},{url:"/DevToysPWA/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/DevToysPWA",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
