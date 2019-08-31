!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=function(e){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(t),c=n,p=u[o+"."+c]||u[c]||l[c]||r;return t?a.a.createElement(p,Object.assign({},s,{components:t})):a.a.createElement(p,s)};function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("propTypes")},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){n(5),e.exports=n(6)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});n(1);var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},s="wrapper";function l(e){var t=e.components,n=o(e,["components"]);return Object(r.a)(s,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",null,"Docs"),Object(r.a)("h2",null,"Avatar"),Object(r.a)("p",null,"This is the docs for the Avatar"),Object(r.a)("h3",null,"Base Avatar"))}l.isMDXComponent=!0},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),i=n(2),s=n.n(i),l=n(3),u=n.n(l),c=function(e,t){return function(n,r,a){if(void 0!==n[r]&&null!==n[r]){if(void 0!==n[e]&&null!==n[e])return new Error("Invalid prop `"+r+"` (has value `"+n[r]+"`) supplied to `"+a+"`. Cannot set `"+e+"` (has value `"+n[e]+"`) when setting `"+r+"`");for(var o=arguments.length,i=new Array(o>3?o-3:0),s=3;s<o;s++)i[s-3]=arguments[s];return t.apply(void 0,[n,r,a].concat(i))}}};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){var t=e.className,n=e.disabled,r=e.isBrand,o=e.isNeutral,i=e.isOutlineBrand,s=e.isInverse,l=e.isDestructive,c=e.isTextDestructive,d=e.isSuccess,b=e.isFullWidth,v=e.isStretch,y=e.isFirst,O=e.isMiddle,m=e.isLast,h=e.use,j=f(e,["className","disabled","isBrand","isNeutral","isOutlineBrand","isInverse","isDestructive","isTextDestructive","isSuccess","isFullWidth","isStretch","isFirst","isMiddle","isLast","use"]),g=u()("slds-button",{"slds-button_brand":r,"slds-button_neutral":o,"slds-button_outline-brand":i,"slds-button_inverse":s,"slds-button_destructive":l,"slds-button_text-destructive":c,"slds-button_success":d,"slds-button_full-width":b,"slds-button_stretch":v,"slds-button_first":y,"slds-button_middle":O,"slds-button_last":m},t);return a.a.createElement(a.a.Fragment,null,"a"===h?a.a.createElement("a",p({className:g},j,{href:"javascript:void(0);"}),e.children):a.a.createElement("button",p({className:g,disabled:n},j),e.children))};d.displayName="Button",d.propTypes={className:s.a.string,disabled:s.a.bool,isBrand:s.a.bool,isNeutral:s.a.bool,isOutlineBrand:s.a.bool,isInverse:s.a.bool,isDestructive:s.a.bool,isTextDestructive:s.a.bool,isSuccess:s.a.bool,isFullWidth:s.a.bool,isStretch:s.a.bool,isFirst:s.a.bool,isMiddle:s.a.bool,isLast:s.a.bool,use:c("disabled",s.a.oneOf(["a"]))};var b=d;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"default",function(){return h});var O={},m="wrapper";function h(e){var t=e.components,n=y(e,["components"]);return Object(o.a)(m,v({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",null,"Button"),Object(o.a)("h2",null,"Buttons are everywhere"),Object(o.a)("p",null,"This docs file exists in storybook-docs spike, under ui/components/Button/docs.mdx"),Object(o.a)("p",null,"This is some paragraph content"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"This"),Object(o.a)("li",{parentName:"ul"},"is a"),Object(o.a)("li",{parentName:"ul"},"bulleted list")),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"This"),Object(o.a)("li",{parentName:"ol"},"is an"),Object(o.a)("li",{parentName:"ol"},"ordered list")),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"this is italic text")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"this is some bold text, too")),Object(o.a)("h3",null,"This is the component, rendered live!"),Object(o.a)(b,{mdxType:"Button"},"Button"))}h.isMDXComponent=!0}]));