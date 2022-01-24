"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[843],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=i,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3036:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],s={sidebar_position:3},o="Schemas",m={unversionedId:"writing-data/schemas",id:"writing-data/schemas",isDocsHomePage:!1,title:"Schemas",description:"- schemas are used to describe and validate the format in which data is published",source:"@site/docs/01-writing-data/schemas.md",sourceDirName:"01-writing-data",slug:"/writing-data/schemas",permalink:"/handbook/docs/writing-data/schemas",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/01-writing-data/schemas.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Key Pairs",permalink:"/handbook/docs/writing-data/key-pairs"},next:{title:"Operations",permalink:"/handbook/docs/writing-data/operations"}},c=[{value:"Encoding",id:"encoding",children:[{value:"CDDL Encoding",id:"cddl-encoding",children:[],level:3},{value:"Metaschema Encoding",id:"metaschema-encoding",children:[],level:3}],level:2},{value:"Fields",id:"fields",children:[{value:"<em>bool</em> fields",id:"bool-fields",children:[],level:3},{value:"<em>int</em> fields",id:"int-fields",children:[],level:3},{value:"<em>float</em> fields",id:"float-fields",children:[],level:3},{value:"<em>str</em> fields",id:"str-fields",children:[],level:3},{value:"<em>relation</em> fields",id:"relation-fields",children:[],level:3}],level:2},{value:"System and Application Schemas",id:"system-and-application-schemas",children:[],level:2}],d={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schemas"},"Schemas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"schemas are used to describe and validate the format in which data is published"),(0,r.kt)("li",{parentName:"ul"},"schemas have a name, a description and a number of ",(0,r.kt)("em",{parentName:"li"},"fields")),(0,r.kt)("li",{parentName:"ul"},"the name of a schema MUST match the regular expression ",(0,r.kt)("inlineCode",{parentName:"li"},"([A-Za-z0-9][A-Za-z0-9\\-\\/\\.]{0,63})"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name of a schema MUST be at most 64 characters long"),(0,r.kt)("li",{parentName:"ul"},"it begin with an alphanumeric character"),(0,r.kt)("li",{parentName:"ul"},"it uses only alphanumeric characters, digits and the characters dash (-), slash (/) and period (.)"))),(0,r.kt)("li",{parentName:"ul"},"the description of a schema MUST consist of unicode characters and MUST be at most 256 characters long"),(0,r.kt)("li",{parentName:"ul"},"a schema MUST have at most 1024 fields")),(0,r.kt)("h2",{id:"encoding"},"Encoding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a schema definition is an encoding of its name, description and fields"),(0,r.kt)("li",{parentName:"ul"},"a schema definition can be encoded using CDDL"),(0,r.kt)("li",{parentName:"ul"},"a schema definition can be encoded using the ",(0,r.kt)("em",{parentName:"li"},"metaschema"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"metaschema")," is a p2panda schema that allows publishing schema definitions")))),(0,r.kt)("h3",{id:"cddl-encoding"},"CDDL Encoding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"todo: rules for describing schemas in CDDL")),(0,r.kt)("h3",{id:"metaschema-encoding"},"Metaschema Encoding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"todo: rules for describing schemas in metaschemas")),(0,r.kt)("h2",{id:"fields"},"Fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a field is defined by",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"field name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"field type")))),(0,r.kt)("li",{parentName:"ul"},"the field name MUST have only alphanumeric characters and MUST be at most 64 characters long"),(0,r.kt)("li",{parentName:"ul"},"the field type MUST be one of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"str")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"relation"))))),(0,r.kt)("h3",{id:"bool-fields"},(0,r.kt)("em",{parentName:"h3"},"bool")," fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encode a boolean value")),(0,r.kt)("h3",{id:"int-fields"},(0,r.kt)("em",{parentName:"h3"},"int")," fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encode a signed 64 bit integer number")),(0,r.kt)("h3",{id:"float-fields"},(0,r.kt)("em",{parentName:"h3"},"float")," fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encode a 64 bit floating point number")),(0,r.kt)("h3",{id:"str-fields"},(0,r.kt)("em",{parentName:"h3"},"str")," fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encode a text string"),(0,r.kt)("li",{parentName:"ul"},"MUST use unicode encoding")),(0,r.kt)("h3",{id:"relation-fields"},(0,r.kt)("em",{parentName:"h3"},"relation")," fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"encode a ",(0,r.kt)("em",{parentName:"li"},"relation")," to another ",(0,r.kt)("em",{parentName:"li"},"document")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"relation")," fields MAY be self-referential",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"self-referential relations MAY be interpreted as instance ordering in ",(0,r.kt)("a",{parentName:"li",href:"/docs/organising-data/queries"},"queries"))))),(0,r.kt)("h2",{id:"system-and-application-schemas"},"System and Application Schemas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"system schemas")," are defined as part of the p2panda specification",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"system schemas MAY have unique procedures for ",(0,r.kt)("a",{parentName:"li",href:"/docs/organising-data/reduction"},(0,r.kt)("em",{parentName:"a"},"reduction")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/collaboration/reconciliation"},(0,r.kt)("em",{parentName:"a"},"reconciliation"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/organising-data/persistence"},(0,r.kt)("em",{parentName:"a"},"persistence"))," of their instances"),(0,r.kt)("li",{parentName:"ul"},"system schemas are uniquely identified by their name and an integer version number"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"application schemas")," are published by developers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"they may be used to transport application-specific data or they can be published as reusable data schemas to be used in many applications"),(0,r.kt)("li",{parentName:"ul"},"application schemas are uniquely identified by the ",(0,r.kt)("em",{parentName:"li"},"instance id")," of their ",(0,r.kt)("em",{parentName:"li"},"metaschema")," instance")))))}p.isMDXComponent=!0}}]);