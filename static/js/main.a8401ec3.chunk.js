(this["webpackJsonpworst-buggy-website"]=this["webpackJsonpworst-buggy-website"]||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),i=a.n(l),u=(a(41),a(42),a(28)),r=a(20),c=a(29),s=a(30),m=a(13),p=a(33),h=a(80),d=a(79),g=a(32),v=a(75),b=a(78),y=a(77),f=a(82),E=a(81),M=(a(43),Object(v.a)({root:{width:300},input:{width:42}}));function V(e){var t=M(),a=o.a.useState(Number(e.initialValue)),n=Object(g.a)(a,2),l=n[0],i=n[1],u=e.rangeMax;return o.a.createElement("div",{className:t.root},o.a.createElement(y.a,{id:"input-slider",gutterBottom:!0}),o.a.createElement(b.a,{container:!0,spacing:2,alignItems:"flex-start"},o.a.createElement(b.a,{item:!0}),o.a.createElement(b.a,{item:!0,xs:!0},o.a.createElement(f.a,{value:"number"===typeof l?l:0,onChange:function(e,t){i(t<0?0:t>u?u:t)},"aria-labelledby":"input-slider",min:Number(e.rangeMin),max:Number(e.rangeMax)})),o.a.createElement(b.a,{item:!0},o.a.createElement(E.a,{className:t.input,value:l,margin:"dense",onChange:function(e){i(""===e.target.value?"":Number(e.target.value))},onBlur:function(){l<0?i(0):l>u&&i(u)},inputProps:{step:1,min:e.rangeMin,max:e.rangeMax,type:"number","aria-labelledby":"input-slider"},id:e.dataid})," ",e.label)))}var k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).onButtonClick=e.onButtonClick.bind(Object(m.a)(e)),e.state={isAlertOpened:!1,message:"",inputMonthsValue:"",inputLoanValue:""},e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"onButtonClick",value:function(){var e=this;this.setState({isAlertOpened:!1}),setTimeout((function(){e.updateLoanInputValue(),e.updateMonthsInputValue(),e.calculateLoanPayment(),e.setState({isAlertOpened:!0})}),1e3)}},{key:"calculateLoanPayment",value:function(){this.setState({message:"Loan monthly payment: ".concat(Math.round(this.state.inputLoanValue/this.state.inputMonthsValue)+10," $, \n      Term: ").concat(this.state.inputMonthsValue," months.")})}},{key:"updateMonthsInputValue",value:function(){var e=Number(document.getElementById("totalMonthsInput").value);this.setState({inputMonthsValue:e}),console.log("months: ".concat(this.state.inputMonthsValue))}},{key:"updateLoanInputValue",value:function(){var e=Number(document.getElementById("totalLoanInput").value);this.setState({inputLoanValue:e}),console.log("loan: ".concat(this.state.inputLoanValue))}},{key:"componentDidMount",value:function(){console.log("".concat(this.state.inputLoanValue,", ").concat(this.state.inputMonthsValue))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Calculate your loan payment"),o.a.createElement("div",null,"Select credit term"),o.a.createElement(V,{dataid:"totalMonthsInput",rangeMin:"0",rangeMax:"60",label:"months",initialValue:"24"}),o.a.createElement("div",null,"Select total loan amount"),o.a.createElement(V,{dataid:"totalLoanInput",rangeMin:"0",rangeMax:"21001",label:"$",initialValue:"500"}),o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.onButtonClick},"Calculate now"),o.a.createElement(d.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.isAlertOpened,autoHideDuration:1,message:this.state.message}))}}]),t}(o.a.Component);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a8401ec3.chunk.js.map