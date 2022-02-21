"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[513],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8435:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:4},p="Operations",s={unversionedId:"writing-data/operations",id:"writing-data/operations",isDocsHomePage:!1,title:"Operations",description:"- operations represent data changes",source:"@site/docs/01-writing-data/operations.md",sourceDirName:"01-writing-data",slug:"/writing-data/operations",permalink:"/handbook/docs/writing-data/operations",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/01-writing-data/operations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/handbook/docs/writing-data/schemas"},next:{title:"Clients and Nodes",permalink:"/handbook/docs/writing-data/clients-nodes"}},m=[{value:"Fields",id:"fields",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"operations"},"Operations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"operations represent data changes"),(0,i.kt)("li",{parentName:"ul"},"operations are published as the payload of ",(0,i.kt)("em",{parentName:"li"},"bamboo entries")),(0,i.kt)("li",{parentName:"ul"},"operations are identified by the hash of their bamboo entry",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is referred to as the ",(0,i.kt)("em",{parentName:"li"},"operation id")))),(0,i.kt)("li",{parentName:"ul"},"every operation is associated with a ",(0,i.kt)("a",{parentName:"li",href:"/docs/writing-data/key-pairs"},"bamboo author"),", which is encoded in the operation's ",(0,i.kt)("em",{parentName:"li"},"entry")),(0,i.kt)("li",{parentName:"ul"},"every operation MUST have an ",(0,i.kt)("em",{parentName:"li"},"operation type"),", which must be one of",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," - results in a ",(0,i.kt)("em",{parentName:"li"},"create operation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UPDATE")," - results in a ",(0,i.kt)("em",{parentName:"li"},"update operation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," - results in a ",(0,i.kt)("em",{parentName:"li"},"delete operation")))),(0,i.kt)("li",{parentName:"ul"},"every operation MUST have a ",(0,i.kt)("a",{parentName:"li",href:"/docs/writing-data/schemas"},"schema")),(0,i.kt)("li",{parentName:"ul"},"every operation MUST have an ",(0,i.kt)("em",{parentName:"li"},"operation version"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it describes the version of the operation specification that is followed by that operation"),(0,i.kt)("li",{parentName:"ul"},"versions are encoded as integers"))),(0,i.kt)("li",{parentName:"ul"},"every ",(0,i.kt)("em",{parentName:"li"},"delete")," and ",(0,i.kt)("em",{parentName:"li"},"update operation")," MUST have ",(0,i.kt)("em",{parentName:"li"},"previous operations")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"length > 0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it contains an array of ",(0,i.kt)("em",{parentName:"li"},"operation_id"),"'s which identify the tip operation of any un-merged branches in this document graph"),(0,i.kt)("li",{parentName:"ul"},"in the case where a graph has no un-merged branches, this array will contain only one id (the resolved graph tip)"),(0,i.kt)("li",{parentName:"ul"},"publishing an operation which identifies more than 1 graph tip, effectively merges these branches into one"))),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"create operation")," MUST not have ",(0,i.kt)("em",{parentName:"li"},"previous operations"))),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"create operation")," MUST contain all fields of the operation's schema"),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("em",{parentName:"li"},"update operation")," MAY contain any combination of fields from the operation's schema"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"delete operation")," MUST NOT contain any fields")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients can use operations to publish data changes"),(0,i.kt)("li",{parentName:"ul"},"clients must embed operations in bamboo entries to publish them"),(0,i.kt)("li",{parentName:"ul"},"clients can create a ",(0,i.kt)("a",{parentName:"li",href:"/docs/organising-data/documents-instances#documents"},"document")," by publishing a ",(0,i.kt)("em",{parentName:"li"},"create operation")),(0,i.kt)("li",{parentName:"ul"},"clients can update a document by publishing an ",(0,i.kt)("em",{parentName:"li"},"update operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"every ",(0,i.kt)("em",{parentName:"li"},"update operation")," leads to a new ",(0,i.kt)("em",{parentName:"li"},"document view")," of the document that is being updated"))),(0,i.kt)("li",{parentName:"ul"},"clients can delete a document by publishing a ",(0,i.kt)("em",{parentName:"li"},"delete operation")),(0,i.kt)("li",{parentName:"ul"},"nodes can ",(0,i.kt)("a",{parentName:"li",href:"/docs/organising-data/reduction"},"reduce")," operations to produce a specific ",(0,i.kt)("em",{parentName:"li"},"document view")," of their document"),(0,i.kt)("li",{parentName:"ul"},"clients can delete a document by publishing a ",(0,i.kt)("em",{parentName:"li"},"delete operation")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"nodes MUST delete all operations of a document once it has been deleted")))))}u.isMDXComponent=!0}}]);