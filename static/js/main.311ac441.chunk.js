(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(82)},36:function(e,t,a){},38:function(e,t,a){},44:function(e,t){},46:function(e,t){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),s=a.n(o),l=(a(36),a(25)),c=a(26),i=a(29),m=a(27),u=a(30),d=(a(38),a(28)),p=a.n(d),h=function(e){var t=e.personas,a=[];for(var n in t)a.push([n,t[n]]);return a.sort(function(e,t){return t[1]-e[1]}),0===t.length?r.a.createElement("div",null,"No Data Found"):r.a.createElement("div",null,r.a.createElement("h3",null,"Your most likely personality types are... "),r.a.createElement("h1",{style:{color:"#4C73DD"}},a[0][0],"  ",r.a.createElement("span",{className:"badge badge-pill badge-primary"},Math.trunc(100*a[0][1])+"%")),r.a.createElement("h2",{style:{color:"#4C73DD"}},a[1][0],"  ",r.a.createElement("span",{className:"badge badge-pill badge-primary"},Math.trunc(100*a[1][1])+"%")),r.a.createElement("h3",{style:{color:"#84a0ed"}},a[2][0],"  ",r.a.createElement("span",{className:"badge badge-pill badge-primary"},Math.trunc(100*a[2][1])+"%")),r.a.createElement("h3",{style:{color:"#8f9cc1"}},a[3][0],"  ",r.a.createElement("span",{className:"badge badge-pill badge-primary"},Math.trunc(100*a[3][1])+"%")))},g=function(e){var t=e.emotion,a=[];for(var n in t)a.push([n,t[n]]);if(a.sort(function(e,t){return t[1]-e[1]}),0===t.length)return r.a.createElement("div",null,"No Data Found");var o={width:100*a[0][1]+"%"},s={width:100*a[1][1]+"%"},l={width:100*a[2][1]+"%"},c={width:100*a[3][1]+"%"},i={width:100*a[4][1]+"%"};return r.a.createElement("div",null,r.a.createElement("h3",null,"Most likely emotions on your speech are... "),r.a.createElement("div",{className:"container",style:{marginTop:"30px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-1 col-sm-12",style:{fontSize:"1.5rem",paddingRight:"12%"}},a[0][0]),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"progress",style:{height:"36px",borderRadius:"10px"}},r.a.createElement("div",{className:"progress-bar progress-bar-success",style:o,role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("p",null,Math.trunc(100*a[0][1])+"%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-1 col-sm-12",style:{fontSize:"1.5rem",paddingRight:"12%"}},a[1][0]),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"progress",style:{height:"36px",borderRadius:"10px"}},r.a.createElement("div",{className:"progress-bar progress-bar-info",style:s,role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("p",null,Math.trunc(100*a[1][1])+"%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-1 col-sm-12",style:{fontSize:"1.5rem",paddingRight:"12%"}},a[2][0]),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"progress",style:{height:"36px",borderRadius:"10px"}},r.a.createElement("div",{className:"progress-bar progress-bar-primary",style:l,role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("p",null,Math.trunc(100*a[2][1])+"%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-1 col-sm-12",style:{fontSize:"1.5rem",paddingRight:"12%"}},a[3][0]),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"progress",style:{height:"36px",borderRadius:"10px"}},r.a.createElement("div",{className:"progress-bar progress-bar-warning",style:c,role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("p",null,Math.trunc(100*a[3][1])+"%"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-12"}),r.a.createElement("div",{className:"col-md-1 col-sm-12",style:{fontSize:"1.5rem",paddingRight:"12%"}},a[4][0]),r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",{className:"progress",style:{height:"36px",borderRadius:"10px"}},r.a.createElement("div",{className:"progress-bar progress-bar-danger",style:i,role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("p",null,Math.trunc(100*a[4][1])+"%")))))))},v=[],f="",E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onClick=function(){fetch("https://soriapi.herokuapp.com/api/speech-to-text/token").then(function(e){return e.text()}).then(function(t){var a=p()({token:t,objectMode:!0,extractResults:!0,format:!1});a.on("data",function(t){t.final&&(v=v.concat(t.alternatives[0].transcript)),e.setState({speech_text:t.alternatives[0].transcript})}),a.on("error",function(e){return console.log(e)}),document.querySelector("#stop").onclick=function(){a.stop(),f=(f=(f=v.toString()).replace(/,/g," ")).replace(/%HESITATION/g," "),e.setState({speech_text:"",final_text:f}),document.querySelector("#input_result").defaultValue=f}}).catch(function(e){return console.log(e)})},e.clear=function(){e.setState({speech_text:"",final_text:""}),v=[]},e.analyze=function(){fetch("https://soriapi.herokuapp.com/indico/personas",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e.state.final_text})}).then(function(e){return e.json()}).then(function(t){e.setState({route:"personas",personas:t})})},e.analyze_emotion=function(){fetch("https://soriapi.herokuapp.com/indico/emotion",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e.state.final_text})}).then(function(e){return e.json()}).then(function(t){e.setState({route:"emotion",emotion:t})})},e.state={speech_text:"",final_text:"",personas:"",emotion:"",route:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){fetch("https://soriapi.herokuapp.com/").then(function(){return console.log("Wake up API!")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h3",{style:{margin:"30px 0"},className:"typography-line"},"To start, press [SPEAK]. Introduce yourself. When you finish, press [STOP]."),r.a.createElement("button",{className:"btn btn-outline-primary btn-round",onClick:this.onClick},"Speak"),r.a.createElement("button",{className:"btn btn-outline-danger btn-round",id:"stop"},"Stop"),r.a.createElement("button",{className:"btn btn-outline-warning btn-round",onClick:this.clear},"Clear All"),r.a.createElement("div",{className:"form-group has-success"},r.a.createElement("h4",null,"Speech Text"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Speech Text",value:this.state.speech_text}),r.a.createElement("h4",null,"Result Text"),r.a.createElement("textarea",{id:"input_result",type:"text",className:"form-control",placeholder:"Result",value:this.state.final_text})),r.a.createElement("button",{className:"btn btn-danger btn-round",onClick:this.analyze},"Personas Analysis"),r.a.createElement("button",{className:"btn btn-info btn-round",onClick:this.analyze_emotion},"Emotion Analysis"),"personas"===this.state.route?r.a.createElement(h,{personas:this.state.personas}):r.a.createElement("div",null),"emotion"===this.state.route?r.a.createElement(g,{emotion:this.state.emotion}):r.a.createElement("div",null))}}]),t}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rori",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rori","/service-worker.js");b?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}},[[31,2,1]]]);
//# sourceMappingURL=main.311ac441.chunk.js.map