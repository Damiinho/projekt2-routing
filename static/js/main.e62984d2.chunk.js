(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,function(e,t,a){e.exports=a(37)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),u=(a(27),a(7)),i=a(8),o=a(12),m=a(9),s=a(13),p=(a(28),a(40)),d=a(41),E=a(20),h=(a(29),a(14)),f=a.n(h),g=a(19),b=a.n(g),v=a(15),y=a.n(v),x=function(){return r.a.createElement(d.a,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/products",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/contact",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(E.a,{path:"/admin",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(E.a,{render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}}))},w=a(38),j=(a(33),function(){var e=[{name:"Strona g\u0142\xf3wna",path:"/",exact:!0},{name:"Produkty",path:"/products"},{name:"Kontakt",path:"/contact"},{name:"Panel Admina",path:"/admin"}].map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(w.a,{exact:!!e.exact&&e.exact,to:"".concat(e.path)},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))}),k={marginTop:40},q=function(e){return r.a.createElement("article",{style:k},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},e.author),r.a.createElement("p",{style:{fontSize:15}},e.text))},z=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem."},{id:2,title:"Czym mo\u017ce by\u0107 teoria strun",author:"Jan Kowalski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem."},{id:3,title:"Czym nie jest teoria strun",author:"Anna Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem."},{id:4,title:"Czy istnieje teoria strun basowych?",author:"Anna Kowalska",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem."}],S=function(){var e=z.map(function(e){return r.a.createElement(q,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},J=a(16),O=(a(34),["car","bike","motorcycle"]),A=function(){var e=O.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(J.a,{to:"/products/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},N=function(e){return r.a.createElement("article",{className:"product"},e.id)},C=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"strona produktu"),r.a.createElement(N,{id:t.params.id}),r.a.createElement(J.a,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},L=(a(35),a(42)),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"wy\u015blij")),r.a.createElement(L.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz, czy na pewno chcesz opu\u015bci\u0107 stron\u0119?"}))}}]),t}(n.Component),F=a(39),B=function(){return r.a.createElement(E.a,{render:function(){return r.a.createElement(F.a,{to:"/login"})}})},K=function(){return r.a.createElement("div",null,"strona b\u0142\u0119dna")},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",null,"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",null,"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj")))},D=function(){return r.a.createElement(d.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:S}),r.a.createElement(E.a,{path:"/products",exact:!0,component:A}),r.a.createElement(E.a,{path:"/products/:id",exact:!0,component:C}),r.a.createElement(E.a,{path:"/contact",exact:!0,component:P}),r.a.createElement(E.a,{path:"/admin",exact:!0,component:B}),r.a.createElement(E.a,{path:"/login",exact:!0,component:T}),r.a.createElement(E.a,{exact:!0,component:K}))},I=(a(36),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"stopka"),r.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(E.a,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.url)),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.path)))}}),r.a.createElement(E.a,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.url)),r.a.createElement("p",null," ","Jeste\u015b na ",r.a.createElement("span",null,"stronie ",e.match.path)))}}))}),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/projekt2-routing"},r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(x,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(D,null))),r.a.createElement("footer",null,r.a.createElement(I,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e62984d2.chunk.js.map