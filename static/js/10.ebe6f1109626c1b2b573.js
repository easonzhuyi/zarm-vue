(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(t,s,a){"use strict";a.r(s);var i=a(6),e=a(7),l=a(8),n=[{url:"#",img:"1"},{url:"#",img:"2"},{url:"#",img:"3"}],_={data:function(){return{ITEMS:n,i:{}}},methods:{handleChangeStart:function(t){console.log(t)},handleChangeEnd:function(t){console.log(t)},onJumpTo:function(){this.$refs.swipe.onJumpTo(0)},onSlideTo:function(){this.$refs.swipe.onSlideTo(2)}}},v=a(0),c=Object(v.a)(_,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-swipe",{attrs:{direction:"left"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(s,i){return a("za-swipe-item",{key:i},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(s.img))])])])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-swipe",{attrs:{direction:"bottom"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(s,i){return a("za-swipe-item",{key:i},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(s.img))])])])}))],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-swipe",{ref:"swipe",attrs:{direction:"left",loop:""},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,function(s,i){return a("za-swipe-item",{key:i},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(s.img))])])])})),t._v(" "),a("div",{staticClass:"controls",staticStyle:{"text-align":"center","padding-bottom":"20px"}},[a("za-button",{attrs:{size:"sm"},on:{click:t.onJumpTo}},[t._v("无动画切换指定页")]),t._v(" "),a("za-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"sm"},on:{click:t.onSlideTo}},[t._v("滑动到指定页")])],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(3),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-swipe",{attrs:{direction:"left",loop:"","auto-play":""}},t._l(t.ITEMS,function(s,i){return a("za-swipe-item",{key:i},[a("div",{staticClass:"swipe-item-pic"},[a("span",{staticStyle:{display:"block",width:"100%",height:"100px","text-align":"center","line-height":"100px"}},[t._v(t._s(s.img))])])])}))],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(4),t._v("\n      "),t._m(5),t._v("\n        "),t._m(6),t._v("\n          "),t._m(7),t._v(t._s(t.i.img)),t._m(8),t._v("\n        "),t._m(9),t._v("\n      "),t._m(10),t._v("\n    "),t._m(11),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("纵向")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(12),t._v("\n      "),t._m(13),t._v("\n        "),t._m(14),t._v("\n          "),t._m(15),t._v(t._s(t.i.img)),t._m(16),t._v("\n        "),t._m(17),t._v("\n      "),t._m(18),t._v("\n    "),t._m(19),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("循环轮播")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(20),t._v("\n      "),t._m(21),t._v("\n        "),t._m(22),t._v("\n          "),t._m(23),t._v(t._s(t.i.img)),t._m(24),t._v("\n        "),t._m(25),t._v("\n      "),t._m(26),t._v("\n    "),t._m(27),t._v("\n    "),t._m(28),t._v("\n      "),t._m(29),t._v("无动画切换指定页"),t._m(30),t._v("\n      "),t._m(31),t._v("滑动到指定页"),t._m(32),t._v("\n    "),t._m(33),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("自动轮播")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(34),t._v("\n      "),t._m(35),t._v("\n        "),t._m(36),t._v("\n          "),t._m(37),t._v(t._s(t.i.img)),t._m(38),t._v("\n        "),t._m(39),t._v("\n      "),t._m(40),t._v("\n    "),t._m(41),t._v("\n")])])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Swipe Attributes")]),t._v(" "),t._m(42),t._v(" "),a("h4",[t._v("Swipe Events")]),t._v(" "),t._m(43)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("基本\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("纵向\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("循环轮播\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("自动轮播\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"swipe-item-pic"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("style")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"display:block;width:100%;height:100px;text-align:center;line-height:100px;"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe-item")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottom"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"swipe-item-pic"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("style")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"display:block;width:100%;height:100px;text-align:center;line-height:100px;"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe-item")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("ref")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"swipe"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loop")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"swipe-item-pic"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("style")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"display:block;width:100%;height:100px;text-align:center;line-height:100px;"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe-item")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"controls"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"text-align:center;padding-bottom:20px;"')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"onJumpTo"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-button")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"margin-left:10px;"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"onSlideTo"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-button")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loop")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("auto-play")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-swipe-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"swipe-item-pic"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("<"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),s("span",{staticClass:"hljs-attr"},[this._v("style")]),this._v("="),s("span",{staticClass:"hljs-string"},[this._v('"display:block;width:100%;height:100px;text-align:center;line-height:100px;"')]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe-item")]),this._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-swipe")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-swipe")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'left'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'left', 'right', 'top', 'bottom'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("滑动方向")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number, string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("高度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否循环")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autoPlay")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否自动轮播")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("changeStart")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画开始时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index, 当前处于激活状态幻灯片的index值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("changeEnd")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画结束后触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index, 动画结束时处于激活状态幻灯片的index值")])])])])}],!1,null,null,null).exports,h=(a(49),{components:{Container:i.a,PageHeader:e.a,PageFooter:l.a,Demo:c}}),r=Object(v.a)(h,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",{staticClass:"swipe-page"},[s("PageHeader",{attrs:{title:"图片轮播 swipe"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=10.ebe6f1109626c1b2b573.js.map