(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{450:function(t,e,n){"use strict";n(11),n(6),n(12),n(69),n(35),n(297),n(207),n(70),n(89);var r=n(0);var o,c=n(71);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},529:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(9),n(61),n(96),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=r.slug,e.next=4,n("release/"+o).fetch();case 4:return c=e.sent,e.abrupt("return",{page:c,slug:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"og:url",property:"og:url",content:"https://open-pack.github.io/release/"+this.slug+"/"}]}}}),c=n(60),d=n(77),l=n.n(d),f=n(450),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("section",{staticClass:"gnt-sec-1"},[n("article",{staticClass:"nuxt-content"},[n("h1",{staticClass:"text-h3 font-weight-bold"},[t._v(t._s(t.page.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)])])}),[],!1,null,"60850b70",null);e.default=component.exports;l()(component,{VContainer:f.a})}}]);