"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6368:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"reduction"},l="Reduction",u={unversionedId:"organising-data/reduction",id:"organising-data/reduction",title:"Reduction",description:"- reduction is the process of creating an document view from a document (c.f. documents and views)",source:"@site/docs/02-organising-data/reduction.md",sourceDirName:"02-organising-data",slug:"/organising-data/reduction",permalink:"/handbook/docs/organising-data/reduction",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/02-organising-data/reduction.md",tags:[],version:"current",frontMatter:{id:"reduction"},sidebar:"docs",previous:{title:"Documents and Document Views",permalink:"/handbook/docs/organising-data/documents"},next:{title:"Queries",permalink:"/handbook/docs/organising-data/queries"}},p={},s=[{value:"Algorithm",id:"algorithm",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reduction"},"Reduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reduction is the process of creating an ",(0,i.kt)("em",{parentName:"li"},"document view")," from a ",(0,i.kt)("em",{parentName:"li"},"document")," (c.f. ",(0,i.kt)("a",{parentName:"li",href:"/docs/organising-data/documents"},"documents and views"),")")),(0,i.kt)("h2",{id:"algorithm"},"Algorithm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"preprocess the document graph by applying topological sorting to linearise the operation graph")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deserialise all fields of the document's ",(0,i.kt)("em",{parentName:"li"},"create operation")," to produce an ",(0,i.kt)("em",{parentName:"li"},"document view")),(0,i.kt)("li",{parentName:"ol"},"If the next operation in the document is an ",(0,i.kt)("em",{parentName:"li"},"update operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for every field in the operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"overwrite this field's contents on the view with the contents from the operation"))))),(0,i.kt)("li",{parentName:"ol"},"If the next operation in the document is a ",(0,i.kt)("em",{parentName:"li"},"delete operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"remove the content on all fields of the view"),(0,i.kt)("li",{parentName:"ul"},"mark the view deleted"))),(0,i.kt)("li",{parentName:"ol"},"Stop reduction if there is no next known operation in the document"),(0,i.kt)("li",{parentName:"ol"},"Continue with step 2. otherwise")))}m.isMDXComponent=!0}}]);