(this["webpackJsonpworst-buggy-website"]=this["webpackJsonpworst-buggy-website"]||[]).push([[0],{55:function(e,t,a){e.exports=a(69)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(60),a(37)),u=(a(61),a(32)),c=a(22),s=a(45),m=a(46),p=a(18),d=a(49),h=a(106),g=a(111),E=a(101),b=a(105),v=a(103),f=a(113),y=a(109),k=(a(62),Object(E.a)({root:{width:300,margin:"auto"},input:{width:42}}));function w(e){var t=k(),a=l.a.useState(Number(e.initialValue)),n=Object(i.a)(a,2),r=n[0],o=n[1],u=e.rangeMax;return l.a.createElement("div",{className:t.root},l.a.createElement(v.a,{id:"input-slider",gutterBottom:!0}),l.a.createElement(b.a,{container:!0,spacing:2,alignItems:"flex-start"},l.a.createElement(b.a,{item:!0}),l.a.createElement(b.a,{item:!0,xs:!0},l.a.createElement(f.a,{value:"number"===typeof r?r:0,onChange:function(e,t){o(t<0?0:t>u?u:t)},"aria-labelledby":"input-slider",min:Number(e.rangeMin),max:Number(e.rangeMax)})),l.a.createElement(b.a,{item:!0},l.a.createElement(y.a,{className:t.input,value:r,margin:"dense",onChange:function(e){o(""===e.target.value?"":Number(e.target.value))},onBlur:function(){r<0?o(0):r>u&&o(u)},inputProps:{step:1,min:e.rangeMin,max:e.rangeMax,type:"number","aria-labelledby":"input-slider"},id:e.dataid})," ",e.label)))}var M=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onButtonClick=e.onButtonClick.bind(Object(p.a)(e)),e.state={isAlertOpened:!1,message:"",inputMonthsValue:"",inputLoanValue:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onButtonClick",value:function(){var e=this;this.setState({isAlertOpened:!1}),setTimeout((function(){e.updateLoanInputValue(),e.updateMonthsInputValue(),e.calculateLoanPayment(),e.setState({isAlertOpened:!0})}),1e3)}},{key:"calculateLoanPayment",value:function(){this.setState({message:"Loan monthly payment: ".concat(Math.round(this.state.inputLoanValue/this.state.inputMonthsValue)+10," $, \n      Term: ").concat(this.state.inputMonthsValue," months.")})}},{key:"updateMonthsInputValue",value:function(){var e=Number(document.getElementById("totalMonthsInput").value);this.setState({inputMonthsValue:e})}},{key:"updateLoanInputValue",value:function(){var e=Number(document.getElementById("totalLoanInput").value);this.setState({inputLoanValue:e})}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Calculate your loan payment"),l.a.createElement("div",null,"Select credit term"),l.a.createElement(w,{dataid:"totalMonthsInput",rangeMin:"0",rangeMax:"60",label:"months",initialValue:"24"}),l.a.createElement("div",null,"Select total loan amount"),l.a.createElement(w,{dataid:"totalLoanInput",rangeMin:"0",rangeMax:"21001",label:"$",initialValue:"500"}),l.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.onButtonClick},"Calculate now"),l.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.isAlertOpened,autoHideDuration:1,message:this.state.message}))}}]),t}(l.a.Component);a(66);function C(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to the worst buggy website."),l.a.createElement("div",{id:"homepageDescription"},l.a.createElement("h3",null,"You could have some fun:"),"\u2022 make your first simple test plan;",l.a.createElement("br",null),"\u2022 execute your test plan;",l.a.createElement("br",null),"\u2022 find here some bugs;",l.a.createElement("br",null),"\u2022 get some practice in testing real SPA-application;",l.a.createElement("br",null),"\u2022 find an easter eggs scattered around the site."))}var O=a(38),V=a(24),x=a(108),B=a(112);var I=function(){var e=l.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=function(){n(null)};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(O.a,null,l.a.createElement("div",{id:"routerMenu"},l.a.createElement(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"primary",id:"menuButton"},"\u200e\u2630"),l.a.createElement(x.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:r},l.a.createElement(B.a,{onClick:r},l.a.createElement(O.b,{to:"/"},"Home")),l.a.createElement(O.b,{to:"/calculator"},l.a.createElement(B.a,{onClick:r},"Credit calculator")))),l.a.createElement("div",null,l.a.createElement(V.c,null,l.a.createElement(V.a,{exact:!0,path:"/worst-buggy-website/"},l.a.createElement(C,null)),l.a.createElement(V.a,{path:"/worst-buggy-website/calculator"},l.a.createElement(M,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.711db456.chunk.js.map