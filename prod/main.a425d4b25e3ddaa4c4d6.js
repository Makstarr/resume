!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){const r=document.querySelector(".color-swich-btn"),n=document.querySelector(".color-swich-btn__text"),o=e=>{let t=getComputedStyle(document.documentElement).getPropertyValue(e);return t&&(console.log(t),t=t.replace(/\"/g,"").trim(),console.log(t)),t},c=e=>{let t=e||localStorage.getItem("user-scheme");t?(document.documentElement.setAttribute("what-is-user-scheme",t),u(t)):u(o("--color-scheme"))},u=e=>{n.innerHTML=("dark"===e?"Светлая":"&nbsp;Темная")+" тема "};r.addEventListener("click",e=>{e.preventDefault(),c((()=>{let e=localStorage.getItem("user-scheme");switch(e){case"light":e="dark";break;case"dark":e="light";break;default:e="dark"==o("--color-scheme")?"light":"dark"}return localStorage.setItem("user-scheme",e),e})())}),c()},function(e,t,r){"use strict";r.r(t);r(0)}]);