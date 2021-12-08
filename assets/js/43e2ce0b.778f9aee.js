"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[969],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6160:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Encoding",p={unversionedId:"writing-data/encoding",id:"writing-data/encoding",isDocsHomePage:!1,title:"Encoding",description:"- in order to write data in p2panda it needs to be encoded",source:"@site/docs/01-writing-data/encoding.md",sourceDirName:"01-writing-data",slug:"/writing-data/encoding",permalink:"/handbook/docs/writing-data/encoding",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/01-writing-data/encoding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/handbook/docs/"},next:{title:"Key Pairs",permalink:"/handbook/docs/writing-data/key-pairs"}},u=[{value:"Bamboo \ud83c\udf8d",id:"bamboo-",children:[],level:2},{value:"Hashes",id:"hashes",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encoding"},"Encoding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in order to write data in p2panda it needs to be encoded"),(0,i.kt)("li",{parentName:"ul"},"p2panda uses bamboo to encode data")),(0,i.kt)("h2",{id:"bamboo-"},"Bamboo \ud83c\udf8d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"todo: short description of what bamboo is"),(0,i.kt)("li",{parentName:"ul"},"introduce key terms:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"key pair")," and ",(0,i.kt)("em",{parentName:"li"},"public key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"bamboo author")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"entry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"log")))),(0,i.kt)("li",{parentName:"ul"},"p2panda uses a variation of bamboo with different hashes")),(0,i.kt)("h2",{id:"hashes"},"Hashes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"512 bit hashes are considered detrimental to user experience because they take up a lot of space when displayed on screen"),(0,i.kt)("li",{parentName:"ul"},"therefore p2panda uses ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bamboo-rs/yasmf-hash"},(0,i.kt)("em",{parentName:"a"},"yasmf")," hashes"),", which currently contain blake3 hashes")))}d.isMDXComponent=!0}}]);