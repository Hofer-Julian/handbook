"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[532],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>m,toc:()=>f});var r=n(7462),o=n(7294),a=n(4137),i=n(6010),c=n(3699);function l(e){let{name:t,url:n,description:r}=e;return o.createElement("div",{className:"col col--4 margin-bottom--lg"},o.createElement("div",{className:(0,i.Z)("card")},o.createElement("div",{className:"card__body"},o.createElement("h3",null,t),o.createElement("p",null,r)),o.createElement("div",{className:"card__footer"},o.createElement("div",{className:"button-group button-group--block"},o.createElement(c.Z,{className:"button button--secondary truncate",to:n},n.replace("https://",""))))))}function p(e){return o.createElement("div",{className:"row"},e.links.map((e=>o.createElement(l,(0,r.Z)({key:e.name},e)))))}const s={title:"Links"},u=void 0,m={unversionedId:"links",id:"links",title:"Links",description:"<Links links={[",source:"@site/docs/links.md",sourceDirName:".",slug:"/links",permalink:"/handbook/links",draft:!1,tags:[],version:"current",frontMatter:{title:"Links"}},d={},f=[],b={toc:f};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{links:[{name:"GitHub",description:"p2panda development and organisation",url:"https://github.com/p2panda"},{name:"How to contribute",description:"Document on how to contribute to p2panda development",url:"https://github.com/p2panda/handbook/blob/main/CONTRIBUTING.md"},{name:"Shirokuma Cafe",description:"Panda, Penguin and Polar-Bear meet here every day",url:"https://en.wikipedia.org/wiki/Shirokuma_Cafe"}],mdxType:"Links"}))}y.isMDXComponent=!0}}]);