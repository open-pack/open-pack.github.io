(window.webpackJsonp=window.webpackJsonp||[]).push([[22,30],{452:function(e,t,r){"use strict";r.r(t);var l={props:{imgSrc:{type:String,default:"https://cdn.vuetifyjs.com/images/john.jpg"},name:{type:String,default:"Open Pack"},role:{type:String,default:"Role"},bgcolor:{type:String,default:"#ffffff"},imgSize:{type:String,default:"5rem"},link:{type:String,default:null}}},n=r(60),c=r(77),m=r.n(c),o=r(199),f=r(166),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[e.imgSrc?r("div",[r("v-avatar",{attrs:{size:e.imgSize}},[r("v-img",{attrs:{src:e.imgSrc}})],1)],1):r("div",[r("v-avatar",{attrs:{color:"op-brown",size:e.imgSize}},[r("span",{staticClass:"white--text text-h4 font-size-black"},[e._v(e._s(e.name[0]))])])],1),e._v(" "),r("p",{attrs:{clss:"mt-3"}},[e.link?[r("a",{staticClass:"black--text",attrs:{href:e.link,target:"_blank"}},[r("strong",[e._v(e._s(e.name))])])]:[r("strong",[e._v(e._s(e.name))])],e._v(" "),r("br"),e._v(" "),r("small",[e._v(e._s(e.role))])],2)])}),[],!1,null,"202ee102",null);t.default=component.exports;m()(component,{VAvatar:o.a,VImg:f.a})},489:function(e,t,r){"use strict";r.r(t);var l=r(97),n={name:"LpTeamMemberList",data:function(){return{members:l.a.members.core,supportMembers:l.a.members.support}}},c=r(60),m=r(77),o=r.n(m),f=r(444),v=r(446),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"mb-6"},[e._v("Members")])])],1),e._v(" "),r("v-row",{staticClass:"d-flex justify-center"},e._l(e.members,(function(e){return r("v-col",{key:e.name,staticClass:"d-flex justify-center",attrs:{cols:"6",md:"4"}},[r("MoleculesMemberCard",{attrs:{"img-src":e.imgSrc,name:e.name,role:e.role,link:e.link,"img-size":"10rem"}})],1)})),1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"mb-6"},[e._v("Special Thanks")])])],1),e._v(" "),r("v-row",{staticClass:"d-flex justify-center"},e._l(e.supportMembers,(function(e){return r("v-col",{key:e.name,staticClass:"d-flex justify-center",attrs:{cols:"4",md:"3"}},[r("MoleculesMemberCard",{attrs:{"img-src":e.imgSrc,name:e.name,role:e.role,"img-size":"5rem"}})],1)})),1)],1)}),[],!1,null,"a0c9bc84",null);t.default=component.exports;o()(component,{MoleculesMemberCard:r(452).default}),o()(component,{VCol:f.a,VRow:v.a})}}]);