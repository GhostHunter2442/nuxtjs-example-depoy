(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{291:function(t,o,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("163790d8",content,!0,{sourceMap:!1})},296:function(t,o,n){"use strict";n(291)},297:function(t,o,n){var e=n(59)(!1);e.push([t.i,".photo-info[data-v-4b5b5482]{width:860px;margin:0 auto;text-align:center}.img[data-v-4b5b5482]{width:100%}.link[data-v-4b5b5482]{display:inline-block;margin-top:2em}",""]),t.exports=e},315:function(t,o,n){"use strict";n.r(o);var e=n(17),r=(n(52),{asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function o(){var n,e,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.$axios,e=t.params,o.next=3,n.$get("https://picsum.photos/id/".concat(e.id,"/info"));case 3:return r=o.sent,o.abrupt("return",{photo:r});case 5:case"end":return o.stop()}}),o)})))()}}),c=(n(296),n(53)),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"photo-info"},[n("h1",[t._v("Photo Detail")]),t._v(" "),n("img",{staticClass:"img",attrs:{src:t.photo.download_url}}),t._v(" "),n("p",[t._v("Author : "+t._s(t.photo.author))]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/photos"}},[t._v("Back to Photos")])],1)}),[],!1,null,"4b5b5482",null);o.default=component.exports}}]);