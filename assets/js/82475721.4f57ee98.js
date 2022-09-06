"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[7891],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(7462),o=(n(7294),n(4137));const a={id:"documents",title:"Documents"},r=void 0,p={unversionedId:"specification/data-types/documents",id:"specification/data-types/documents",title:"Documents",description:"- A Document is a high-level mutable, multi-writer data type constructed from a linked graph of operations.",source:"@site/docs/specification/data-types/documents.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/documents",permalink:"/handbook/specification/data-types/documents",draft:!1,tags:[],version:"current",frontMatter:{id:"documents",title:"Documents"},sidebar:"specification",previous:{title:"Schemas",permalink:"/handbook/specification/data-types/schemas"},next:{title:"Document views",permalink:"/handbook/specification/data-types/document-views"}},l={},s=[{value:"Viewing a document",id:"viewing-a-document",level:2},{value:"1. Reconciliation",id:"1-reconciliation",level:3},{value:"2. Reduction",id:"2-reduction",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Document is a high-level mutable, multi-writer data type constructed from a linked graph of ",(0,o.kt)("a",{parentName:"li",href:"/specification/data-types/operations"},"operations"),"."),(0,o.kt)("li",{parentName:"ul"},"Through a deterministic process the graph can be reduced to a single key-value map."),(0,o.kt)("li",{parentName:"ul"},"Any two documents (replicas) which contain the same collection of operations will resolve to the same value."),(0,o.kt)("li",{parentName:"ul"},"A document is identified by the operation id of its root CREATE operation (aka ",(0,o.kt)("em",{parentName:"li"},"document_id"),")."),(0,o.kt)("li",{parentName:"ul"},"A document assumes the schema of its root CREATE operation"),(0,o.kt)("li",{parentName:"ul"},"A document is made up of operations published by one or many authors",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Branches in a document's graph occur when two authors publish operations concurrently"))),(0,o.kt)("li",{parentName:"ul"},"Every operation has a ",(0,o.kt)("inlineCode",{parentName:"li"},"previous")," field containing a ",(0,o.kt)("inlineCode",{parentName:"li"},"document_view_id")," which refers to document state ",(0,o.kt)("em",{parentName:"li"},"at the moment the operation was encoded"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"These ",(0,o.kt)("inlineCode",{parentName:"li"},"previous")," references make up the edges in a graph, the operations being the nodes."),(0,o.kt)("li",{parentName:"ul"},"The graph describes the causal relationship between all operations in a document.")))),(0,o.kt)("admonition",{title:"Fun fact",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some things that may be a document in p2panda: a blog post, a wiki page, a chat message, a user account, a configuration setting, a game board.")),(0,o.kt)("admonition",{title:"Requirement DO1",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"A document MUST contain exactly one CREATE operation.")),(0,o.kt)("admonition",{title:"Requirement DO2",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"A document's operation graph MUST NOT contain any cycles.")),(0,o.kt)("admonition",{title:"Requirement DO3",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"A document MUST NOT contain an operation who's ",(0,o.kt)("inlineCode",{parentName:"p"},"previous")," refers to an operation not present in the document's graph.")),(0,o.kt)("admonition",{title:"Requirement DO4",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If a document contains any number of DELETE operations it SHOULD be considered deleted. After this point, new operations\nSHOULD NOT be appended to any point on the document.")),(0,o.kt)("admonition",{title:"Requirement DO5",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"A documents' operations MUST be encoded on entries which are published to a single log for each contributing author/public key.")),(0,o.kt)("h2",{id:"viewing-a-document"},"Viewing a document"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When viewing documents, it's state must be reduced to a single key-value map, this process involves two steps:")),(0,o.kt)("admonition",{title:"Definition: Materialisation",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although here we describe the resolving an operation graph as a property of the data type ",(0,o.kt)("em",{parentName:"p"},"document")," it can also be seen as the process of ",(0,o.kt)("em",{parentName:"p"},"materialisation"),". This is a term borrowed from database terminology, where views on data can be materialised into virtual tables. This is a useful concept in p2panda and one that is used often.")),(0,o.kt)("h3",{id:"1-reconciliation"},"1. Reconciliation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first step we take is to sort and linearise the document's graph of operations deterministically."),(0,o.kt)("li",{parentName:"ul"},"We do this by applying a topological depth-first sorting algorithm which meets the following requirements:")),(0,o.kt)("admonition",{title:"Requirement DO6",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Sorting MUST start from the document's CREATE operation.")),(0,o.kt)("admonition",{title:"Requirement DO7",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"An operation which refers to the current operation in its ",(0,o.kt)("inlineCode",{parentName:"p"},"previous")," field MUST be sorted next.")),(0,o.kt)("admonition",{title:"Requirement DO8",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If multiple operations refer to the current, the one with the lowest ",(0,o.kt)("inlineCode",{parentName:"p"},"document_id")," MUST be sorted next.")),(0,o.kt)("admonition",{title:"Requirement DO9",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When visiting a branch, all operations it contains MUST be visited and sorted before continuing to the rest of the graph.")),(0,o.kt)("admonition",{title:"Requirement D10",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"All operations in the graph MUST be sorted exactly once.")),(0,o.kt)("admonition",{title:"Requirement D11",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If any DELETE operation is visited, materialisation of the document MUST stop immediately. The resulting document view id MUST include\nonly the id of the DELETE operation and no document view should be produced.")),(0,o.kt)("h3",{id:"2-reduction"},"2. Reduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second and final step is to reduce the linearlised list of operations into a single key-value map by applying the following rules:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Deserialise all fields of the document's CREATE operation to produce a ",(0,o.kt)("em",{parentName:"li"},"document view")),(0,o.kt)("li",{parentName:"ol"},"If the next operation in the document is an UPDATE operation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for every field in the operation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"overwrite this field's contents on the view with the contents from the operation"))))),(0,o.kt)("li",{parentName:"ol"},"If the next operation in the document is a DELETE operation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"remove the content on all fields of the view"),(0,o.kt)("li",{parentName:"ul"},"mark the view delete"),(0,o.kt)("li",{parentName:"ul"},"stop reduction here"))),(0,o.kt)("li",{parentName:"ol"},"Stop reduction if there is no next known operation in the document"),(0,o.kt)("li",{parentName:"ol"},"Continue with step 2. otherwise")))))}m.isMDXComponent=!0}}]);