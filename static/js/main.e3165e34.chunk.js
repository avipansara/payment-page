(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},256:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(16),i=t.n(c),o=(t(101),t(95)),l=t(92),u=t(38),m=t(39),s=t(42),d=t(40),p=t(43),v=t(18),h=t(30),f=t(31),E=t.n(f),b=t(94),y=t.n(b),x=t(15),C=t.n(x),g=t(41),w=t.n(g),j=t(17),O=t.n(j);function k(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\D+/g,"")}var S=function(e){function a(){return Object(u.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",null,n.a.createElement(w.a,{variant:"h2",className:e.topicTitle},"Supported Cards"),n.a.createElement("div",{className:e.containerRoot},n.a.createElement(C.a,{container:!0,spacing:24},n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"4111 1111 1111 1111",expiry:"10/20",cvc:"737"})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"3700 0000 0000 002",expiry:"10/20",cvc:"737"})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"5555 4444 3333 1111",expiry:"10/20",cvc:"737"})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"3400 0000 0000 002",expiry:"10/20",cvc:"737"})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"6011 6011 6011 6611",expiry:"10/20",cvc:"737"})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(v.a,{name:"Avee Pansara",number:"5066 9911 1111 1118",expiry:"10/20",cvc:"737"})))))}}]),a}(n.a.Component),F=Object(h.withStyles)(function(e){return{topicTitle:{textAlign:"center",marginBottom:15},cardsList:{display:"flex",marginTop:30,flexWrap:"wrap",justifyContent:"space-between"}}})(S),N=(t(168),function(e){function a(){var e,t;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={number:"",name:"",expiry:"",cvc:"",issuer:"",focused:"",numberError:!1,nameError:!1,expiryError:!1,cvcError:!1,formData:null},t.handleCallback=function(e,a){var r=e.issuer;a&&t.setState({issuer:r})},t.handleInputFocus=function(e){var a=e.target;t.setState({focused:a.name})},t.handleInputChange=function(e){var a=e.target,r={};"number"===a.name?(r=function(e){var a={};if(!e)return a.error=!0,a.value=e,a;O.a.fns.validateCardNumber(e)||(a.error=!0);var t=k(e);return a.value=O.a.fns.formatCardNumber(t),a}(a.value),a.value=r.value,t.setState({numberError:r.error})):"expiry"===a.name?(r=function(e){var a={},t=k(e);return a.value=t,t.length>=3?(a.value="".concat(t.slice(0,2),"/").concat(t.slice(2,4)),4===t.length&&O.a.fns.validateCardExpiry(t.slice(0,2),t.slice(2,4))||(a.error=!0)):a.error=!0,a}(a.value),a.value=r.value,t.setState({expiryError:r.error})):"cvc"===a.name&&(r=function(e,a){var t={},r=k(e);return(!O.a.fns.validateCardCVC(r,a)||r.length<3)&&(t.error=!0),t.value=r.slice(0,4),t}(a.value,t.state.issuer),a.value=r.value,t.setState({cvcError:r.error})),t.setState(Object(l.a)({},a.name,a.value))},t.handleSubmit=function(e){e.preventDefault();t.state.issuer;var a=Object(o.a)(e.target.elements).filter(function(e){return e.name}).reduce(function(e,a){return e[a.name]=a.value,e},{});t.setState({formData:a}),t.form.reset()},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e,a=this,t=this.state,r=t.name,c=t.number,i=t.expiry,o=t.cvc,l=t.focused,u=t.issuer,m=t.formData,s=t.numberError,d=t.nameError,p=t.expiryError,h=t.cvcError,f=this.props.classes,b=!0;return s||d||p||h||""===r||""===c||""===i||""===o||(b=!1),n.a.createElement("div",{key:"Payment"},n.a.createElement("div",{className:f.root},n.a.createElement(w.a,{variant:"h2",className:f.appTitle},"Enter Credit Card Details"),n.a.createElement(v.a,{number:c,name:r,expiry:i,cvc:o,focused:l,callback:this.handleCallback}),n.a.createElement("form",{className:f.creditCardForm,ref:function(e){return a.form=e},onSubmit:this.handleSubmit},n.a.createElement("div",{className:f.containerRoot},n.a.createElement(C.a,{container:!0,spacing:24},n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(E.a,{variant:"outlined",fullWidth:!0,type:"tel",name:"number",label:"Card Number",required:!0,autoFocus:!0,autoComplete:"off",error:s,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(E.a,{type:"text",fullWidth:!0,variant:"outlined",name:"name",label:"Name",required:!0,autoComplete:"off",error:d,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(E.a,{type:"tel",variant:"outlined",name:"expiry",label:"MM/YY",required:!0,autoComplete:"off",error:p,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement(C.a,{item:!0,xs:6},n.a.createElement(E.a,{type:"tel",variant:"outlined",name:"cvc",label:"CVC",required:!0,autoComplete:"off",error:h,onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement("input",{type:"hidden",name:"issuer",value:u}),n.a.createElement(y.a,{fullWidth:!0,variant:"contained",type:"submit",color:"primary",disabled:b,className:"btn btn-primary btn-block"},"PAY"))))),m&&n.a.createElement("div",{className:f.creditCardDetails},(e=m,Object.keys(e).map(function(a){return"".concat(a,": ").concat(e[a])})).map(function(e,a){return n.a.createElement("div",{key:a},e)})),n.a.createElement("hr",{style:{margin:"30px 0"}}),n.a.createElement(F,null)))}}]),a}(r.Component)),I=Object(h.withStyles)(function(e){return{root:{padding:30},containerRoot:{flexGrow:1},appTitle:{textAlign:"center",marginBottom:15},creditCardForm:{margin:"30px auto 0",maxWidth:400},creditCardDetails:{margin:"15px auto 0",maxWidth:400}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,a,t){e.exports=t(256)}},[[96,1,2]]]);
//# sourceMappingURL=main.e3165e34.chunk.js.map