(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"021a":function(e,t,a){"use strict";a("a85f")},"0e9b":function(e,t,a){"use strict";a("ae08")},"33d4":function(e,t,a){},4946:function(e,t,a){"use strict";a("33d4")},"708d":function(e,t,a){"use strict";a("847a")},7407:function(e,t,a){"use strict";a("aba8")},7747:function(e,t,a){},"847a":function(e,t,a){},9504:function(e,t,a){"use strict";a("c826")},"9cdc":function(e,t,a){"use strict";a("c701")},a85f:function(e,t,a){},aba8:function(e,t,a){},ae08:function(e,t,a){},b7e3:function(e,t,a){},bbfb:function(e,t,a){"use strict";a("b7e3")},c701:function(e,t,a){},c826:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,c,o){var i=Object(n["y"])("Navbar"),u=Object(n["y"])("BackgroundAnime"),s=Object(n["y"])("router-view"),b=Object(n["y"])("Footer");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(i,{key:e.$route.fullPath}),Object(n["h"])(u),Object(n["h"])(s),Object(n["h"])(b)],64)}var c=a("d4ec"),o=a("262e"),i=a("2caf"),u=a("9ab4"),s=a("ce1f"),b=Object(n["H"])("data-v-0a497091");Object(n["u"])("data-v-0a497091");var l={class:"wrapper"},d={id:"navbar-wrapper"},O={class:"header-wrapper"},p=Object(n["h"])("h1",null,"Online games",-1),f={key:0},j={key:1},h={class:"links-wrapper"},v={key:0},g=Object(n["g"])("Dashboard"),m={key:1},y=Object(n["g"])("Login"),w={key:2},k=Object(n["g"])("Register"),_={key:3};Object(n["r"])();var S=b((function(e,t,a,r,c,o){var i,u=Object(n["y"])("router-link");return Object(n["q"])(),Object(n["d"])("div",l,[Object(n["h"])("nav",d,[Object(n["h"])("header",O,[p,e.isLoggedIn?(Object(n["q"])(),Object(n["d"])("p",f," User: "+Object(n["A"])(e.currentUser&&(null===(i=e.currentUser)||void 0===i?void 0:i.displayName)?e.currentUser.displayName:e.currentUser.email),1)):(Object(n["q"])(),Object(n["d"])("p",j,Object(n["A"])("User: Not logged in")))]),Object(n["h"])("ul",h,[e.isLoggedIn?(Object(n["q"])(),Object(n["d"])("li",v,[Object(n["h"])(u,{to:"/"},{default:b((function(){return[g]})),_:1})])):Object(n["e"])("",!0),e.isLoggedIn?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("li",m,[Object(n["h"])(u,{to:"/login"},{default:b((function(){return[y]})),_:1})])),e.isLoggedIn?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("li",w,[Object(n["h"])(u,{to:"/register"},{default:b((function(){return[k]})),_:1})])),e.isLoggedIn?(Object(n["q"])(),Object(n["d"])("li",_,[Object(n["h"])("button",{onClick:t[1]||(t[1]=function(){return e.onLogout.apply(e,arguments)})},"Log out")])):Object(n["e"])("",!0)])])])})),A=(a("96cf"),a("1da1")),q=a("bee2"),P=a("59ca"),R=a.n(P),C=(a("ea7b"),function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.isLoggedIn=!1,e.currentUser=null,e}return Object(q["a"])(a,[{key:"created",value:function(){P["auth"]().currentUser&&(this.isLoggedIn=!0,this.currentUser=P["auth"]().currentUser)}},{key:"onLogout",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("work?"),e.next=3,P["auth"]().signOut().then((function(){a.$router.push("/login")})).catch((function(e){alert(e)}));case 3:t.preventDefault();case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(s["b"]));a("7407");C.render=S,C.__scopeId="data-v-0a497091";var L=C,N=Object(n["H"])("data-v-3070fa2b");Object(n["u"])("data-v-3070fa2b");var U={class:"background-anime-wrapper"},x=Object(n["h"])("div",{class:"gradiend-wrapper"},null,-1);Object(n["r"])();var D=N((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("div",U,[x,(Object(n["q"])(),Object(n["d"])(n["a"],null,Object(n["x"])(70,(function(e){return Object(n["h"])("div",{key:e,class:"background-anime-cube"})})),64))])})),I=a("1209"),T=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return Object(q["a"])(a,[{key:"animeBackground",value:function(){Object(I["a"])({targets:".background-anime-cube",translateX:function(){return I["a"].random(-1150,1150)},translateY:function(){return I["a"].random(-800,800)},scale:function(){return I["a"].random(1,5)},easing:"linear",duration:4e3,delay:I["a"].stagger(20),complete:this.animeBackground})}}]),a}(s["b"]);T=Object(u["__decorate"])([Object(s["a"])({mounted:function(){this.animeBackground()}})],T);var M=T;a("bbfb");M.render=D,M.__scopeId="data-v-3070fa2b";var E=M,F=Object(n["H"])("data-v-c49b028a");Object(n["u"])("data-v-c49b028a");var $={class:"wrapper"},G=Object(n["f"])('<footer id="footer-wrapper" data-v-c49b028a><p data-v-c49b028a>Created by Marek Ficht</p><ul data-v-c49b028a><li data-v-c49b028a><a href="#" data-v-c49b028a><i class="fab fa-github" data-v-c49b028a></i></a></li><li data-v-c49b028a><a href="#" data-v-c49b028a><i class="fab fa-linkedin" data-v-c49b028a></i></a></li><li data-v-c49b028a><a href="#" data-v-c49b028a><i class="fas fa-envelope-open" data-v-c49b028a></i></a></li></ul></footer>',1);Object(n["r"])();var Q=F((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("div",$,[G])})),B=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(s["b"]);a("d5d0");B.render=Q,B.__scopeId="data-v-c49b028a";var H=B,Y=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(s["b"]);Y=Object(u["__decorate"])([Object(s["a"])({components:{Navbar:L,BackgroundAnime:E,Footer:H}})],Y);var V=Y;a("9cdc");V.render=r;var z=V,J=a("9483");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("99af"),a("45fc");var K=a("8c4f"),W=a("8aa5"),X=a.n(W),Z=Object(n["H"])("data-v-04b39e37");Object(n["u"])("data-v-04b39e37");var ee={class:"wrapper"},te={class:"games-wrapper"};Object(n["r"])();var ae,ne,re=Z((function(e,t,a,r,c,o){var i=Object(n["y"])("GameTileCard");return Object(n["q"])(),Object(n["d"])("main",ee,[Object(n["h"])("article",te,[Object(n["h"])(i,{"game-title":e.gameName.QUATRO,status:e.gameStatus[0],onOnPlay:e.onPlay,onOnShowDesc:e.onShowDesc},null,8,["game-title","status","onOnPlay","onOnShowDesc"]),Object(n["h"])(i,{"game-title":e.gameName.CARCASSONE,status:e.gameStatus[1],onOnPlay:e.onPlay,onOnShowDesc:e.onShowDesc},null,8,["game-title","status","onOnPlay","onOnShowDesc"]),Object(n["h"])(i,{"game-title":e.gameName.MONOPOLY,status:e.gameStatus[2],onOnPlay:e.onPlay,onOnShowDesc:e.onShowDesc},null,8,["game-title","status","onOnPlay","onOnShowDesc"])])])}));(function(e){e["QUATRO"]="Quatro",e["CARCASSONE"]="Carcassone",e["MONOPOLY"]="Monopoly"})(ae||(ae={})),function(e){e[e["Free"]=0]="Free",e[e["Loby"]=1]="Loby",e[e["Busy"]=2]="Busy"}(ne||(ne={}));var ce=Object(n["H"])("data-v-ae7e4206");Object(n["u"])("data-v-ae7e4206");var oe={class:"tile-container",ref:"tileContainer"},ie={class:"tile-name"},ue=Object(n["h"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ad! ",-1),se=Object(n["h"])("div",{class:"tile-img"},null,-1),be={class:"tile-status"},le={class:"tile-buttons"};Object(n["r"])();var de=ce((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("section",oe,[Object(n["h"])("header",ie,[Object(n["h"])("h5",null,Object(n["A"])(e.gameTitle),1),ue]),se,Object(n["h"])("div",be,[Object(n["h"])("p",null,Object(n["A"])(e.status),1)]),Object(n["h"])("div",le,[Object(n["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.onPlay(t,e.gameTitle)})},"Play"),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.onShowDesc(t,e.gameTitle)})}," Desc ")])],512)})),Oe=a("1b40"),pe=a("58f1"),fe=a.n(pe),je=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return Object(q["a"])(a,[{key:"mounted",value:function(){fe.a.init(this.$refs.tileContainer,{speed:1500})}},{key:"onPlay",value:function(e){this.$emit("onPlay",e,this.gameTitle)}},{key:"onShowDesc",value:function(e){this.$emit("onShowDesc",e,this.gameTitle)}}]),a}(Oe["c"]);Object(u["__decorate"])([Object(Oe["b"])({required:!0})],je.prototype,"gameTitle",void 0),Object(u["__decorate"])([Object(Oe["b"])(String)],je.prototype,"status",void 0),je=Object(u["__decorate"])([Object(Oe["a"])({})],je);var he=je;a("4946");he.render=de,he.__scopeId="data-v-ae7e4206";var ve=he,ge=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.isLoggedIn=!1,e.currentUser=!1,e.gameName=ae,e.gameStatus=ne,e}return Object(q["a"])(a,[{key:"onPlay",value:function(e,t){t===ae.QUATRO?(console.log("%c redirect QUATRO -> ","background: #222; color: #bada55"),this.$router.push("/quatro/game")):t===ae.CARCASSONE?console.log("%c redirect CARcas -> ","background: #222; color: #bada55"):t===ae.MONOPOLY?console.log("%c redirect MONO -> ","background: #222; color: #bada55"):console.log("%c ERROR gameName -> ","background: #222; color: tomato")}},{key:"onShowDesc",value:function(e,t){t===ae.QUATRO?console.log("%c desc QUATRO -> ","background: #222; color: #bada55"):t===ae.CARCASSONE?console.log("%c desc CARcas -> ","background: #222; color: #bada55"):t===ae.MONOPOLY?console.log("%c desc MONO -> ","background: #222; color: #bada55"):console.log("%c ERROR gameName -> ","background: #222; color: tomato")}},{key:"onLogout",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P["auth"]().signOut().then((function(){a.$router.push("/login")})).catch((function(e){alert(e)}));case 2:t.preventDefault();case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(s["b"]);ge=Object(u["__decorate"])([Object(s["a"])({components:{GameTileCard:ve},mounted:function(){}})],ge);var me=ge;a("9504");me.render=re,me.__scopeId="data-v-04b39e37";var ye=me,we=Object(n["H"])("data-v-f030ab8c");Object(n["u"])("data-v-f030ab8c");var ke={class:"wrapper"},_e=Object(n["h"])("h3",{class:"header"},"Login",-1),Se={class:"email"},Ae={class:"password"},qe=Object(n["h"])("button",{type:"submit"},"Login",-1);Object(n["r"])();var Pe=we((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("main",ke,[Object(n["h"])("form",{class:"login-wrapper",onSubmit:t[3]||(t[3]=Object(n["G"])((function(){return e.onLogin.apply(e,arguments)}),["prevent"])),ref:"loginContainer","data-tilt-glare":"","data-tilt-max-glare":"0.33"},[_e,Object(n["h"])("div",Se,[Object(n["F"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),placeholder:"Email"},null,512),[[n["C"],e.email]])]),Object(n["h"])("div",Ae,[Object(n["F"])(Object(n["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),placeholder:"Password"},null,512),[[n["C"],e.password]])]),qe],544)])})),Re=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.email="",e.password="",e}return Object(q["a"])(a,[{key:"onLogin",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P["auth"]().signInWithEmailAndPassword(this.email,this.password).then((function(e){var t;alert("You are logged in as ".concat(null===(t=e.user)||void 0===t?void 0:t.email)),a.$router.push("/")}),(function(e){alert(e.message)}));case 2:t.preventDefault();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(s["b"]);Re=Object(u["__decorate"])([Object(s["a"])({mounted:function(){fe.a.init(this.$refs.loginContainer,{speed:1500})}})],Re);var Ce=Re;a("0e9b");Ce.render=Pe,Ce.__scopeId="data-v-f030ab8c";var Le=Ce,Ne=Object(n["H"])("data-v-3073edd2");Object(n["u"])("data-v-3073edd2");var Ue={class:"wrapper"},xe=Object(n["h"])("h3",{class:"header"},"Register",-1),De={class:"email"},Ie={class:"password"},Te=Object(n["h"])("button",{type:"submit"},"Register",-1);Object(n["r"])();var Me=Ne((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("main",Ue,[Object(n["h"])("form",{class:"register-wrapper",onSubmit:t[3]||(t[3]=Object(n["G"])((function(){return e.onRegister.apply(e,arguments)}),["prevent"])),ref:"loginContainer","data-tilt-glare":"","data-tilt-max-glare":"0.33"},[xe,Object(n["h"])("div",De,[Object(n["F"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),placeholder:"Email"},null,512),[[n["C"],e.email]])]),Object(n["h"])("div",Ie,[Object(n["F"])(Object(n["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.password=t}),placeholder:"Password"},null,512),[[n["C"],e.password]])]),Te],544)])})),Ee=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=t.apply(this,arguments),e.email="",e.password="",e.error="",e}return Object(q["a"])(a,[{key:"onRegister",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P["auth"]().createUserWithEmailAndPassword(this.email,this.password).then((function(e){var t;alert("Account created for ".concat(null===(t=e.user)||void 0===t?void 0:t.email)),a.$router.push("/")}),(function(e){alert(e.message)}));case 2:t.preventDefault();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(s["b"]);Ee=Object(u["__decorate"])([Object(s["a"])({mounted:function(){fe.a.init(this.$refs.loginContainer,{speed:1500})}})],Ee);var Fe=Ee;a("021a");Fe.render=Me,Fe.__scopeId="data-v-3073edd2";var $e=Fe,Ge=Object(n["H"])("data-v-7bf76c2b");Object(n["u"])("data-v-7bf76c2b");var Qe={class:"wrapper"},Be={class:"window-wrapper"},He={class:"game-container"},Ye=Object(n["h"])("section",{class:"current-player"},"Current player",-1),Ve=Object(n["h"])("section",{class:"second-player"},"Second player",-1),ze=Object(n["h"])("section",{class:"pawns"},"Pawns",-1),Je={class:"board-wrapper"},Ke={class:"board first-perspective"},We=Object(n["f"])('<div class="board-cube board-cube-front" data-v-7bf76c2b>front</div><div class="board-cube board-cube-back" data-v-7bf76c2b></div><div class="board-cube board-cube-right" data-v-7bf76c2b></div><div class="board-cube board-cube-left" data-v-7bf76c2b></div><div class="board-cube board-cube-top" data-v-7bf76c2b></div><div class="board-cube board-cube-bottom" data-v-7bf76c2b></div>',6);Object(n["r"])();var Xe=Ge((function(e,t,a,r,c,o){return Object(n["q"])(),Object(n["d"])("main",Qe,[Object(n["h"])("div",Be,[Object(n["h"])("div",He,[Ye,Ve,ze,Object(n["h"])("section",Je,[Object(n["h"])("div",Ke,[(Object(n["q"])(),Object(n["d"])(n["a"],null,Object(n["x"])(16,(function(e){return Object(n["h"])("div",{key:e,class:"board-field","data-board-field":e},[We],8,["data-board-field"])})),64))])])])])])})),Ze=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(s["b"]);a("708d");Ze.render=Xe,Ze.__scopeId="data-v-7bf76c2b";var et=Ze,tt=[{path:"/",name:"Dashboard",component:ye,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:Le,meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:$e,meta:{requiresGuest:!0}}],at=[{path:"/quatro/loby",name:"QuatroLoby",component:et,meta:{requiresAuth:!0}},{path:"/quatro/game",name:"QuatroGame",component:et,meta:{requiresAuth:!0}},{path:"/quatro/game-over",name:"QuatroGameOver",component:et,meta:{requiresAuth:!0}}],nt=Object(K["a"])({history:Object(K["b"])("/"),routes:[].concat(tt,at)});nt.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?X.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some((function(e){return e.meta.requiresGuest}))&&X.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()}));var rt,ct=nt,ot=a("5502"),it=Object(ot["a"])({state:{},mutations:{},actions:{},modules:{}}),ut=(a("15f5"),a("7051"),{apiKey:"AIzaSyDp574Cg72qIyAimYGfHFSO0txNP7sZmKk",authDomain:"online-project-bf469.firebaseapp.com",databaseURL:"https://online-project-bf469.firebaseio.com",projectId:"online-project-bf469",storageBucket:"online-project-bf469.appspot.com",messagingSenderId:"856280314889",appId:"1:856280314889:web:7fd5b9edbe34f900fc34d8"});R.a.initializeApp(ut),R.a.auth().onAuthStateChanged((function(e){console.log("%c user -> ","background: #222; color: #bada55",e),rt||(rt=Object(n["c"])(z).use(it).use(ct).mount("#app"))}))},d5d0:function(e,t,a){"use strict";a("7747")}});
//# sourceMappingURL=app.568b8a7a.js.map