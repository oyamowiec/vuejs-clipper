(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-812cfb94"],{"1c8d":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=this,t=a.$createElement,o=a._self._c||t;return o("div",[a.popup?o("div",{staticClass:"popup"},[o("div",{staticClass:"popup-content"},[o("div",{staticClass:"flow"},[o("loader",{attrs:{done:a.done}},[a._v("Converting")]),o("img",{staticClass:"img",attrs:{src:a.clipResult}}),o("div",{staticClass:"flex-center"},[o("div",{staticClass:"flex-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.filename,expression:"filename"}],attrs:{type:"text"},domProps:{value:a.filename},on:{input:function(e){e.target.composing||(a.filename=e.target.value)}}}),o("span",[a._v(".png")])])]),o("div",{staticClass:"flex-center"},[o("button",{staticClass:"btn g"},[o("a",{attrs:{href:a.link,download:a.filename}},[a._v("download")])]),o("button",{staticClass:"btn r",on:{click:function(){e.popup=!1}}},[a._v("close")])])],1),o("img",{staticClass:"close",attrs:{src:"icon/cancel.png",alt:""},on:{click:function(){e.popup=!1}}})])]):a._e(),o("div",{staticClass:"content"},[o("h2",[a._v("clipper-fixed")]),a._m(0),o("div",{staticClass:"flex-center"},[o("div",[o("h4",[a._v("demo")]),o("clipper-fixed",{ref:"clipper",staticClass:"fixed-sample",attrs:{src:a.imgUrl,border:a.border,ratio:a.ratio,rotate:a.rotate,grid:a.grid,bgColor:a.bgColor,shadow:a.shadow,round:a.round,preview:"preview"}})],1),o("div",{staticClass:"settings"},[o("h4",[a._v("settings")]),o("button",{staticClass:"btn",on:{click:a.clip}},[a._v("clip image")]),o("label",{staticClass:"btn",attrs:{for:"upload"}},[a._v("upload image")]),o("input",{attrs:{id:"upload",type:"file"},on:{change:function(e){a.upload(e)}}}),o("div",{staticClass:"flex"},[o("div",{staticClass:"flex"},[o("span",{staticClass:"label"},[a._v("border: ")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model.number",value:a.border,expression:"border",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:a.border},on:{input:function(e){e.target.composing||(a.border=a._n(e.target.value))},blur:function(e){a.$forceUpdate()}}})])])]),o("div",{staticClass:"flex"},[o("span",{staticClass:"label"},[a._v("layout: ")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.grid,expression:"grid"}],attrs:{type:"checkbox",name:"grid"},domProps:{checked:Array.isArray(a.grid)?a._i(a.grid,null)>-1:a.grid},on:{change:function(e){var t=a.grid,o=e.target,i=!!o.checked;if(Array.isArray(t)){var r=null,s=a._i(t,r);o.checked?s<0&&(a.grid=t.concat([r])):s>-1&&(a.grid=t.slice(0,s).concat(t.slice(s+1)))}else a.grid=i}}}),a._v("grid")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.round,expression:"round"}],attrs:{type:"checkbox",name:"round"},domProps:{checked:Array.isArray(a.round)?a._i(a.round,null)>-1:a.round},on:{change:function(e){var t=a.round,o=e.target,i=!!o.checked;if(Array.isArray(t)){var r=null,s=a._i(t,r);o.checked?s<0&&(a.round=t.concat([r])):s>-1&&(a.round=t.slice(0,s).concat(t.slice(s+1)))}else a.round=i}}}),a._v("round")])]),o("div",{staticClass:"flex"},[o("span",{staticClass:"label"},[a._v("ratio: ")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:1,checked:a._q(a.ratio,a._n(1))},on:{change:function(e){a.ratio=a._n(1)}}}),a._v("1:1")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:4/3,checked:a._q(a.ratio,a._n(4/3))},on:{change:function(e){a.ratio=a._n(4/3)}}}),a._v("4:3")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model.number",value:a.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"radio",name:"ratio"},domProps:{value:16/9,checked:a._q(a.ratio,a._n(16/9))},on:{change:function(e){a.ratio=a._n(16/9)}}}),a._v("16:9")])]),o("div",{staticClass:"flex"},[o("span",{staticClass:"label"},[a._v("bgColor: ")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#000000"},domProps:{checked:a._q(a.bgColor,"#000000")},on:{change:function(e){a.bgColor="#000000"}}}),o("span",{staticClass:"color-tick",staticStyle:{"background-color":"#000000"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"pink"},domProps:{checked:a._q(a.bgColor,"pink")},on:{change:function(e){a.bgColor="pink"}}}),o("span",{staticClass:"color-tick",staticStyle:{"background-color":"pink"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#a1cfea"},domProps:{checked:a._q(a.bgColor,"#a1cfea")},on:{change:function(e){a.bgColor="#a1cfea"}}}),o("span",{staticClass:"color-tick",staticStyle:{"background-color":"#a1cfea"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.bgColor,expression:"bgColor"}],attrs:{type:"radio",name:"bgColor",value:"#bc1229"},domProps:{checked:a._q(a.bgColor,"#bc1229")},on:{change:function(e){a.bgColor="#bc1229"}}}),o("span",{staticClass:"color-tick",staticStyle:{"background-color":"#bc1229"}})])]),o("div",{staticClass:"flex"},[o("span",{staticClass:"label"},[a._v("shadow: ")]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(0,0,0,0.4)"},domProps:{checked:a._q(a.shadow,"rgba(0,0,0,0.4)")},on:{change:function(e){a.shadow="rgba(0,0,0,0.4)"}}}),o("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(0,0,0,0.4)"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(0,0,0,0.8)"},domProps:{checked:a._q(a.shadow,"rgba(0,0,0,0.8)")},on:{change:function(e){a.shadow="rgba(0,0,0,0.8)"}}}),o("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(0,0,0,0.8)"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgba(255,255,255,0.2)"},domProps:{checked:a._q(a.shadow,"rgba(255,255,255,0.2)")},on:{change:function(e){a.shadow="rgba(255,255,255,0.2)"}}}),o("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgba(255,255,255,0.2)"}})]),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:a.shadow,expression:"shadow"}],attrs:{type:"radio",name:"shadow",value:"rgb(27, 170, 232,0.5)"},domProps:{checked:a._q(a.shadow,"rgb(27, 170, 232,0.5)")},on:{change:function(e){a.shadow="rgb(27, 170, 232,0.5)"}}}),o("span",{staticClass:"shadow-tick",staticStyle:{"background-color":"rgb(27, 170, 232,0.5)"}})])]),o("div",{staticClass:"flex"},[o("span",{staticClass:"w80 label"},[a._v("rotate: ")]),o("clipper-range",{staticClass:"range",attrs:{min:-180,max:180},model:{value:a.rotate,callback:function(e){a.rotate=e},expression:"rotate"}})],1)])]),o("div",{staticClass:"flex"},[o("clipper-preview",{staticClass:"preview preview-lg",attrs:{name:"preview"}}),o("clipper-preview",{staticClass:"preview preview-md",attrs:{name:"preview"}}),o("clipper-preview",{staticClass:"preview preview-sm",attrs:{name:"preview"}})],1)])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"area"},[t("ul",[t("li",[e._v("Drag and scale image to clip.")]),t("li",[e._v("It is recommended to use it to clip image in a fixed ratio, as the profile picture.")]),t("li",[e._v("Scale and ratio are default features, and also support rotate.")]),t("li",[e._v("Its height is auto adjust by ratio, you can only set the width of this component.")]),t("li",{staticStyle:{color:"blue"}},[e._v("This demo using normal input to upload files so it won't transform EXIF image.")])])])}],r=t("ab2a"),s=t("555f"),n={extends:{mixins:[r["a"]]},components:{Loader:s["default"]},data:function(){return{imgUrl:"tanya.jpg",border:1,ratio:1,rotate:0,grid:!0,bgColor:"#000000",shadow:"rgba(0,0,0,0.4)",round:!1,popup:!1,done:!1,clipResult:null,link:null,filename:"clip"}},methods:{upload:function(e){0!==e.target.files.length&&(this.imgUrl=window.URL.createObjectURL(e.target.files[0]))},clip:function(){this.popup=!0,this.done=!1,this.clipResult=null,this.clipToURL()}}},l=n,c=(t("4373"),t("2877")),d=Object(c["a"])(l,o,i,!1,null,"0e9e3b69",null);a["default"]=d.exports},"386b":function(e,a,t){var o=t("5ca1"),i=t("79e5"),r=t("be13"),s=/"/g,n=function(e,a,t,o){var i=String(r(e)),n="<"+a;return""!==t&&(n+=" "+t+'="'+String(o).replace(s,"&quot;")+'"'),n+">"+i+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(n),o(o.P+o.F*i(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},4373:function(e,a,t){"use strict";var o=t("6398"),i=t.n(o);i.a},6398:function(e,a,t){},ab2a:function(e,a,t){"use strict";t("b54a");var o=t("795b"),i=t.n(o);a["a"]={methods:{clipToURL:function(){var e=this;return new i.a(function(a,t){var o=e.$refs.clipper.clip();o.toBlob?o.toBlob(function(t){e.clipResult&&URL.revokeObjectURL(e.clipResult),e.clipResult=URL.createObjectURL(t),e.link=e.clipResult,e.resultDone(),a()},"image/png",1):(e.clipResult=o.toDataURL("image/png",1),e.link=e.clipResult,e.resultDone(),a())})},resultDone:function(){this.done=!0}}}},b54a:function(e,a,t){"use strict";t("386b")("link",function(e){return function(a){return e(this,"a","href",a)}})}}]);
//# sourceMappingURL=chunk-812cfb94.3092cd98.js.map