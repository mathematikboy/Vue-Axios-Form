(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02578f75"],{"0366":function(t,e,r){var n=r("1c0b");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?u(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),c=r("17c2"),i=r("9112");for(var u in o){var a=n[u],f=a&&a.prototype;if(f&&f.forEach!==c)try{i(f,"forEach",c)}catch(s){f.forEach=c}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),c=o("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),i=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2d00":function(t,e,r){var n,o,c=r("da84"),i=r("342f"),u=c.process,a=u&&u.versions,f=a&&a.v8;f?(n=f.split("."),o=n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(o=n[1]))),t.exports=o&&+o},"342f":function(t,e,r){var n=r("d066");t.exports=n("navigator","userAgent")||""},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,c=r("1dde"),i=c("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),c=r("b622"),i=c("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,c(0,r)):t[i]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("c430"),u=r("83ab"),a=r("4930"),f=r("fdbf"),s=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),m=r("7b0b"),g=r("fc6a"),y=r("c04e"),h=r("5c6c"),w=r("7c73"),x=r("df75"),O=r("241c"),v=r("057f"),j=r("7418"),S=r("06cf"),E=r("9bf2"),P=r("d1e7"),A=r("9112"),T=r("6eeb"),$=r("5692"),_=r("f772"),N=r("d012"),D=r("90e3"),U=r("b622"),k=r("e538"),C=r("746f"),V=r("d44e"),I=r("69f3"),J=r("b727").forEach,F=_("hidden"),H="Symbol",L="prototype",M=U("toPrimitive"),B=I.set,R=I.getterFor(H),Q=Object[L],W=o.Symbol,Y=c("JSON","stringify"),q=S.f,z=E.f,G=v.f,K=P.f,X=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=o.QObject,ot=!nt||!nt[L]||!nt[L].findChild,ct=u&&s((function(){return 7!=w(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(Q,e);n&&delete Q[e],z(t,e,r),n&&t!==Q&&z(Q,e,n)}:z,it=function(t,e){var r=X[t]=w(W[L]);return B(r,{type:H,tag:t,description:e}),u||(r.description=e),r},ut=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,r){t===Q&&at(Z,e,r),p(t);var n=y(e,!0);return p(r),l(X,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=w(r,{enumerable:h(0,!1)})):(l(t,F)||z(t,F,h(1,{})),t[F][n]=!0),ct(t,n,r)):z(t,n,r)},ft=function(t,e){p(t);var r=g(e),n=x(r).concat(pt(r));return J(n,(function(e){u&&!lt.call(r,e)||at(t,e,r[e])})),t},st=function(t,e){return void 0===e?w(t):ft(w(t),e)},lt=function(t){var e=y(t,!0),r=K.call(this,e);return!(this===Q&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,F)&&this[F][e])||r)},bt=function(t,e){var r=g(t),n=y(e,!0);if(r!==Q||!l(X,n)||l(Z,n)){var o=q(r,n);return!o||!l(X,n)||l(r,F)&&r[F][n]||(o.enumerable=!0),o}},dt=function(t){var e=G(g(t)),r=[];return J(e,(function(t){l(X,t)||l(N,t)||r.push(t)})),r},pt=function(t){var e=t===Q,r=G(e?Z:g(t)),n=[];return J(r,(function(t){!l(X,t)||e&&!l(Q,t)||n.push(X[t])})),n};if(a||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===Q&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ct(this,e,h(1,t))};return u&&ot&&ct(Q,e,{configurable:!0,set:r}),it(e,t)},T(W[L],"toString",(function(){return R(this).tag})),T(W,"withoutSetter",(function(t){return it(D(t),t)})),P.f=lt,E.f=at,S.f=bt,O.f=v.f=dt,j.f=pt,k.f=function(t){return it(U(t),t)},u&&(z(W[L],"description",{configurable:!0,get:function(){return R(this).description}}),i||T(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),J(x(rt),(function(t){C(t)})),n({target:H,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!u},{create:st,defineProperty:at,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(m(t))}}),Y){var mt=!a||s((function(){var t=W();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(d(e)||void 0!==t)&&!ut(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ut(e))return e}),o[1]=e,Y.apply(null,o)}})}W[L][M]||A(W[L],M,W[L].valueOf),V(W,H),N[F]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),c=r("7b0b"),i=r("50c4"),u=r("65f0"),a=[].push,f=function(t){var e=1==t,r=2==t,f=3==t,s=4==t,l=6==t,b=7==t,d=5==t||l;return function(p,m,g,y){for(var h,w,x=c(p),O=o(x),v=n(m,g,3),j=i(O.length),S=0,E=y||u,P=e?E(p,j):r||b?E(p,0):void 0;j>S;S++)if((d||S in O)&&(h=O[S],w=v(h,S,x),t))if(e)P[S]=w;else if(w)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:a.call(P,h)}else switch(t){case 4:return!1;case 7:a.call(P,h)}return l?-1:f||s?s:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},c109:function(t,e,r){"use strict";r.r(e);r("b0c0");var n=r("7a23"),o={class:"mx-auto"},c={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},i=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2 m-auto",for:"name"},"Name ",-1),u={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},a=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"street"},"Street ",-1),f={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},s=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"street"},"Housenumber ",-1),l={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},b=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"postalcode"},"Postal code ",-1),d={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},p=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"city"},"City ",-1),m={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},g=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"street"},"Email ",-1),y={class:"flex flex-row mb-4 w-full max-w-sm border-b border-gray-50"},h=Object(n["g"])("label",{class:"w-1/2 font-semibold px-2",for:"telephone"},"Telephone ",-1),w=Object(n["g"])("button",{class:"py-2 px-6 mt-2  rounded-sm max-w-sm  text-white text-xl bg-blue-500",type:"submit"}," Submit ",-1);function x(t,e,r,x,O,v){return Object(n["p"])(),Object(n["d"])("div",o,[Object(n["g"])("form",{class:"p-2 text-gray-800 flex flex-col ",method:"post",action:"/submitted.php",onSubmit:e[8]||(e[8]=Object(n["B"])((function(){return t.onSubmit&&t.onSubmit.apply(t,arguments)}),["prevent"]))},[Object(n["g"])("div",c,[i,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"name","onUpdate:modelValue":e[1]||(e[1]=function(t){return v.name=t})},null,512),[[n["x"],v.name]])]),Object(n["g"])("div",null,[t.form.errors.has("name")?(Object(n["p"])(),Object(n["d"])("span",{key:0,class:"text-red",textContent:Object(n["v"])(t.form.errors.get("name"))},null,8,["textContent"])):Object(n["e"])("",!0)]),Object(n["g"])("div",u,[a,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"street","onUpdate:modelValue":e[2]||(e[2]=function(t){return v.street=t})},null,512),[[n["x"],v.street]])]),Object(n["g"])("div",f,[s,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"housenumber","onUpdate:modelValue":e[3]||(e[3]=function(t){return v.housenumber=t})},null,512),[[n["x"],v.housenumber]])]),Object(n["g"])("div",l,[b,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"postalcode","onUpdate:modelValue":e[4]||(e[4]=function(t){return v.postalcode=t})},null,512),[[n["x"],v.postalcode]])]),Object(n["g"])("div",d,[p,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"city","onUpdate:modelValue":e[5]||(e[5]=function(t){return v.city=t})},null,512),[[n["x"],v.city]])]),Object(n["g"])("div",m,[g,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"email","onUpdate:modelValue":e[6]||(e[6]=function(t){return v.email=t})},null,512),[[n["x"],v.email]])]),Object(n["g"])("div",y,[h,Object(n["A"])(Object(n["g"])("input",{class:"w-1/2 border border-gray-200 bg-gray-100 px-2 py-3 w-full max-w-md m-auto",type:"text",id:"telephone","onUpdate:modelValue":e[7]||(e[7]=function(t){return v.telephone=t})},null,512),[[n["x"],v.telephone]])]),w],32)])}r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var O=r("d23f");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S=r("5502"),E={data:function(){return{store:S["b"]}},computed:j(j({},Object(S["d"])({form:"getForm"})),{},{name:{get:function(){return this.$store.state.form.name},set:function(t){this.$store.commit("SET_NAME",t)}},street:{get:function(){return this.$store.state.form.street},set:function(t){this.$store.commit("SET_STREET",t)}},housenumber:{get:function(){return this.$store.state.form.housenumber},set:function(t){this.$store.commit("SET_HOUSENR",t)}},postalcode:{get:function(){return this.$store.state.form.postalcode},set:function(t){this.$store.commit("SET_POSTAL_CODE",t)}},city:{get:function(){return this.$store.state.form.city},set:function(t){this.$store.commit("SET_CITY",t)}},telephone:{get:function(){return this.$store.state.form.telephone},set:function(t){this.$store.commit("SET_TELEPHONE",t)}},email:{get:function(){return this.$store.state.form.email},set:function(t){this.$store.commit("SET_EMAIL",t)}}}),methods:j({},Object(S["c"])({onSubmit:"onSubmit"}))};E.render=x;e["default"]=E},d23f:function(t,e){function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),c=r("56ef"),i=r("fc6a"),u=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=u.f,f=c(n),s={},l=0;while(f.length>l)r=o(n,e=f[l++]),void 0!==r&&a(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("fc6a"),i=r("06cf").f,u=r("83ab"),a=o((function(){i(1)})),f=!u||a;n({target:"Object",stat:!0,forced:f,sham:!u},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-02578f75.js.map