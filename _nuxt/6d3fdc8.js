(window.webpackJsonp=window.webpackJsonp||[]).push([[30,39],{1e3:function(t,e,n){"use strict";n(979)},1001:function(t,e,n){var o=n(10)(!1);o.push([t.i,".zoom{-webkit-transform:scale(1.025) translateY(-10px);transform:scale(1.025) translateY(-10px)}.notzoom,.zoom{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}",""]),t.exports=o},1042:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},cards:{type:Array,default:function(){return[]}}}},r=(n(1e3),n(26)),l=n(45),c=n.n(l),d=n(228),f=n(940),m=n(974),v=n(941),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[n("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),n("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return t._l(t.cards,(function(e,r){return n("v-card",{key:"c_"+r,staticClass:"transition-swing mx-auto",class:o?"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:o?24:2,href:e.link?e.link:null,ripple:!1,"max-width":e.maxWidth?e.maxWidth:null},on:{click:function(e){return t.$emit("btn-click",!0)}}},[n("UiSmartImg",{staticClass:"ma-6",attrs:{contain:"","image-asset":t.$getImageAssetObject("images",e.img[0],e.img[1])}})],1)}))}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMinorTitle:n(952).default,UiSmartImg:n(412).default}),c()(component,{VCard:d.a,VCol:f.a,VHover:m.a,VRow:v.a})},952:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=component.exports},974:function(t,e,n){"use strict";var o=n(132),r=n(31),l=n(7),c=n(8);e.a=Object(l.a)(o.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},979:function(t,e,n){var content=n(1001);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7a61d650",content,!0,{sourceMap:!1})}}]);