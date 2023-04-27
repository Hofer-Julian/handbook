"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[2575],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),b=n,u=m["".concat(s,".").concat(b)]||m[b]||d[b]||o;return a?i.createElement(u,l(l({ref:t},c),{},{components:a})):i.createElement(u,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=a(7462),n=(a(7294),a(4137));const o={id:"blobs",title:"Blobs"},l=void 0,r={unversionedId:"specification/data-types/blobs",id:"specification/data-types/blobs",title:"Blobs",description:'The blob specification describes system schemas and validation conditions used when publishing binary application data. Blobs require their own materialization logic and these system schemas allow a node to distinguish blob documents from other application data and behave accordingly. Conceptually, blobs can be considered to be "attachments" on other documents. It is not intended that blobs alone serve as a general purpose content delivery system. We expect blobs to be attached to other documents via relation fields, replication and materialization logic can be optimized based on this assumption. See the blob http specification to read how blobs are materialized and served on a node.',source:"@site/docs/specification/data-types/blobs.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/blobs",permalink:"/specification/data-types/blobs",draft:!1,tags:[],version:"current",frontMatter:{id:"blobs",title:"Blobs"},sidebar:"specification",previous:{title:"Document views",permalink:"/specification/data-types/document-views"},next:{title:"Authorisation",permalink:"/specification/authorisation"}},s={},p=[{value:"System schemas",id:"system-schemas",level:2},{value:"Blob",id:"blob",level:3},{value:"Validation",id:"validation",level:4},{value:"Blob Piece",id:"blob-piece",level:3},{value:"Validation",id:"validation-1",level:4},{value:"Notes on Storage",id:"notes-on-storage",level:2},{value:"Notes on Replication",id:"notes-on-replication",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The blob specification describes system ",(0,n.kt)("a",{parentName:"p",href:"/specification/data-types/schemas"},"schemas")," and validation conditions used when publishing binary application data. Blobs require their own materialization logic and these system ",(0,n.kt)("a",{parentName:"p",href:"/specification/data-types/schemas"},"schemas")," allow a node to distinguish blob ",(0,n.kt)("a",{parentName:"p",href:"/specification/data-types/documents"},"documents"),' from other application data and behave accordingly. Conceptually, blobs can be considered to be "attachments" on other ',(0,n.kt)("a",{parentName:"p",href:"/specification/data-types/documents"},"documents"),". It is not intended that blobs alone serve as a general purpose content delivery system. We expect blobs to be attached to other ",(0,n.kt)("a",{parentName:"p",href:"/specification/data-types/documents"},"documents")," via relation fields, replication and materialization logic can be optimized based on this assumption. See the ",(0,n.kt)("a",{parentName:"p",href:"/specification/APIs/blob-http"},"blob http specification")," to read how blobs are materialized and served on a node."),(0,n.kt)("h2",{id:"system-schemas"},"System schemas"),(0,n.kt)("h3",{id:"blob"},"Blob"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Schema id: ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_v1")),(0,n.kt)("li",{parentName:"ul"},"Representing a binary file"),(0,n.kt)("li",{parentName:"ul"},"Fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"length"),": length of file in bytes (u64)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mime_type")," IANA mime-type (string)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pieces"),": list of pieces which make up this blob (pinned relation list of ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_piece_v1"),")")))),(0,n.kt)("admonition",{title:"Why no file name or path?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We designed blobs to be as generic as possible, giving developers the option to come up with their own application schemas on top of them. Information like a file name or path is ",(0,n.kt)("em",{parentName:"p"},"optional")," meta data. If you need it, you can for example create a schema which contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"file_name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," field and a relation to a ",(0,n.kt)("inlineCode",{parentName:"p"},"blob_v1")," document. This can be interesting for building an application which materializes files into a specific folder structure, similar to BitTorrent.")),(0,n.kt)("h4",{id:"validation"},"Validation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The claimed ",(0,n.kt)("inlineCode",{parentName:"li"},"length")," of a ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_v1")," document should be validated on publishing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This can be done by collecting all claimed pieces and calculating total length"),(0,n.kt)("li",{parentName:"ul"},"OR only validating that each ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_piece_v1")," is the correct length and then validating the ",(0,n.kt)("inlineCode",{parentName:"li"},"length")," value by checking the number of items in the ",(0,n.kt)("inlineCode",{parentName:"li"},"pieces")," list"))),(0,n.kt)("li",{parentName:"ul"},"The claimed ",(0,n.kt)("inlineCode",{parentName:"li"},"mime_type")," should be validated"),(0,n.kt)("li",{parentName:"ul"},"Validating blob pieces differs if they arrive through the Client API or Replication API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Client API: all blob pieces should already exist before publishing the ",(0,n.kt)("inlineCode",{parentName:"li"},"blob")),(0,n.kt)("li",{parentName:"ul"},"Replication API: a ",(0,n.kt)("inlineCode",{parentName:"li"},"blob")," must exist with a relation to the ",(0,n.kt)("inlineCode",{parentName:"li"},"pieces")," before the pieces are accepted. This means we don't accept arbitrary blob data until we know the blob hash id, as we may want to choose to lazy load a blob's actual data."))),(0,n.kt)("li",{parentName:"ul"},"If a validation step fails, an error should be returned to the client and ",(0,n.kt)("em",{parentName:"li"},"all")," related ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_piece_v1")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_v1")," entries should be deleted")),(0,n.kt)("h3",{id:"blob-piece"},"Blob Piece"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Schema id: ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_piece_v1")),(0,n.kt)("li",{parentName:"ul"},"Representing the (partial) binary data of a file"),(0,n.kt)("li",{parentName:"ul"},"Fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data"),": bytes contained in this blob piece (bytes)")))),(0,n.kt)("h4",{id:"validation-1"},"Validation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All blob pieces must be of maximum 256KB size")),(0,n.kt)("h2",{id:"notes-on-storage"},"Notes on Storage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"blob_v1")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"blob_piece_v1")," data is persisted on a node"),(0,n.kt)("li",{parentName:"ul"},"The materialization logic differs from other documents, see the ",(0,n.kt)("a",{parentName:"li",href:"/specification/APIs/blob-http"},"blob http specification")," to read more")),(0,n.kt)("h2",{id:"notes-on-replication"},"Notes on Replication"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nodes can choose to ignore blobs when they exceed certain minimum or maximum length requirements or have unsupported mime types"),(0,n.kt)("li",{parentName:"ul"},"Nodes can choose to only replicate blob pieces when there is at least one relation to the blob itself from other documents")))}d.isMDXComponent=!0}}]);