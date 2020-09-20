webpackJsonp([1],{FZ38:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n                Employee Manager\n            ")])],1)])])},staticRenderFns:[]},o={name:"App",components:{Navbar:n("VU/8")(null,i,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(o,s,!1,function(e){n("FZ38")},null,null).exports,r=n("/ocq"),c=n("kxiW"),p=n.n(c),d=(n("881v"),p.a.initializeApp({apiKey:"AIzaSyCrN6wLkPDhPXJjS9OIkiQGLT-jPh26HtY",authDomain:"test-project-22f56.firebaseapp.com",databaseURL:"https://test-project-22f56.firebaseio.com",projectId:"test-project-22f56",storageBucket:"test-project-22f56.appspot.com",messagingSenderId:"234113297221",appId:"1:234113297221:web:f09dffc3a36cdda0e3ac2c"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;d.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var n={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(n)})})}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return n("li",{key:t.id,staticClass:"collection-item"},[n("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n            "+e._s(t.employee_id)+": "+e._s(t.name)+"\n\n            "),n("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[n("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[n("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},_=n("VU/8")(m,u,!1,null,null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"new-employee"}},[t("h3",[this._v("New Employee")])])}]},h=n("VU/8")({name:"new-employee",data:function(){return{}}},f,!1,null,null,null).exports,v={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,n){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){n(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"view-employee"}},[n("ul",{staticClass:"collection with-header"},[n("li",{staticClass:"collection-header"},[n("h4",[e._v(e._s(e.name))])]),e._v(" "),n("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),e._v(" "),n("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),n("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),n("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")])],1)},staticRenderFns:[]},w=n("VU/8")(v,y,!1,null,null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"edit-employee"}},[t("h3",[this._v("View Employee")])])}]},E=n("VU/8")({name:"edit-employee",data:function(){return{}}},C,!1,null,null,null).exports;a.a.use(r.a);var b=new r.a({routes:[{path:"/",name:"dashboard",component:_},{path:"/new",name:"new-employee",component:h},{path:"/edit/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:w}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:b,render:function(e){return e(l)}})}},["NHnr"]);
//# sourceMappingURL=app.2be243bc5c518dc0055e.js.map