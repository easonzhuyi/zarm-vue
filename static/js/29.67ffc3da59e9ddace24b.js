(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(t,s,a){"use strict";a.r(s);var e=a(6),l=a(7),i=a(8),n={data:function(){return{visible1:!1,visible2:!1,visible3:!1,v1:"",v2:"",v3:""}},methods:{handleChange1:function(t){["close","ok"].indexOf(t)>-1||(this.v1=getValue(this.v1,t),console.log(this.v1))},showPicker:function(t){this[t]=!0},handleChange2:function(t){["close","ok"].indexOf(t)>-1||(this.v2=getValue(this.v2,t),console.log(this.v2))},handleChange3:function(t){["close","ok"].indexOf(t)>-1||(this.v3=getValue(this.v3,t),console.log(this.v3))}}},v=a(0),_=Object(v.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"数字"},on:{click:function(s){t.showPicker("visible1")}}},[t._v("\n      "+t._s(t.v1)+"\n    ")]),t._v(" "),a("za-cell",{attrs:{title:"金额"},on:{click:function(s){t.showPicker("visible2")}}},[t._v("\n      "+t._s(t.v2)+"\n    ")]),t._v(" "),a("za-cell",{attrs:{title:"证件"},on:{click:function(s){t.showPicker("visible3")}}},[t._v("\n      "+t._s(t.v3)+"\n    ")]),t._v(" "),a("za-keyboard-picker",{attrs:{visible:t.visible1,type:"number"},on:{"update:visible":function(s){t.visible1=s},keyClick:t.handleChange1}}),t._v(" "),a("za-keyboard-picker",{attrs:{visible:t.visible2,type:"price"},on:{"update:visible":function(s){t.visible2=s},keyClick:t.handleChange2}}),t._v(" "),a("za-keyboard-picker",{attrs:{visible:t.visible3,type:"idcard"},on:{"update:visible":function(s){t.visible3=s},keyClick:t.handleChange3}})],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-keyboard",{attrs:{type:"number"}})],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("类型")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),t._m(2),t._v("\n      "+t._s(t.v1)+"\n    "),t._m(3),t._v("\n    "),t._m(4),t._v("\n      "+t._s(t.v2)+"\n    "),t._m(5),t._v("\n      "),t._m(6),t._v("\n      "+t._s(t.v3)+"\n    "),t._m(7),t._v("\n    "),t._m(8),t._m(9),t._v("\n    "),t._m(10),t._m(11),t._v("\n    "),t._m(12),t._m(13),t._v("\n")])])]),t._v(" "),t._m(14),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("keyboard Attributes")]),t._v(" "),t._m(15),t._v(" "),a("h4",[t._v("keyboardPicker Attributes")]),t._v(" "),t._m(16),t._v(" "),a("h4",[t._v("keyboard & keyboardPicker Events")]),t._v(" "),t._m(17)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("类型\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("键盘\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"数字"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"showPicker('visible1')\"")]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"金额"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"showPicker('visible2')\"")]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"证件"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"showPicker('visible3')\"")]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("keyClick")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange1"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-keyboard-picker")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"price"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("keyClick")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange2"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-keyboard-picker")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible3"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"idcard"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("keyClick")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange3"')]),t._v(">")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"hljs-tag"},[this._v("</"),s("span",{staticClass:"hljs-name"},[this._v("za-keyboard-picker")]),this._v(">")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("键盘")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard")]),t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-keyboard")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'number'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键盘类型，可选"),a("code",[t._v("number")]),t._v(","),a("code",[t._v("price")]),t._v(","),a("code",[t._v("idcard")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("visible")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示, 支持.sync修饰符 (v2.3.0+)")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("keyClick")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击键盘时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最新点击的值")])])])])}],!1,null,null,null).exports,c={components:{Container:e.a,PageHeader:l.a,PageFooter:i.a,Demo:_}},r=Object(v.a)(c,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",[s("PageHeader",{attrs:{title:"数字键盘 Keyboard & KeyboardPicker"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=29.67ffc3da59e9ddace24b.js.map