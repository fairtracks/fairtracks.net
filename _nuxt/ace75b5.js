(window.webpackJsonp=window.webpackJsonp||[]).push([[52,33,35,36,43],{639:function(t,e,n){},640:function(t,e,n){"use strict";n(639)},641:function(t,e,n){"use strict";n.r(e);var r={props:{pageHeader:{type:String},pageHeaderImages:{type:Array,default:function(){return[]}}}},o=(n(640),n(39)),l=n(77),c=n.n(l),d=n(188),h=n(243),f=n(233),v=n(630),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"page-header-banner"}},[n("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[n("v-row",{staticClass:"ma-0"},t._l(t.pageHeaderImages,(function(t,i){return n("v-img",{key:i,staticClass:"gradient-fill-header",attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,src:t,"max-height":"150px","min-height":"75px",dark:""}})})),1),t._v(" "),n("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[n("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader.toUpperCase())+"\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a,VOverlay:h.a,VResponsive:f.a,VRow:v.a})},643:function(t,e,n){"use strict";n.r(e);var r=n(644),o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return r.marked.parseInline(t,[])}}},l=n(39),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.title?n("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?n("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?n("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?n("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},645:function(t,e,n){"use strict";n.r(e);var r={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},o=n(39),l=n(77),c=n.n(l),d=n(257),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},657:function(t,e,n){"use strict";var r=n(150),o=n(47),l=n(7),c=n(13);e.a=Object(l.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},663:function(t,e,n){},689:function(t,e,n){"use strict";n(663)},715:function(t,e,n){"use strict";n.r(e);var r={props:{cards:{type:Array,default:function(){return[]}},title:{type:String,default:""},titleId:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}}},o=(n(689),n(39)),l=n(77),c=n.n(l),d=n(244),h=n(629),f=n(657),v=n(235),m=n(188),x=n(236),y=n(140),_=n(71),I=n(122),k=n(630),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-16 fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[n("v-row",{staticClass:"px-8 pb-4",attrs:{id:t.titleId}},[n("SectionsMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1),t._v(" "),n("v-row",{staticClass:"pa-0 px-8",attrs:{"fill-height":"",justify:"left"}},t._l(t.cards,(function(e,r){return n("v-col",{key:"c_"+r,attrs:{id:"c_"+r,cols:"12",md:"6",lg:"4",xl:"3"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.hover;return[n("v-card",{staticClass:"py-4 px-6 mx-auto transition-swing",class:l?"zoom":"notzoom",attrs:{elevation:l?24:2,outlined:"",shaped:"",width:"380px",height:"616px",href:e.services[e.services.length-1].link}},[n("v-row",{staticClass:"fill-height pa-3",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[e.logo?n("v-img",{staticClass:"ma-auto",attrs:{contain:"",src:t.createAssetPath("illustrations",e.logo[0],e.logo[1]),"max-height":"80","max-width":"335"}}):n("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(e.title)}})],1),t._v(" "),n("v-col",{staticClass:"pb-3",attrs:{cols:"12"}},[n("h3",{staticClass:"text-h6 text-center font-weight-bold mx-8"},[t._v("\n                "+t._s(e.subtitle)+"\n              ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-list",{staticClass:"pt-1 pb-4"},t._l(e.features,(function(e,r){return n("v-list-item",{key:"feature-"+r,attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",{staticClass:"grey--text-2"},[t._v("\n                      "+t._s(e.icon)+"\n                    ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),n("v-col",{staticClass:"simplebutton",attrs:{"align-self":"end",cols:"12"}},[n("v-row",{class:1==e.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(e.services,(function(t,o){return n("v-col",{key:"s_"+r+"_"+o,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[n("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+r+"_"+o,href:t.link,text:t.text,"do-hover":l&&o+1==e.services.length}})],1)})),1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"bd17fbaa",null);e.default=component.exports;c()(component,{SectionsMainTitle:n(643).default,UiStyledButton:n(645).default}),c()(component,{VCard:d.a,VCol:h.a,VHover:f.a,VIcon:v.a,VImg:m.a,VList:x.a,VListItem:y.a,VListItemContent:_.a,VListItemIcon:I.a,VListItemTitle:_.c,VRow:k.a})},778:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{pageHeader:"Services",pageHeaderImages:[this.createAssetPath("illustrations","tracktypes","P.svg"),this.createAssetPath("illustrations","tracktypes","VP.svg"),this.createAssetPath("illustrations","tracktypes","LP.svg")],title:"FAIRtracks services",titleId:"fairtracks",ingress:"The FAIRtracks ecosystem contains an interconnected group of services built around [the FAIRtracks draft standard](/standards#s01-fairtracks). The services are aimed at gathering, curating, validating, integrating, and indexing the metadata of genomic tracks.",info:"(Please refer to the [overview](/overview#ecosystem) page for illustrations of the interconnections between the services, both internally within the FAIRtracks ecosystem, as well as to external services.)",cards:[{logo:["logos","trackfind.png"],title:"TrackFind",subtitle:"Search engine for genome track metadata",icon:"mdi-material-design",color:"green darken-2",features:[{icon:"mdi-file-tree",text:"Hierarchical browser of the metadata attributes and all values actually present in the database"},{icon:"mdi-tag-search-outline",text:"Categorical search"},{icon:"mdi-tools",text:"Graphical builder of SQL-based search queries"},{icon:"mdi-table",text:"Browse results in table or hierarchical form"},{icon:"mdi-code-json",text:"Export results in JSON or GSuite formats"},{icon:"mdi-api",text:"REST API for integration into downstream tools and scripts"}],services:[{text:"REST API",link:"https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0"},{text:"Web GUI",link:"https://trackfind.elixir.no/"}]}]}},head:function(){return{title:"Services",meta:[]}}},o=n(39),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fill-height",attrs:{fluid:""}},[n("SectionsPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),n("SectionsInfoCards",{attrs:{cards:t.cards,title:t.title,"title-id":t.titleId,ingress:t.ingress,info:t.info}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionsPageHeaderBanner:n(641).default,SectionsInfoCards:n(715).default})}}]);