(window.webpackJsonp=window.webpackJsonp||[]).push([[35,31,49,54],{1112:function(t,e,s){},1115:function(t,e,s){"use strict";s.r(e);var a={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},i=s(23),n=Object(i.a)(a,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},1116:function(t,e,s){"use strict";s.r(e);var a={mixins:[s(1110).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},i=s(23),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=n.exports},1117:function(t,e,s){"use strict";s(1112)},1124:function(t,e,s){"use strict";s.r(e);var a={props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var s=[];return t?s.push("contain-background"):s.push("cover-background"),e&&s.push("lazyload"),s.join(" ")}}},i=(s(1117),s(23)),n=s(27),o=s.n(n),r=s(195),l=Object(i.a)(a,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(s){var a=s.imageAsset,i=s.styleText,n=s.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,n),style:n?i:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(i),attrs:{"data-bgset":n?a.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}},{key:"respImgComponent",fn:function(s){var a=s.imageAsset,i=s.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:i,attrs:{"data-bgset":"".concat(a.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(a.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":i}})]}}],null,!1,876970809)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiNoScriptBackgroundImg:s(1115).default,UiSmartImgFileTypesWrapper:s(478).default}),o()(l,{VImg:r.a})},1175:function(t,e,s){},1229:function(t,e,s){"use strict";s(1175)},1266:function(t,e,s){"use strict";s.r(e);var a=s(73),i={mixins:[s(1110).a],props:{sectionId:{type:String,required:!0},mainMarkdownFile:{type:Object,required:!0},carouselId:{type:String,default:""},darkBackground:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-overview-intro",markdownFilesDir:"index/intro",mdiWeb:a.mdiWeb}}},n=(s(1229),s(23)),o=s(27),r=s.n(o),l=s(1096),c=s(261),u=s(253),d=s(1097),g=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("section",{class:t.$vuetify.theme.dark?null:"light-background",attrs:{id:t.sectionId}},[e("v-row",{attrs:{"no-gutters":"",align:"center"}},[e("v-col",{staticClass:"pt-8 pa-0",attrs:{cols:"12",lg:"6"}},[e("v-responsive",{staticClass:"px-16 px-sm-8 mx-auto",attrs:{"max-width":"600"}},[e("UiSmartImg",{attrs:{"image-asset":t.$vuetify.theme.dark?t.$getImageAssetObject("images","logos","FAIRtracks-logo-light-white-640-[fixed].png"):t.$getImageAssetObject("images","logos","FAIRtracks-logo-640-[fixed].png"),"img-height":"100","img-width":"320","not-responsive":""}}),t._v(" "),e("UiMainTitle",{staticClass:"text-center",attrs:{id:"toptext",title:t.mainMarkdownFile.title,subtitle:t.mainMarkdownFile.subtitle,"subtitle-style":t.$vuetify.theme.dark?"color: white;":"color: var(--v-info-base);","scale-down-at-sm":""},scopedSlots:t._u([{key:"ingress",fn:function(){return[e("nuxt-content",{attrs:{document:t.mainMarkdownFile}})]},proxy:!0}])})],1)],1),t._v(" "),e("v-col",{staticClass:"pt-8 pb-0",attrs:{cols:"12",lg:"6"}},[e("div",{staticClass:"thin-border",style:"border-color: ".concat(t.$vuetify.theme.dark?"var(--v-primary-lighten1)":"var(--secondary)")},[e("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h5",{staticClass:"text-h5 font-weight-black text-center"},[t._v("News")])])],1),t._v(" "),e("SectionsCarouselLayout",{attrs:{"slides-files-dir":"index/news","carousel-id":"news",height:"500px"}})],1)])],1),t._v(" "),e("v-row",{staticClass:"py-8",attrs:{justify:"space-around"}},t._l(t.markdownFiles,(function(s,a){return e("v-col",{key:a,staticClass:"pa-4",attrs:{cols:"12",lg:"4",md:"6"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500px"}},[e("v-row",{staticClass:"px-4 px-lg-8",attrs:{"no-gutters":"",justify:"space-between"}},[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"pr-2"},[e("h4",{staticClass:"secondary--test text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(s.subtitle)}}),t._v(" "),e("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h5",{staticClass:"text-h5 font-weight-black text-center",domProps:{textContent:t._s(s.title)}})])],1),t._v(" "),e("nuxt-content",{attrs:{document:s}})],1)])],1)],1)],1)})),1)],1)}),[],!1,null,"e4612b92",null);e.default=g.exports;r()(g,{UiSmartImg:s(284).default,UiMainTitle:s(1116).default,SectionsCarouselLayout:s(1240).default}),r()(g,{VCol:l.a,VOverlay:c.a,VResponsive:u.a,VRow:d.a})}}]);