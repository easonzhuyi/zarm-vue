(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{159:function(t,n,e){"use strict";e.r(n);var i=e(6),o=e(7),c=e(8),s={data:function(){return{visible1:!1,visible2:!1,visible3:!1,actions1:[{text:"操作一",onClick:function(){return console.log("action 1")}},{text:"操作二",onClick:function(){return console.log("action 2")}},{theme:"error",text:"操作三",onClick:function(){return console.log("action 3")}}],actions2:[{text:"操作一",onClick:function(){return console.log("action 1")}},{text:"操作二",onClick:function(){return console.log("action 2")}}]}},methods:{cancelCb:function(t,n){console.log(t,n)}}},a=e(0),l=Object(a.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("za-panel",[e("za-panel-header",{attrs:{title:"基本"}}),t._v(" "),e("za-panel-body",[e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){t.visible2=!0}},slot:"description"},[t._v("开启")]),t._v("\n        普通\n      ")],1),t._v(" "),e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){t.visible1=!0}},slot:"description"},[t._v("开启")]),t._v("\n        带取消操作\n      ")],1),t._v(" "),e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(n){t.visible3=!0}},slot:"description"},[t._v("开启")]),t._v("\n        圆角，留边\n      ")],1)],1)],1),t._v(" "),e("za-actionsheet",{attrs:{visible:t.visible1,actions:t.actions1},on:{"update:visible":function(n){t.visible1=n},cancel:t.cancelCb}}),t._v(" "),e("za-actionsheet",{attrs:{visible:t.visible2,actions:t.actions2,showCancel:!1},on:{"update:visible":function(n){t.visible2=n},cancel:t.cancelCb}}),t._v(" "),e("za-actionsheet",{attrs:{visible:t.visible3,spacing:!0,shape:"radius",actions:t.actions2},on:{"update:visible":function(n){t.visible3=n},cancel:t.cancelCb}})],1)},[],!1,null,null,null).exports,r={components:{Container:i.a,PageHeader:o.a,PageFooter:c.a,Demo:l}},u=Object(a.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("Container",{staticClass:"actionsheet-page"},[n("PageHeader",{attrs:{title:"动作面板 ActionSheet"}}),this._v(" "),n("Demo"),this._v(" "),n("PageFooter")],1)},[],!1,null,null,null);n.default=u.exports}}]);
//# sourceMappingURL=13.15cbdff711fbb7dca8f9.js.map