(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7857],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>f});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},f=function(t){return{type:a,time:t}}},162187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>u,NC:()=>c,c9:()=>l,up:()=>f,AN:()=>s,FZ:()=>p,Fi:()=>y,KB:()=>m,E0:()=>d,Q_:()=>b,hY:()=>v,wO:()=>E,sT:()=>h,wR:()=>S,h1:()=>O,hS:()=>g,zK:()=>T,VS:()=>A,oz:()=>w,FH:()=>P,XN:()=>I,Ym:()=>N,RQ:()=>_});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",u="PLAYBACK:APPEND_FRAMES",c="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",f="PLAYBACK:SELECT_PLAYBACK_RANGE",s="PLAYBACK:SET_INTERVAL_DATA",p="PLAYBACK:SETTINGS_CHANGE",y="PLAYBACK:TOGGLE_ANIMATION_MODE",m="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",b={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},E=function(){return{type:o}},h=function(){return{type:i}},S=function(t){return{type:a,frames:t}},O=function(t){return{type:l,frame:t}},g=function(t){return{type:u,frames:t}},T=function(t){return{type:c,loading:t}},A=function(t){return{type:f,range:t}},w=function(t,e){return{type:p,name:t,value:e}},P=function(){return{type:y}},I=function(t){return{type:m,direction:t}},N=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:d,forTime:n,next:e,previous:r}},_=function(t){return{type:s,timeIntervalData:t}}},757676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>u,cO:()=>c,br:()=>l,aA:()=>f,Xe:()=>s,Nb:()=>p,_V:()=>y,kq:()=>m,JU:()=>d,PQ:()=>b,cb:()=>v,KI:()=>E,lz:()=>h,m7:()=>S,Wb:()=>O,Hz:()=>g,M5:()=>T,w2:()=>A,w:()=>w,Z7:()=>P,p:()=>I,_e:()=>N});var n="TIMELINE:SELECT_TIME",o=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:i,start:e,end:r}},u="TIMELINE:RANGE_DATA_LOADED",c=function(t,e,r,n){return{type:u,layerId:t,range:e,histogram:r,domain:n}},l="TIMELINE:LOADING",f=function(t,e){return{type:l,layerId:t,loading:e}},s="TIMELINE:INIT_SELECT_LAYER",p=function(t){return{type:s,layerId:t}},y="TIMELINE:SELECT_LAYER",m=function(t){return{type:y,layerId:t}},d="TIMELINE:ENABLE_OFFSET",b=function(t){return{type:d,enabled:t}},v="TIMELINE:AUTOSELECT",E=function(){return{type:v}},h="TIMELINE:SET_SNAP_TYPE",S=function(t){return{type:h,snapType:t}},O="TIMELINE:SET_END_VALUES_SUPPORT",g=function(t){return{type:O,endValuesSupport:t}},T="TIMELINE:SET_COLLAPSED",A=function(t){return{type:T,collapsed:t}},w="TIMELINE:SET_MAP_SYNC",P=function(t){return{type:w,mapSync:t}},I="TIMELINE:INIT_TIMELINE",N=function(t,e,r,n){return{type:I,showHiddenLayers:t,expandLimit:e,snapType:r,endValuesSupport:n}}},496361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>b,ot:()=>v,Ci:()=>E,CX:()=>h});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),u=r(49977),c=r(375875),l=r.n(c),f=r(510284);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?y(y({},e),{},m({},r,t[r])):e}),{})},b=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,s=n.tileMatrixSet,p=void 0===s?"EPSG:4326":s,m=n.bbox,b=n.domains,v=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:p,bbox:m,domains:b,expandLimit:v},r))})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,s=i.version,p=void 0===s?"1.1.0":s,m=i.tileMatrixSet,b=void 0===m?"EPSG:4326":m,v=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:p,layer:e,tileMatrixSet:b,bbox:v},n))})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},E=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,s=n.limit,p=void 0===s?20:s,y=n.fromEnd,m=void 0!==y&&y,b=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},v=b.bbox,E=b.tileMatrixSet,h=void 0===E?"EPSG:4326":E,S=b.service,O=void 0===S?"WMTS":S,g=b.version,T=void 0===g?"1.0.0":g;return u.Observable.defer((function(){return l().get(t,{params:d({service:O,version:T,request:"GetDomainValues",tileMatrixSet:h,bbox:v,layer:e,domain:r,fromValue:i,sort:c,limit:p,fromEnd:m,time:o})})})).let(f.oB).switchMap((function(t){return(0,f.sw)(t.data)}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return o()(e,"/wms")?a()(e,/\/wms$/,"/gwc/service/wmts"):o()(e,"/ows")?a()(e,/\/ows$/,"/gwc/service/wmts"):e}},352595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).Overlay)},365295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>I});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),u=r(414293),c=r.n(u),l=r(675263),f=r.n(l),s=r(730381),p=r.n(s),y=r(480681),m=r(815135),d=r(38560);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function S(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function T(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=(0,m.Z)(y.Glyphicon),P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(l,t);var e,r,n,i,u=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(n);if(i){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return S(this,t)});function l(){var t;v(this,l);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return T(O(t=u.call.apply(u,[this].concat(r))),"onUpdate",(function(e,r){var n=p()(t.props.date).utc(),o=r?p()(n).add(1,e):p()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),T(O(t),"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=p()(t.props.date).utc(),i=o["day"===e?"date":e]&&p()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),T(O(t),"getForm",(function(){var e=t.props.date&&p()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&p().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return e=l,(r=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(w,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(w,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(w,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(w,{glyph:"chevron-down"})))}))))}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(o().Component);T(P,"propTypes",{date:f().string,clickable:f().bool,onUpdate:f().func,onIconClick:f().func,glyph:f().string,style:f().object,className:f().string,tooltip:f().string,tooltipId:f().string,showButtons:f().bool}),T(P,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const I=P},589919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>f});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,u(e))},f=function(t,e,r){return function(n){return(r?l(n,o()(t)).catch(r):l(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{w:()=>d});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,p(t(r,f({sort:"asc",fromValue:e?(0,a.p)(u,1e-4,"remove"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,p(t(r,f({sort:"desc",fromValue:e?(0,a.p)(u,1e-4,"add"):u},"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},937307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),u=r(730381),c=r.n(u),l=r(66604),f=r.n(l),s=r(535937),p=r.n(s);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=f()(t.data,(function(t){return p()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},176843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>f,KC:()=>s,Wq:()=>p,rp:()=>y,PF:()=>m});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},f=function(t){return t&&t.playback&&t.playback.currentFrame},s=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},p=function(t){return(u(t)||[])[f(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},m=(0,n.P1)(u,f,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},510284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>E});var n=r(49977),o=r.n(n),i=r(227361),a=r.n(i),u=r(505055),c=r(507526);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,t)},s(t)}function p(t,e,r){return p=y()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&m(o,r.prototype),o},p.apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}r(849843);var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,r,n,o=(e=i,r=y(),function(){var t,n=d(e);if(r){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return f(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="OGCError",r.code=e,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(s(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,u.parseString)(t,e,r)}))(t)},E=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,u.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new b(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}}}]);