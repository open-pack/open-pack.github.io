(window.webpackJsonp=window.webpackJsonp||[]).push([[30,29],{467:function(t,e,n){"use strict";n(11),n(6),n(12),n(70),n(35),n(313),n(213),n(71),n(90);var r=n(0);var o,c=n(72);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},547:function(t,e,n){"use strict";n.r(e);n(29);var r={name:"GalleryTopContents",data:function(){return{lists:[{name:"Activity - Operations",link:"gellery-activity-openpackoperationlist"},{name:"Recording Sessions",link:"gellery-subject-recording-session-section"},{name:"Sensors",link:"gallery-modality-section"}]}},methods:{sendToGoogleAnalytics:function(t){switch(t.name){case"Activity - Operations":this.$gtag("event","click__gallery__contents__activity_operations",{event_name:"click"});break;case"Sensors":this.$gtag("event","click__gallery__contents__sensors",{event_name:"click"});break;case"Recording Sessions":this.$gtag("event","click__gallery__contents__sessions",{event_name:"click"})}}}},o=n(61),c=n(78),l=n.n(c),d=n(217),v=n(461),f=n(463),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-5"},[n("v-row",[n("v-col",{staticClass:"d-flex justify-center pb-0",attrs:{cols:"12"}},[n("h3",{staticClass:"op-brown--text lighten-1"},[t._v("Contents")])]),t._v(" "),n("v-col",{staticClass:"d-flex justify-center pt-0",attrs:{cols:"12"}},t._l(t.lists,(function(e,r){return n("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+e.link,expression:"`#${list.link}`"}],key:r,staticClass:"ma-1 text-capitalize",attrs:{outlined:"",color:"op-brown"},on:{click:function(n){return t.sendToGoogleAnalytics(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)],1)],1)}),[],!1,null,"595e19f8",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VRow:f.a})},585:function(t,e,n){"use strict";n.r(e);var r={name:"GalleryTopSection"},o=n(61),c=n(78),l=n.n(c),d=n(461),v=n(467),f=n(463),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-0 op-brown lighten-2 my-0 py-0"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-h3 text-center font-weight-bold my-3"},[t._v("Gallery")])]),t._v(" "),n("GalleryTopContents")],1)],1)],1)}),[],!1,null,"59051abe",null);e.default=component.exports;l()(component,{GalleryTopContents:n(547).default}),l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})}}]);