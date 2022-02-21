"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[812],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1193:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},s="Bamboo",p={unversionedId:"writing-data/bamboo",id:"writing-data/bamboo",isDocsHomePage:!1,title:"Bamboo",description:"- in order to write data in p2panda it needs to be encoded",source:"@site/docs/01-writing-data/bamboo.md",sourceDirName:"01-writing-data",slug:"/writing-data/bamboo",permalink:"/handbook/docs/writing-data/bamboo",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/01-writing-data/bamboo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/handbook/docs/"},next:{title:"Key Pairs",permalink:"/handbook/docs/writing-data/key-pairs"}},u=[{value:"Authors",id:"authors",children:[],level:3},{value:"Logs",id:"logs",children:[],level:3},{value:"Entries",id:"entries",children:[],level:3}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bamboo"},"Bamboo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in order to write data in p2panda it needs to be encoded"),(0,o.kt)("li",{parentName:"ul"},"p2panda uses ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bamboo-rs/bamboo-ed25519-yasmf"},"bamboo")," to encode data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this handbook doesn't repeat everything that's in the bamboo spec, so it might be helpful to have a look at that (it's not too long)"))),(0,o.kt)("li",{parentName:"ul"},"bamboo is an append-only data structure that allows encoding arbitrary data in order to share it among peers without trust in the data transmission",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bamboo organises data by ",(0,o.kt)("em",{parentName:"li"},"author")),(0,o.kt)("li",{parentName:"ul"},"every author has many ",(0,o.kt)("a",{parentName:"li",href:"#logs"},(0,o.kt)("em",{parentName:"a"},"logs")),", each of which contains many ",(0,o.kt)("em",{parentName:"li"},"entries")),(0,o.kt)("li",{parentName:"ul"},"entries are the container for individual pieces of data that we want to publish"),(0,o.kt)("li",{parentName:"ul"},"the following sections explain how these concepts from bamboo are used in p2panda"))),(0,o.kt)("li",{parentName:"ul"},"p2panda uses bamboo with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bamboo-rs/yasmf-hash"},(0,o.kt)("em",{parentName:"a"},"yasmf")," hashes"))),(0,o.kt)("h3",{id:"authors"},"Authors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data published using bamboo always belongs to the public key that signed it, this key is called ",(0,o.kt)("em",{parentName:"li"},"author")," in bamboo"),(0,o.kt)("li",{parentName:"ul"},"people who use p2panda can have access to more than one key pair, which is why we don't call public keys ",(0,o.kt)("em",{parentName:"li"},"author"),", as bamboo does, we call them ",(0,o.kt)("em",{parentName:"li"},"public key"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"p2panda users may have more than one key because every device uses an additional key"))),(0,o.kt)("li",{parentName:"ul"},"have a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/writing-data/key-pairs"},"key pairs")," section of this handbook for more detailed information on this topic")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"when a ",(0,o.kt)("em",{parentName:"li"},"bamboo author")," publishes data they assign it to a log, which is identified by an integer number",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"every author has 2^64 logs available to them"))),(0,o.kt)("li",{parentName:"ul"},"in p2panda every log is used to collect a key pair's contributions to one ",(0,o.kt)("a",{parentName:"li",href:"/docs/organising-data/documents-instances"},"document")),(0,o.kt)("li",{parentName:"ul"},"every log contains up to 2^64 - 1 entries")),(0,o.kt)("h3",{id:"entries"},"Entries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"p2panda uses Bamboo entries to record changes of data while giving us cool features like partial replication, cryptographic integrity and authenticity",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"every individual change is recorded inside an entry"),(0,o.kt)("li",{parentName:"ul"},"we call these changes ",(0,o.kt)("em",{parentName:"li"},"operations")))),(0,o.kt)("li",{parentName:"ul"},"have a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/writing-data/operations"},"operations")," section of this handbook for more detailled information on this topic")))}m.isMDXComponent=!0}}]);