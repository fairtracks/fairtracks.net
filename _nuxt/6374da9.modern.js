(window.webpackJsonp=window.webpackJsonp||[]).push([[33,49],{907:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,default:""}},data:()=>({componentId:"ui-minor-title"})},n=i(15),l=Object(n.a)(s,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=l.exports},996:function(t,e,i){"use strict";i.r(e);var s={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:()=>[]}},data:()=>({componentId:"sections-cite-us"})},n=i(15),l=i(19),o=i.n(l),a=i(887),r=i(202),c=i(203),u=i(107),p=i(42),v=i(91),_=i(888),d=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"font-italic"},[t._v("\n          "+t._s(t.text)+"\n        ")])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",t._l(t.references,(function(i,s){return e("v-list-item",{key:"r_"+s},[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(i.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(i.text)+"\n                "),i.doi?e("a",{attrs:{href:"https://doi.org/"+i.doi}},[t._v("doi: "+t._s(i.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;o()(d,{UiMinorTitle:i(907).default}),o()(d,{VCol:a.a,VIcon:r.a,VList:c.a,VListItem:u.a,VListItemContent:p.a,VListItemIcon:v.a,VListItemTitle:p.c,VRow:_.a})}}]);