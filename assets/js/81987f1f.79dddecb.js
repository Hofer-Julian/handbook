"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[1114],{1736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(5893),s=n(1151);const i={id:"documents-and-schema",title:"Documents & Schema"},c=void 0,o={id:"specification/documents-and-schema",title:"Documents & Schema",description:"Documents",source:"@site/docs/specification/documents-and-schema.md",sourceDirName:"specification",slug:"/specification/documents-and-schema",permalink:"/specification/documents-and-schema",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"documents-and-schema",title:"Documents & Schema"}},r={},d=[{value:"Documents",id:"documents",level:2},{value:"Schema",id:"schema",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"documents",children:"Documents"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/specification/data-types/documents",children:"Documents"})," are mutable data items which live on a p2panda network. Authors can create, update and delete documents. A document might be a blog post, a wiki page, a chat message, a user account, a configuration setting, a game board. They are multi-writer capable and have in-built properties which deterministically resolve conflicting writes."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/specification/networking/clients-nodes",children:"Nodes"})," are responsible for persisting documents and offering them on a public API so they can be queried by clients. They also offer the public API for all write actions relating to documents."]}),"\n",(0,a.jsxs)(t.p,{children:["Documents can be assigned to an identity, giving them a concept of ",(0,a.jsx)(t.a,{href:"/specification/authorisation",children:"permissions"}),", with the ability to add and remove other identities over the life of a document. ",(0,a.jsx)(t.a,{href:"/specification/encryption",children:"Encryption"})," is available via the use of ",(0,a.jsx)(t.code,{children:"MLS"})," encryption."]}),"\n",(0,a.jsx)(t.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/specification/data-types/schemas",children:"Schema"})," specify the fields and values a document contains. When a document is published or updated, the request must be checked against the claimed schema. If it doesn't pass validation then the request will be rejected. This ensures all data on a p2panda network strictly follows a known schema. An application developer would publish their own schema based on the data required for their needs, or they could reuse schema already existing on their network."]}),"\n",(0,a.jsxs)(t.p,{children:["Some schema are specified as part of the p2panda protocol, these are called ",(0,a.jsx)(t.a,{href:"/specification/data-types/schemas#system-schemas",children:"system schema"}),", others are dynamically published by application developers and distributed across the network, these are called ",(0,a.jsx)(t.a,{href:"/specification/data-types/schemas#system-and-application-schemas",children:"application schema"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var a=n(7294);const s={},i=a.createContext(s);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);