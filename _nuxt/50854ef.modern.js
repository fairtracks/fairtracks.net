(window.webpackJsonp=window.webpackJsonp||[]).push([[60,30,36,42,45,48],{1068:function(t,e,a){"use strict";a.r(e);var s={asyncData(t){var{$content:e,$loadMarkdownFiles:a}=t;return a("standards",e)},data(){return{pageHeader:"Standards",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:()=>({title:"Standards",meta:[]})},i=a(19),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[a("SectionsAlternatingSubSections",{attrs:{page:"standards","sub-sections":t.markdownFiles,"image-asset-objects":t.imageAssetObjects}})],1)}),[],!1,null,null,null);e.default=n.exports;installComponents(n,{SectionsAlternatingSubSections:a(925).default,SectionsPageContainer:a(878).default})},869:function(t,e,a){var s=a(872);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("112783d2",s,!0,{sourceMap:!1})},870:function(t,e,a){var s=a(876);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},871:function(t,e,a){"use strict";a(869)},872:function(t,e,a){var s=a(10)(!1);s.push([t.i,".center-background[data-v-068c8c62]{background-position:50%}.cover-background[data-v-068c8c62]{background-size:cover}.contain-background[data-v-068c8c62]{background-size:contain;background-color:#fff}",""]),t.exports=s},873:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},i=(a(871),a(19)),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var s=e.imageAsset,i=e.altText;return[a("div",{staticClass:"lazyload fill-height center-background",class:t.contain?"contain-background":"cover-background",attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto",alt:i}})]}},{key:"imgComponent",fn:function(e){var s=e.imageAsset,i=e.altText,n=e.styleText;return[a("div",{staticClass:"lazyload fill-height attach-classes center-background",class:t.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":s.responsiveWebpImage.srcSet+" [type: image/webp] | "+s.responsiveImage.srcSet,"data-sizes":"auto",alt:i}})]}}])})}),[],!1,null,"068c8c62",null);e.default=n.exports;installComponents(n,{UiSmartImgFileTypesWrapper:a(342).default})},875:function(t,e,a){"use strict";a(870)},876:function(t,e,a){var s=a(10)(!1);s.push([t.i,".gradient-fill-header>.v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=s},877:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},i=(a(875),a(19)),n=a(25),r=a.n(n),o=a(858),l=a(202),c=a(192),u=a(859),d=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"gradient-fill-header",attrs:{"max-height":"125px","min-height":"75px"}},[a("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-responsive",{staticClass:"gradient-fill-header",staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":t,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),a("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=d.exports;r()(d,{UiSmartBackgroundImg:a(873).default}),r()(d,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:u.a})},878:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null}}},i=a(19),n=a(25),r=a.n(n),o=a(868),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[a("UiPageHeaderBanner",{staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("v-container",{staticClass:"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiPageHeaderBanner:a(877).default}),r()(l,{VContainer:o.a})},880:function(t,e,a){"use strict";a.r(e);var s=a(882),i={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},n=a(19),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=r.exports},892:function(t,e,a){var s=a(914);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("1276683c",s,!0,{sourceMap:!1})},913:function(t,e,a){"use strict";a(892)},914:function(t,e,a){var s=a(10)(!1);s.push([t.i,".nuxt-content>p{margin:16px}.nuxt-content>blockquote{padding-left:20px;margin-left:45px;border-left:3px solid #ccc}.nuxt-content>blockquote>p{display:block;font:14px/22px sans-serif}.footnotes{font:12px/20px sans-serif}",""]),t.exports=s},925:function(t,e,a){"use strict";a.r(e);var s=a(882),i=a(53),n={props:{page:{type:String,default:""},subSections:{type:Array,default:()=>[]},imageAssetObjects:{type:Object,default:()=>{}}},data:()=>({mdiGithub:i.s}),methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},r=(a(913),a(19)),o=a(25),l=a.n(o),c=a(858),u=a(194),d=a(859),p=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.subSections,(function(e,s){return a("section",{key:s,attrs:{id:e.slug}},[a("v-row",{class:{"flex-row-reverse":s%2==1},attrs:{"no-gutters":""}},[a("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[a("figure",[a("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[e.img]}}),t._v(" "),a("figcaption",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(s+1)+": "+e.caption))}},[t._v("\n              Figure "+t._s(s+1)+":\n              "+t._s(t.compileMarkdown(e.caption))+"\n            ")])])],1)]),t._v(" "),a("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[a("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("UiMainTitle",{attrs:{title:e.title,ingress:e.ingress}})],1),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("nuxt-content",{attrs:{document:e}})],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),a("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("a",{attrs:{href:e.github_link}},[t._v("\n                    "+t._s(e.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=p.exports;l()(p,{UiSmartImg:a(224).default,UiMainTitle:a(880).default}),l()(p,{VCol:c.a,VIcon:u.a,VRow:d.a})}}]);