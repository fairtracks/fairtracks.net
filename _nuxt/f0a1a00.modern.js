(window.webpackJsonp=window.webpackJsonp||[]).push([[43,50],{1003:function(t,e,s){"use strict";s.r(e);var a={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:()=>[]}}},l=(s(962),s(19)),o=s(25),i=s.n(o),r=s(876),n=s(877),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"primary":"grey lighten-4"},[s("v-row",{attrs:{"no-gutters":""}},[s("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(e,a){return s("v-col",{key:"group-"+a,attrs:{cols:"12"}},[s("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(e.group))]),t._v(" "),s("v-row",t._l(e.members,(function(e,a){return s("v-col",{key:"person-"+a,attrs:{cols:"12"}},[s("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":a%2==1}},[s("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[s("UiSmartImg",{class:a%2==1?"mr-auto":"ml-auto",attrs:{"image-asset":t.$getImageAssetObject("images","team",e.photo)}})],1),t._v(" "),s("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[s("v-row",{staticClass:"pa-4",class:a%2==1?"text-right":"text-left"},[s("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),e.position?s("div",{staticClass:"text-uppercase"},[t._v("\n                  "+t._s(e.position)+"\n                ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),s("v-col",{attrs:{cols:"12"}},[s("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n        * Has changed affiliation since contributing to FAIRtracks\n      ")])])],2)],1)}),[],!1,null,"fc4e4872",null);e.default=c.exports;i()(c,{UiMinorTitle:s(897).default,UiSmartImg:s(224).default}),i()(c,{VCol:r.a,VRow:n.a})},897:function(t,e,s){"use strict";s.r(e);var a={props:{title:{type:String,default:""}}},l=s(19),o=Object(l.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=o.exports},934:function(t,e,s){var a=s(963);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(11).default)("cf0ed614",a,!0,{sourceMap:!1})},962:function(t,e,s){"use strict";s(934)},963:function(t,e,s){var a=s(10)(!1);a.push([t.i,".team-column[data-v-fc4e4872]{max-width:250px;min-width:250px}",""]),t.exports=a}}]);