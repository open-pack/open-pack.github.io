(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{450:function(t,e,n){"use strict";n(11),n(6),n(12),n(69),n(35),n(297),n(207),n(70),n(89);var o=n(0);var r,c=n(71);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},463:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("616beb63",content,!0,{sourceMap:!1})},475:function(t,e,n){"use strict";n(463)},476:function(t,e,n){var o=n(18)(!1);o.push([t.i,".title[data-v-508cdee4]{color:#676c72}",""]),t.exports=o},489:function(t,e,n){"use strict";n.r(e);var o={name:"DatasetSec",data:function(){return{urlZenodo:"https://doi.org/10.5281/zenodo.5909086",newestVersion:"v0-2-1"}},computed:{getReleaseNotePath:function(){return"release/"+this.newestVersion}}},r=(n(475),n(60)),c=n(77),l=n.n(c),d=n(208),v=n(444),f=n(450),h=n(196),x=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center pb-0",attrs:{cols:"12"}},[n("h3",{staticClass:"title text-h5 text-md-h4 font-weight-black"},[t._v("\n        Download Dataset\n      ")]),t._v(" "),n("div",{staticClass:"text-caption"},[t._v("\n        The full dataset will be made available after the OpenPack Challenge.\n      ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("nuxt-link",{attrs:{to:t.getReleaseNotePath}},[n("v-btn",{staticClass:"py-1",attrs:{block:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none"},[n("span",{staticClass:"text-lowercase"},[t._v("v0.2.1 ")]),t._v(" "),n("small",[t._v("(2022-07-08)")])])])],1)],1),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("a",{attrs:{href:t.urlZenodo,target:"_blank"}},[n("v-btn",{staticClass:"py-2",attrs:{block:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none text-lowercase"},[t._v(" zenodo ")]),t._v(" "),n("v-icon",{staticClass:"text-subtitle-1 mx-1"},[t._v("mdi-open-in-new")])],1)],1)]),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("v-btn",{staticClass:"py-2",attrs:{block:"",disabled:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n          Google Drive\n        ")])])],1)],1)],1)}),[],!1,null,"508cdee4",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VIcon:h.a,VRow:x.a})}}]);