(window.webpackJsonp=window.webpackJsonp||[]).push([[64,41,51,54],{1088:function(e,t,a){"use strict";a.r(t);var s={data(){return{shown:!1,playmusic(){new Audio("https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream").play()},pageHeader:"Presenting",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:()=>({title:"Presenting",meta:[]})},r=a(19),n=a(25),i=a.n(n),l=a(225),o=a(876),c=a(877),g=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SectionsPageContainer",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.shown,expression:"!shown"}]},[a("v-col",{staticClass:"pa-8"},[a("v-btn",{staticClass:"pa-20",style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"primary",absolute:""},on:{click:function(t){e.shown=!e.shown,e.playmusic()}}},[e._v("\n        Click me for a surprise\n      ")])],1)],1),e._v(" "),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[a("UiSmartImg",{attrs:{"max-height":"512","max-width":"512","image-asset":e.$getImageAssetObject("images","team","sveinung-gundersen-big.png")}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[a("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[a("h2",{staticClass:"text-h3 text-center font-weight-black"},[e._v("S. Gundersen")])])])],1),e._v(" "),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"flex-row-reverse",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[a("UiSmartImg",{attrs:{"max-height":"405","max-width":"612","image-asset":e.$getImageAssetObject("images","team","fairtracks-team.png")}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[a("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[a("h2",{staticClass:"text-h3 text-center font-weight-black"},[e._v("\n          ...and the FAIRtracks team\n        ")])])])],1)],1)}),[],!1,null,null,null);t.default=g.exports;i()(g,{UiSmartImg:a(224).default,SectionsPageContainer:a(898).default}),i()(g,{VBtn:l.a,VCol:o.a,VRow:c.a})},887:function(e,t,a){var s=a(893);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},888:function(e,t,a){var s=a(895);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(11).default)("112783d2",s,!0,{sourceMap:!1})},891:function(e,t,a){"use strict";a.r(t);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},r=(a(894),a(19)),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,height:e.height,width:e.width,"min-height":e.minHeight,alt:e.alt,behind:""},scopedSlots:e._u([{key:"svgImgComponent",fn:function(t){var s=t.imageAsset,r=t.altText;return[a("div",{staticClass:"lazyload fill-height center-background",class:e.contain?"contain-background":"cover-background",attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto",alt:r}})]}},{key:"imgComponent",fn:function(t){var s=t.imageAsset,r=t.altText,n=t.styleText;return[a("div",{staticClass:"lazyload fill-height attach-classes center-background",class:e.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] | "+s.responsiveImage.srcSet,"data-sizes":"auto",alt:r}})]}}])})}),[],!1,null,"068c8c62",null);t.default=n.exports;installComponents(n,{UiSmartImgFileTypesWrapper:a(342).default})},892:function(e,t,a){"use strict";a(887)},893:function(e,t,a){var s=a(10)(!1);s.push([e.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),e.exports=s},894:function(e,t,a){"use strict";a(888)},895:function(e,t,a){var s=a(10)(!1);s.push([e.i,".center-background[data-v-068c8c62]{background-position:50%}.cover-background[data-v-068c8c62]{background-size:cover}.contain-background[data-v-068c8c62]{background-size:contain;background-color:#fff}",""]),e.exports=s},896:function(e,t,a){"use strict";a.r(t);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},r=(a(892),a(19)),n=a(25),i=a.n(n),l=a(876),o=a(202),c=a(192),g=a(877),d=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",{staticClass:"gradient-fill-header",attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(e,t){return a("v-col",{key:t,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header",staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":e,contain:""}})],1)],1)],1)})),1)],1),e._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),e._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n      "+e._s(e.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);t.default=d.exports;i()(d,{UiSmartBackgroundImg:a(891).default}),i()(d,{VCol:l.a,VOverlay:o.a,VResponsive:c.a,VRow:g.a})},898:function(e,t,a){"use strict";a.r(t);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:()=>[]},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},r=a(19),n=a(25),i=a.n(n),l=a(886),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{class:e.greyBackground?e.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:e.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:e.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),a("v-container",{class:e.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=o.exports;i()(o,{UiPageHeaderBanner:a(896).default}),i()(o,{VContainer:l.a})}}]);