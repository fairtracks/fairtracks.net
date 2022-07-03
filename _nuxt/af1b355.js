(window.webpackJsonp=window.webpackJsonp||[]).push([[29,45],{1110:function(t,e,s){"use strict";var i=s(1127);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?i.marked.parseInline(t,[]):t}}}},1116:function(t,e,s){"use strict";s.r(e);var i={mixins:[s(1110).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},n=s(23),a=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h5":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-light":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=a.exports},1182:function(t,e,s){"use strict";s.r(e);var i=s(73),n={mixins:[s(1110).a],props:{page:{type:String,default:""}},data:function(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page,mdiGithub:i.mdiGithub}}},a=s(23),r=s(27),o=s.n(r),l=s(1096),c=s(197),u=s(1097),m=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(s,i){return e("section",{key:i,attrs:{id:s.slug}},[e("v-row",{class:{"flex-row-reverse":i%2==1},attrs:{"no-gutters":""}},[e("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",lg:"6","align-self":"center"}},[e("figure",[s.img?e("UiSmartImg",{staticClass:"mx-auto",attrs:{"max-width":"600px",contain:"","image-asset":t.$getImageAssetObjectFromPathArray(s.img)}}):t._e(),t._v(" "),e("figcaption",[e("p",{directives:[{name:"show",rawName:"v-show",value:s.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(i+1)+": "+s.caption))}},[t._v("\n                Figure "+t._s(i+1)+":\n                "+t._s(t.compileMarkdown(s.caption))+"\n              ")])])],1)]),t._v(" "),e("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",lg:"6","align-self":"center"}},[e("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:s.title,ingress:s.ingress}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:s}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:s.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[e("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),e("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:s.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("a",{attrs:{href:s.github_link}},[t._v(" "+t._s(s.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=m.exports;o()(m,{UiSmartImg:s(284).default,UiMainTitle:s(1116).default}),o()(m,{VCol:l.a,VIcon:c.a,VRow:u.a})}}]);