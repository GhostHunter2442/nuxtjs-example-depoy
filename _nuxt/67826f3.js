(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1b7833da",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(292)},299:function(t,e,n){var o=n(59)(!1);o.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=o},317:function(t,e,n){"use strict";n.r(e);var o=n(17),r=(n(52),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("posts/hello").fetch();case 3:return o=e.sent,e.abrupt("return",{post:o,title:o.title});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Nuxt js"}},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/login");case 3:case"end":return e.stop()}}),e)})))()}}}),c=(n(298),n(53)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"links"},[n("nuxt-link",{attrs:{to:"about"}},[t._v("About")]),t._v(" "),n("nuxt-link",{attrs:{to:"photos"}},[t._v("Photo")])],1),t._v(" "),n("b-button",{on:{click:t.logout}},[t._v("logout")]),t._v(" "),n("nuxt-content",{attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);