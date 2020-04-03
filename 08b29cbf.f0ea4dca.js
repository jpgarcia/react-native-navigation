(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(1),r=(n(0),n(171));const c={id:"stack-layout",title:"Stack",sidebar_label:"Stack"},i={id:"stack-layout",title:"Stack",description:"A stack is a container layout promoting a hierarchical navigation. It is used to navigate between screens at consecutive levels of hierarchy, steps in a flow or across an app.",source:"@site/docs/stack-layout.mdx",permalink:"/react-native-navigation/docs/stack-layout",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/stack-layout.mdx",sidebar_label:"Stack",sidebar:"api",previous:{title:"Component",permalink:"/react-native-navigation/docs/component-layout"},next:{title:"Bottom Tabs",permalink:"/react-native-navigation/docs/bottomTabs-layout"}},o=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>options</code>",id:"options",children:[]}],l={rightToc:o};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A stack is a container layout promoting a hierarchical navigation. It is used to navigate between screens at consecutive levels of hierarchy, steps in a flow or across an app."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  id: 'PROFILE_TAB',\n  children: [\n    {\n      component: {\n        id: 'PROFILE_SCREEN',\n        name: 'ProfileScreen'\n      }\n    }\n  ]\n}\n")),Object(r.b)("h2",{id:"id"},Object(r.b)("inlineCode",{parentName:"h2"},"id")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique id used to interact with the view via the Navigation api, usually ",Object(r.b)("inlineCode",{parentName:"td"},"Navigation.mergeOptions")," which accepts the componentId as it's first argument.")))),Object(r.b)("h2",{id:"children"},Object(r.b)("inlineCode",{parentName:"h2"},"children")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"layout"}),"Layout[]")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Child layouts of any kind.")))),Object(r.b)("h2",{id:"options"},Object(r.b)("inlineCode",{parentName:"h2"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"options-root"}),"Options")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Options that will apply to all screens in stack")))))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return n?r.a.createElement(O,o({ref:t},b,{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);