(this.webpackJsonpnitrobukkit=this.webpackJsonpnitrobukkit||[]).push([[0],{21:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/login_bg.316c819a.png"},33:function(e,t,n){e.exports=n.p+"static/media/login.4fba52c1.svg"},34:function(e,t,n){e.exports=n(49)},39:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"googleLogin",(function(){return y})),n.d(a,"googleLogout",(function(){return N}));var r=n(0),c=n.n(r),o=n(18),l=n.n(o),i=n(14),u=n(2),s=(n(39),n(3)),m=n(4),p=n(31),b=n(13),g={status:{A:"a",B:"B",C:"C"},google:{login:!1,data:null}},O=n(5),h=n(6),d=n(8),f=n(7),j=n(17),E=n.n(j),v=n(23),y=function(e){return function(){var t=Object(v.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),n({type:"GOOGLE_LOGIN",payload:{login:!0,data:e}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(){return function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"GOOGLE_LOGOUT",payload:{login:!1,data:null}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=(n(45),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Home"))}}]),n}(c.a.Component)),x=Object(s.c)(Object(m.b)((function(e){return{}}),a))(Object(u.e)(k)),L=n(26),G="139616087849-vdl8nihgh0fu3miku7g2viqpe7s3cuh5.apps.googleusercontent.com",C="single_host_origin",w="Sign in with Google",S="Logout",F=!0,I="dark",_="redirect",B=(n(47),n(32)),P=n.n(B),T=n(33),z=n.n(T),A=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e="";this.props.google.login&&(e=this.props.google.data.profileObj.name);var t=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pwbox"},c.a.createElement("input",{type:"password",placeholder:"Password",minLength:"6",onChange:function(e){e.target.value}})),c.a.createElement("div",{className:"vl"},"or"),c.a.createElement(L.GoogleLogin,{className:"authorization",clientId:G,buttonText:w,onSuccess:this.props.googleLogin,onFailure:function(e){alert(e)},cookiePolicy:C,isSignedIn:F,theme:I,uxMode:_})),n=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"authtext"},"Welcome, ",e,"!"),c.a.createElement(L.GoogleLogout,{className:"authorization",clientId:G,buttonText:S,theme:I,onLogoutSuccess:this.props.googleLogout}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:P.a,className:"bgimg"}),c.a.createElement("div",{className:"loginbox"},c.a.createElement("img",{src:z.a,className:"sideimg"}),c.a.createElement("div",{className:"sidebox"},c.a.createElement("div",{className:"head"},c.a.createElement("h1",null,"Login to connect"),c.a.createElement("h2",null,"Manage your server from anywhere.")),c.a.createElement("p",null,"Server information"),c.a.createElement("div",{className:"inputarea"},c.a.createElement("div",{className:"ipbox"},c.a.createElement("input",{type:"text",placeholder:"IP Address",pattern:"(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",onChange:function(e){e.target.value}})),c.a.createElement("div",{className:"portbox"},c.a.createElement("input",{type:"text",placeholder:"Port",pattern:"([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])",onChange:function(e){e.target.value}}))),c.a.createElement("p",null,"Authorization"),c.a.createElement("div",{className:"inputarea"},this.props.google.login?n:t),c.a.createElement("button",{type:"button",className:"loginbtn"},"Connect"))))}}]),n}(c.a.Component),M=Object(s.c)(Object(m.b)((function(e){return{google:e.google}}),a))(Object(u.e)(A)),J=(n(29),n(21),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav"},c.a.createElement("h1",null,"NitroBukkit"),c.a.createElement("h2",null,this.props.page),c.a.createElement("div",{className:"profile"},c.a.createElement("img",{src:"https://cdn.scratch.mit.edu/static/site/projects/thumbnails/1137/8007.png"})))}}]),n}(c.a.Component)),U=Object(s.c)(Object(m.b)((function(e){return{}}),a))(J),q=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"side"},"side")}}]),n}(c.a.Component),D=Object(s.c)(Object(m.b)((function(e){return{}}),a))(q),H=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",{className:"pageheader"},c.a.createElement("h1",null,this.props.title),c.a.createElement("h2",null,this.props.explanation))}}]),n}(c.a.Component),W=Object(s.c)(Object(m.b)((function(e){return{}}),a))(H),K=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",{className:"page"},c.a.createElement(W,{title:"Server Status",explanation:"Explanation"}))}}]),n}(c.a.Component),Q=Object(s.c)(Object(m.b)((function(e){return{}}),a))(K),R=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{page:"Dashboard"}),c.a.createElement(D,null),c.a.createElement(Q,null))}}]),n}(c.a.Component),V=Object(s.c)(Object(m.b)((function(e){return{}}),a))(Object(u.e)(R)),X=(n(48),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Server"))}}]),n}(c.a.Component)),Y=Object(s.c)(Object(m.b)((function(e){return{}}),a))(Object(u.e)(X));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{basename:"/NitroBukkit"},c.a.createElement(m.a,{store:Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GOOGLE_LOGIN":case"GOOGLE_LOGOUT":return Object(b.a)(Object(b.a)({},e),{},{google:Object(b.a)(Object(b.a)({},e.google),{},{login:t.payload.login,data:t.payload.data})});default:return e}}),Object(s.a)(p.a))},c.a.createElement(u.a,{exact:!0,path:"/",component:x}),c.a.createElement(u.a,{path:"/login",component:M}),c.a.createElement(u.a,{path:"/dashboard",component:V}),c.a.createElement(u.a,{path:"/server",component:Y})))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a6f07c34.chunk.js.map