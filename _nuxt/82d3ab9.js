(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1320:function(t,e,n){"use strict";var r=n(1342);e.a={computed:{markdownFiles:function(){return this.markdownFilesDir?this.$loadMarkdownFilesInDir(this.markdownFilesDir):[]}},methods:{compileMarkdown:function(t){return t&&"string"==typeof t?r.marked.parseInline(t,{breaks:!0}):t}}}},1321:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(126),a="lateRendererMounted";e.b={computed:{isLateRenderer:function(){return"componentId"in this&&r.MD_REG_LATE_RENDERERS.has(this.componentId)}},mounted:function(){this.isLateRenderer&&this.$nuxt.$emit(a)}}},1335:function(t,e,n){var r=n(1344);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(29).default)("5ce81993",r,!0,{sourceMap:!1})},1343:function(t,e,n){"use strict";n(1335)},1344:function(t,e,n){var r=n(28)(!1);r.push([t.i,".table_header{vertical-align:top}",""]),t.exports=r},1348:function(t,e,n){"use strict";n.r(e);var r=n(248),a=n(1307),s=n(1316),i=n(1306),o=n(158),l=n(1312),c=(n(41),n(252),n(42),n(35),n(51),n(56),n(57),n(69),n(86)),u=n(1320),d=n(1321),p={mixins:[u.a,d.b],props:{csvBaseFileName:{type:String,required:!0},delimiter:{type:String,default:""},collapseLargeLists:{type:Boolean,default:!0},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,required:!0}},data:function(){return{componentId:"ui-csv-table",search:""}},computed:{baseFilePath:function(){return"/data/tables/"+this.csvBaseFileName},headers:function(){return this.createHeaders(this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath))},items:function(){return this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](this.baseFilePath,this.delimiter)}},methods:{getMobileBreakpoint:function(){return null},createHeaders:function(t){return t.map((function(t){return{text:t,value:t,class:"table_header"}}))},isLargeList:function(t){return!(!this.collapseLargeLists||!Array.isArray(t))&&t.length>3},parseArrayToString:function(t){return this.compileMarkdown(t.join(",\n"))},isArray:function(t){return Array.isArray(t)}}},m=(n(1343),n(61)),f=Object(m.a)(p,(function(){var t=this,e=t._self._c;return e(i.a,{staticClass:"px-4",attrs:{"no-gutters":""}},[e(a.a,{attrs:{cols:"12"}},[e(r.d,[e(o.a,{attrs:{label:"Search","single-line":"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("UiSmartIcon",{attrs:{name:"magnify"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(a.a,{attrs:{cols:"12"}},[e(s.a,{attrs:{dense:"",search:t.search,headers:t.headers,items:t.items,"items-per-page":t.itemsPerPage,height:"100%","fixed-header":"","mobile-breakpoint":t.getMobileBreakpoint()},scopedSlots:t._u([{key:"item",fn:function(n){var r=n.item;return[e("tr",t._l(r,(function(n){return e("td",{key:n.name},[t.isLargeList(n)?e(l.a,{attrs:{bottom:"",transition:"fade-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,a=n.attrs;return[e("span",t._g(t._b({staticStyle:{"text-align":"center","text-decoration":"underline dotted"}},"span",a,!1),r),[t._v("\n                  Multiple\n                ")])]}}],null,!0)},[t._v(" "),e("div",{staticClass:"d-flex flex-column my-4 mx-2",staticStyle:{"text-align":"center"}},[e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(n))}})])]):t.isArray(n)?e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(n))}}):e("span",{domProps:{innerHTML:t._s(t.compileMarkdown(n))}})],1)})),0)]}}])})],1),t._v(" "),e(a.a,{attrs:{cols:"12"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.tableCaption,expression:"tableCaption"}],staticClass:"body-2 font-italic text-center pt-6",domProps:{innerHTML:t._s(t.compileMarkdown(t.tableCaption))}})]),t._v(" "),e(a.a,{attrs:{cols:"12"}},[e("p",{staticClass:"body-2 font-italic text-center pt-6"},[t._v("\n      "+t._s(t.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=f.exports;installComponents(f,{UiSmartIcon:n(402).default})}}]);