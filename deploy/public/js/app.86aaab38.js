(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5f984b2d"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2883f027"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"19f8":function(t,e,n){t.exports=n.p+"img/minion.51fb8a31.png"},"3af4":function(t,e,n){"use strict";var r=n("d79e"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("45fc"),n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=n("2877"),u={},c=Object(s["a"])(u,o,i,!1,null,null,null),l=c.exports,f=(n("d3b7"),n("8c4f")),d=n("7277");a["default"].use(f["a"]);var h,m=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))},meta:{title:"Login - Software (TH)"}},{path:"/dashboard",name:"Dashboard",component:d["a"],meta:{title:"Dashboard - Software (TH)",requiresAuth:!0}}],p=new f["a"]({mode:"history",base:"/",routes:m}),g=p,v=(n("99af"),n("ade3")),b=n("2f62"),y=n("bc3a"),_=n.n(y),k=n("d4ec"),S=n("bee2"),w="https://se-members.web.app",T=function(){function t(){Object(k["a"])(this,t)}return Object(S["a"])(t,[{key:"verifyToken",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_.a.post("".concat(w,"/auth/login"),{},{headers:{"auth-token":this.getToken()}}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getToken",value:function(){return localStorage.getItem("auth-token")}},{key:"delToken",value:function(){localStorage.removeItem("auth-token")}},{key:"setToken",value:function(t){localStorage.setItem("auth-token","Bearer ".concat(t))}}]),t}(),j=new T,N="https://se-members.web.app";a["default"].use(b["a"]);var O=new b["a"].Store({state:{status:null,user:null,verified:null,hint:[],err:"",n:0},mutations:{SET_STATUS:function(t,e){if(t.n++,"Success"!==e.msg)return t.err="".concat(e,", ").concat(t.n);t.err="Login Sucessful, ".concat(t.n),j.setToken(e.token),t.status=!0},SET_USER:function(t,e){t.user=e},ALL_USER:function(t,e){t.data=e},SET_HINT:function(t,e){t.hint=e}},actions:{register:function(t,e){_.a.post("".concat(N,"/auth/register"),e).then((function(e){return t.commit("SET_STATUS",e.data)}))},login:function(t,e){_.a.post("".concat(N,"/auth/login"),e).then((function(e){return t.commit("SET_STATUS",e.data)}))},getUser:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.verifyToken();case 2:n=e.sent,t.commit("SET_USER",n.user);case 4:case"end":return e.stop()}}),e)})))()},onRandom:function(t,e){var n=j.getToken();_.a.post("".concat(N,"/post/random"),e,{headers:{"auth-token":n}})},logout:function(t){j.delToken(),location.reload()},getHint:function(t,e){var n=j.getToken();_.a.get("".concat(N,"/post/getHint/").concat(e),{headers:{"auth-token":n}}).then((function(e){return t.commit("SET_HINT",e.data)}))}},getters:(h={getterStatus:function(t){return t.status},getterUser:function(t){return t.user},getterVerified:function(t){return t.verified},getterHint:function(t){return t.user}},Object(v["a"])(h,"getterHint",(function(t){return t.hint})),Object(v["a"])(h,"getterError",(function(t){return t.err})),Object(v["a"])(h,"getterAutologin",(function(){return!!j.getToken()})),h),modules:{}}),E=n("5f5b"),x=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(E["a"]),a["default"].use(x["a"]),a["default"].config.productionTip=!1,g.beforeEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.verifyToken();case 2:a=t.sent,e.matched.some((function(t){return t.meta.requiresAuth}))?404===a.status?r({path:"/"}):(document.title=e.meta.title,r()):r();case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()),new a["default"]({router:g,store:O,render:function(t){return t(l)}}).$mount("#app")},"6c9f":function(t,e,n){},7277:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",{staticClass:"text-center d-flex justify-content-center align-items-center",staticStyle:{height:"100vh"}},[n("b-spinner",{staticStyle:{width:"5rem",height:"5rem"},attrs:{variant:"info"}})],1):t._e(),n(t.myComponent,{tag:"component",attrs:{user:t.user,hint:t.hint},on:{loadHint:t.loadHint}})],1)},a=[],o=n("5530"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",[t._v("Dashboard")]),n("p",[t._v("รายชื่อแสดงการจับคู่สายรหัสโดยการใช้ระบบสุ่ม ระหว่างรหัสนักศึกษา 62 และรหัสนักศึกษา 63")]),n("div",{staticClass:"d-flex justify-content-end"},[n("b-button",{staticStyle:{margin:"1rem 0"},attrs:{variant:"danger"},on:{click:t.onLogout}},[t._v("Logout")])],1)]),n("b-table",{attrs:{striped:"",hover:"",items:[t.relabel],fields:t.fields}}),n("b-table",{staticStyle:{"margin-top":"5rem"},attrs:{items:[t.rHint],fields:t.fieldsHint}})],1)},s=[],u=(n("99af"),n("ac1f"),n("5319"),{props:["user","hint"],data:function(){return{fields:[{key:"fullName_62",label:"ชื่อจริงพี่"},{key:"nickName_62",label:"ชื่อเล่นพี่"},{key:"fullName_63",label:"ชื่อจริงน้อง"},{key:"nickName_63",label:"ชื่อน้อง"}],fieldsHint:[{key:"hint",label:"คำใบ้"}]}},computed:{relabel:function(){var t;t=this.hint&&0!=this.hint.length?this.hint:{firstName:"",lastName:"",nickName:""};try{return{StudentID_62:this.user.s_id,nickName_62:this.user.nickName,fullName_62:"".concat(this.getName,"  ").concat(this.user.lastName),hint:this.user.hint,nickName_63:t.nickName,fullName_63:"".concat(t.firstName,"  ").concat(t.lastName)}}catch(e){}},rHint:function(){try{return{hint:this.user.hint}}catch(t){}},getName:function(){return this.user.firstName.replace(/นาย|นางสาว|นาง/g,(function(){return""}))}},methods:{onLogout:function(){this.$store.dispatch("logout")}}}),c=u,l=(n("f111"),n("2877")),f=Object(l["a"])(c,i,s,!1,null,"ca78fa76",null),d=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg"},[r("header",[r("a",{staticClass:"logo"},[t._v("Software Engineering")]),r("div",{staticClass:"nav-logout"},[r("a",{attrs:{id:"logout"},on:{click:t.onLogout}},[t._v("Log out")])])]),r("section",[r("img",{staticClass:"wave",attrs:{src:n("dde6"),alt:"curve"}}),r("div",{staticClass:"contentBx"},[r("h2",{staticStyle:{"margin-bottom":"0.5em"}},[t._v("Hi, "+t._s(t.user.nickName)+"!")]),t.isSpin?r("div",[r("b-spinner",{attrs:{medium:"",type:"grow",variant:"light"}})],1):r("div",[t.hint.length>1?r("h3",{staticStyle:{"font-size":"2.5rem","text-decoration":"underline"},attrs:{id:"hint--word"}},[t._v("JACKPOT!!")]):t._e(),t._l(t.hint,(function(e,n){return r("h3",{key:n,staticClass:"text-break",attrs:{id:"hint--word"}},[r("span",{staticClass:"d-block"},[t._v("คำใบ้พี่คนที่ "+t._s(n+1)+" >")]),r("span",{attrs:{id:"font-hint"}},[t._v(t._s(e))])])}))],2),t.user.random?t._e():r("a",{staticStyle:{cursor:"pointer"},attrs:{id:"button"},on:{click:function(e){return t.toggle()}}},[r("span",[t._v("Random Now!")])]),r("div",{staticClass:"rainbow"})]),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgBx"},[r("img",{attrs:{src:n("19f8"),alt:"mario"}})])}],p={name:"Dashboard",props:["user","hint"],data:function(){return{show:!1,isSpin:!1}},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rnd";if(this.show=!this.show,"rnd"===t)return this.onRandom()},onLogout:function(){this.$store.dispatch("logout")},onRandom:function(){this.isSpin=!0,this.user.random=!0,this.$store.dispatch("onRandom",{s_id:this.user.s_id,permission:this.user.permission}),this.$emit("loadHint")}},computed:{getName:function(){return this.user.firstName.replace(/นาย|นางสาว|นาง/g,(function(){return""}))}},watch:{hint:function(t,e){t&&(this.isSpin=!1)}}},g=p,v=(n("3af4"),Object(l["a"])(g,h,m,!1,null,"38e32490",null)),b=v.exports,y=n("2f62"),_={name:"Dashboard",data:function(){return{isLoading:!0}},components:{seniorDashboard:d,juniorDashboard:b},mounted:function(){this.$store.dispatch("getUser")},computed:Object(o["a"])(Object(o["a"])({},Object(y["b"])({user:"getterUser",hint:"getterHint"})),{},{myComponent:function(){try{return"fresher"===this.user.permission?"juniorDashboard":"seniorDashboard"}catch(t){}}}),methods:{loadHint:function(){this.$store.dispatch("getHint",this.user.s_id)}},watch:{user:function(t,e){var n=this;t&&(this.loadHint(),setTimeout((function(){return n.isLoading=!1}),1e3))}}},k=_,S=Object(l["a"])(k,r,a,!1,null,null,null);e["a"]=S.exports},d79e:function(t,e,n){},dde6:function(t,e,n){t.exports=n.p+"img/curve.d85e153c.png"},f111:function(t,e,n){"use strict";var r=n("6c9f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.86aaab38.js.map