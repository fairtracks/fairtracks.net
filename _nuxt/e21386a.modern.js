(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1052:function(t,e,s){"use strict";s(995)},1089:function(t,e,s){"use strict";s.r(e);var i=s(59),a={mixins:[s(936).a],props:{sectionId:{type:String,required:!0},mainMarkdownFile:{type:Object,required:!0},carouselId:{type:String,default:""},darkBackground:{type:Boolean,default:!1}},data:()=>({componentId:"sections-overview-intro",markdownFilesDir:"index/intro",mdiWeb:i.mdiWeb})},n=(s(1052),s(16)),l=s(21),o=s.n(l),r=s(920),c=s(222),d=s(214),u=s(921),m=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("section",{class:t.$vuetify.theme.dark?null:"light-background",attrs:{id:t.sectionId}},[e("v-row",{attrs:{"no-gutters":"",align:"center"}},[e("v-col",{staticClass:"pt-8 pa-0",attrs:{cols:"12",lg:"6"}},[e("v-responsive",{staticClass:"px-16 px-sm-8 mx-auto",attrs:{"max-width":"600"}},[e("UiSmartImg",{attrs:{"image-asset":t.$vuetify.theme.dark?t.$getImageAssetObject("images","logos","FAIRtracks-logo-light-white-640-[fixed].png"):t.$getImageAssetObject("images","logos","FAIRtracks-logo-640-[fixed].png"),"img-height":"100","img-width":"320","not-responsive":""}}),t._v(" "),e("UiMainTitle",{staticClass:"text-center",attrs:{id:"toptext",title:t.mainMarkdownFile.title,subtitle:t.mainMarkdownFile.subtitle,"subtitle-style":t.$vuetify.theme.dark?"color: white;":"color: var(--v-info-base);","scale-down-at-sm":""},scopedSlots:t._u([{key:"ingress",fn:function(){return[e("nuxt-content",{attrs:{document:t.mainMarkdownFile}})]},proxy:!0}])})],1)],1),t._v(" "),e("v-col",{staticClass:"pt-8 pb-0",attrs:{cols:"12",lg:"6"}},[e("div",{staticClass:"thin-border",style:"border-color: ".concat(t.$vuetify.theme.dark?"var(--v-primary-lighten1)":"var(--secondary)")},[e("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h5",{staticClass:"text-h5 font-weight-black text-center"},[t._v("News")])])],1),t._v(" "),e("SectionsCarouselLayout",{attrs:{"slides-files-dir":"index/news","carousel-id":"news",height:"500px"}})],1)])],1),t._v(" "),e("v-row",{staticClass:"py-8",attrs:{justify:"space-around"}},t._l(t.markdownFiles,(function(s,i){return e("v-col",{key:i,staticClass:"pa-4",attrs:{cols:"12",lg:"4",md:"6"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500px"}},[e("v-row",{staticClass:"px-4 px-lg-8",attrs:{"no-gutters":"",justify:"space-between"}},[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"pr-2"},[e("h4",{staticClass:"secondary--test text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(s.subtitle)}}),t._v(" "),e("v-responsive",{staticClass:"ma-0 px-0",class:t.$vuetify.theme.dark?"primary lighten-1":"secondary",attrs:{height:"40",width:"100%"}},[e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h5",{staticClass:"text-h5 font-weight-black text-center",domProps:{textContent:t._s(s.title)}})])],1),t._v(" "),e("nuxt-content",{attrs:{document:s}})],1)])],1)],1)],1)})),1)],1)}),[],!1,null,"e4612b92",null);e.default=m.exports;o()(m,{UiSmartImg:s(244).default,UiMainTitle:s(947).default,SectionsCarouselLayout:s(1062).default}),o()(m,{VCol:r.a,VOverlay:c.a,VResponsive:d.a,VRow:u.a})},947:function(t,e,s){"use strict";s.r(e);var i={mixins:[s(936).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:()=>({componentId:"ui-main-title"})},a=s(16),n=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=n.exports},995:function(t,e,s){}}]);