"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[5514],{3216:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(5893),a=i(1151);const s={id:"clients-nodes",title:"Clients and nodes"},o=void 0,r={id:"specifications/aquadoggo/networking/clients-nodes",title:"Clients and nodes",description:"- p2panda has a clear separation of clients and nodes to allow flexible setups and make client development easier",source:"@site/docs/specifications/aquadoggo/networking/clients-nodes.md",sourceDirName:"specifications/aquadoggo/networking",slug:"/specifications/aquadoggo/networking/clients-nodes",permalink:"/specifications/aquadoggo/networking/clients-nodes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"clients-nodes",title:"Clients and nodes"},sidebar:"specifications",previous:{title:"Blob HTTP service",permalink:"/specifications/aquadoggo/APIs/blob-http"},next:{title:"Networking",permalink:"/specifications/aquadoggo/networking/"}},l={},d=[{value:"Nodes",id:"nodes",level:2},{value:"Clients",id:"clients",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["p2panda has a clear separation of clients and nodes to allow flexible setups and make client development easier","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes do the heavy lifting, they exist to allow clients to be lightweight, easier to implement and potentially running in a browser"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Client and node can be integrated in a single software package or run separate from each other - even on different machines","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["One way to integrate node and client is as a ",(0,t.jsx)(n.a,{href:"https://tauri.app/",children:"Tauri"})," application, something that is supported by ",(0,t.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo",children:"aquadoggo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Both nodes and clients are built on the same ",(0,t.jsx)(n.a,{href:"https://github.com/p2panda/p2panda",children:"p2panda"})," library that defines shared data structures"]}),"\n",(0,t.jsxs)(n.li,{children:["Every key pair is bound to exactly one client and exactly one node","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A key pair MUST NOT publish data through any client other than the one it was created with"}),"\n",(0,t.jsx)(n.li,{children:"A key pair MUST NOT publish data on any node other than the one it was first used with"}),"\n",(0,t.jsxs)(n.li,{children:["Disregard of this rule carries the risk of creating forks within a public key's logs. see ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/authorisation",children:"Key Groups"})," for a way to publish data from multiple devices without copying a private key or changing the node used."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"nodes",children:"Nodes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Nodes are computer programs that","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Awaits signed operations from clients"}),"\n",(0,t.jsx)(n.li,{children:"Verifies the consistency, format and signature of operations and rejects invalid ones"}),"\n",(0,t.jsx)(n.li,{children:"Stores operations of the network in a database"}),"\n",(0,t.jsx)(n.li,{children:"Materializes document views on top of the known operations"}),"\n",(0,t.jsx)(n.li,{children:"Answers filterable and paginated data queries"}),"\n",(0,t.jsx)(n.li,{children:"Discovers other nodes in local network and internet"}),"\n",(0,t.jsx)(n.li,{children:"Replicates data with other nodes"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A node can run in different settings which allows it to work offline or online","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Inside an application on the user's computer","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A dedicated node for only this particular client"}),"\n",(0,t.jsxs)(n.li,{children:["This allows running a node as a backend, while the frontend can be a web-view, realized with ",(0,t.jsx)(n.a,{href:"https://tauri.app/",children:"Tauri"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["On a dedicated server which is always online","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This allows using p2panda from a browser without installing software"}),"\n",(0,t.jsx)(n.li,{children:"A node hosted online can be used by many clients (federation)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["As a daemon on a user's computer","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Multiple p2panda clients could talk to one node on the same computer"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo",children:"aquadoggo"})," is the reference node implementation"]}),"\n",(0,t.jsxs)(n.li,{children:["Nodes offer a GraphQL API that is used by ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/APIs/queries",children:"clients"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement NO1",type:"caution",children:(0,t.jsxs)(n.p,{children:["Entries arriving via the ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/APIs/publishing",children:"publish"})," and replication APIs MUST be validated against BA1"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement NO2",type:"caution",children:(0,t.jsxs)(n.p,{children:["Operations arriving via the ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/APIs/publishing",children:"publish"})," and replication APIs MUST be validated against all OP requirements"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement NO3",type:"caution",children:(0,t.jsxs)(n.p,{children:["Operations arriving via the ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/APIs/publishing",children:"publish"})," APIs SHOULD be validated against DO1 - D03"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Node Validation Behaviour",type:"info",children:(0,t.jsxs)(n.p,{children:["Although NO1 and NO2 must be fulfilled by a node for all entries arriving via the public APIs, the ablity to perform this validation and the expected behaviour will differ depending on whether the entry arrives via the ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/APIs/publishing",children:"publish"})," or replication APIs. In the case of the former, all requirements should be validated on arrival against existing entries & operations known to this node, and in the case of a validation failure the entry should be rejected. Where entries are arriving via replication, it may not be possible to immediately perform validation because required data may not have arrived at the node yet."]})}),"\n",(0,t.jsx)(n.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Clients are computer programs that use the p2panda library to","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create key pairs"}),"\n",(0,t.jsx)(n.li,{children:"Sign and encode new data and send it to a node"}),"\n",(0,t.jsx)(n.li,{children:"Query a node for existing data to make it available to its users"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Clients create key pairs for their users and never transfer private keys out","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only clients have access to users' private keys"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Have a look at the ",(0,t.jsx)(n.a,{href:"https://github.com/p2panda/beep-boop",children:"beep-boop"})," chat demo for an example of a client"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);