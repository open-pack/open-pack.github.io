(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{467:function(t,e,n){"use strict";n(11),n(6),n(12),n(70),n(35),n(313),n(213),n(71),n(90);var o=n(0);var c,r=n(72);e.a=(c="container",o.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var r=data.attrs;if(r){data.attrs={};var l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),c)}})},587:function(t,e,n){"use strict";n.r(e);var o={name:"LpLinkSection",data:function(){return{selectedItem:0,links:[{title:"Data Collection",description:"Dataset Utilities",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection",subsections:[{title:"Subjects",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/subjects.md"},{title:"Recording Sessions",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/sessions.md"}]},{title:"Data Stream",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream",subsections:[{title:"Wearable Sensors",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/wearables.md"},{title:"Vision",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/vision.md"},{title:"IoT Devices",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/iot.md"},{title:"Meta Data",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/metadata.md"},{title:"Preprocessed",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/preprocessed.md"}]}],linksRight:[{title:"Annotation",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/annotation",subsections:[{title:"Activity Class Definition",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/annotation/activity-class.md"}]},{title:"Benchmark",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/benchmark",subsections:[{title:"Data Split",url:"https://github.com/open-pack/openpack-dataset/blob/main/docs/benchmark/data-split.md"}]}]}}},c=n(61),r=n(78),l=n.n(r),d=n(461),m=n(467),h=n(463),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3",attrs:{id:"dataset-docs-toc"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-link-section"}},[t._v("Documentations (Index)")]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("Here are links to the dataset documentations.")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("ul",t._l(t.links,(function(link,i){return n("li",{key:i},[n("a",{attrs:{href:link.url}},[n("strong",[t._v(t._s(link.title))])]),t._v(" "),n("ul",t._l(link.subsections,(function(e,o){return n("li",{key:o},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0)])})),0)]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("ul",t._l(t.linksRight,(function(link,i){return n("li",{key:i},[n("a",{attrs:{href:link.url}},[n("strong",[t._v(t._s(link.title))])]),t._v(" "),n("ul",t._l(link.subsections,(function(e,o){return n("li",{key:o},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0)])})),0)])],1)],1)],1)}),[],!1,null,"7ec316bc",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:m.a,VRow:h.a})}}]);