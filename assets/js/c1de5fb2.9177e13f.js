"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6788],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5013:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:5},s="Clients and Nodes",u={unversionedId:"writing-data/clients-nodes",id:"writing-data/clients-nodes",isDocsHomePage:!1,title:"Clients and Nodes",description:"- clients are computer programs that use the p2panda library to",source:"@site/docs/01-writing-data/clients-nodes.md",sourceDirName:"01-writing-data",slug:"/writing-data/clients-nodes",permalink:"/handbook/docs/writing-data/clients-nodes",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/01-writing-data/clients-nodes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Operations",permalink:"/handbook/docs/writing-data/operations"},next:{title:"Documents and Instances",permalink:"/handbook/docs/organising-data/documents-instances"}},c=[{value:"Nodes",id:"nodes",children:[],level:2},{value:"Clients",id:"clients",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clients-and-nodes"},"Clients and Nodes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients are computer programs that use the p2panda library to",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"encode new data and send it to a node"),(0,i.kt)("li",{parentName:"ul"},"query a node for existing data to make it available to its users"))),(0,i.kt)("li",{parentName:"ul"},"nodes are computer programs that",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"store entries received from a client that connects to it"),(0,i.kt)("li",{parentName:"ul"},"exchange entries with other nodes"),(0,i.kt)("li",{parentName:"ul"},"process entries to make information in them available in the shape that clients need"))),(0,i.kt)("li",{parentName:"ul"},"client and node can be integrated in a single software package or run separate from each other - even on different machines",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"one way to integrate node and client is as a Tauri application, something that is supported by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/aquadoggo"},"aquadoggo")))),(0,i.kt)("li",{parentName:"ul"},"both nodes and clients are built on the same ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/p2panda"},"p2panda")," library that defines shared data structures"),(0,i.kt)("li",{parentName:"ul"},"every key pair is bound to exactly one client and exactly one node",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a key pair MUST NOT publish data through any client other than the one it was created with"),(0,i.kt)("li",{parentName:"ul"},"a key pair MUST NOT publish data on any node other than the one it was first used with"),(0,i.kt)("li",{parentName:"ul"},"disregard of this rule carries the risk of creating forks within a public key's logs. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/collaboration/key-groups"},"Key Groups")," for way to publish data from multiple devices without transmitting a private key or changing the node used.")))),(0,i.kt)("h2",{id:"nodes"},"Nodes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nodes do the heavy lifting"),(0,i.kt)("li",{parentName:"ul"},"a node can run as a daemon on a user's computer or on an always-on server"),(0,i.kt)("li",{parentName:"ul"},"a node can be used by many clients (federation)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this allows using p2panda from a browser without installing software"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/aquadoggo"},"aquadoggo")," is the reference node implementation"),(0,i.kt)("li",{parentName:"ul"},"nodes offer a JSON RPC API that is used by clients to connect and exchange data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TODO: add documentation of our JSON RPC API")))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients create key pairs for their users and never transfer private keys out",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"only clients have access to users' private keys"))),(0,i.kt)("li",{parentName:"ul"},"there is no reference client implementation (because p2panda doesn't have a reference use case) but we have the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/beep-boop"},"beep-boop")," chat demo")))}d.isMDXComponent=!0}}]);