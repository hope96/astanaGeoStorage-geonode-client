(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76605],{55237:(t,n,e)=>{"use strict";e.d(n,{tr:()=>w,jb:()=>k,Xu:()=>D,un:()=>z,Qn:()=>T,_q:()=>S,og:()=>M,$4:()=>O,kN:()=>C,oD:()=>x,V$:()=>I,uH:()=>A,pC:()=>U,tz:()=>_,p:()=>E});var r=e(747037),s=e.n(r),a=e(647960),o=e.n(a),i=e(227361),u=e.n(i),j=e(984596),c=e.n(j),l=e(730381),d=e.n(l),f=e(86638);function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,s,a,o,i=[],u=!0,j=!1;try{if(a=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=a.call(e)).done)&&(i.push(r.value),i.length!==n);u=!0);}catch(t){j=!0,s=t}finally{try{if(!u&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(j)throw s}}return i}}(t,n)||v(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){if(t){if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var b=/PT?[\d\.]+[YMWDHMS]/,y=function(t){return t?s()(t)?new Date(t).getTime():(o()(t)&&t.getTime(),t):null},p=function(t){var n=t.start,e=t.end,r=t.duration,s=d().duration(r).asMilliseconds();return(new Date(e).getTime()-new Date(n).getTime())/s},w=function(t){for(var n=t.start,e=t.end,r=t.duration,s=d().duration(r).asMilliseconds(),a=[],o=new Date(n),i=new Date(e);o<=i;)a.push(new Date(o).toISOString()),o.setTime(o.getTime()+s);return a},k=function(t){var n=t.start,e=t.end,r=t.duration;return w({start:n,end:e,duration:r}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+d().duration(r).asMilliseconds())}}))},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.start,e=t.end,r=t.duration,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=s.start,o=s.end;if(!a||!o)return{count:p({start:n,end:e,duration:r}),start:n,end:e};var i=d().duration(r).asMilliseconds(),u=new Date(n).getTime(),j=new Date(e).getTime(),c=new Date(a).getTime(),l=new Date(o).getTime(),f=Math.ceil((c-u)/i),m=Math.floor((l-u)/i),h=Math.floor((j-u)/i);if(f>=0&&m<=h){var v=m-f;return{start:new Date(u+Math.max(0,f)*i),end:new Date(u+Math.min(h,m)*i),count:v}}return{count:p({start:n,end:e,duration:r}),start:n,end:e}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.start,e=t.end,r=arguments.length>1?arguments[1]:void 0,s=new Date(n),a=new Date(e),o=Math.floor(a.getTime()-s.getTime())/r;return{range:{start:n,end:e},resolution:d().duration(o).toISOString().match(b)[0]}},T=function(){var t,n,e=arguments.length>1?arguments[1]:void 0,r=(t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],(n=arguments.length>2?arguments[2]:void 0)?t.map((function(t){var e=h(t.split("/"),2);return{start:e[0],end:e[1]}[n]})):t);return r[function(t,n){var e=y(n),r=1/0,s=-1;return t.forEach((function(t,n){var a=y(t),o=Math.abs(a-e);o<r&&(r=o,s=n)})),s}(r,e)]},S=function(t){return t&&t.indexOf&&t.indexOf("--")>0},M=function(t,n){var e=d()(t).diff(n);return{start:e>=0?n:t,end:e>=0?t:n}},O=function(t){return 6e4*t.getTimezoneOffset()},C=function(t){var n=t;!o()(t)&s()(t)&&(n=new Date(t));var e=n.getUTCHours();e=e<10?"0"+e:e;var r=n.getUTCMinutes();r=r<10?"0"+r:r;var a=n.getUTCSeconds();return a=a<10?"0"+a:a,"".concat(e,":").concat(r,":").concat(a)},x=function(t){var n=t;!o()(t)&s()(t)&&(n=new Date(t));var e=n.getUTCMonth()+1,r=n.getUTCDate();return e=e<10?"0"+e:e,r=r<10?"0"+r:r,"".concat(n.getUTCFullYear(),"-").concat(e,"-").concat(r)},I=function(t,n){var e=(0,f.mh)(t),r="HH:mm:SS";switch(n){case"time":return r;case"date":return e;default:return e+" "+r}},A=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Domains,n=void 0===t?{}:t,e=arguments.length>1?arguments[1]:void 0,r=c()(n.DimensionDomain||[]).concat(),s=n["@version"]||n.version,a=u()(n,"SpaceDomain.BoundingBox");return a&&r.push({Identifier:"space",Domain:a}),r.map((function(t){var n=t.Identifier,r=t.Domain;return{source:{type:"multidim-extension",version:s,url:e},name:n,domain:r}}))},U=function(t,n,e){var r=y(n),s=y(e);return t.reduce((function(t,n){var e=y(n);return y(r)<e&&y(s)>e?[].concat(m(t),[n]):m(t)}),[])},_=function(t){var n=t.reduce((function(t,n){if(-1!==n.indexOf("/")){var e=h(n.split("/"),2),r=e[0],s=e[1];return[].concat(m(t),[r,s])}return[].concat(m(t),[n])}),[]).sort();return[n[0],n[n.length-1]]},E=function(t,n,e){var r=d()(t);return("add"===e?r.add(n,"seconds"):r.subtract(n,"seconds")).toISOString()}},246700:(t,n,e)=>{var r={"./af":42786,"./af.js":42786,"./ar":330867,"./ar-dz":414130,"./ar-dz.js":414130,"./ar-kw":396135,"./ar-kw.js":396135,"./ar-ly":556440,"./ar-ly.js":556440,"./ar-ma":947702,"./ar-ma.js":947702,"./ar-sa":116040,"./ar-sa.js":116040,"./ar-tn":237100,"./ar-tn.js":237100,"./ar.js":330867,"./az":731083,"./az.js":731083,"./be":609808,"./be.js":609808,"./bg":168338,"./bg.js":168338,"./bm":467438,"./bm.js":467438,"./bn":808905,"./bn.js":808905,"./bo":511560,"./bo.js":511560,"./br":301278,"./br.js":301278,"./bs":180622,"./bs.js":180622,"./ca":702468,"./ca.js":702468,"./cs":5822,"./cs.js":5822,"./cv":450877,"./cv.js":450877,"./cy":347373,"./cy.js":347373,"./da":224780,"./da.js":224780,"./de":459740,"./de-at":560217,"./de-at.js":560217,"./de-ch":260894,"./de-ch.js":260894,"./de.js":459740,"./dv":405300,"./dv.js":405300,"./el":250837,"./el.js":250837,"./en-au":278348,"./en-au.js":278348,"./en-ca":477925,"./en-ca.js":477925,"./en-gb":522243,"./en-gb.js":522243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":947207,"./en-il.js":947207,"./en-nz":476319,"./en-nz.js":476319,"./eo":392915,"./eo.js":392915,"./es":655655,"./es-do":155251,"./es-do.js":155251,"./es-us":671146,"./es-us.js":671146,"./es.js":655655,"./et":905603,"./et.js":905603,"./eu":877763,"./eu.js":877763,"./fa":476959,"./fa.js":476959,"./fi":911897,"./fi.js":911897,"./fo":394694,"./fo.js":394694,"./fr":394470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":252330,"./fr-ch.js":252330,"./fr.js":394470,"./fy":905044,"./fy.js":905044,"./gd":802101,"./gd.js":802101,"./gl":538794,"./gl.js":538794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":895349,"./gu.js":895349,"./he":124206,"./he.js":124206,"./hi":30094,"./hi.js":30094,"./hr":230316,"./hr.js":230316,"./hu":822138,"./hu.js":822138,"./hy-am":111423,"./hy-am.js":111423,"./id":229218,"./id.js":229218,"./is":290135,"./is.js":290135,"./it":490626,"./it.js":490626,"./ja":439183,"./ja.js":439183,"./jv":224286,"./jv.js":224286,"./ka":512105,"./ka.js":512105,"./kk":47772,"./kk.js":47772,"./km":318758,"./km.js":318758,"./kn":479282,"./kn.js":479282,"./ko":433730,"./ko.js":433730,"./ky":533291,"./ky.js":533291,"./lb":636841,"./lb.js":636841,"./lo":655466,"./lo.js":655466,"./lt":757010,"./lt.js":757010,"./lv":437595,"./lv.js":437595,"./me":539861,"./me.js":539861,"./mi":835493,"./mi.js":835493,"./mk":495966,"./mk.js":495966,"./ml":87341,"./ml.js":87341,"./mr":610370,"./mr.js":610370,"./ms":509847,"./ms-my":741237,"./ms-my.js":741237,"./ms.js":509847,"./mt":572126,"./mt.js":572126,"./my":856165,"./my.js":856165,"./nb":364924,"./nb.js":364924,"./ne":16744,"./ne.js":16744,"./nl":893901,"./nl-be":659814,"./nl-be.js":659814,"./nl.js":893901,"./nn":383877,"./nn.js":383877,"./pa-in":115858,"./pa-in.js":115858,"./pl":764495,"./pl.js":764495,"./pt":389520,"./pt-br":157971,"./pt-br.js":157971,"./pt.js":389520,"./ro":396459,"./ro.js":396459,"./ru":321793,"./ru.js":321793,"./sd":840950,"./sd.js":840950,"./se":310490,"./se.js":310490,"./si":690124,"./si.js":690124,"./sk":664249,"./sk.js":664249,"./sl":414985,"./sl.js":414985,"./sq":451104,"./sq.js":451104,"./sr":149131,"./sr-cyrl":779915,"./sr-cyrl.js":779915,"./sr.js":149131,"./ss":785893,"./ss.js":785893,"./sv":598760,"./sv.js":598760,"./sw":891172,"./sw.js":891172,"./ta":127333,"./ta.js":127333,"./te":723110,"./te.js":723110,"./tet":352095,"./tet.js":352095,"./tg":27321,"./tg.js":27321,"./th":409041,"./th.js":409041,"./tl-ph":275768,"./tl-ph.js":275768,"./tlh":989444,"./tlh.js":989444,"./tr":372397,"./tr.js":372397,"./tzl":528254,"./tzl.js":528254,"./tzm":351106,"./tzm-latn":330699,"./tzm-latn.js":330699,"./tzm.js":351106,"./ug-cn":809288,"./ug-cn.js":809288,"./uk":167691,"./uk.js":167691,"./ur":813795,"./ur.js":813795,"./uz":806791,"./uz-latn":460588,"./uz-latn.js":460588,"./uz.js":806791,"./vi":865666,"./vi.js":865666,"./x-pseudo":614378,"./x-pseudo.js":614378,"./yo":875805,"./yo.js":875805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":755726,"./zh-hk.js":755726,"./zh-tw":774152,"./zh-tw.js":774152};function s(t){var n=a(t);return e(n)}function a(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=246700}}]);