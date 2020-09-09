(this["webpackJsonpbtc-app"]=this["webpackJsonpbtc-app"]||[]).push([[0],{30:function(e,n,t){e.exports=t(53)},53:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),o=t.n(a),u=t(25),l=t.n(u),c=t(2),i=t(9),s=t(5),d=t.n(s),f=t(10),p=t(8);function v(){var e=Object(r.a)(["\n  width: 100%;\n  resize: none;\n  height: 256px;\n  font-size: 16px;\n  padding: 16px 24px;\n  border-radius: 6px;\n  border-color: #d9d9d9;\n\n  &:read-only {\n    cursor: not-allowed;\n\n    &:focus,\n    &:active {\n      outline: none;\n      border-color: #d9d9d9;\n    }\n  }\n\n  &:focus,\n  &:active {\n    outline: none;\n    border-color: #2f54eb;\n  }\n"]);return v=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: block;\n  color: #000000;\n  font-weight: bold;\n  margin-bottom: 16px;\n"]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  width: 48%;\n"]);return b=function(){return e},e}var h=c.b.div(b()),g=c.b.label(m()),x=c.b.textarea(v()),E=function(e){return o.a.createElement(h,null,o.a.createElement(g,null,e.label),o.a.createElement(x,{value:e.value,readOnly:e.readOnly,onChange:e.onChange,placeholder:e.placeholder}))};function j(){var e=Object(r.a)(["\n  margin: 16px 24px 16px 24px;\n"]);return j=function(){return e},e}function O(){var e=Object(r.a)(["\n  border-bottom: 1px solid #d9d9d9;\n"]);return O=function(){return e},e}var y=c.b.div(O()),V=c.b.p(j()),k=function(e){return o.a.createElement(y,null,o.a.createElement(V,null,e.message))};function C(){var e=Object(r.a)(["\n  margin: 0;\n"]);return C=function(){return e},e}function w(){var e=Object(r.a)(["\n  padding: 16px 24px;\n  background: #fafafa;\n  border-top: 1px solid #d9d9d9;\n  border-bottom: 1px solid #d9d9d9;\n"]);return w=function(){return e},e}function S(){var e=Object(r.a)(["\n  margin-top: 32px;\n"]);return S=function(){return e},e}var z=c.b.div(S()),I=c.b.div(w()),A=c.b.h3(C()),N=function(e){return o.a.createElement(z,null,o.a.createElement(I,null,o.a.createElement(A,null,"Error messages")),0===e.errors.length&&o.a.createElement(k,{message:"Keep going, you haven't made any mistakes yet!"}),e.errors.map((function(e){return o.a.createElement(k,{key:e,message:e})})))},U=t(14);var M=function(e){var n=o.a.useState(e),t=Object(p.a)(n,2),r=t[0],a=t[1];return[r,o.a.useCallback((function(e){a((function(n){return Object(U.a)(Object(U.a)({},n),e)}))}),[])]},T=t(12),B=t.n(T),F=t(29),J=function e(n){var t=this;Object(F.a)(this,e),this.name=void 0,this.value=void 0,this.error=void 0,this.method=void 0,this.argument=void 0,this.exchange=void 0,this.getValues=function(){return{name:t.name,value:t.value,error:t.error,method:t.method,argument:t.argument,exchange:t.exchange}},this.setValue=function(e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},this.name=(null===n||void 0===n?void 0:n.name)||null,this.value=(null===n||void 0===n?void 0:n.value)||null,this.error=(null===n||void 0===n?void 0:n.error)||null,this.method=(null===n||void 0===n?void 0:n.method)||null,this.argument=(null===n||void 0===n?void 0:n.argument)||null,this.exchange=(null===n||void 0===n?void 0:n.exchange)||null};function L(){var e=Object(r.a)(["\n  color: #8c8c8c;\n  font-size: 26px;\n  text-align: center;\n  margin: 0 0 64px 0;\n"]);return L=function(){return e},e}function P(){var e=Object(r.a)(["\n  font-size: 32px;\n  text-align: center;\n  margin: 32px 0;\n"]);return P=function(){return e},e}function R(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return R=function(){return e},e}function q(){var e=Object(r.a)([""]);return q=function(){return e},e}var D=c.b.section(q()),H=c.b.div(R()),K=c.b.h1(P()),$=c.b.h2(L()),_=function(){var e=M({inputValue:"",outputValue:"",selectors:[],errors:[]}),n=Object(p.a)(e,2),t=n[0],r=n[1],a=o.a.useCallback(function(){var e=Object(f.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.map(function(){var e=Object(f.a)(d.a.mark((function e(n){var t,r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n.argument){e.next=14;break}return e.next=4,l=n.argument,B.a.get("https://api.coinpaprika.com/v1/search",{params:{q:l,modifier:"symbol_search",limit:1}});case 4:if(t=e.sent,!(r=t.data.currencies[0])){e.next=12;break}return e.next=9,u=r.id,B.a.get("https://api.coinpaprika.com/v1/coins/".concat(u,"/ohlcv/latest"));case 9:a=e.sent,o=a.data[0],n.setValue({name:r.name,exchange:o.open||null});case 12:return r||n.setValue({error:"Coin doesn't exist for selector ".concat(n.value)}),e.abrupt("return",n);case 14:return n.setValue({error:"No argument for selector ".concat(n.value)}),e.abrupt("return",n);case 18:return e.prev=18,e.t0=e.catch(0),n.setValue({error:"Unable to get data for selector ".concat(n.value," from Coinpaprika's API. Try again later.")}),e.abrupt("return",n);case 22:case"end":return e.stop()}var u,l}),e,null,[[0,18]])})));return function(n){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.abrupt("return",r({selectors:[].concat(Object(i.a)(t.selectors),Object(i.a)(a))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t.selectors,r]),u=o.a.useCallback((function(){var e=/(?<=\s)(.*?)(?=\s)/g,n=t.inputValue.match(/\{{([^{}]*)\}}/g);if(n&&n.length>0){var r=n.map((function(n){var t=new J,r=n.match(e);if(r&&r[0]){var a=r[0].split("/"),o=a[0],u=a[1];return o&&u?(t.setValue({method:o,argument:u,value:n}),t):(t.setValue({error:"Cannot read method and argument of selector ".concat(n,".")}),t)}return t.setValue({error:"Cannot decode selector ".concat(n,".")}),t})).filter((function(e){return void 0===t.selectors.find((function(n){return n.value===(null===e||void 0===e?void 0:e.value)}))}));a(r)}}),[t.inputValue,t.selectors,a]),l=o.a.useCallback((function(){t.selectors.forEach((function(e){if(e.value){var n=t.inputValue.includes(e.value),a=void 0!==t.errors.find((function(n){return n.id===e.value}));n&&e.error&&!a&&r({errors:[].concat(Object(i.a)(t.errors),[{id:e.value,message:e.error}])}),!n&&a&&r({errors:t.errors.filter((function(n){return n.id!==e.value}))})}}))}),[t.errors,t.inputValue,t.selectors,r]),c=o.a.useCallback((function(){var e=t.inputValue;t.selectors.forEach((function(n){if(n.value&&n.method){var t,r=new RegExp(n.value,"g"),a="name"===n.method.toLowerCase(),o="rate"===n.method.toLowerCase();if(a&&(e=e.replace(r,n.name||"")),o)e=e.replace(r,"$".concat(null===(t=n.exchange)||void 0===t?void 0:t.toFixed(2))||!1)}})),e!==t.outputValue&&r({outputValue:e})}),[t.inputValue,t.selectors,t.outputValue,r]);return o.a.useEffect((function(){var e=setTimeout(u,1e3);return function(){return clearTimeout(e)}}),[t.inputValue]),o.a.useEffect((function(){c(),l()}),[t.inputValue,t.selectors,u,l,c]),o.a.createElement(D,null,o.a.createElement(K,null,"Cryptocurrency Exercise"),o.a.createElement($,null,"by Adam Megger"),o.a.createElement(H,null,o.a.createElement(E,{id:"input",label:"Input",value:t.inputValue,spellCheck:"false",onChange:function(e){r({inputValue:e.target.value})},placeholder:"Start typing..."}),o.a.createElement(E,{readOnly:!0,id:"input",label:"Output",value:t.outputValue,onChange:function(e){return e.preventDefault()},placeholder:"...so you will see your output here."})),t.inputValue.length>0&&o.a.createElement(N,{errors:t.errors.map((function(e){return e.message}))}))};function G(){var e=Object(r.a)(["\n  * {\n    color: #1f1f1f;\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n    line-height: 24px;\n  }\n\n  body {\n    margin: 0;\n    padding: 32px;\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    font-variant-numeric: tabular-nums;\n  }\n"]);return G=function(){return e},e}var Q=Object(c.a)(G());l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q,null),o.a.createElement(_,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.11ec5815.chunk.js.map