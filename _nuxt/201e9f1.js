(window.webpackJsonp=window.webpackJsonp||[]).push([[29,26,27,28,31],{450:function(t,e,n){"use strict";n(11),n(6),n(12),n(69),n(35),n(297),n(207),n(70),n(89);var o=n(0);var r,c=n(71);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},454:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0a7c93dc",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("54e1df61",content,!0,{sourceMap:!1})},457:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5a544bcc",content,!0,{sourceMap:!1})},458:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5cd2921c",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(454)},466:function(t,e,n){var o=n(18)(!1);o.push([t.i,".v-list-item[data-v-dbfa1dfa][data-v-008231d6]{min-height:none;height:auto}.v-list-item[data-v-008231d6]{min-height:none}.v-sheet[data-v-008231d6]{max-width:1000px;margin:auto}.v-application a[data-v-008231d6]{color:#000;-webkit-text-decoration-color:#676c72;text-decoration-color:#676c72}.v-chip.v-size--default[data-v-008231d6]{height:1.8em}",""]),t.exports=o},467:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{items:[{date:"2022.08.23",title:"Renewal of our homepage.",subtitle:"New website is now published!",color:"secondary",link:""},{date:"2022.07.08",title:"Dataset (v0.2.1) is released!",subtitle:"",color:"secondary",link:"release/v0-2-1"}]}}},r=(n(465),n(60)),c=n(77),l=n.n(c),d=n(444),v=n(442),f=n(197),m=n(127),h=n(200),x=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-item-group",[t._l(t.items,(function(e,o){return[n("v-list-item",{key:e.title},[n("v-row",{staticClass:"d-flex align-center"},[n("v-col",{staticClass:"pa-0 text-subtitle-2 text-sm-center",attrs:{cols:"12",md:"3",sm:"3"}},[t._v("\n            "+t._s(e.date)+"\n          ")]),t._v(" "),n("v-col",{staticClass:"pa-0 text-sm-subtitle-2 text-caption",attrs:{cols:"12",md:"8",sm:"8"}},[n("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:e.link}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)],1)],1),t._v(" "),o<t.items.length?n("v-divider",{key:o}):t._e()]}))],2)],1)}),[],!1,null,"008231d6",null);e.default=component.exports;l()(component,{VCol:d.a,VDivider:v.a,VList:f.a,VListItem:m.a,VListItemGroup:h.a,VRow:x.a})},468:function(t,e,n){t.exports=n.p+"img/OpenPackDataset-black.1dd96e5.png"},469:function(t,e,n){"use strict";n(456)},470:function(t,e,n){var o=n(18)(!1);o.push([t.i,"#top-key-visual[data-v-68ca52c4]{width:100%;display:flex;justify-content:center}#top-key-visual div[data-v-68ca52c4]{font-size:10rem;display:flex;justify-content:center;max-width:80vw}",""]),t.exports=o},471:function(t,e,n){"use strict";n(457)},472:function(t,e,n){var o=n(18)(!1);o.push([t.i,".title[data-v-ef21e2aa]{color:#676c72}",""]),t.exports=o},473:function(t,e,n){"use strict";n(458)},474:function(t,e,n){var o=n(18)(!1);o.push([t.i,".title[data-v-211f16bd]{color:#676c72}",""]),t.exports=o},484:function(t,e,n){"use strict";n.r(e);var o={name:"KeyVisual",data:function(){return{imgLogo:n(468)}}},r=(n(469),n(60)),c=n(77),l=n.n(c),d=n(166),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-0 py-6",attrs:{id:"top-key-visual"}},[n("div",{staticClass:"d-block"},[n("v-img",{staticClass:"mr-3",attrs:{src:t.imgLogo,alt:"OpenPack",contain:""}})],1)])}),[],!1,null,"68ca52c4",null);e.default=component.exports;l()(component,{VImg:d.a})},485:function(t,e,n){"use strict";n.r(e);var o={name:"DatasetSec",data:function(){return{urlZenodo:"https://doi.org/10.5281/zenodo.5909086",newestVersion:"v0-2-1"}},computed:{getReleaseNotePath:function(){return"release/"+this.newestVersion}}},r=(n(471),n(60)),c=n(77),l=n.n(c),d=n(296),v=n(444),f=n(450),m=n(196),h=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h3",{staticClass:"title text-h5 text-md-h4 font-weight-black"},[t._v("\n        Download Dataset\n      ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("nuxt-link",{attrs:{to:t.getReleaseNotePath}},[n("v-btn",{staticClass:"py-1",attrs:{block:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none"},[n("span",{staticClass:"text-lowercase"},[t._v("v0.2.1 ")]),t._v(" "),n("small",[t._v("(2022-07-08)")])])])],1)],1),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("a",{attrs:{href:t.urlZenodo,target:"_blank"}},[n("v-btn",{staticClass:"py-2",attrs:{block:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none text-lowercase"},[t._v(" zenodo ")]),t._v(" "),n("v-icon",{staticClass:"text-subtitle-1 mx-1"},[t._v("mdi-open-in-new")])],1)],1)]),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("v-btn",{staticClass:"py-2",attrs:{block:"",disabled:"",color:"op-brown darken-1 white--text text-h6"}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n          Google Drive\n        ")])])],1)],1)],1)}),[],!1,null,"ef21e2aa",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VIcon:m.a,VRow:h.a})},486:function(t,e,n){"use strict";n.r(e);var o={name:"NewsSec"},r=(n(473),n(60)),c=n(77),l=n.n(c),d=n(444),v=n(450),f=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center mb-5",attrs:{cols:"12"}},[n("h3",{staticClass:"title text-h5 text-md-h4 font-weight-black"},[t._v("NEWS")])])],1),t._v(" "),n("NewsLatestNews")],1)}),[],!1,null,"211f16bd",null);e.default=component.exports;l()(component,{NewsLatestNews:n(467).default}),l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})},506:function(t,e,n){"use strict";n.r(e);var o={name:"TopSection"},r=n(60),c=n(77),l=n.n(c),d=n(444),v=n(450),f=n(446),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"my-0 py-0 op-brown lighten-2"},[n("LpTopKeyVisual"),t._v(" "),n("section",{staticClass:"gnt-sec-3 mt-0"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("LpTopDatasetSec")],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("LpTopNewsSec")],1)],1)],1)],1)],1)}),[],!1,null,"8640f956",null);e.default=component.exports;l()(component,{LpTopKeyVisual:n(484).default,LpTopDatasetSec:n(485).default,LpTopNewsSec:n(486).default}),l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})}}]);