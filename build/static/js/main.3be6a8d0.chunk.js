(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),u=t(16),a=t.n(u),r=(t(21),t(7)),i=t(3),l=(t(22),t(4)),s=t.n(l),d="/api/contacts",b=function(){return s.a.get(d).then((function(e){return e.data}))},f=function(e){return s.a.post(d,e).then((function(e){return e.data}))},j=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e}))},m=t(0),O=function(e){var n=e.onSubmit,t=e.onNameChange,c=e.onNumberChange,o=e.Namevalue,u=e.Numvalue;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:o,onChange:t}),Object(m.jsx)("br",{}),"number ",Object(m.jsx)("input",{value:u,onChange:c})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.onChange,t=e.placeholder;return Object(m.jsx)("input",{placeholder:t,onChange:n})},v=function(e){var n=e.person,t=e.handleDelete,c=e.handleEdit;return Object(m.jsx)("ul",{children:n.map((function(e,n){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("li",{children:[e.name," ",e.number]}),Object(m.jsx)("button",{onClick:function(){return t(e.id,e.name)},children:"Delete"}),Object(m.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"Edit"})]},n)}))})},x=function(e){var n=e.message,t=e.type;return null===n?null:Object(m.jsx)("div",{className:t,children:Object(m.jsx)("p",{children:n})})};var g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(c.useState)(""),a=Object(i.a)(u,2),l=a[0],s=a[1],d=Object(c.useState)(""),g=Object(i.a)(d,2),C=g[0],k=g[1],N=Object(c.useState)(""),y=Object(i.a)(N,2),S=y[0],w=y[1],D=Object(c.useState)(""),T=Object(i.a)(D,2),E=T[0],F=T[1];return Object(c.useEffect)((function(){b().then((function(e){o(e)}))}),[S]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x,{message:S,type:E}),Object(m.jsx)("h2",{children:"Phonebook"}),"Filter: ",Object(m.jsx)(p,{onChange:function(e){var n=e.target.value;if(n){var c=t.filter((function(e){return e.name.includes(n)}));o(c)}},placeholder:"Filter Names"}),Object(m.jsx)(O,{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===l.toLowerCase()})))S("".concat(l," already exists")),s(""),k("");else if(t.find((function(e){return e.number===C})))S("".concat(C," already exists")),s(""),k("");else{var n={name:l,number:C};o(t.concat(n)),f(n).then((function(e){console.log(e),w("".concat(l," successfully added to phonebook")),F("success"),setTimeout((function(){w(null)}),5e3)})).catch((function(e){w("".concat(l," could not be added to phonebook\n        due to ").concat(e)),F("error"),setTimeout((function(){w(null)}),5e3)})),s(""),k("")}},onNumberChange:function(e){e.preventDefault(),k(e.target.value)},onNameChange:function(e){e.preventDefault(),s(e.target.value)},Namevalue:l,Numvalue:C}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(v,{person:t,handleDelete:function(e,n){window.confirm("would you like to delete ".concat(n,"?"))&&h(e).then((function(e){console.log(e),w("".concat(n," successfully deleted from phonebook")),F("error"),setTimeout((function(){w(null)}),5e3)})).catch((function(e){w("".concat(n," could not be deleted from phonebook\n        due to ").concat(e)),F("error"),setTimeout((function(){w(null)}),5e3)}))},handleEdit:function(e,n){var c=prompt(" Enter new number for ".concat(n,"? or cancel to maintain old number")),o=t.find((function(n){return n.id===e}));if(c){var u=Object(r.a)(Object(r.a)({},o),{},{number:c});j(e,u).then((function(e){return console.log(e),w("".concat(o.name," successfully edited in phonebook")),F("success"),setTimeout((function(){w(null)}),5e3),e}))}}})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),u(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.3be6a8d0.chunk.js.map