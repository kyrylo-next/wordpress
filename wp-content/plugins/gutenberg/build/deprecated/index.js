<<<<<<< HEAD
window.wp=window.wp||{},window.wp.deprecated=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=383)}({32:function(e,n){e.exports=window.wp.hooks},383:function(e,n,t){"use strict";t.r(n),t.d(n,"logged",(function(){return r})),t.d(n,"default",(function(){return c}));var o=t(32),r=Object.create(null);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.version,c=n.alternative,i=n.plugin,u=n.link,a=n.hint,l=i?" from ".concat(i):"",d=t?" and will be removed".concat(l," in version ").concat(t):"",f=c?" Please use ".concat(c," instead."):"",p=u?" See: ".concat(u):"",s=a?" Note: ".concat(a):"",b="".concat(e," is deprecated").concat(d,".").concat(f).concat(p).concat(s);b in r||(Object(o.doAction)("deprecated",e,n,b),console.warn(b),r[b]=!0)}}}).default;
=======
this.wp=this.wp||{},this.wp.deprecated=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=383)}({26:function(e,t){!function(){e.exports=this.wp.hooks}()},383:function(e,t,n){"use strict";n.r(t),n.d(t,"logged",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(26),o=Object.create(null);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.version,c=t.alternative,i=t.plugin,u=t.link,a=t.hint,l=i?" from ".concat(i):"",f=n?" and will be removed".concat(l," in version ").concat(n):"",d=c?" Please use ".concat(c," instead."):"",s=u?" See: ".concat(u):"",p=a?" Note: ".concat(a):"",b="".concat(e," is deprecated").concat(f,".").concat(d).concat(s).concat(p);b in o||(Object(r.doAction)("deprecated",e,t,b),console.warn(b),o[b]=!0)}}}).default;
>>>>>>> 9fae9b5560b0475736c72e2887ae27ff567215d3
