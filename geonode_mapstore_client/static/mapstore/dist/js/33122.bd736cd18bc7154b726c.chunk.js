(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[33122],{833122:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>T});var r=t(376180),i=t(65792),n=t.n(i),l=t(984596),a=t.n(l),c=t(281763),u=t.n(c),s=t(396026),f=t.n(s);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function y(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,o){if("object"!==p(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(i)?i:String(i)),r)}var i}function h(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=e[t];return r}function m(e){var o,t,i=e.color,l=e.opacity,a=(o=n()(i).gl(),t=4,function(e){if(Array.isArray(e))return e}(o)||function(e,o){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,n,l,a=[],c=!0,u=!1;try{if(n=(t=t.call(e)).next,0===o){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=n.call(t)).done)&&(a.push(r.value),a.length!==o);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}(o,t)||function(e,o){if(e){if("string"==typeof e)return h(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,o):void 0}}(o,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1],s=a[2],f=a[3];return void 0!==l?new r.Color(c,u,s,l):new r.Color(c,u,s,f)}function v(e,o){var t,r;switch(e){case"polyline":return null===(t=o[e])||void 0===t?void 0:t.positions;case"polygon":return null===(r=o[e])||void 0===r?void 0:r.hierarchy;default:return null}}function g(e){var o=e.color,t=e.opacity,i=e.dasharray;if((null==i?void 0:i.length)<=0)return m({color:o,opacity:t});var n=i.reduce((function(e,o){return e+o}),0);return new r.PolylineDashMaterialProperty({color:m({color:o,opacity:t}),dashLength:n,dashPattern:parseInt(i.map((function(e){return Math.floor(e/n*16)})).map((function(e,o){return f()(e).map((function(){return o%2==0?"1":"0"})).join("")})).join(""),2)})}function b(e,o,t,i){var n,l;o._msPosition||(o._msPosition=o.position.getValue(r.JulianDate.now()));var a=function(e,o){var t=parseFloat(e);if(!isNaN(t)&&u()(t))return t;var r="attribute"===(null==e?void 0:e.type)&&parseFloat(o[e.name]);return!isNaN(r)&&u()(r)?r:null}(t.msHeight,i);if(null!==a){var c=null==e||null===(n=e.scene)||void 0===n||null===(l=n.globe)||void 0===l?void 0:l.ellipsoid;if(c){var s=c.cartesianToCartographic(o._msPosition);s.height=a,o.position.setValue(c.cartographicToCartesian(s))}}else o.position.setValue(o._msPosition)}function S(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.properties?Object.keys(e.properties).reduce((function(o,t){var r,i=new RegExp("\\{\\{".concat(t,"\\}\\}"),"g");return o.replace(i,null!==(r=e.properties[t])&&void 0!==r?r:"")}),o):o}var w=["billboard","box","corridor","cylinder","ellipse","ellipsoid","label","model","tileset","path","plane","point","polygon","polyline","polylineVolume","rectangle","wall"],I={none:"NONE",relative:"RELATIVE_TO_GROUND",clamp:"CLAMP_TO_GROUND"};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.rules,t=void 0===o?[]:o,i=arguments.length>1?arguments[1]:void 0,n=i.images,l=void 0===n?[]:n,c=i.getImageIdFromSymbolizer,u=i.geoStylerStyleFilter,s=void 0===u?function(){return!0}:u;return function(e){var o=e.entities,i=e.map,n=e.opacity,u=void 0===n?1:n;o.forEach((function(e){var o={};w.forEach((function(t){e._msStoredCoordinates||(o[t]=v(t,e)||void 0),e[t]=void 0})),e._msStoredCoordinates||(e._msStoredCoordinates=o)})),t.forEach((function(e){e.symbolizers.forEach((function(t){o.forEach((function(o){var n,f=(null==o||null===(n=o.properties)||void 0===n?void 0:n.getValue(r.JulianDate.now()))||{};if(!e.filter||s({properties:f||{}},e.filter)){if("Mark"===t.kind&&o.position){var p=l.find((function(e){return e.id===c(t)}))||{},d=p.image,y=p.width,h=p.height;if(d){var v=y>h?y:h,w=2*t.radius/v;o.billboard=new r.BillboardGraphics({image:d,scale:w,rotation:r.Math.toRadians(-1*t.rotate||0),disableDepthTestDistance:t.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:r.HeightReference[I[t.msHeightReference]||"NONE"],color:m({color:"#ffffff",opacity:1*u})}),b(i,o,t,f)}}if("Icon"===t.kind&&o.position){var C=l.find((function(e){return e.id===c(t)}))||{},T=C.image,_=C.width,N=C.height;if(T){var O=_>N?_:N,E=t.size/O;o.billboard=new r.BillboardGraphics({image:T,scale:E,rotation:r.Math.toRadians(-1*t.rotate||0),disableDepthTestDistance:t.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:r.HeightReference[I[t.msHeightReference]||"NONE"],color:m({color:"#ffffff",opacity:t.opacity*u})}),b(i,o,t,f)}}var P,F,R,j;"Line"===t.kind&&o._msStoredCoordinates.polyline&&(o.polyline=new r.PolylineGraphics({material:null!=t&&t.dasharray?g({color:t.color,opacity:t.opacity*u,dasharray:t.dasharray}):m({color:t.color,opacity:t.opacity*u}),width:t.width,positions:o._msStoredCoordinates.polyline,clampToGround:t.msClampToGround})),"Fill"===t.kind&&o._msStoredCoordinates.polygon&&(o.polygon=new r.PolygonGraphics({material:m({color:t.color,opacity:t.fillOpacity*u}),hierarchy:o._msStoredCoordinates.polygon,classificationType:"terrain"===t.msClassificationType?r.ClassificationType.TERRAIN:"3d"===t.msClassificationType?r.ClassificationType.CESIUM_3D_TILE:r.ClassificationType.BOTH}),t.outlineColor&&0!==t.outlineWidth&&(o.polyline=new r.PolylineGraphics({material:m({color:t.outlineColor,opacity:t.outlineOpacity*u}),width:t.outlineWidth,positions:o._msStoredCoordinates.polygon.getValue().positions,clampToGround:t.msClampToGround}))),"Text"===t.kind&&o.position&&(o.label=new r.LabelGraphics({text:S({properties:f},t.label),font:[t.fontStyle,t.fontWeight,"".concat(t.size,"px"),a()(t.font||["serif"]).join(", ")].filter((function(e){return e})).join(" "),fillColor:m({color:t.color,opacity:1*u}),heightReference:r.HeightReference[I[t.msHeightReference]||"NONE"],pixelOffset:new r.Cartesian2(null!==(P=null==t||null===(F=t.offset)||void 0===F?void 0:F[0])&&void 0!==P?P:0,null!==(R=null==t||null===(j=t.offset)||void 0===j?void 0:j[1])&&void 0!==R?R:0),outlineColor:m({color:t.haloColor,opacity:1*u}),outlineWidth:t.haloWidth}),b(i,o,t,f))}}))}))}))}}const T=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.drawIcons,r=o.getImageIdFromSymbolizer,i=o.geoStylerStyleFilter;d(this,e),this._drawIcons=t||function(){return Promise.resolve(null)},this._getImageIdFromSymbolizer=r||function(e){return e.symbolizerId},this._geoStylerStyleFilter=i||function(){return!0}}var o,t;return o=e,t=[{key:"readStyle",value:function(){return new Promise((function(e,o){try{e(null)}catch(e){o(e)}}))}},{key:"writeStyle",value:function(e){var o=this;return new Promise((function(t,r){try{o._drawIcons(e).then((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=C(e,{images:r,getImageIdFromSymbolizer:o._getImageIdFromSymbolizer,geoStylerStyleFilter:o._geoStylerStyleFilter});t(i)}))}catch(e){r(e)}}))}}],t&&y(o.prototype,t),Object.defineProperty(o,"prototype",{writable:!1}),e}()},540098:e=>{var o=Math.ceil,t=Math.max;e.exports=function(e,r,i,n){for(var l=-1,a=t(o((r-e)/(i||1)),0),c=Array(a);a--;)c[n?a:++l]=e,e+=i;return c}},747445:(e,o,t)=>{var r=t(540098),i=t(816612),n=t(418601);e.exports=function(e){return function(o,t,l){return l&&"number"!=typeof l&&i(o,t,l)&&(t=l=void 0),o=n(o),void 0===t?(t=o,o=0):t=n(t),l=void 0===l?o<t?1:-1:n(l),r(o,t,l,e)}}},396026:(e,o,t)=>{var r=t(747445)();e.exports=r}}]);