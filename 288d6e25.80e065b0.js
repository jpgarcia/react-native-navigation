(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),a=(t(0),t(171));const i={id:"playground-app",title:"Playground app",sidebar_label:"Playground app"},o={id:"playground-app",title:"Playground app",description:"### Running The Project",source:"@site/docs/playground-app.mdx",permalink:"/react-native-navigation/docs/playground-app",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/playground-app.mdx",sidebar_label:"Playground app",sidebar:"docs",previous:{title:"Installation",permalink:"/react-native-navigation/docs/installing"},next:{title:"Showcases",permalink:"/react-native-navigation/docs/showcases"}},l=[{value:"Running The Project",id:"running-the-project",children:[]}],c={rightToc:l};function p({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"running-the-project"},"Running The Project"),Object(a.b)("p",null,"If you want to have a quick look around and test things out, you can run the playground app, bundled with this repo."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install dependencies via ",Object(a.b)("inlineCode",{parentName:"li"},"npm install")," (if you haven't already)"),Object(a.b)("li",{parentName:"ol"},"Run the playground project on Android and iOS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"npm run start")," to get the packager running in the terminal, leave it open"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"iOS"),": open ",Object(a.b)("inlineCode",{parentName:"li"},"./playground/ios")," in Xcode and run it"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Android"),": open ",Object(a.b)("inlineCode",{parentName:"li"},"./playground/android")," in Android Studio and run it"))),Object(a.b)("li",{parentName:"ol"},"You can run tests if / when you need to (list of scripts ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"contributing#scripts"}),"available here"),"). Before you start changing things, make sure everything works.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"To easily run all tests in parallel ",Object(a.b)("inlineCode",{parentName:"li"},"npm run test-all"))))))}p.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return t?a.a.createElement(m,l({ref:n},p,{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);