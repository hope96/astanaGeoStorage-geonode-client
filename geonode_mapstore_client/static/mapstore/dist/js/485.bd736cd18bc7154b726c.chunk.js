(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[485],{830029:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),a=r(675263),i=r.n(a),l=r(805346);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function y(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var b,m,v,h={width:"100%",height:"100%",textAlign:"center",verticalAlign:"center"},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,r,n,a,i=(n=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(a){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(){return c(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){return this.props.loading?o().createElement("div",{style:h},o().createElement(l.Z,{msgId:"loading"})):this.props.children?this.props.children:o().createElement("div",{style:h},o().createElement(l.Z,{msgId:"featuregrid.noFeaturesAvailable"}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().PureComponent);b=g,m="propTypes",v={loading:i().bool},(m=y(m))in b?Object.defineProperty(b,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):b[m]=v;const w=g},118027:(e,t,r)=>{"use strict";r.d(t,{Q:()=>Ee});var n=r(867076),o=r(124852),a=r.n(o),i=r(675263),l=r.n(i),u=r(868195),c=r(730381),s=r.n(c),p=r(200020),f=r(93054),d=r.n(f),y=r(480681),b=r(647960),m=r.n(b),v=r(950966);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function C(e,t,r){return(t=_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}var T=function(e){for(var t=s()().startOf("day"),r=s()().startOf("day").add(1,"d"),n=[],o=t.date();t.date()===o&&t.isBefore(r);)n.push({date:t.toDate(),label:t.format("LT")}),t=t.add(e||30,"m");return n},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function l(){var e;g(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(S(e=i.call.apply(i,[this].concat(r))),"state",{focusedItemIndex:0,times:[]}),C(S(e),"handleKeyDown",(function(t){var r=t.key,n=e.state,o=n.focusedItemIndex,a=n.times;if("Enter"===r){var i=a[o];e.props.onSelect(i),t.preventDefault()}else if("ArrowDown"===r){t.preventDefault();var l=o+1;e.scrollDown(l),l<a.length&&e.setState({focusedItemIndex:l})}else if("ArrowUp"===r){t.preventDefault();var u=o-1;e.scrollUp(u),u>-1&&e.setState({focusedItemIndex:u})}})),C(S(e),"scrollDown",(function(t){var r=e.itemsRef[t];r&&r.offsetTop>e.listRef.offsetHeight&&(e.listRef.scrollTop=r.offsetTop-e.listRef.offsetTop)})),C(S(e),"scrollUp",(function(t){var r=e.itemsRef[t];if(r){var n=e.listRef.scrollTop,o=r.offsetTop;n&&o<n&&(e.listRef.scrollTop=r.offsetTop-e.listRef.offsetTop)}})),C(S(e),"attachListRef",(function(t){return e.listRef=t})),C(S(e),"itemsRef",{}),e}return t=l,(r=[{key:"componentDidMount",value:function(){this.setState({times:T()})}},{key:"render",value:function(){var e=this,t=this.state,r=t.focusedItemIndex,n=t.times;return a().createElement("ul",{id:"rw_1_time_listbox",style:{position:"relative"},ref:this.attachListRef,tabIndex:"0",className:"rw-list",role:"listbox","aria-labelledby":"rw_1_input","aria-live":"false","aria-hidden":"true","aria-activedescendant":"rw_1_time_listbox__option__11"},n.map((function(t,n){return a().createElement("li",{key:t.label,onMouseDown:e.props.onMouseDown,onClick:function(){return e.props.onSelect(t)},ref:function(t){e.itemsRef[n]=t},role:"option",tabIndex:"0","aria-selected":"false",className:"rw-list-option ".concat(r===n?"rw-state-focus":""),id:"rw_1_time_listbox__option__0"},t.label)})))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.Component);C(E,"propTypes",{onSelect:l().func,onMouseDown:l().func}),C(E,"defaultProps",{onSelect:function(){},onMouseDown:function(){}});const D=E;function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,U(n.key),n)}}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function M(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function F(e,t,r){return(t=U(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===x(t)?t:String(t)}d()(s());var Z="function"==typeof s()().locale?"locale":"lang";function A(e,t,r){return e?s()(t,r)[Z](e):s()(t,r)}var H=function(e,t){var r=s()(e);return r.hours(t.getHours()).minute(t.getMinutes()).seconds(t.getSeconds()).milliseconds(t.getMilliseconds()),r.toDate()},K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(o){var r=B(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return M(this,e)});function l(){var e;I(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return F(N(e=i.call.apply(i,[this].concat(r))),"state",{open:"",focused:!1,inputValue:"",operator:"",date:null}),F(N(e),"getFormat",(function(){var t=e.props,r=t.format,n=t.time,o=t.calendar;return r||(!n&&o?"L":n&&!o?"LT":"lll")})),F(N(e),"renderInput",(function(t,r,n,o,i,l,u){return n?a().createElement(v.Z,{placement:"top",overlay:a().createElement(y.Tooltip,{id:"tooltip"},n)},a().createElement("input",{type:"text",id:"rw_1_input",role:"combobox",onBlur:e.handleInputBlur,placeholder:o,"aria-expanded":l||u,"aria-haspopup":"true","aria-busy":"false","aria-owns":"rw_1_cal rw_1_time_listbox",tabIndex:i,autoComplete:"off",value:"".concat(r).concat(t),className:"rw-input",onChange:e.handleValueChange})):a().createElement("input",{type:"text",id:"rw_1_input",role:"combobox",onBlur:e.handleInputBlur,placeholder:o,"aria-expanded":l||u,"aria-haspopup":"true","aria-busy":"false","aria-owns":"rw_1_cal rw_1_time_listbox",tabIndex:i,autoComplete:"off",value:"".concat(r).concat(t),className:"rw-input",onChange:e.handleValueChange})})),F(N(e),"inputFlush",!1),F(N(e),"ignoreBlur",!1),F(N(e),"handleWidgetFocus",(function(){e.setState({focused:!0}),e.ignoreBlur=!1})),F(N(e),"handleWidgetBlur",(function(){e.ignoreBlur||e.setState({open:"",focused:!1})})),F(N(e),"handleMouseDown",(function(){e.ignoreBlur=!0})),F(N(e),"toggleCalendar",(function(){e.setState((function(e){return{open:"date"!==e.open?"date":""}}))})),F(N(e),"toggleTime",(function(){e.setState((function(e){return{open:"time"!==e.open?"time":""}}))})),F(N(e),"handleInputBlur",(function(){if(e.inputFlush){var t=e.parse(e.state.inputValue),r=e.format(t);e.setState({inputValue:r,date:t}),e.inputFlush=!1,e.props.onChange(t,"".concat(e.state.operator).concat(r))}})),F(N(e),"setDateFromValueProp",(function(t,r){if(m()(t)){var n=e.format(t);e.setState((function(e){return{date:t,inputValue:n,operator:r||e.operator}}))}})),F(N(e),"parse",(function(t){var r=e.props.culture,n=e.getFormat();if(t){var o=A(r,t,n);if(o.isValid())return o.toDate()}return null})),F(N(e),"format",(function(t){if(!t)return"";var r=e.props.culture,n=e.getFormat(),o=A(r,t);return o.isValid()?o.format(n):""})),F(N(e),"close",(function(){e.setState({open:""})})),F(N(e),"open",(function(){var t=e.props,r=t.calendar,n=t.time;return!r&&n?e.setState({open:"time"}):r&&!n?e.setState({open:"date"}):""})),F(N(e),"handleKeyDown",(function(t){var r=e.state.open,n="time"===r,o="date"===r;if(!t.defaultPrevented)if("Escape"!==t.key){if(t.altKey&&"ArrowDown"===t.key)return t.preventDefault(),void e.open();if(t.altKey&&"ArrowUp"===t.key)return t.preventDefault(),void e.close();if(n&&e.timeRef.handleKeyDown(t),o&&e.calRef.refs.inner.handleKeyDown(t),!n&&!o&&"Enter"===t.key){var a=e.parse(e.state.inputValue),i=e.format(a);e.setState({inputValue:i,date:a}),e.inputFlush=!1,e.props.onChange(a,"".concat(e.state.operator).concat(i))}}else e.close()})),F(N(e),"handleValueChange",(function(t){var r=t.target.value,n=/\s*(!==|!=|<>|<=|>=|===|==|=|<|>)?(.*)/.exec(r);e.setState({inputValue:n[2],operator:n[1]||""}),e.inputFlush=!0})),F(N(e),"handleCalendarChange",(function(t){var r=H(t,new Date),n=e.format(r);e.setState({date:r,inputValue:n,open:""}),e.props.onChange(r,"".concat(e.state.operator).concat(n))})),F(N(e),"handleTimeSelect",(function(t){var r=e.state.date||new Date,n=H(r,t.date),o=e.format(n);e.setState({date:n,inputValue:o,open:""}),e.props.onChange(n,"".concat(e.state.operator).concat(o))})),F(N(e),"attachTimeRef",(function(t){return e.timeRef=t})),F(N(e),"attachCalRef",(function(t){return e.calRef=t})),e}return t=l,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.value,r=e.operator;this.setDateFromValueProp(t,r)}},{key:"componentDidUpdate",value:function(e){if(e.value!==this.props.value||e.operator!==this.props.operator){var t=this.props,r=t.value,n=t.operator;this.setDateFromValueProp(r,n)}}},{key:"render",value:function(){var e=this,t=this.state,r=t.open,n=t.inputValue,o=t.operator,i=t.focused,l=this.props,u=l.calendar,c=l.time,s=l.toolTip,f=l.placeholder,d=l.tabIndex,y=Object.keys(this.props).reduce((function(t,r){return["placeholder","calendar","time","onChange","value"].includes(r)||(t[r]=e.props[r]),t}),{}),b="date"===r,m="time"===r;return a().createElement("div",{tabIndex:"-1",onKeyDown:this.handleKeyDown,onBlur:this.handleWidgetBlur,onFocus:this.handleWidgetFocus,className:"rw-datetimepicker rw-widget ".concat(u&&c?"rw-has-both":""," ").concat(u||c?"":"rw-has-neither"," ").concat(i?"rw-state-focus":"")},this.renderInput(n,o,s,f,d,b,m),u||c?a().createElement("span",{className:"rw-select"},u?a().createElement("button",{tabIndex:"-1",title:"Select Date",type:"button","aria-disabled":"false","aria-label":"Select Date",className:"rw-btn-calendar rw-btn",onClick:this.toggleCalendar},a().createElement("span",{"aria-hidden":"true",className:"rw-i rw-i-calendar"})):"",c?a().createElement("button",{tabIndex:"-1",title:"Select Time",type:"button","aria-disabled":"false","aria-label":"Select Time",className:"rw-btn-time rw-btn",onClick:this.toggleTime},a().createElement("span",{"aria-hidden":"true",className:"rw-i rw-i-clock-o"})):""):"",a().createElement("div",{className:"rw-popup-container rw-popup-animating",style:{display:m?"block":"none",overflow:m?"visible":"hidden",height:"216px"}},a().createElement("div",{className:"rw-popup rw-widget",style:{transform:m?"translateY(0)":"translateY(-100%)",position:m?"":"absolute"}},a().createElement(D,R({ref:this.attachTimeRef,onMouseDown:this.handleMouseDown},y,{onClose:this.close,onSelect:this.handleTimeSelect})))),a().createElement("div",{className:"rw-calendar-popup rw-popup-container ".concat(b?"":"rw-popup-animating"),style:{display:b?"block":"none",overflow:b?"visible":"hidden",height:"375px"}},a().createElement("div",{className:"rw-popup",style:{transform:b?"translateY(0)":"translateY(-100%)",padding:"0",borderRadius:"4px",position:b?"":"absolute"}},a().createElement(p.Calendar,R({tabIndex:"-1",ref:this.attachCalRef,onMouseDown:this.handleMouseDown,onChange:this.handleCalendarChange},y)))))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.Component);F(K,"propTypes",{format:l().string,type:l().string,placeholder:l().string,onChange:l().func,calendar:l().bool,time:l().bool,value:l().any,operator:l().string,culture:l().string,toolTip:l().string,tabIndex:l().string}),F(K,"defaultProps",{placeholder:"Type date...",calendar:!0,time:!0,onChange:function(){},value:null});const $=K;var Y=r(86638),L=r(55237);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,te(n.key),n)}}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function X(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}function ee(e,t,r){return(t=te(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e){var t=function(e,t){if("object"!==W(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===W(t)?t:String(t)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(n);if(o){var r=J(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return X(this,e)});function l(){var e;q(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return ee(z(e=i.call.apply(i,[this].concat(r))),"renderInput",(function(){var t,r;if(!1===e.props.column.filterable)return a().createElement("span",null);var n=(0,Y.S$)(e.context.messages,e.props.placeholderMsgId)||"Search",o="header-filter-"+e.props.column.key;return a().createElement("input",{disabled:e.props.disabled,key:o,type:"text",className:"form-control input-sm",placeholder:n,value:null!==(t=null===(r=e.state)||void 0===r?void 0:r.value)&&void 0!==t?t:e.props.value,onChange:e.handleChange})})),ee(z(e),"renderTooltip",(function(t){return e.props.tooltipMsgId&&(0,Y.S$)(e.context.messages,e.props.tooltipMsgId)?a().createElement(v.Z,{placement:"top",overlay:a().createElement(y.Tooltip,{id:"tooltip"},(0,Y.S$)(e.context.messages,e.props.tooltipMsgId))},t):t})),ee(z(e),"handleChange",(function(t){var r=t.target.value;e.setState({value:r}),e.props.onChange({value:r,attribute:e.props.column&&e.props.column.key})})),e}return t=l,(r=[{key:"render",value:function(){var e="header-filter--"+this.props.column.key;return a().createElement("div",{key:e,className:"form-group".concat(this.props.valid?"":" has-error")},this.renderTooltip(this.renderInput()))}}])&&G(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(a().PureComponent);ee(re,"propTypes",{valid:l().bool,disabled:l().bool,onChange:l().func.isRequired,value:l().any,column:l().object,placeholderMsgId:l().string,tooltipMsgId:l().string}),ee(re,"contextTypes",{messages:l().object}),ee(re,"defaultProps",{value:"",valid:!0,onChange:function(){},column:{},placeholderMsgId:"featuregrid.filter.placeholders.default"});const ne=re;function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}function le(e,t){if(t&&("object"===oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ue(e)}function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(e){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ce(e)}function se(e,t,r){return(t=pe(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(e){var t=function(e,t){if("object"!==oe(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==oe(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===oe(t)?t:String(t)}var fe=(0,r(143146).Z)({dateProp:"value",dateTypeProp:"type",setDateProp:"onChange"})($),de=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(i,e);var t,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ce(r);if(n){var o=ce(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return le(this,e)});function i(){var e;ae(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return se(ue(e=o.call.apply(o,[this].concat(r))),"renderInput",(function(){if(!1===e.props.column.filterable)return a().createElement("span",null);var t,r=(0,L.V$)(e.context.locale,e.props.type),n=(0,Y.S$)(e.context.messages,e.props.placeholderMsgId)||"Insert date",o=e.props.intl&&e.props.intl.formatMessage({id:"".concat(e.props.tooltipMsgId)},{format:r})||"Insert date in ".concat(r," format"),i="header-filter-"+e.props.column.key;t=e.props.value&&null===e.props.value.startDate||!e.props.value?null:e.props.value&&e.props.value.startDate||e.props.value;var l=e.props.value?t:null,u=e.props.value&&e.props.value.operator;return a().createElement(fe,{key:i,disabled:e.props.disabled,format:r,placeholder:n,value:l,toolTip:o,operator:u,type:e.props.type,time:"date-time"===e.props.type||"time"===e.props.type,calendar:"date-time"===e.props.type||"date"===e.props.type,onChange:function(t,r){return e.handleChange(t,r)}})})),se(ue(e),"handleChange",(function(t,r){e.props.onChange({value:t,stringValue:r,attribute:e.props.column&&e.props.column.name})})),e}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(ne);se(de,"propTypes",{type:l().string,disabled:l().bool,onChange:l().func,intl:u.intlShape}),se(de,"contextTypes",{messages:l().object,locale:l().string}),se(de,"defaultProps",{value:null,type:"date-time",column:{},placeholderMsgId:"featuregrid.filter.placeholders.default",onChange:function(){}});const ye=(0,n.getContext)({intl:u.intlShape})(de),be=(0,n.compose)((0,n.defaultProps)({onValueChange:function(){},value:null}),(0,n.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.value,n=t.attribute,o=t.stringValue,a=/\s*(!==|!=|<>|<=|>=|===|==|=|<|>)?(.*)/.exec(o),i=a[1],l=a[1]||"=";"!=="===i|"!="===i?l="<>":"==="===i|"=="===i&&(l="="),e.onValueChange(r),e.onChange({value:{startDate:r,operator:i},operator:l,type:e.type,attribute:n})}}}),(0,n.defaultProps)({placeholderMsgId:"featuregrid.filter.placeholders.date",tooltipMsgId:"featuregrid.filter.tooltips.date"}))(ye),me=(0,n.compose)((0,n.defaultProps)({onValueChange:function(){}}),(0,n.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.value,n=t.attribute;e.onValueChange(r),e.onChange({value:r,operator:"=",type:e.type,attribute:n})}}}))(ne);var ve=r(805346);const he=function(e){var t=e.value,r=e.filterEnabled,n=void 0!==r&&r,o=e.filterDeactivated,i=void 0!==o&&o,l=e.column,u=void 0===l?{}:l,c=e.tooltipPlace,s=void 0===c?"top":c,p=e.tooltipDisabled,f=void 0===p?"featuregrid.filter.tooltips.geometry.disabled":p,d=e.tooltipEnabled,b=void 0===d?"featuregrid.filter.tooltips.geometry.enabled":d,m=e.tooltipApplied,h=void 0===m?"featuregrid.filter.tooltips.geometry.applied":m,g=e.onChange,w=void 0===g?function(){}:g,O=i?void 0:n&&t?h:n&&!t?b:f,P=a().createElement("div",{className:"featuregrid-geometry-filter".concat(n?" filter-enabled":"").concat(i?" filter-deactivated":""),onClick:i?function(){}:function(){w({enabled:!n,type:"geometry",attribute:u.geometryPropName})}},a().createElement(y.Glyphicon,{glyph:t?"remove-sign":"map-marker"}));return O?a().createElement(v.Z,{placement:s,overlay:a().createElement(y.Tooltip,{id:"gofull-tooltip"},a().createElement(ve.Z,{msgId:O}))},P):P};var ge=r(92742),we=r.n(ge),Oe=r(406557),Pe=r.n(Oe),Se=r(196958),je=/\,/;const Ce=(0,n.compose)((0,n.defaultProps)({onValueChange:function(){}}),(0,n.withState)("valid","setValid",!0),(0,n.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.value,n=t.attribute;if(e.onValueChange(r),je.exec(r))if(/,\s*$/.exec(r))e.setValid(!1);else{var o=(null==r?void 0:r.split(",").filter(Pe()))||[],a=o.reduce((function(e,t){var r=(0,Se.Cf)(t).newVal;return e&&!(isNaN(r)&&""!==we()(t))}),!0);e.setValid(a),a&&e.onChange({value:r,rawValue:r,operator:"=",type:"number",attribute:n})}else{var i=(0,Se.Cf)(r,"number"),l=i.operator,u=i.newVal;isNaN(u)&&""!==we()(r)?e.setValid(!1):e.setValid(!0),e.onChange({value:isNaN(u)?void 0:u,rawValue:r,operator:l,type:"number",attribute:n})}}}}),(0,n.defaultProps)({placeholderMsgId:"featuregrid.filter.placeholders.number",tooltipMsgId:"featuregrid.filter.tooltips.number"}))(ne),_e=(0,n.compose)((0,n.defaultProps)({onValueChange:function(){},placeholderMsgId:"featuregrid.filter.placeholders.string"}),(0,n.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.value,n=t.attribute;e.onValueChange(r),e.onChange({rawValue:r,value:we()(r)?we()(r):void 0,operator:"ilike",type:"string",attribute:n})}}}))(ne);var Te={defaultFilter:function(e){return(0,n.withProps)((function(){return{type:e}}))(me)},string:function(){return _e},number:function(){return Ce},int:function(){return Ce},date:function(){return(0,n.withProps)((function(){return{type:"date"}}))(be)},time:function(){return(0,n.withProps)((function(){return{type:"time"}}))(be)},"date-time":function(){return(0,n.withProps)((function(){return{type:"date-time"}}))(be)},geometry:function(){return he}},Ee=function(e,t){return Te[e]?Te[e](e,t):Te.defaultFilter(e,t)}},965539:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(124852),o=r.n(n);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(e){var t=e.id,r=e.children,n=e.header,a=e.footer,i=e.columns,u=e.height,c=e.style,s=void 0===c?{}:c,p=e.className,f=e.bodyClassName,d=void 0===f?"ms2-border-layout-body":f;return o().createElement("div",{id:t,className:p,style:l({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},n,o().createElement("div",{className:d,style:{display:"flex",flex:1,overflowY:"auto"}},o().createElement("main",{className:"ms2-border-layout-content",style:{flex:1,overflowX:"hidden"}},u?o().createElement("div",{style:{height:u}},r):r),u?o().createElement("div",{style:{height:u}},i):i),a)}},143146:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(867076),o=r(747037),a=r.n(o),i=r(647960),l=r.n(i),u=r(730381),c=r.n(u),s=r(55237);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dateTypeProp,r=void 0===t?"type":t,o=e.dateProp,i=void 0===o?"date":o,u=e.setDateProp,p=void 0===u?"onSetDate":u;return(0,n.compose)((0,n.withPropsOnChange)([i],(function(e){var t,n=e[i],o=e[r],u=e.useUTCOffset,p=void 0===u||u,d=n,y="1970-01-01",b="00:00:00";!l()(n)&&a()(n)&&("time"===o&&(d=new Date("".concat(y,"T").concat(n))),"date"===o&&(-1!==n.indexOf("Z")&&(d=n.substr(0,n.length-1)),d=new Date("".concat(d,"T").concat(b,"Z"))),"date-time"===o&&(d=new Date(n)));var m=d;if(d){switch(o){case"time":b=(0,s.kN)(d);break;case"date":y=(0,s.oD)(d);break;default:b=(0,s.kN)(d),y=(0,s.oD)(d)}(m=new Date("".concat(y,"T").concat(b,"Z"))).setUTCMilliseconds(d.getUTCMilliseconds());var v=p?(0,s.$4)(m):0;m=new Date(m.getTime()+v)}return f(t={},i,m),f(t,"defaultCurrentDate","date-time"===o?c()().startOf("day").toDate():void 0),t})),(0,n.withHandlers)(f({},p,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e[p],n=e[r],o=e.useUTCOffset,a=void 0===o||o;return function(e,r){if(e){var o=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())),i=a?(0,s.$4)(e):0,l=new Date(o.getTime()-i);switch(n){case"time":l="".concat((0,s.kN)(l),"Z");break;case"date":l="".concat((0,s.oD)(l),"Z")}t(l,r)}else t(null)}}))))}}}]);