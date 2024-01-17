"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[892],{2629:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=n(5893),o=n(1151);const s={id:"blob-http",title:"Blob HTTP service"},l=void 0,r={id:"specification/APIs/blob-http",title:"Blob HTTP service",description:"This document describes how Blobs are materialized to the filesystem and served from a node over HTTP endpoints.",source:"@site/docs/specification/APIs/blob-http.md",sourceDirName:"specification/APIs",slug:"/specification/APIs/blob-http",permalink:"/specification/APIs/blob-http",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blob-http",title:"Blob HTTP service"},sidebar:"specification",previous:{title:"Queries",permalink:"/specification/APIs/queries"},next:{title:"Clients and nodes",permalink:"/specification/networking/clients-nodes"}},a={},d=[{value:"Materialization",id:"materialization",level:2},{value:"Serving over HTTP",id:"serving-over-http",level:2}];function c(e){const i={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This document describes how Blobs are materialized to the filesystem and served from a node over HTTP endpoints."}),"\n",(0,t.jsx)(i.h2,{id:"materialization",children:"Materialization"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["When a ",(0,t.jsx)(i.code,{children:"blob_v1"})," document and all it's ",(0,t.jsx)(i.code,{children:"blob_piece_v1"})," pieces are present on a node it can be materialized and served to client applications over a HTTP endpoint"]}),"\n",(0,t.jsx)(i.li,{children:"Unlike other documents which are materialized into tables in a database, blobs are materialized directly on the filesystem"}),"\n",(0,t.jsx)(i.li,{children:"Even if all pieces are present, a blob is only materialized when it is referenced in a relation field by another document"}),"\n",(0,t.jsxs)(i.li,{children:["As these relations can be either ",(0,t.jsx)(i.em,{children:"pinned"})," or ",(0,t.jsx)(i.em,{children:"unpinned"})," we support materializing a blob by both it's document id and document view id","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["When a blob is referenced in a ",(0,t.jsx)(i.code,{children:"relation"})," or ",(0,t.jsx)(i.code,{children:"relation_list"})," field then it should be materialized to it's latest view"]}),"\n",(0,t.jsxs)(i.li,{children:["When a blob is referenced in a ",(0,t.jsx)(i.code,{children:"pinned_relation"})," or ",(0,t.jsx)(i.code,{children:"pinned_relation_list"})," field it should be materialized to the requested view id"]}),"\n",(0,t.jsxs)(i.li,{children:["Once the correct view id has been established, a blob should be materialized by collecting all it's ",(0,t.jsx)(i.code,{children:"blob_piece_v1"})," documents, concatenating them, and storing them on the filesystem at the following path: ",(0,t.jsx)(i.code,{children:"/blob/<DOCUMENT_ID>/<DOCUMENT_VIEW_ID>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"serving-over-http",children:"Serving over HTTP"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A static file HTTP server should watch the blob directory and serve all files via an HTTP endpoint like so: ",(0,t.jsx)(i.code,{children:"https://myaquadoggo.net/blob/<DOCUMENT_ID>/<DOCUMENT_VIEW_ID>"})]}),"\n",(0,t.jsxs)(i.li,{children:["Additionally, in order to support serving documents by their document id, the HTTP service should forward requests arriving at ",(0,t.jsx)(i.code,{children:"https://myaquadoggo.net/blob/<DOCUMENT_ID>"})," to the location of the documents latest materialized view"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>l});var t=n(7294);const o={},s=t.createContext(o);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);