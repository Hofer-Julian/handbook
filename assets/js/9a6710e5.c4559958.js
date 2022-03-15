"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[552],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"documents"},c="Documents and Document Views",u={unversionedId:"organising-data/documents",id:"organising-data/documents",title:"Documents and Document Views",description:"- documents identify mutable pieces of data",source:"@site/docs/02-organising-data/documents-instances.md",sourceDirName:"02-organising-data",slug:"/organising-data/documents",permalink:"/handbook/docs/organising-data/documents",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/02-organising-data/documents-instances.md",tags:[],version:"current",frontMatter:{id:"documents"},sidebar:"docs",previous:{title:"Organising Data",permalink:"/handbook/docs/category/organising-data"},next:{title:"Reduction",permalink:"/handbook/docs/organising-data/reduction"}},l={},m=[{value:"Documents",id:"documents",level:2},{value:"Document Views",id:"document-views",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documents-and-document-views"},"Documents and Document Views"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"documents")," identify mutable pieces of data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"some things that may be a document in p2panda: a blog post, a wiki page, a chat message, a user account, a configuration setting"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"document views")," represent the state of a document at a particular point in its history of edits",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"every change of a document results in a new document view")))),(0,i.kt)("h2",{id:"documents"},"Documents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a document is the graph of ",(0,i.kt)("a",{parentName:"li",href:"/docs/writing-data/operations"},"operations")," that is constructed by starting with a ",(0,i.kt)("em",{parentName:"li"},"create operation")," as its root and exhaustively connecting all known ",(0,i.kt)("em",{parentName:"li"},"update")," and ",(0,i.kt)("em",{parentName:"li"},"delete operations")," that point at leafs of this graph"),(0,i.kt)("li",{parentName:"ul"},"a document is identified by the operation id of its create operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is also called the ",(0,i.kt)("em",{parentName:"li"},"document id")))),(0,i.kt)("li",{parentName:"ul"},"a document assumes the schema of its ",(0,i.kt)("em",{parentName:"li"},"create operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is the ",(0,i.kt)("em",{parentName:"li"},"document schema")))),(0,i.kt)("li",{parentName:"ul"},"all operations in the document MUST match the ",(0,i.kt)("em",{parentName:"li"},"document schema")),(0,i.kt)("li",{parentName:"ul"},"operations in the document can have any ",(0,i.kt)("em",{parentName:"li"},"operation version"))),(0,i.kt)("h2",{id:"document-views"},"Document Views"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"document view")," is the result of applying a series of operations from a ",(0,i.kt)("em",{parentName:"li"},"document"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the series of operations must start with the document's ",(0,i.kt)("em",{parentName:"li"},"create operation")),(0,i.kt)("li",{parentName:"ul"},"see ",(0,i.kt)("a",{parentName:"li",href:"/docs/organising-data/reduction"},"reduction")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/collaboration/reconciliation"},"reconciliation")," for further details"))),(0,i.kt)("li",{parentName:"ul"},"a document view is identified by its document's graph tips",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the graph tips themselves are expressed as a list of operation ids"))),(0,i.kt)("li",{parentName:"ul"},"a document view has a value for all fields that are defined by its document's schema"),(0,i.kt)("li",{parentName:"ul"},"a document view is ",(0,i.kt)("em",{parentName:"li"},"deleted")," if its document contains a ",(0,i.kt)("em",{parentName:"li"},"delete operation"))))}d.isMDXComponent=!0}}]);