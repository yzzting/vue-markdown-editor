webpackJsonp([1,2],{10:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"yzz-menu",data:function(){return{}},computed:{articleList:function(){return this.$store.getters.articleList}},methods:{seleteArticle:function(t){this.$store.dispatch("selectArticle",t-1)},deleteArticle:function(t){console.log("1"),this.$store.dispatch("deleteArticle",t-1)}}}},11:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"outputer",computed:{ripeTxt:function(){return this.$store.getters.articleMd}}}},12:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2),o=e.n(i),c=function(t,n,e,i,o,c,r){return e=n.substring(0,o)+i+n.substring(o,n.length),t.value=e,t.setSelectionRange(o+c,o.length-r),e},r=function(t,n,e,i,o,c,r){e=n.substring(0,i)+c+n.substring(i,o)+r+n.substring(o,o.length),t.value=e;var a=e.length;return t.setSelectionRange(a,a),e};n.default={name:"sidenav",data:function(){return{font:"georgia"}},components:{yzzMenu:o.a},methods:{selectFont:function(){this.$store.dispatch("updateFont",this.font)},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},buttonFunction:function(t){var n=document.querySelector("#inputer"),e=n.selectionStart,i=n.selectionEnd,o=n.value;n.focus();var a="";if(e===i)switch(t){case"**Blod**":a=c(n,o,a,t,i,2,2);break;case"*Italic*":a=c(n,o,a,t,i,1,1);break;case"[Link](http://)":a=c(n,o,a,t,i,7,2);break;case"`code`":a=c(n,o,a,t,i,1,1);break;case"![](http://)":a=c(n,o,a,t,i,7,2);break;default:a=o.substring(0,i)+t+o.substring(i,o.length),n.value=a}else switch(t){case"**Blod**":a=r(n,o,a,e,i,"**","**");break;case"*Italic*":a=r(n,o,a,e,i,"*","*");break;case"[Link](http://)":a=r(n,o,a,e,i,"[","](http://)");break;case"`code`":a=r(n,o,a,e,i,"`","`");break;case"![](http://)":a=r(n,o,a,e,i,"[","](http://)");break;default:return!1}a.length&&this.$store.dispatch("textInput",a)},articleAdd:function(){this.$store.dispatch("newArticle")}}}},13:function(t,n){},14:function(t,n){},15:function(t,n){},16:function(t,n){},17:function(t,n){},193:function(t,n,e){e(14);var i=e(0)(e(9),e(197),"data-v-4ef579f6",null);t.exports=i.exports},194:function(t,n,e){e(17);var i=e(0)(e(11),e(200),null,null);t.exports=i.exports},195:function(t,n,e){e(15);var i=e(0)(e(12),e(198),null,null);t.exports=i.exports},196:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("sidenav"),t._v(" "),e("div",{staticClass:"editor-box"},[e("inputer"),t._v(" "),e("outputer")],1)],1)},staticRenderFns:[]}},197:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-main"},[e("textarea",{style:{fontFamily:this.$store.getters.articleFont},attrs:{id:"inputer",autofocus:""},domProps:{value:t.rawTxt},on:{click:t.updatedFont,input:t.inputting}})])},staticRenderFns:[]}},198:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sidenav-main"},[e("md-toolbar",{staticClass:"toolbar-color"},[e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.toggleLeftSidenav(n)}}},[e("md-icon",[t._v("menu")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("**Bold**")}}},[e("md-icon",[t._v("format_bold")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("粗体")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("*Italic*")}}},[e("md-icon",[t._v("format_italic")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("斜体")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("[Link](http://)")}}},[e("md-icon",[t._v("link")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("插入链接")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("\n> ")}}},[e("md-icon",[t._v("format_quote")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("引用")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("`code`")}}},[e("md-icon",[t._v("code")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("插入代码")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("![](http://)")}}},[e("md-icon",[t._v("insert_photo")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("插入图片")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("\n\n---\n\n")}}},[e("md-icon",[t._v("format_underline")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("下划线")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9",title:"表格"},nativeOn:{click:function(n){t.buttonFunction("\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |")}}},[e("md-icon",[t._v("view_module")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("表格")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color",attrs:{"md-elevation":"9"},nativeOn:{click:function(n){t.buttonFunction("\n# ")}}},[e("md-icon",[t._v("title")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("标题")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color font-color",nativeOn:{click:function(n){t.buttonFunction("\n- [ ] ")}}},[e("md-icon",[t._v("check circle")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("复选框")])],1),t._v(" "),e("md-button",{staticClass:"md-raised button-color font-color",attrs:{title:"选择字体","md-fab-trigger":""}},[e("md-input-container",[e("md-icon",{staticClass:"font-underline"},[t._v("font_download")]),t._v(" "),e("label",{attrs:{for:"font"}}),t._v(" "),e("md-select",{attrs:{name:"font",id:"font"},model:{value:t.font,callback:function(n){t.font=n},expression:"font"}},[e("md-option",{attrs:{value:"georgia"},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Georgia")]),t._v(" "),e("md-option",{attrs:{value:"helvetica"},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Helvetica")]),t._v(" "),e("md-option",{attrs:{value:'"courier new"'},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Courier New")]),t._v(" "),e("md-option",{attrs:{value:'"Microsoft Yahei"'},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Microsoft Yahei")]),t._v(" "),e("md-option",{attrs:{value:"monospace"},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Monospace")]),t._v(" "),e("md-option",{attrs:{value:"Arial"},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Arial")]),t._v(" "),e("md-option",{attrs:{value:"Segoe UI"},nativeOn:{click:function(n){t.selectFont(n)}}},[t._v("Segoe UI")])],1)],1)],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-raised button-color button-add",attrs:{"md-elevation":"9"},on:{click:function(n){if(!("button"in n)&&t._k(n.keyCode,"nativ"))return null;t.articleAdd(n)}}},[e("md-icon",[t._v("note_add")]),t._v(" "),e("md-tooltip",{attrs:{"md-direction":"bottom"}},[t._v("添加文章")])],1)],1),t._v(" "),e("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{id:"closepage"}},[e("md-toolbar",{staticClass:"md-large"},[e("div",{staticClass:"md-toolbar-container"},[e("h3",{staticClass:"md-title"},[t._v("vue-markdown-editor")])])]),t._v(" "),e("yzz-menu")],1)],1)},staticRenderFns:[]}},199:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu-main"},[e("md-list-expand",{staticClass:"article-list"},[e("md-list",[t._l(t.articleList.length,function(n){return[e("md-list-item",{staticClass:"article-list-item",class:{current:t.articleList[n-1].current},nativeOn:{click:function(e){t.seleteArticle(n)}}},[e("span",{staticClass:"article-title"},[t._v("\n                        "+t._s(t.articleList[n-1].content.split("\n")[0])+"\n                    ")]),t._v(" "),e("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.deleteArticle(n)}}},[e("md-icon",[t._v("delete")])],1)],1)]})],2)],1)],1)},staticRenderFns:[]}},2:function(t,n,e){e(16);var i=e(0)(e(10),e(199),null,null);t.exports=i.exports},200:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"output-main",domProps:{innerHTML:t._s(t.ripeTxt)}})},staticRenderFns:[]}},203:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(1),o=e(6),c=e.n(o),r=e(7),a=e.n(r),s=e(5),l=(e.n(s),e(4));i.default.config.productionTip=!1,i.default.use(a.a),new i.default({el:"#app",store:l.a,render:function(t){return t(c.a)}})},4:function(t,n,e){"use strict";var i=e(1),o=e(202),c=e(19),r=e(192);i.default.use(o.a),r.setOptions({highlight:function(t){return c.highlightAuto(t).value}});var a=function(){for(var t="",n=0;n<=15;n++)t+=Math.floor(10*Math.random());return t},s={showMenu:!0,articleList:[{id:a(),content:"Untitled\n---\n",current:!0}],font:""},l=function(t){for(var n=[],e=0,i=t.articleList.length;e<i;e++)n.push(t.articleList[e].id),localStorage.setItem("idArr",n.join(","))},u={SHOW_MENU:function(t){t.showMenu=!t.showMenu},UPDATE_FONT:function(t,n){t.font=n,console.log(t.font)},NEW_ARTICLE:function(t){for(var n=0,e=t.articleList.length;n<e;n++)t.articleList[n].current=!1;var i={id:a(),content:"Untitled\n---\n",current:!0};t.articleList.push(i)},DELETE_ARTICLE:function(t,n){if(t.articleList.length>1){var e=localStorage.getItem("idArr").split(","),i=e.indexOf(t.articleList[n].id);e.splice(i,1),localStorage.setItem("idArr",e),localStorage.removeItem(t.articleList[n].id),t.articleList.splice(n,1);for(var o=0,c=t.articleList.length;o<c;o++)t.articleList[o].current=!1;t.articleList[0].current=!0}},TEXT_INPUT:function(t,n){for(var e=0,i=t.articleList.length;e<i;e++)t.articleList[e].current&&(t.articleList[e].content=n)},SAVE_CATCH:function(t){for(var n=0,e=t.articleList.length;n<e;n++)t.articleList[n].current&&(localStorage.setItem(t.articleList[n].id,t.articleList[n].content),l(t))},READ_CATCH:function(t){for(var n=0,e=t.articleList.length;n<e;n++)t.articleList[n].current&&(t.articleList[n].content=localStorage.getItem(t.articleList[n].id))},SELECT_ARTICLE:function(t,n){for(var e=0,i=t.articleList.length;e<i;e++)t.articleList[e].current=!1;t.articleList[n].current=!0},ARTICLE_LIST_FROM_LOCAL:function(t){if(localStorage.getItem("idArr")){t.articleList=null;for(var n=localStorage.getItem("idArr").split(","),e=[],i=0,o=n.length;i<o;i++){var c={id:"",content:"",current:!1};c.id=n[i],c.content=localStorage.getItem(n[i]),e.push(c)}t.articleList=e,t.articleList[0].current=!0}}},d={showMenu:function(t){(0,t.commit)("SHOW_MENU")},updateFont:function(t,n){(0,t.commit)("UPDATE_FONT",n)},newArticle:function(t){(0,t.commit)("NEW_ARTICLE")},deleteArticle:function(t,n){(0,t.commit)("DELETE_ARTICLE",n)},saveCatch:function(t){(0,t.commit)("SAVE_CATCH")},textInput:function(t,n){(0,t.commit)("TEXT_INPUT",n)},readCatch:function(t){(0,t.commit)("READ_CATCH")},selectArticle:function(t,n){(0,t.commit)("SELECT_ARTICLE",n)},articleListFromLocal:function(t){(0,t.commit)("ARTICLE_LIST_FROM_LOCAL")}},m={articleRaw:function(t){for(var n="",e=0,i=t.articleList.length;e<i;e++)t.articleList[e].current&&(n=t.articleList[e].content);return n},articleMd:function(t,n){return r(n.articleRaw)},articleList:function(t){return t.articleList},articleFont:function(t){return t.font}};n.a=new o.a.Store({state:s,mutations:u,actions:d,getters:m})},5:function(t,n){},6:function(t,n,e){e(13);var i=e(0)(e(8),e(196),null,null);t.exports=i.exports},8:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(195),o=e.n(i),c=e(193),r=e.n(c),a=e(194),s=e.n(a),l=e(2),u=e.n(l);n.default={name:"app",mounted:function(){this.$store.dispatch("articleListFromLocal")},components:{inputer:r.a,outputer:s.a,sidenav:o.a,yzzMenu:u.a}}},9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=this;n.default={name:"input",data:function(){return{font:""}},methods:{inputting:function(t){this.$store.dispatch("textInput",t.target.value),this.$store.dispatch("saveCatch")},updatedFont:function(){return this.$store.getters.articleFont}},watch:{font:function(){i.font=i.$store.getters.articleFont}},computed:{rawTxt:function(){return this.$store.getters.articleRaw}}}}},[203]);
//# sourceMappingURL=app.3c7d2c3352c5682c978f.js.map