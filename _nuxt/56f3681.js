(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{467:function(t,e,n){"use strict";n(11),n(6),n(12),n(70),n(35),n(313),n(213),n(71),n(90);var o=n(0);var r,c=n(72);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},523:function(t,e,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("30d2bc17",content,!0,{sourceMap:!1})},556:function(t,e,n){"use strict";n(523)},557:function(t,e,n){var o=n(18)(!1);o.push([t.i,".title[data-v-6eb2b435]{color:#676c72}",""]),t.exports=o},584:function(t,e,n){"use strict";n.r(e);var o={name:"DatasetSec",data:function(){return{cardElevation:0}}},r=(n(556),n(61)),c=n(78),l=n.n(c),d=n(214),v=n(461),h=n(467),m=n(198),f=n(463),w=n(55),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-left",attrs:{cols:"12"}},[n("h2",[t._v("Characterisitcs")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-child align-stretch"},[n("v-col",{staticClass:"d-flex pb-1 pb-md-3 pr-md-1",attrs:{cols:"12",md:"3"}},[n("v-sheet",{staticClass:"d-flex align-center justify-center",attrs:{color:"op-brown darken-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("div",{staticClass:"white--text text-h2 font-weight-black"},[t._v("53H+")])])],1),t._v(" "),n("v-col",{staticClass:"d-flex pt-1 pt-md-3 pl-md-1",attrs:{cols:"12",md:"9"}},[n("v-sheet",{attrs:{color:"op-brown lighten-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Large Scale activity dataset in Industrial Domain")]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n              OpenPack is the first large-scale dataset for packaging work\n              recognition. 16 distinct subjects packed 3956 items in 2048\n              shipping boxes in total and the total recording length is more\n              than 53 hours. The work operations and actions were annotated by\n              the professional annotators. The total number of annotated work\n              operations and actions are 20,129 and 52,529 respectively.\n            ")]),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-md-end flex-wrap"},[n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/annotation/activity-class.md"}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"op-brown darken-1"}},[n("v-icon",[t._v("mdi-arrow-right-thick")]),t._v("\n                  Activity Classes\n                ")],1)],1),t._v(" "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/subjects.md"}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"op-brown darken-1"}},[n("v-icon",[t._v("mdi-arrow-right-thick")]),t._v("\n                  Subjects\n                ")],1)],1),t._v(" "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/sessions.md"}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"op-brown darken-1"}},[n("v-icon",[t._v("mdi-arrow-right-thick")]),t._v("\n                  Scenario & Sessions\n                ")],1)],1)])])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-child align-stretch"},[n("v-col",{staticClass:"d-flex pb-1 pb-md-3 pr-md-1",attrs:{cols:"12",md:"3"}},[n("v-sheet",{staticClass:"d-flex align-center justify-center",attrs:{color:"op-brown darken-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("div",{staticClass:"white--text text-h2 text-center font-weight-black"},[t._v("\n            9 "),n("br"),t._v("+ IoT\n          ")])])],1),t._v(" "),n("v-col",{staticClass:"d-flex pt-1 pt-md-3 pl-md-1",attrs:{cols:"12",md:"9"}},[n("v-sheet",{attrs:{color:"op-brown lighten-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Rich Modalities - Vision + Wearable + IoT Device")]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n              OpenPack provides 9 data modalities including acceleration,\n              gyroscope, quaternion, blood volume pulse (BVP), and\n              electrodermal activity (EDA) data, as well as keypoints, a LiDAR\n              point cloud, and depth images. As for the wearable sensor\n              modality, we collected data with 4 IMUs and 2 E4 sensors. For\n              the vision modality, 2 depth cameras (front view and top view)\n              and 1 LiDAR sensor were installed to our environment. In\n              addition, we collected data from IoT devices which are sparse\n              but have strong relation with specific activity classes.\n            ")]),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-md-end"},[n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-dataset/tree/main/docs/data-stream"}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"op-brown darken-1"}},[n("v-icon",[t._v("mdi-arrow-right-thick")]),t._v("\n                  Sensor List\n                ")],1)],1)])])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-child align-stretch"},[n("v-col",{staticClass:"d-flex pb-1 pb-md-3 pr-md-1",attrs:{cols:"12",md:"3"}},[n("v-sheet",{staticClass:"d-flex align-center justify-center",attrs:{color:"op-brown darken-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("div",{staticClass:"white--text text-h2 text-center font-weight-black"},[t._v("\n            META\n          ")])])],1),t._v(" "),n("v-col",{staticClass:"d-flex pt-1 pt-md-3 pl-md-1",attrs:{cols:"12",md:"9"}},[n("v-sheet",{attrs:{color:"op-brown lighten-1",rounded:"",elevation:t.cardElevation,width:"100%"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Rich Meta Data")]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n              OpenPack also provides a rich set of metadata such as subject’s\n              experience in packaging work and physical traits of subjects,\n              enabling designs of various research tasks such as assessment of\n              worker’s performance in addition to basic work activity\n              recognition. In addition, we made a list of irregular activities\n              which can be used for developing normal detection technologies.\n            ")]),t._v(" "),n("div",{staticClass:"d-flex justify-center justify-md-end"},[n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/metadata.md"}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"op-brown darken-1"}},[n("v-icon",[t._v("mdi-arrow-right-thick")]),t._v("\n                  Meta Data List\n                ")],1)],1)])])],1)],1)],1)],1)],1)}),[],!1,null,"6eb2b435",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:h.a,VIcon:m.a,VRow:f.a,VSheet:w.a})}}]);