(window.webpackJsonp=window.webpackJsonp||[]).push([[32,45,48],{939:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,default:""}}},n=i(15),l=Object(n.a)(s,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=l.exports},945:function(t,e,i){"use strict";i.r(e);var s=i(946),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},l=i(15),a=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),t.ingress?e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):e("h4",{staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic"},[t._t("ingress")],2),t._v(" "),t.info?e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):e("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4"},[t._t("info")],2)])}),[],!1,null,null,null);e.default=a.exports},995:function(t,e,i){"use strict";i.r(e);var s={props:{topLevelFiles:{type:Object,required:!0},subSectionsContent:{type:Object,default:()=>{}}},methods:{createCardId:(t,e)=>"".concat(t,"_c_").concat(e)}},n=i(15),l=i(19),a=i.n(l),o=i(923),r=i(924),c=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",t._l(t.topLevelFiles.markdownFiles,(function(i){return e("section",{key:i.id,attrs:{id:i.id}},[!i.subSection&&(i.title||i.ingress||i.info)?e("v-row",{staticClass:"pt-16 px-8 pb-8"},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:i.title,ingress:i.ingress,info:i.info}})],1)],1):t._e(),t._v(" "),i.subSection&&i.title?e("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:"".concat(i.id,"_title"),justify:"center"}},[e("UiMinorTitle",{attrs:{title:i.title}})],1):t._e(),t._v(" "),i.subSection?e("v-row",{staticClass:"pa-0 pb-16 px-4",attrs:{"fill-height":"",justify:"space-around"}},t._l(t.subSectionsContent[i.id].markdownFiles,(function(s,n){return e("v-col",{key:t.createCardId(i.id,n),attrs:{id:t.createCardId(i.id,n),cols:"auto"}},[t._t("default",null,{subSectionId:i.id,cardId:t.createCardId(i.id,n),card:s,imageAsset:s.img?t.subSectionsContent[i.id].imageAssetObjects[s.img]:null})],2)})),1):t._e()],1)})),0)}),[],!1,null,null,null);e.default=c.exports;a()(c,{UiMainTitle:i(945).default,UiMinorTitle:i(939).default}),a()(c,{VCol:o.a,VRow:r.a})}}]);