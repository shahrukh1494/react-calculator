(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{10:function(_,e,t){},12:function(_,e,t){"use strict";t.r(e);var a=t(1),c=t.n(a),n=t(3),r=t.n(n),l=(t(10),t(4)),i=t(0);var s=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(l.a,{})})},d=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,r=e.getTTFB;t(_),a(_),c(_),n(_),r(_)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s,{})}),document.getElementById("root")),d()},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_newgitproject_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(D_newgitproject_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),data=_useState2[0],setData=_useState2[1],length=data.length,handleClick=function(_){setData(data+_.target.name)},addZero=function(_){""!==data&&"+"!==data.charAt(length-1)&&"-"!==data.charAt(length-1)&&"/"!==data.charAt(length-1)&&"*"!==data.charAt(length-1)&&setData(data+_.target.name)},addDecimal=function(_){-1!==data.indexOf(".")&&-1!==data.slice(data.lastIndexOf("+")+1,length+1).indexOf(".")&&-1!==data.slice(data.lastIndexOf("-")+1,length+1).indexOf(".")&&-1!==data.slice(data.lastIndexOf("/")+1,length+1).indexOf(".")&&-1!==data.slice(data.lastIndexOf("*")+1,length+1).indexOf(".")||setData(data+_.target.name)},calculate=function calculate(){try{""!==data&&"+"!==data.charAt(length-1)&&"-"!==data.charAt(length-1)&&"/"!==data.charAt(length-1)&&"*"!==data.charAt(length-1)&&setData(eval(data).toString())}catch(err){setData("ERROR! INVALID INPUT")}},clear=function(){setData("")},del=function(){setData(data.slice(0,length-1))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"data",children:data}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"keypad",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"clear",onClick:clear,children:"CE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"delete",onClick:del,children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"operator",name:"/",onClick:handleClick,children:"\xf7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"7",onClick:handleClick,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"8",onClick:handleClick,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"9",onClick:handleClick,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"*",className:"operator",onClick:handleClick,children:"\xd7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"4",onClick:handleClick,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"5",onClick:handleClick,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"6",onClick:handleClick,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"-",className:"operator",onClick:handleClick,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"1",onClick:handleClick,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"2",onClick:handleClick,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"3",onClick:handleClick,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"+",className:"operator",onClick:handleClick,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:".",onClick:addDecimal,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{name:"0",onClick:addZero,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"result",onClick:calculate,children:"="})]})]})};__webpack_exports__.a=Calculator}},[[12,1,2]]]);
//# sourceMappingURL=main.f506bc6e.chunk.js.map