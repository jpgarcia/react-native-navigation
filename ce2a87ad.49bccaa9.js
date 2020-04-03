(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),r=(t(0),t(171));const i={id:"stack-backNavigation",title:"Back Navigation",sidebar_label:"Back navigation"},o={id:"stack-backNavigation",title:"Back Navigation",description:"## Disabling back navigation",source:"@site/docs/stack-backNavigation.mdx",permalink:"/react-native-navigation/docs/stack-backNavigation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/stack-backNavigation.mdx",sidebar_label:"Back navigation"},c=[{value:"Disabling back navigation",id:"disabling-back-navigation",children:[]},{value:"Handling back navigation",id:"handling-back-navigation",children:[]}],l={rightToc:c};function u({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"disabling-back-navigation"},"Disabling back navigation"),Object(r.b)("h2",{id:"handling-back-navigation"},"Handling back navigation"))}u.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),b=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=b(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,f=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return t?r.a.createElement(f,c({ref:n},u,{components:t})):r.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);