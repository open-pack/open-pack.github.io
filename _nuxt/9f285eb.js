(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(t,n,e){"use strict";e(11),e(6),e(12),e(70),e(35),e(310),e(212),e(71),e(90);var o=e(0);var r,c=e(72);n.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,o=n.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,o=n.props,data=n.data,r=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(e||[])}),r)}})},526:function(t,n,e){"use strict";e.r(n);var o={name:"ChallengeTaskTaskDefLink",data:function(){return{}}},r=e(61),c=e(78),l=e.n(c),d=e(217),v=e(458),f=e(464),h=e(198),m=e(460),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"gnt-sec-3"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h2",[t._v("Task (Technical Details)")]),t._v(" "),e("p",[t._v("\n          Plese visit the following page for more technical details such as\n          task definition, evaluation procedures, and rules.\n        ")]),t._v(" "),e("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-toolkit/blob/main/docs/OPENPACK_CHALLENGE",target:"_blank"}},[e("v-btn",{staticClass:"d-inline-block d-md-none my-2",attrs:{block:"",color:"op-brown darken-1 white--text text-button"}},[e("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n              Technical Details\n              "),e("v-icon",[t._v("mdi-github")]),t._v(" "),e("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),e("v-btn",{staticClass:"d-none d-md-inline-block my-2",attrs:{color:"op-brown darken-1 white--text text-button"}},[e("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n              Technical Details\n              "),e("v-icon",[t._v("mdi-github")]),t._v(" "),e("v-icon",[t._v("mdi-open-in-new")])],1)])],1)])],1)],1)],1)}),[],!1,null,"3c8ddf7f",null);n.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VIcon:h.a,VRow:m.a})}}]);