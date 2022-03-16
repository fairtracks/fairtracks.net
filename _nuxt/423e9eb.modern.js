(window.webpackJsonp=window.webpackJsonp||[]).push([[39,40,47,48],{1027:function(e,t,r){"use strict";r.r(t);var i={data:()=>({sectionId:"fair-community",sectionTitle:"Overview for the FAIR community",introText:"Some text. **Markdown** is supported.",referenceLists:[{header:"Relevant topics",references:[{id:"s07-fairification",description:"Some text"}]},{header:"Relevant services",references:[{id:"s07-fairification",description:"Some text"}]},{header:"Relevant standards",references:[{id:"s07-fairification",description:"Some text"}]},{header:"Relevant material",references:[{id:"s07-fairification",description:"Some text"}]}],referenceStore:{"s07-fairification":{title:"Standards for Track Metadata",to:"/topics#s07-fairification"}}})},s=r(19),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("SectionsOverviewLayout",{attrs:{"section-id":e.sectionId,"section-title":e.sectionTitle,"intro-text":e.introText,"reference-lists":e.referenceLists,"reference-store":e.referenceStore}})}),[],!1,null,null,null);t.default=n.exports;installComponents(n,{SectionsOverviewLayout:r(903).default})},889:function(e,t,r){"use strict";r.r(t);var i=r(890),s={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1}},methods:{compileMarkdown:e=>i.marked.parseInline(e,[])}},n=r(19),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:e.scaleDownAtSm?"text-sm-h3":"text-md-h3",domProps:{textContent:e._s(e.title)}}),e._v(" "),r("h3",{directives:[{name:"show",rawName:"v-show",value:e.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:e.scaleDownAtSm?"text-sm-h5":"text-md-h5",domProps:{textContent:e._s(e.subtitle)}}),e._v(" "),r("h4",{directives:[{name:"show",rawName:"v-show",value:e.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:e.subtitle?"font-weight-light":"font-weight-medium font-italic",domProps:{innerHTML:e._s(e.compileMarkdown(e.ingress))}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:e._s(e.compileMarkdown(e.info))}})])}),[],!1,null,null,null);t.default=a.exports},899:function(e,t,r){var i=r(900);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r(11).default)("2e8c002e",i,!0,{sourceMap:!1})},900:function(e,t,r){var i=r(10)(!1);i.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=i},903:function(e,t,r){"use strict";r.r(t);var i=r(890),s={props:{sectionId:{type:String,default:""},sectionTitle:{type:String,default:""},introText:{type:String,default:""},referenceLists:{type:Array,default:()=>[]},referenceStore:{type:Object,default:()=>{}},listsInSecondCol:{type:Number,default:2}},computed:{slicedReferenceLists(){return[this.referenceLists.slice(0,this.listsInSecondCol),this.referenceLists.slice(this.listsInSecondCol)]}},methods:{compileMarkdown:e=>i.marked.parseInline(e,[])}},n=r(19),a=r(25),o=r.n(a),l=r(876),c=r(877),f=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:e.sectionId}},[r("UiMainTitle",{attrs:{title:e.sectionTitle}}),e._v(" "),r("v-row",{staticClass:"fill-height",attrs:{justify:"space-around"}},[r("v-col",{attrs:{cols:"4"}},[r("p",{domProps:{innerHTML:e._s(e.compileMarkdown(e.introText))}})]),e._v(" "),e._l([1,2],(function(t){return r("v-col",{key:t,attrs:{cols:"4"}},[r("v-row",e._l(e.slicedReferenceLists[t-1],(function(t,i){return r("v-col",{key:i,attrs:{cols:"12"}},[r("UiListOfReferences",{attrs:{"list-header":t.header,"reference-list":t.references,"reference-store":e.referenceStore}})],1)})),1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=f.exports;o()(f,{UiMainTitle:r(889).default,UiListOfReferences:r(904).default}),o()(f,{VCol:l.a,VRow:c.a})},904:function(e,t,r){"use strict";r.r(t);var i={props:{listHeader:{type:String,default:""},referenceList:{type:Array,default:()=>[]},referenceStore:{type:Object,default:()=>{}}}},s=r(19),n=r(25),a=r.n(n),o=r(203),l=r(195),c=r(102),f=r(40),u=r(908),d=Object(s.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-list",{attrs:{dense:""}},[r("v-subheader",[e._v(e._s(e.listHeader))]),e._v(" "),e._l(e.referenceList,(function(t,i){return r("v-list-item",{key:i},[r("v-list-item-content",[r("v-list-item-title",[r("nuxt-link",{attrs:{to:"referenceStore[listItem.id].to"}},[e._v("\n            "+e._s(e.referenceStore[t.id].title)+"\n          ")])],1),e._v(" "),r("v-list-item-subtitle",[e._v("\n          "+e._s(t.description)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=d.exports;a()(d,{VCard:o.a,VList:l.a,VListItem:c.a,VListItemContent:f.a,VListItemSubtitle:f.b,VListItemTitle:f.c,VSubheader:u.a})},908:function(e,t,r){"use strict";r(899);var i=r(12),s=r(5);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=Object(s.a)(i.a).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:a({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);