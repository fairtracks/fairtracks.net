(window.webpackJsonp=window.webpackJsonp||[]).push([[67,30,41,48,51,54],{1035:function(t,e,a){var s=a(1041);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("8ae11210",s,!0,{sourceMap:!1})},1036:function(t,e,a){var s=a(1043);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("112783d2",s,!0,{sourceMap:!1})},1037:function(t,e,a){"use strict";a.r(e);var s=a(1038),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},i=a(25),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=r.exports},1039:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},n=(a(1042),a(25)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var s=e.imageAsset,n=e.altText;return[a("div",{staticClass:"lazyload fill-height center-background",class:t.contain?"contain-background":"cover-background",attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto",alt:n}})]}},{key:"imgComponent",fn:function(e){var s=e.imageAsset,n=e.altText,i=e.styleText;return[a("div",{staticClass:"lazyload fill-height attach-classes center-background",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] | "+s.responsiveImage.srcSet,"data-sizes":"auto",alt:n}})]}}])})}),[],!1,null,"068c8c62",null);e.default=i.exports;installComponents(i,{UiSmartImgFileTypesWrapper:a(379).default})},1040:function(t,e,a){"use strict";a(1035)},1041:function(t,e,a){var s=a(12)(!1);s.push([t.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=s},1042:function(t,e,a){"use strict";a(1036)},1043:function(t,e,a){var s=a(12)(!1);s.push([t.i,".center-background[data-v-068c8c62]{background-position:50%}.cover-background[data-v-068c8c62]{background-size:cover}.contain-background[data-v-068c8c62]{background-size:contain;background-color:#fff}",""]),t.exports=s},1044:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},n=(a(1040),a(25)),i=a(30),r=a.n(i),o=a(1024),l=a(235),c=a(225),u=a(1025),d=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header",staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":t,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=d.exports;r()(d,{UiSmartBackgroundImg:a(1039).default}),r()(d,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:u.a})},1046:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},n=a(25),i=a(30),r=a.n(i),o=a(1034),l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiPageHeaderBanner:a(1044).default}),r()(l,{VContainer:o.a})},1064:function(t,e,a){var s=a(1086);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(13).default)("1276683c",s,!0,{sourceMap:!1})},1085:function(t,e,a){"use strict";a(1064)},1086:function(t,e,a){var s=a(12)(!1);s.push([t.i,".nuxt-content>p{margin:16px}.nuxt-content>blockquote{padding-left:20px;margin-left:45px;border-left:3px solid #ccc}.nuxt-content>blockquote>p{display:block;font:14px/22px sans-serif}.footnotes{font:12px/20px sans-serif}",""]),t.exports=s},1098:function(t,e,a){"use strict";a.r(e);var s=a(1038),n=a(68),i={props:{page:{type:String,default:""},subSections:{type:Array,default:function(){return[]}},imageAssetObjects:{type:Object,default:function(){}}},data:function(){return{mdiGithub:n.u}},methods:{compileMarkdown:function(t){return s.marked.parseInline(t,[])}}},r=(a(1085),a(25)),o=a(30),l=a.n(o),c=a(1024),u=a(227),d=a(1025),p=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.subSections,(function(e,s){return a("section",{key:s,attrs:{id:e.slug}},[a("v-row",{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[a("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[a("figure",[a("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[e.img]}}),t._v(" "),a("figcaption",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(s+1)+": "+e.caption))}},[t._v("\n              Figure "+t._s(s+1)+":\n              "+t._s(t.compileMarkdown(e.caption))+"\n            ")])])],1)]),t._v(" "),a("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[a("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:e.title,ingress:e.ingress}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("nuxt-content",{attrs:{document:e}})],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),a("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("a",{attrs:{href:e.github_link}},[t._v("\n                    "+t._s(e.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=p.exports;l()(p,{UiSmartImg:a(257).default,UiMainTitle:a(1037).default}),l()(p,{VCol:c.a,VIcon:u.a,VRow:d.a})},1239:function(t,e,a){"use strict";a.r(e);var s={asyncData:function(t){var e=t.$content;return(0,t.$loadMarkdownFiles)("topics",e)},data:function(){return{pageHeader:"Topics",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg")]}},head:function(){return{title:"Topics",meta:[]}}},n=a(25),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[a("SectionsAlternatingSubSections",{attrs:{page:"topics","sub-sections":t.markdownFiles,"image-asset-objects":t.imageAssetObjects}})],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{SectionsAlternatingSubSections:a(1098).default,SectionsPageContainer:a(1046).default})}}]);