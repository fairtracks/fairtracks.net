(window.webpackJsonp=window.webpackJsonp||[]).push([[54,34,38,40,41,44,45],{1022:function(t,e,a){"use strict";a.r(e);var s=a(53),i={data(){return{pageHeader:"Services",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","P.svg"),this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","LP.svg")],coreSectionId:"fairtracks",title:"The FAIRtracks ecosystem",ingress:"The FAIRtracks ecosystem contains an interconnected group of services built around [the FAIRtracks draft standard](standards#s01-fairtracks). The services are aimed at gathering, curating, validating, integrating, indexing, and analysing the metadata of genomic tracks.",info:"(Please refer to the [overview](/overview#ecosystem) page for images of the interconnections between the services, both internally within the FAIRtracks ecosystem, as well as to external services.)",coreSubtitle:"Core services",coreCards:[{logo:["logos","trackfind.png"],title:"TrackFind",subtitle:"Search engine for genomic track metadata",icon:s.t,color:"green darken-2",features:[{icon:s.l,text:"Hierarchical browser of the metadata attributes and all values actually present in the database"},{icon:s.z,text:"Categorical search"},{icon:s.A,text:"Graphical builder of SQL-based search queries"},{icon:s.y,text:"Browse results in table or hierarchical form"},{icon:s.f,text:"Export results in JSON or GSuite formats"},{icon:s.a,text:"REST API for integration into downstream tools and scripts"}],services:[{text:"REST API",link:"https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0"},{text:"Web GUI",link:"https://trackfind.elixir.no/"}]},{logo:["logos","FAIRtracks-logo.png"],title:"FAIRtracks augmentation service",subtitle:"metadata augmentation service",icon:s.t,color:"green darken-2",features:[{icon:s.a,text:"RESTful API for automatised augmentation of minimum information"},{icon:s.q,text:"import a FAIRtracks-annotated JSON file with a minimal set of fields"},{icon:s.k,text:"export a JSON file with augmented human-readable fields of relevance of downstream users "},{icon:s.b,text:"Automated generation of human-readable ontology labels and most recent versions"}],services:[{text:"REST API",link:"https://fairtracks.elixir.no/api/"},{text:"GitHub",link:"https://github.com/fairtracks/fairtracks_augment"}]}],connectedSectionId:"connected",connectedTitle:"Connected services",connectedCards:[{logo:["logos","gsuite-hyperbrowser.png"],title:"GSuite HyperBrowser",subtitle:"Statistical analysis framework for track data",icon:s.t,color:"green darken-2",features:[{icon:s.d,text:"The first general framework for statistical analysis of genomic tracks"},{icon:s.u,text:"Created at the crossroads of biology, statistics, and computer science"},{icon:s.D,text:"Open-ended web server, based on the Galaxy web framework"},{icon:s.i,text:"Can analyse genomic variation, gene regulation, chromatin structure, 3D genome organization, and more..."},{icon:s.w,text:"Hundreds of precise tools and analyses"},{icon:s.h,text:"Prototype track search and import tool that inspired FAIRtracks is being replaced by TrackFind client"}],services:[{text:"Web GUI",link:"https://hyperbrowser.uio.no/"}]}]}},head:()=>({title:"Services",meta:[]})},r=a(24),n=a(33),o=a.n(n),l=a(834),c=a(838),d=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"fill-height",class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[a("UiPageHeaderBanner",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),a("SectionsInfoCards",{attrs:{"section-id":t.coreSectionId,title:t.title,subtitle:t.coreSubtitle,ingress:t.ingress,info:t.info,cards:t.coreCards}}),t._v(" "),a("SectionsInfoCards",{attrs:{"section-id":t.connectedSectionId,subtitle:t.connectedTitle,cards:t.connectedCards}}),t._v(" "),a("v-spacer",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"}),t._v(" "),a("v-row")],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiPageHeaderBanner:a(849).default,SectionsInfoCards:a(943).default}),o()(d,{VRow:l.a,VSpacer:c.a})},844:function(t,e,a){var s=a(848);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("8ae11210",s,!0,{sourceMap:!1})},845:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0}},data:()=>({fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}),computed:{altText(){return this.alt?this.alt:this.imageAsset.filename}}},i=a(24),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t.imageAsset.isSvgImage?a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():a("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=r.exports},846:function(t,e,a){"use strict";a.r(e);var s={props:{title:{type:String,default:""}}},i=a(24),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=r.exports},847:function(t,e,a){"use strict";a(844)},848:function(t,e,a){var s=a(10)(!1);s.push([t.i,".gradient-fill-header .v-responsive__content{background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-anchor-rgb),.9))}.banner{max-height:150px}",""]),t.exports=s},849:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}}},i=(a(847),a(24)),r=a(33),n=a.n(r),o=a(833),l=a(202),c=a(192),d=a(834),u=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{attrs:{"aspect-ratio":567/56.3,"max-height":"150px","min-height":"75px"}},[a("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(t,e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-row",{staticClass:"ma-0 gradient-fill-header",attrs:{justify:"center"}},[a("v-responsive",{staticStyle:{"z-index":"2"},attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[a("UiSmartBackgroundImg",{attrs:{"image-asset":t}})],1)],1)],1)})),1),t._v(" "),a("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[a("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader.toUpperCase())+"\n    ")])])],1)}),[],!1,null,null,null);e.default=u.exports;n()(u,{UiSmartBackgroundImg:a(845).default}),n()(u,{VCol:o.a,VOverlay:l.a,VResponsive:c.a,VRow:d.a})},851:function(t,e,a){"use strict";a.r(e);var s=a(852),i={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:t=>s.marked.parseInline(t,[])}},r=a(24),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-md-h3 text-center font-weight-black mt-4 mb-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),a("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}})])}),[],!1,null,null,null);e.default=n.exports},853:function(t,e,a){"use strict";a.r(e);var s={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({prevButtonHoverId:""}),computed:{buttonHoverId(){return this.$store.state.buttonHover.buttonHoverId},shouldHover(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},i=a(24),r=a(33),n=a.n(r),o=a(223),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simplebutton"},[a("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports;n()(l,{VBtn:o.a})},869:function(t,e,a){"use strict";var s=a(110),i=a(27),r=a(5),n=a(7);e.a=Object(r.a)(s.a,i.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(n.c)("v-hover should only contain a single element",this),t)):(Object(n.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},876:function(t,e,a){var s=a(909);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(11).default)("71ee551e",s,!0,{sourceMap:!1})},908:function(t,e,a){"use strict";a(876)},909:function(t,e,a){var s=a(10)(!1);s.push([t.i,".zoom[data-v-b6fa0246]{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom[data-v-b6fa0246],.zoom[data-v-b6fa0246]{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.text-h6[data-v-b6fa0246]{line-height:1.7rem!important}.v-list-item__content[data-v-b6fa0246],.v-list-item__icon[data-v-b6fa0246]{align-self:center;align-items:center}",""]),t.exports=s},943:function(t,e,a){"use strict";a.r(e);var s={props:{sectionId:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},cards:{type:Array,default:()=>[]}}},i=(a(908),a(24)),r=a(33),n=a.n(r),o=a(203),l=a(833),c=a(869),d=a(194),u=a(195),g=a(101),v=a(40),f=a(86),h=a(192),p=a(834),m=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:t.sectionId}},[t.title?a("v-row",{staticClass:"pt-16 px-8 pb-8",attrs:{id:t.sectionId+"_title"}},[a("UiMainTitle",{attrs:{title:t.title,ingress:t.ingress,info:t.info}})],1):t._e(),t._v(" "),t.subtitle?a("v-row",{staticClass:"px-8 pt-8 pb-8",attrs:{id:t.sectionId+"_subtitle",justify:"center"}},[a("UiMinorTitle",{attrs:{title:t.subtitle}})],1):t._e(),t._v(" "),a("v-row",{staticClass:"pa-0 pb-16 px-8",attrs:{"fill-height":"",justify:"start"}},t._l(t.cards,(function(e,s){return a("v-col",{key:"c_"+s,attrs:{id:t.sectionId+"_c_"+s,cols:"12",md:"6",lg:"4",xl:"3"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var r=i.hover;return[a("v-card",{staticClass:"py-4 px-4 mx-auto transition-swing",class:r?"zoom":"notzoom",attrs:{elevation:r?24:2,outlined:"",shaped:"",width:"380px",height:"586px",href:e.services[e.services.length-1].link}},[a("div",[a("v-responsive",{staticClass:"pt-3 px-1",attrs:{height:"170"}},[a("v-row",{staticClass:"fill-height pa-0",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[e.logo?a("UiSmartImg",{staticClass:"ma-auto",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",e.logo[0],e.logo[1]),"max-height":"75"}}):a("h2",{staticClass:"text-h5 text-center font-weight-black ma-auto",domProps:{textContent:t._s(e.title)}})],1),t._v(" "),a("v-col",{staticClass:"pa-0",attrs:{cols:"12",ali:""}},[a("h3",{staticClass:"text-h6 text-center font-weight-bold"},[t._v("\n                    "+t._s(e.subtitle)+"\n                  ")])])],1)],1),t._v(" "),a("v-responsive",{staticClass:"pt-0 pb-3 px-1",attrs:{height:"380"}},[a("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[a("v-col",{attrs:{"align-self":"center",cols:"12"}},[a("v-list",{staticClass:"pa-0"},t._l(e.features,(function(e,s){return a("v-list-item",{key:"feature-"+s,attrs:{dense:""}},[a("v-list-item-icon",[a("v-icon",{staticClass:"grey--text-2"},[t._v("\n                          "+t._s(e.icon)+"\n                        ")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap text-left grey--text-2",domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t._v(" "),a("v-col",{attrs:{cols:"12","align-self":"end"}},[a("v-row",{class:1==e.services.length?"justify-end":"justify-space-between",attrs:{"no-gutters":""}},t._l(e.services,(function(t,i){return a("v-col",{key:"s_"+s+"_"+i,staticClass:"pa-0 ma-0",attrs:{cols:"auto","align-self":"end"}},[a("UiStyledButton",{staticClass:"text-weight-light",attrs:{id:"btn_"+s+"_"+i,href:t.link,text:t.text,"do-hover":r&&i+1==e.services.length}})],1)})),1)],1)],1)],1)],1)])]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"b6fa0246",null);e.default=m.exports;n()(m,{UiMainTitle:a(851).default,UiMinorTitle:a(846).default,UiSmartImg:a(222).default,UiStyledButton:a(853).default}),n()(m,{VCard:o.a,VCol:l.a,VHover:c.a,VIcon:d.a,VList:u.a,VListItem:g.a,VListItemContent:v.a,VListItemIcon:f.a,VListItemTitle:v.c,VResponsive:h.a,VRow:p.a})}}]);