(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3c43":function(t,e,s){},"59c5":function(t,e,s){"use strict";var r=s("acaf"),i=s.n(r);i.a},"8efc":function(t,e,s){},9302:function(t,e,s){},a282:function(t,e,s){"use strict";var r=s("9302"),i=s.n(r);i.a},acaf:function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.autoLogin?s("Dashboard"):s("div",{staticClass:"bg"},[s("keep-alive",["login"===t.status?s("login",{on:{change:t.change}}):s("register",{on:{change:t.change}})],1)],1)],1)},i=[],a=s("5530"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center"},[s("h1",[t._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.s_id,expression:"form.s_id"}],attrs:{type:"text",required:""},domProps:{value:t.form.s_id},on:{input:function(e){e.target.composing||t.$set(t.form,"s_id",e.target.value)}}}),s("span"),s("label",[t._v("Student ID")])]),s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),s("span"),s("label",[t._v("Password")])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"err"},[t.isloading?t._e():s("span",[t._v(t._s(t.err.split(",")[0]))]),t.isloading?s("b-spinner",{staticStyle:{width:"30px",height:"30px"},attrs:{variant:"danger"}}):t._e()],1),s("div",{staticClass:"register",on:{click:t.onregister}},[t._v("Register")])]),s("input",{attrs:{type:"submit",value:"Login"}})])])},n=[],c=s("2f62"),l={name:"login",data:function(){return{form:{s_id:"",password:""},isloading:!1}},methods:{login:function(){this.$store.dispatch("login",this.form),this.isloading=!0},onregister:function(){this.$emit("change","register")},gotoDashboard:function(){this.$router.push("/dashboard")}},computed:Object(a["a"])({},Object(c["b"])({status:"getterStatus",err:"getterError"})),watch:{status:function(t,e){setTimeout((function(){return location.reload()}),300)},err:function(t,e){t&&(this.isloading=!1)}}},u=l,d=(s("f9cc"),s("2877")),m=Object(d["a"])(u,o,n,!1,null,"189b42c1",null),f=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center"},[s("h1",[t._v("Register")]),s("h3",{staticStyle:{"text-align":"center",color:"red"}},[t._v(t._s(t.err.split(",")[0]))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.s_id,expression:"form.s_id"}],attrs:{type:"text",required:""},domProps:{value:t.form.s_id},on:{input:function(e){e.target.composing||t.$set(t.form,"s_id",e.target.value)}}}),s("span"),s("label",[t._v("Student ID")])]),s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nickName,expression:"form.nickName"}],attrs:{type:"text",required:""},domProps:{value:t.form.nickName},on:{input:function(e){e.target.composing||t.$set(t.form,"nickName",e.target.value)}}}),s("span"),s("label",[t._v("Nick Name")])]),s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),s("span"),s("label",[t._v("Password")])]),s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.confirmPassword,expression:"form.confirmPassword"}],attrs:{type:"password",required:""},domProps:{value:t.form.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.form,"confirmPassword",e.target.value)}}}),s("span"),s("label",[t._v("Confirm Password")])]),s("div",{staticClass:"txt_field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pin,expression:"form.pin"}],attrs:{type:"number",required:""},domProps:{value:t.form.pin},on:{input:function(e){e.target.composing||t.$set(t.form,"pin",e.target.value)}}}),s("span"),s("label",[t._v("PIN (รหัสนิสิต 4 ตัวสุดท้าย)")])]),s("div",{staticClass:"footer"},[s("div",{staticClass:"login",on:{click:t.onlogin}},[t._v("Login")])]),s("input",{attrs:{type:"submit",value:"Register"}})])])},v=[],g={name:"register",data:function(){return{form:{s_id:"",nickName:"",password:"",confirmPassword:"",pin:""}}},methods:{register:function(){if(this.form.password!==this.form.confirmPassword)return alert("Password not match");var t=this.form,e=t.s_id,s=t.password,r=t.pin,i=t.nickName;if(s.length<6)return alert("รหัสผ่านต้องไม่ต่ำกว่า 6 ตัว");this.$store.dispatch("register",{s_id:e,nickName:i,password:s,pin:r})},onlogin:function(){this.$emit("change","login")}},computed:Object(a["a"])({},Object(c["b"])({err:"getterError"}))},h=g,_=(s("a282"),Object(d["a"])(h,p,v,!1,null,"e73a9ab8",null)),b=_.exports,w=s("7277"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center"},[s("h1",[t._v("Greeting")]),s("div",{staticClass:"box"},[t._m(0),s("div",{staticClass:"go_dashboard",on:{click:function(e){return t.$router.push("/dashboard")}}},[s("span",[t._v("Dashboard")])]),s("b-button",{staticClass:"logout",on:{click:t.onlogout}},[t._v("Logout")])],1)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"name"},[t._v(" Hello "),s("span",[t._v("John")])])}],$={name:"Greeting",methods:{onlogout:function(){this.$store.dispatch("logout")}}},P=$,N=(s("e72b"),Object(d["a"])(P,x,C,!1,null,"12925ab6",null)),k=(N.exports,{name:"home",components:{login:f,register:b,Dashboard:w["a"]},data:function(){return{status:"login",user:!1}},methods:{change:function(t){this.status=t}},computed:Object(a["a"])({},Object(c["b"])({autoLogin:"getterAutologin"}))}),y=k,j=(s("59c5"),Object(d["a"])(y,r,i,!1,null,"136e516e",null));e["default"]=j.exports},e72b:function(t,e,s){"use strict";var r=s("3c43"),i=s.n(r);i.a},f9cc:function(t,e,s){"use strict";var r=s("8efc"),i=s.n(r);i.a}}]);
//# sourceMappingURL=about.5f984b2d.js.map