(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10],{400:function(t,e,n){},401:function(t,e,n){"use strict";n(400)},402:function(t,e,n){"use strict";n.r(e);var r={props:{heroAlt:{type:Array,default:function(){return[]}}}},o=(n(401),n(35)),l=n(62),c=n.n(l),v=n(389),d=n(399),m=n(160),h=n(390),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},t._l(t.heroAlt,(function(e,i){return n("v-img",{key:i,staticClass:"gradient-fill-header",attrs:{width:"100%",height:"30vh",src:e.src,dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",[n("v-col",[n("h1",{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            "},[t._v("\n            "+t._s(e.heading.toUpperCase())+"\n          ")])])],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VImg:m.a,VRow:h.a})},466:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{heroAlt:[{src:"pexels-andrea-piacquadio-3884440.jpg",heading:" News "}],posts:[{id:"",title:"Hello World",postImage:"",publishedOn:"",lastUpdated:"",author:"",tags:"",category:"",excerpt:"",content:""}],page:2,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"],items:[{text:"Technology"},{text:"Health"},{text:"News"},{text:"Recent Discovery"},{text:"Lifestyle and Fitness"},{text:"Fashion"},{text:"Music"}],comments:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Alex Scott",subtitle:"Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},head:function(){return{title:"News",meta:[]}}},o=n(35),l=n(62),c=n.n(l),v=n(215),d=n(204),m=n(167),h=n(458),x=n(459),_=n(389),C=n(399),f=n(393),y=n(197),w=n(160),V=n(198),k=n(123),j=n(200),A=n(74),I=n(202),S=n(460),H=n(390),T=n(392),L=n(461),P=n(412),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$vuetify.theme.dark?"":"grey lighten-4"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("SectionsHeroAlt",{attrs:{"hero-alt":t.heroAlt}})],1)],1),t._v(" "),n("v-container",[n("v-row",[n("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"10",lg:"9",md:"8",sm:"8"}},[n("v-row",t._l(10,(function(e){return n("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450",elevation:"1"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"pexels-moose-photos-1036641.jpg"}}),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[n("v-btn",{staticClass:"px-0",attrs:{href:"#",text:"",small:"",color:"primary"}},[t._v("Admin")]),t._v(" "),n("v-btn",{staticClass:"px-0",attrs:{text:"",small:"",disabled:""}},[t._v("October 13, 2020")])],1),t._v(" "),n("v-card-text",{staticClass:"title font-weight-bold mt-3 pb-0 text--primary",staticStyle:{"line-height":"1.8rem"}},[t._v("\n                Check out the new mansion we got for our eSports team!\n              ")]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[t._v("\n                An online streamer, also known as a live streamer, internet\n                streamer, or streamer, is a person who broadcasts themself\n                online through a live stream or pre-recorded video. The scope\n                of online streamers has grown to includ...\n                "),n("v-btn",{attrs:{href:"#",small:"",text:"",color:"primary"}},[t._v("Read More")])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{icon:"",color:"yellow darken-1"}},[n("v-icon",[t._v("mdi-comment")])],1),t._v(" "),n("span",{staticClass:"text--disabled"},[t._v("15")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"orange"}},[n("v-icon",[t._v("mdi-heart")])],1),n("span",{staticClass:"text--disabled mr-2"},[t._v("45K")]),t._v(" "),n("v-btn",{attrs:{icon:"",color:"primary"}},[n("v-icon",[t._v("mdi-share-variant")])],1),n("span",{staticClass:"text--disabled"},[t._v("25K")]),t._v(" "),n("span",{staticClass:"mr-4"})],1)],1)],1)})),1),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"text-center"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("v-container",{staticClass:"max-width"},[n("v-pagination",{staticClass:"my-4",attrs:{circle:"",length:15},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)])],1),t._v(" "),n("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[n("aside",[n("v-text-field",{staticClass:"mb-6",attrs:{clearable:"",dense:"",flat:"",outlined:"",placeholder:"Search...","append-icon":"mdi-magnify","hide-details":""}}),t._v(" "),n("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[n("div",{staticClass:"\n                subtitle\n                font-weight-black\n                text-uppercase text-center\n                mt-4\n              "},[t._v("\n              Categories\n            ")]),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),t._v(" "),n("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[n("div",{staticClass:"\n                subtitle\n                font-weight-black\n                text-uppercase text-center\n                mt-4\n              "},[t._v("\n              Tags\n            ")]),t._v(" "),n("v-card-text",[n("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(e){return n("v-chip",{key:e},[t._v("\n                  "+t._s(e)+"\n                ")])})),1)],1)],1),t._v(" "),n("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[n("div",{staticClass:"\n                subtitle\n                font-weight-black\n                text-uppercase text-center\n                mt-4\n              "},[t._v("\n              Recent Comments\n            ")]),t._v(" "),n("v-list",{attrs:{"three-line":"",dense:""}},[t._l(t.comments,(function(e,r){return[e.header?n("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?n("v-divider",{key:r}):n("v-list-item",{key:e.title},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.avatar}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionsHeroAlt:n(402).default}),c()(component,{VBtn:v.a,VCard:d.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VChip:h.a,VChipGroup:x.a,VCol:_.a,VContainer:C.a,VDivider:f.a,VIcon:y.a,VImg:w.a,VList:V.a,VListItem:k.a,VListItemAvatar:j.a,VListItemContent:A.a,VListItemGroup:I.a,VListItemSubtitle:A.b,VListItemTitle:A.c,VPagination:S.a,VRow:H.a,VSpacer:T.a,VSubheader:L.a,VTextField:P.a})}}]);