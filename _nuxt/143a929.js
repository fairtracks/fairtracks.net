(window.webpackJsonp=window.webpackJsonp||[]).push([[30,42],{1028:function(t,e,s){"use strict";s.r(e);var i=s(1030),n={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return i.marked.parseInline(t,[])}}},a=s(25),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),s("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),s("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=o.exports},1040:function(t,e,s){var i=s(1062);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(13).default)("1276683c",i,!0,{sourceMap:!1})},1061:function(t,e,s){"use strict";s(1040)},1062:function(t,e,s){var i=s(12)(!1);i.push([t.i,".nuxt-content>p{margin:16px}.nuxt-content>blockquote{padding-left:20px;margin-left:45px;border-left:3px solid #ccc}.nuxt-content>blockquote>p{display:block;font:14px/22px sans-serif}.footnotes{font:12px/20px sans-serif}",""]),t.exports=i},1073:function(t,e,s){"use strict";s.r(e);var i=s(1030),n=s(68),a={props:{page:{type:String,default:""},subSections:{type:Array,default:function(){return[]}},imageAssetObjects:{type:Object,default:function(){}}},data:function(){return{mdiGithub:n.s}},methods:{compileMarkdown:function(t){return i.marked.parseInline(t,[])}}},o=(s(1061),s(25)),r=s(30),c=s.n(r),l=s(1006),u=s(227),p=s(1007),m=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.subSections,(function(e,i){return s("section",{key:i,attrs:{id:e.slug}},[s("v-row",{class:{"flex-row-reverse":i%2==1},attrs:{"no-gutters":""}},[s("v-col",{staticClass:"px-md-8 py-md-16 px-11 py-15",attrs:{cols:"12",md:"6","align-self":"center"}},[s("figure",[s("UiSmartImg",{directives:[{name:"show",rawName:"v-show",value:e.img,expression:"subSection.img"}],staticClass:"mx-auto",attrs:{"max-height":t.$vuetify.breakpoint.mdAndUp?"900px":"600px",contain:"","image-asset":t.imageAssetObjects[e.img]}}),t._v(" "),s("figcaption",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.caption,expression:"subSection.caption"}],staticClass:"body-2 font-italic text-center pt-8",domProps:{innerHTML:t._s(t.compileMarkdown("Figure "+(i+1)+": "+e.caption))}},[t._v("\n              Figure "+t._s(i+1)+":\n              "+t._s(t.compileMarkdown(e.caption))+"\n            ")])])],1)]),t._v(" "),s("v-col",{staticClass:"px-md-8 py-md-16 px-4 py-8",attrs:{cols:"12",md:"6","align-self":"center"}},[s("v-row",{staticClass:"pa-3",attrs:{"no-gutters":"",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("UiMainTitle",{attrs:{title:e.title,ingress:e.ingress}})],1),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("nuxt-content",{attrs:{document:e}})],1),t._v(" "),s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_text,expression:"subSection.github_text"}],attrs:{cols:"12"}},[s("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-row",{attrs:{"no-gutters":"",justify:"center"}},[s("v-icon",{staticClass:"px-2",attrs:{size:"24px"}},[t._v(t._s(t.mdiGithub))]),t._v(" "),s("div",{staticClass:"font-weight-medium"},[t._v("GitHub repository:")])],1)],1),t._v(" "),s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.github_link,expression:"subSection.github_link"}],staticClass:"pb-6",attrs:{cols:"12",justify:"center"}},[s("v-row",{attrs:{"no-gutters":"",justify:"center"}},[s("a",{attrs:{href:e.github_link}},[t._v("\n                    "+t._s(e.github_text))])])],1)],1)],1)],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=m.exports;c()(m,{UiSmartImg:s(257).default,UiMainTitle:s(1028).default}),c()(m,{VCol:l.a,VIcon:u.a,VRow:p.a})}}]);