(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{467:function(t,e,o){"use strict";o(11),o(6),o(12),o(70),o(35),o(313),o(213),o(71),o(90);var n=o(0);var r,d=o(72);e.a=(r="container",n.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var o=e.props,data=e.data,n=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,n=e.props,data=e.data,r=e.children,c=data.attrs;return c&&(data.attrs={},o=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(o||[])}),r)}})},525:function(t,e,o){var content=o(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("3ac17da4",content,!0,{sourceMap:!1})},561:function(t,e,o){"use strict";o(525)},562:function(t,e,o){var n=o(18)(!1);n.push([t.i,".scroll-x-topbar[data-v-563866f0]{overflow-x:scroll}.scroll-x-content[data-v-563866f0]{overflow-y:hidden;overflow-x:scroll;width:500px}.inner-topbar[data-v-563866f0]{width:1000px;height:1px}.inner-content[data-v-563866f0]{width:1000px;background-color:#87cefa}",""]),t.exports=n},590:function(t,e,o){"use strict";o.r(e);var n={name:"ChallengeRegistrationSection",data:function(){return{googleGroup:{url:"https://groups.google.com/g/openpack"},twitter:{url:"https://twitter.com/OpenPackDataset"},github:{url:"https://github.com/open-pack/openpack-dataset"}}}},r=(o(561),o(61)),d=o(78),c=o.n(d),l=o(461),v=o(467),h=o(198),f=o(463),_=o(55),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gnt-sec-3 op-brown lighten-2 py-6",attrs:{id:"download"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h2",{staticClass:"font-weight-bold my-3"},[t._v("\n            Download\n            "),o("v-icon",[t._v("mdi-download")])],1),t._v(" "),o("p",[t._v("\n            OpenPack dataset is available in 3 repositories. Different\n            repositories provide different sets of data with different licenses.\n            Please go to\n            "),o("a",{attrs:{rel:"license",href:"https://github.com/open-pack/openpack-dataset",target:"_blank"}},[t._v("openpack-dataset @GitHub")]),t._v("\n            and follow the instructions.\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"font-weight-bold"},[t._v("Sample Data")]),t._v(" "),o("p",[t._v("\n            You can see samples of CSVs and images without downloading them.\n            Sample data (U0209 - Session 5) is available on\n            "),o("a",{attrs:{href:"https://github.com/open-pack/openpack-dataset/tree/main/data/openpack",target:"_blank"}},[t._v("GitHub (openpack-dataset/data/openpack)")]),t._v(".\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"font-weight-bold"},[t._v("Preprocessed Dataset")]),t._v(" "),o("p",[t._v("\n            Sensors used in the OpenPack dataset have different sampling rates.\n            Therefore, each sensor is stored in a separate file. When you use\n            them, you have to combine them using timestamps assosiated with each\n            record. But we understand that it's not easy for the new users.\n          ")]),t._v(" "),o("p",[t._v("\n            Therefore, we prepared pre-processed dataset for the quick trial.\n            IMU data from 4 sensors and work operation labels are combined into\n            one CSV file. This preprocessd dataset is available on\n            "),o("a",{attrs:{href:"https://zenodo.org/records/8145223"}},[t._v("zenodo (preprocessed-IMU-with-operation-labels.zip)")]),t._v("\n            ("),o("a",{staticClass:"grey--text text--darken-3",attrs:{href:"https://zenodo.org/records/8145223/files/preprocessed-IMU-with-operation-labels.zip?download=1"}},[t._v("Click to Download [515MB]")]),t._v(").\n          ")]),t._v(" "),o("p",[t._v("\n            For more details, see\n            "),o("a",{attrs:{href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/preprocessed.md",target:"_blank"}},[t._v("data-stream/preprocessed")]),t._v(".\n          ")])]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"font-weight-bold"},[t._v("Full Dataset")]),t._v(" "),o("p",[t._v("\n            See\n            "),o("a",{attrs:{rel:"license",href:"https://github.com/open-pack/openpack-dataset/blob/main/docs/DOWNLOAD.md",target:"_blank"}},[t._v("DOWNLOAD.md (@GitHub:openpack-dataset)")]),t._v(".\n          ")]),t._v(" "),o("h4",{staticClass:"op-brown--text"},[t._v("Download Commands")]),t._v(" "),o("p",[t._v("\n            Below is a command to download data from\n            "),o("a",{attrs:{href:"https://zenodo.org/records/8145223",target:"_blank"}},[t._v("zenodo")]),t._v(".\n          ")]),t._v(" "),o("v-sheet",{staticClass:"pa-3 scroll-x-topbar",attrs:{color:"op-brown lighten-1","max-width":"100%"}},[o("span",{staticClass:"mb-0"},[t._v("# Get a download script.")]),t._v(" "),o("pre",{staticClass:"mb-3 font-weight-bold"},[t._v("$ curl -o download_from_zenodo.sh \\\n  https://raw.githubusercontent.com/open-pack/openpack-dataset/main/release/v1.0.0/download_from_zenodo.sh ")]),t._v(" "),o("span",{staticClass:"mt-3"},[t._v("# Create dataset root directory.")]),t._v(" "),o("pre",{staticClass:"mb-3 font-weight-bold"},[t._v("$ export DATASET_ROOTDIR_PATH=./data/datasets\n$ mkdir -p $DATASET_ROOTDIR_PATH")]),t._v(" "),o("span",{staticClass:"mt-3"},[t._v("# Download the dataset.")]),t._v(" "),o("pre",{staticClass:"mb-0 font-weight-bold"},[t._v("$ bash download_from_zenodo.sh $DATASET_ROOTDIR_PATH")])])],1)],1)],1)],1)}),[],!1,null,"563866f0",null);e.default=component.exports;c()(component,{VCol:l.a,VContainer:v.a,VIcon:h.a,VRow:f.a,VSheet:_.a})}}]);