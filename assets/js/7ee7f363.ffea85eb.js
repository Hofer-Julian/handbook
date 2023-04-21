"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[5229],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?i.createElement(f,r(r({ref:t},l),{},{components:n})):i.createElement(f,r({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=n(7462),a=(n(7294),n(4137));const o={id:"document-views",title:"Document views"},r=void 0,c={unversionedId:"specification/data-types/document-views",id:"specification/data-types/document-views",title:"Document views",description:"- Document views represent the immutable state of a document at a particular point in its history of edits",source:"@site/docs/specification/data-types/document-views.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/document-views",permalink:"/specification/data-types/document-views",draft:!1,tags:[],version:"current",frontMatter:{id:"document-views",title:"Document views"},sidebar:"specification",previous:{title:"Documents",permalink:"/specification/data-types/documents"},next:{title:"Blobs",permalink:"/specification/data-types/blobs"}},u={},s=[{value:"Document view id",id:"document-view-id",level:2},{value:"The Latest Document View",id:"the-latest-document-view",level:2}],l={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Document views")," represent the immutable state of a document at a particular point in its history of edits",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Every change of a document results in a new document view"))),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("em",{parentName:"li"},"document view")," is the result of applying a series of operations from a ",(0,a.kt)("em",{parentName:"li"},"document"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/specification/data-types/documents#reduction"},"reduction")," and ",(0,a.kt)("a",{parentName:"li",href:"/specification/data-types/documents#reconciliation"},"reconciliation")," for further details"))),(0,a.kt)("li",{parentName:"ul"},"A document view has a value for all fields that are defined by its document's schema unless the document has been deleted")),(0,a.kt)("admonition",{title:"Factoid: Latest document view",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The most common document view you will encounter is the current state of a document. If you query a document by its id, this is what you will get, and you won't think about document views all that much. However, the immutable nature of document views, and the ability to refer to them by their document view id are extremely useful properties which make things like ",(0,a.kt)("em",{parentName:"p"},"pinned relations")," possible .  ")),(0,a.kt)("h2",{id:"document-view-id"},"Document view id"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A document view is identified by its set of graph tips: the ",(0,a.kt)("em",{parentName:"li"},"document view id"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each graph tip is represented as an ",(0,a.kt)("em",{parentName:"li"},"operation id")),(0,a.kt)("li",{parentName:"ul"},"It's possible to replicate the exact state of a document from the document view id"),(0,a.kt)("li",{parentName:"ul"},"The document view id grows unbounded with the number of unmerged graph tips"),(0,a.kt)("li",{parentName:"ul"},"If a limited size identifier is required, the document view's ",(0,a.kt)("em",{parentName:"li"},"hash id")," can be used",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To construct the hash id sort the graph tips of a document view id, concatenate their byte values and hash the result using YASMF.")))))),(0,a.kt)("admonition",{title:"Requirement DV1",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Following Requirement EN2, operations in a document view id MUST be lexicographically sorted and de-duplicated before encoding and when generating a ",(0,a.kt)("em",{parentName:"p"},"hash id"),".")),(0,a.kt)("admonition",{title:"Requirement DV2",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All operations referenced in a document view id must originate from the same document.")),(0,a.kt)("h2",{id:"the-latest-document-view"},"The Latest Document View"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is defined as that document view which incorporates all valid operations that are known to the node and part of the document"),(0,a.kt)("li",{parentName:"ul"},"As two nodes in the p2panda network may not share knowledge of the same operations, the latest document view may differ from node to node")))}m.isMDXComponent=!0}}]);