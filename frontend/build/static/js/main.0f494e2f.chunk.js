(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/fixedPrices.80734fc4.bin"},37:function(e,t,a){e.exports=a(84)},63:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(3),s=a(4),i=a(9),m=a(1),u=a(2),d=a(32).Argv.env.REACT_APP_API_URL,p=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},f=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"#ffffff"}},b=Object(s.g)(function(e){var t=e.history;return r.a.createElement("div",{className:"mb-5"},r.a.createElement("ul",{className:"nav nav-tabs bg-dark"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/"),to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/shop"),to:"/shop"},"Filter")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/cart"),to:"/cart"},"My Tickets"," ",r.a.createElement("sup",null,r.a.createElement("small",{className:"cart-badge"},"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0)))),p()&&0===p().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/user/dashboard"),to:"/user/dashboard"},"Dashboard")),p()&&1===p().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/admin/dashboard"),to:"/admin/dashboard"},"Dashboard")),!p()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/signin"),to:"/signin"},"Signin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",style:f(t,"/signup"),to:"/signup"},"Signup"))),p()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then(function(e){console.log("signout",e)}).catch(function(e){return console.log(e)})}(function(){t.push("/")})}},"Signout"))))}),E=(a(63),function(e){e.title,e.description;var t=e.className,a=e.children;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:t},a))}),g=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.name,s=a.email,p=a.password,f=a.success,b=a.error,g=function(e){return function(t){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({error:!1},e,t.target.value)))}},h=function(e){var t;e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:!1})),(t={name:o,email:s,password:p},fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})).then(function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error,success:!1})):c(Object(m.a)(Object(m.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))})};return r.a.createElement(E,{title:"Sign in",description:"Node React E-commerce App",className:"container col-md-8 offset-md-2"},r.a.createElement("div",{className:"alert alert-info",style:{display:f?"":"none"}},"New account is created. Please ",r.a.createElement(l.b,{to:"/signin"},"Signin")),r.a.createElement("div",{className:"alert alert-danger",style:{display:b?"":"none"}},b),r.a.createElement("form",{style:{marginTop:"15%"}},r.a.createElement("h1",{className:"text-center"},"Signup"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:g("name"),type:"text",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:g("email"),type:"email",className:"form-control",value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:g("password"),type:"password",className:"form-control",value:p})),r.a.createElement("button",{onClick:h,className:"btn btn-primary btn-lg btn-lg btn-block"},"Submit")))},h=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReferrer:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.email,l=a.password,f=a.loading,b=a.error,g=a.redirectToReferrer,h=p().user,N=function(e){return function(t){c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({error:!1},e,t.target.value)))}},v=function(e){var t;e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:!1,loading:!0})),(t={email:o,password:l},fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})).then(function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,function(){c(Object(m.a)(Object(m.a)({},a),{},{redirectToReferrer:!0}))})})};return r.a.createElement(E,{title:"Sign in",description:"Node React E-commerce App",className:"container col-md-8 offset-md-2"},f&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:b?"":"none"}},b),r.a.createElement("form",{style:{marginTop:"15%"}},r.a.createElement("h1",{className:"text-center"},"Signin"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:N("email"),type:"email",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:N("password"),type:"password",className:"form-control",value:l})),r.a.createElement("button",{onClick:v,className:"btn btn-primary btn-lg btn-block"},"Submit")),g?h&&1===h.role?r.a.createElement(s.a,{to:"/admin/dashboard"}):r.a.createElement(s.a,{to:"/user/dashboard"}):p()?r.a.createElement(s.a,{to:"/"}):void 0)},N=a(34),v=a.n(N),y=function(e){return fetch("".concat(d,"/trains?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},j=function(){return fetch("".concat(d,"/categories"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})},O=function(e,t){var a={limit:t,skip:e,filters:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}};return fetch("".concat(d,"/trains/by/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})},S=function(e){var t=e.item,a=e.url;return r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:"".concat(d,"/").concat(a,"/photo/").concat(t._id),alt:t.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}}))},w=a(35),k=a.n(w),T=function(e){var t=e.train,a=e.showViewTrainButton,c=void 0===a||a,o=e.showAddToCartButton,i=void 0===o||o,d=e.cartUpdate,p=void 0!==d&&d,f=e.showRemoveProductButton,b=void 0!==f&&f,E=e.setRun,g=void 0===E?function(e){return e}:E,h=e.run,N=void 0===h?void 0:h,v=Object(n.useState)(!1),y=Object(u.a)(v,2),j=y[0],O=y[1],w=Object(n.useState)(t.count),T=Object(u.a)(w,2),x=T[0],C=T[1],A=function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e}),a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(m.a)(Object(m.a)({},e),{},{count:1})),a=Array.from(new Set(a.map(function(e){return e._id}))).map(function(e){return a.find(function(t){return t._id===e})}),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,O(!0))},D=function(e){return function(t){g(!N),C(t.target.value<1?1:t.target.value),t.target.value>=1&&function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.map(function(n,r){n._id===e&&(a[r].count=t)}),localStorage.setItem("cart",JSON.stringify(a)))}(e,t.target.value)}};return r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header card-header-1 "},t.name),r.a.createElement("div",{className:"card-body"},function(e){if(e)return r.a.createElement(s.a,{to:"/cart"})}(j),r.a.createElement(S,{item:t,url:"train"}),r.a.createElement("p",{className:"card-p black-10"},"Rs.",t.price),r.a.createElement("p",{className:"black-9"},"Category: ",t.category&&t.category.name),r.a.createElement("p",{className:"black-9"},"Depature: ",t.departFrom),r.a.createElement("p",{className:"black-9"},"Destination: ",t.destination),r.a.createElement("p",{className:"black-9"},"Depature Date/Time: ",t.depatureDate," / ",t.depatureTime),r.a.createElement("p",{className:"black-9"},"Arrival Date/Time: ",t.arrivalDate," / ",t.arrivalTime),r.a.createElement("p",{className:"black-8"},"Added on ",k()(t.createdAt).fromNow()),t.noOfSeats>0?r.a.createElement("span",{className:"badge badge-primary badge-pill"},"Available "):r.a.createElement("span",{className:"badge badge-primary badge-pill"},"Not Available "),r.a.createElement("br",null),function(e){return e&&r.a.createElement(l.b,{to:"/train/".concat(t._id),className:"mr-2"},r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mt-2 mb-2 card-btn-1"},"View Train"))}(c),function(e){return e&&r.a.createElement("button",{onClick:A,className:"btn btn-warning btn-lg btn-block mt-2 mb-2 card-btn-1"},"Buy")}(i),function(e){return e&&r.a.createElement("button",{onClick:function(){!function(e){var t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map(function(a,n){a._id===e&&t.splice(n,1)}),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),g(!N)},className:"btn btn-danger btn-lg btn-block mt-2 mb-2"},"Remove Product")}(b),function(e){return e&&r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Adjust Quantity")),r.a.createElement("input",{type:"number",className:"form-control",value:x,onChange:D(t._id)})))}(p)))},x=function(){var e=Object(n.useState)({categories:[],category:"",search:"",results:[],searched:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.categories,l=a.category,s=a.search,p=a.results,f=a.searched;Object(n.useEffect)(function(){j().then(function(e){e.error?console.log(e.error):c(Object(m.a)(Object(m.a)({},e),{},{categories:e}))})},[]);var b=function(){s&&function(e){var t=v.a.stringify(e);return console.log("query",t),fetch("".concat(d,"/trains/search?").concat(t),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})}({search:s||void 0,category:l}).then(function(e){e.error?console.log(e.error):c(Object(m.a)(Object(m.a)({},a),{},{results:e,searched:!0}))})},E=function(e){e.preventDefault(),b()},g=function(e){return function(t){var n;c(Object(m.a)(Object(m.a)({},a),{},(n={},Object(i.a)(n,e,t.target.value),Object(i.a)(n,"searched",!1),n)))}};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container mb-3"},r.a.createElement("form",{onSubmit:E},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{className:"btn mr-2",onChange:g("category")},r.a.createElement("option",{value:"All"},"All"),o.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))),r.a.createElement("input",{type:"search",className:"form-control",onChange:g("search"),placeholder:"Search by name"})),r.a.createElement("div",{className:"btn input-group-append",style:{border:"none"}},r.a.createElement("button",{className:"input-group-text"},"Search"))))),r.a.createElement("div",{className:"container-fluid mb-3"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-4 mb-4"},function(e,t){return e&&t.length>0?"Found ".concat(t.length," products"):e&&t.length<1?"No products found":void 0}(f,e)),r.a.createElement("div",{className:"row"},e.map(function(e,t){return r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement(T,{key:t,train:e}))})))}(p)))},C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],s=o[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=(m[0],m[1]);return Object(n.useEffect)(function(){y("sold").then(function(e){e.error?d(e.error):a(e)}),y("createdAt").then(function(e){console.log(e),e.error?d(e.error):s(e)})},[]),r.a.createElement(E,{title:"FullStack React Node MongoDB Ecommerce App",description:"Node React E-commerce App",className:"container-fluid"},r.a.createElement(x,null),r.a.createElement("h2",{className:"mb-4"},"Top Sellers"),r.a.createElement("div",{className:"row"},l.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-4 mb-3"},r.a.createElement(T,{train:e}))})))},A=a(17),D=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return p()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},P=function(){var e=p().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(E,{title:"Dashboard",description:"User Dashboard",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card_header"},"User Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/cart"},"My Cart")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/profile/update"},"Update Profile")),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User")))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))),r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"card-header"},"Purchase history"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"history"))))))},I=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return p()&&1===p().user.role?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},_=function(){var e=p().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(E,{title:"Dashboard",description:"G'day ".concat(t,"!"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/category"},"Create Category")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/train"},"Create Product"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))))))},R=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],f=Object(n.useState)(!1),b=Object(u.a)(f,2),g=b[0],h=b[1],N=p(),v=N.user,y=N.token,j=function(e){m(""),c(e.target.value)},O=function(e){e.preventDefault(),m(""),h(!1),function(e,t,a){return fetch("".concat(d,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){console.log(e)})}(v._id,y,{name:a}).then(function(e){e.error?m(e.error):(m(""),h(!0))})};return r.a.createElement(E,{title:"Add a new category",description:"G'day ".concat(v.name,", ready to add a new category?")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return r.a.createElement("h3",{className:"text-success"},a," is created")}(),function(){if(i)return r.a.createElement("h3",{className:"text-danger"},"Category should be unique")}(),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",onChange:j,value:a,autoFocus:!0,required:!0})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Category")),r.a.createElement("div",{className:"mt-5"},r.a.createElement(l.b,{to:"/admin/dashboard",className:"text-warning"},"Back to Dashboard")))))},B=function(){var e=Object(n.useState)({name:"",categories:[],departFrom:"",destination:"",depatureDate:"",depatureTime:"",arrivalDate:"",arrivalTime:"",noOfSeats:"",price:"",photo:"",loading:!1,error:"",createdTrain:"",redirectToProfile:!1,formData:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=p(),l=o.user,s=o.token,f=a.name,b=a.categories,g=(a.category,a.departFrom),h=a.destination,N=a.depatureDate,v=a.depatureTime,y=a.arrivalDate,j=a.arrivalTime,O=a.noOfSeats,S=a.price,w=a.loading,k=a.error,T=a.createdTrain,x=(a.redirectToProfile,a.formData),C=function(){fetch("".concat(d,"/categories"),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)}).then(function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error})):c(Object(m.a)(Object(m.a)({},a),{},{categories:e,formData:new FormData}))})};Object(n.useEffect)(function(){C()},[]);var A=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;x.set(e,n),c(Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e,n)))}},D=function(e){e.preventDefault(),c(Object(m.a)(Object(m.a)({},a),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(d,"/train/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then(function(e){return e.json()}).catch(function(e){console.log(e)})}(l._id,s,x).then(function(e){e.error?c(Object(m.a)(Object(m.a)({},a),{},{error:e.error})):c(Object(m.a)(Object(m.a)({},a),{},{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdTrain:e.name}))})};return r.a.createElement(E,{title:"Add a new product",description:"G'day ".concat(l.name,", ready to add a new product?")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},w&&r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-info",style:{display:T?"":"none"}},r.a.createElement("h2",null,"".concat(T)," is created!")),r.a.createElement("div",{className:"alert alert-danger",style:{display:k?"":"none"}},k),r.a.createElement("form",{className:"mb-3",onSubmit:D},r.a.createElement("h4",null,"Post Photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-secondary"},r.a.createElement("input",{onChange:A("photo"),type:"file",name:"photo",accept:"image/*"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:A("name"),type:"text",className:"form-control",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Category"),r.a.createElement("select",{onChange:A("category"),className:"form-control"},r.a.createElement("option",null,"Please select"),b&&b.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Depart From"),r.a.createElement("input",{onChange:A("departFrom"),type:"text",className:"form-control",value:g})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Depature Date"),r.a.createElement("input",{onChange:A("depatureDate"),type:"date",className:"form-control",value:N}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Depature Time"),r.a.createElement("input",{onChange:A("depatureTime"),type:"time",className:"form-control",value:v})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Destination"),r.a.createElement("input",{onChange:A("destination"),type:"text",className:"form-control",value:h})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Arrival Date"),r.a.createElement("input",{onChange:A("arrivalDate"),type:"date",className:"form-control",value:y}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Arrival Time"),r.a.createElement("input",{onChange:A("arrivalTime"),type:"time",className:"form-control",value:j})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Number of seats"),r.a.createElement("input",{onChange:A("noOfSeats"),type:"number",className:"form-control",value:O})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Price"),r.a.createElement("input",{onChange:A("price"),type:"number",className:"form-control",value:S})),r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block"},"Create Train")))))},J=a(15),F=function(e){var t=e.categories,a=e.handleFilters,c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],s=o[1],i=function(e){return function(){var t=l.indexOf(e),n=Object(J.a)(l);-1===t?n.push(e):n.splice(t,1),s(n),a(n)}};return t.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-unstyled"},r.a.createElement("input",{onChange:i(e._id),value:l.indexOf(-1===e._id),type:"checkbox",className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label"},e.name))})},G=a(36),U=function(){var e=Object(n.useState)({filters:{category:[],price:[],depature:[]}}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),f=(p[0],p[1]),b=Object(n.useState)(6),g=Object(u.a)(b,2),h=g[0],N=(g[1],Object(n.useState)(0)),v=Object(u.a)(N,2),y=v[0],S=v[1],w=Object(n.useState)(0),k=Object(u.a)(w,2),x=k[0],C=k[1],A=Object(n.useState)([]),D=Object(u.a)(A,2),P=D[0],I=D[1],_=function(e){O(y,h,e).then(function(e){e.error?f(e.error):(I(e.data),C(e.size),S(0))})},R=function(){var e=y+h;O(e,h,a.filters).then(function(t){t.error?f(t.error):(I([].concat(Object(J.a)(P),Object(J.a)(t.data))),C(t.size),S(e))})};Object(n.useEffect)(function(){j().then(function(e){e.error?f(e.error):i(e)}),_(y,a.filters)},[]);var B=function(e){var t=G.prices,a=[];for(var n in t)t[n]._id===parseInt(e)&&(a=t[n].array);return a};return r.a.createElement(E,{title:"Shop Page",description:"Search and find books of your choice",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",null,"Filter by categories"),r.a.createElement("ul",null,r.a.createElement(F,{categories:s,handleFilters:function(e){return function(e,t){var n=Object(m.a)({},a);if(n.filters[t]=e,"price"===t){var r=B(e);n.filters[t]=r}_(a.filters),c(n)}(e,"category")}})),r.a.createElement("div",null)),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"mb-4"},"Trains"),r.a.createElement("div",{className:"row"},P.map(function(e,t){return r.a.createElement("div",{key:t,className:"col-4 mb-3"},r.a.createElement(T,{train:e}))})),r.a.createElement("hr",null),x>0&&x>=h&&r.a.createElement("button",{onClick:R,className:"btn btn-warning mb-5"},"Load more"))))},z=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),i=(s[0],s[1]),m=Object(n.useState)(!1),p=Object(u.a)(m,2),f=(p[0],p[1]),b=function(e){(function(e){return fetch("".concat(d,"/train/").concat(e),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(e).then(function(e){var t;e.error?f(e.error):(o(e),(t=e._id,fetch("".concat(d,"/trains/related/").concat(t),{method:"GET"}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})).then(function(e){e.error?f(e.error):i(e)}))})};return Object(n.useEffect)(function(){var t=e.match.params.trainId;b(t)},[e]),r.a.createElement(E,{title:c&&c.name,description:c&&c.description&&c.description.substring(0,100),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4",style:{marginLeft:"35%"}},c&&c.price&&r.a.createElement(T,{train:c,showViewTrainButton:!1}))))},L=(a(67),a(23)),M=a.n(L),q=function(e){var t=e.trains,a=e.setRun,c=void 0===a?function(e){return e}:a,o=e.run,s=void 0===o?void 0:o,i=Object(n.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{},address:""}),f=Object(u.a)(i,2),b=f[0],E=f[1],g=p()&&p().user._id,h=p()&&p().token,N=function(e,t){(function(e,t){return fetch("".concat(d,"/braintree/getToken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(e,t).then(function(e){e.error?(console.log(e.error),E(Object(m.a)(Object(m.a)({},e),{},{error:e.error}))):(console.log(e),E({clientToken:e.clientToken}))})};Object(n.useEffect)(function(){N(g,h)},[]);var v,y,j=function(e){E(Object(m.a)(Object(m.a)({},b),{},{address:e.target.value}))},O=function(){return t.reduce(function(e,t){return e+t.count*t.price},0)},S=b.address,w=function(){E({loading:!0}),b.instance.requestPaymentMethod().then(function(e){var a={paymentMethodNonce:e.nonce,amount:O()};(function(e,t,a){return fetch("".concat(d,"/braintree/payment/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(g,h,a).then(function(e){console.log(e);var a={products:t,transaction_id:e.transaction.id,amount:e.transaction.amount,address:S};(function(e,t,a){return fetch("".concat(d,"/order/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:a})}).then(function(e){return e.json()}).catch(function(e){return console.log(e)})})(g,h,a).then(function(e){var t;t=function(){c(!s),console.log("payment success and empty cart"),E({loading:!1,success:!0})},"undefined"!==typeof window&&(localStorage.removeItem("cart"),t())}).catch(function(e){console.log(e),E({loading:!1})})}).catch(function(e){console.log(e),E({loading:!1})})}).catch(function(e){E(Object(m.a)(Object(m.a)({},b),{},{error:e.message}))})},k=function(){return r.a.createElement("div",{onBlur:function(){return E(Object(m.a)(Object(m.a)({},b),{},{error:""}))}},null!==b.clientToken&&t.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("label",{className:"text-muted"},"Delivery address:"),r.a.createElement("textarea",{onChange:j,className:"form-control",value:b.address,placeholder:"Type your delivery address here..."}),r.a.createElement(M.a,null)),r.a.createElement(M.a,{options:{authorization:b.clientToken,paypal:{flow:"vault"}},onInstance:function(e){return b.instance=e}}),r.a.createElement("button",{onClick:w,className:"btn btn-success btn-block"},"Pay")):null)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Total: $",O()),b.loading&&r.a.createElement("h2",{className:"text-danger"},"Loading..."),(y=b.success,r.a.createElement("div",{className:"alert alert-info",style:{display:y?"":"none"}},"Thanks! Your payment was successful!")),(v=b.error,r.a.createElement("div",{className:"alert alert-danger",style:{display:v?"":"none"}},v)),p()?r.a.createElement("div",null,k()):r.a.createElement(l.b,{to:"/signin"},r.a.createElement("button",{className:"btn btn-primary"},"Sign in to checkout")))},V=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1];Object(n.useEffect)(function(){c("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])},[i]);return r.a.createElement(E,{title:"Shopping Cart",description:"Manage your cart items. Add remove checkout or continue shopping.",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},a.length>0?function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Your cart has ","".concat(e.length)," items"),r.a.createElement("hr",null),e.map(function(e,t){return r.a.createElement(T,{key:1,train:e,showAddToCartButton:!1,cartUpdate:!0,showRemoveProductButton:!0,setRun:m,run:i})}))}(a):r.a.createElement("h2",null,"No Tcikets found ",r.a.createElement("br",null)," ",r.a.createElement(l.b,{to:"/shop"},"Buy tickets"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h2",{className:"mb-4"},"Your cart summary"),r.a.createElement("hr",null),r.a.createElement(q,{trains:a,setRun:m,run:i}))))},Y=function(){return r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:C}),r.a.createElement(s.b,{path:"/shop",exact:!0,component:U}),r.a.createElement(s.b,{path:"/signin",exact:!0,component:h}),r.a.createElement(s.b,{path:"/signup",exact:!0,component:g}),r.a.createElement(D,{path:"/user/dashboard",exact:!0,component:P}),r.a.createElement(I,{path:"/admin/dashboard",exact:!0,component:_}),r.a.createElement(I,{path:"/category/create",exact:!0,component:R}),r.a.createElement(I,{path:"/create/train",exact:!0,component:B}),r.a.createElement(s.b,{path:"/train/:trainId",exact:!0,component:z}),r.a.createElement(s.b,{path:"/cart",exact:!0,component:V})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0f494e2f.chunk.js.map