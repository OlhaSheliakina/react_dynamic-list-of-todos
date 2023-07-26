(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(5)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expended",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!1===e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":e.id!==(null===s||void 0===s?void 0:s.id),"fa-eye-slash":e.id===(null===s||void 0===s?void 0:s.id)})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.filter,n=e.setFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.loading,c=e.setLoading,s=e.selectedTodo,a=e.setSelectedTodo,n=Object(d.useState)(null),i=Object(l.a)(n,2),o=i[0],r=i[1];return Object(d.useEffect)((function(){var e;c(!0),s&&(e=s.userId,h("/users/".concat(e))).then(r).finally((function(){return c(!1)}))}),[s]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),!t||s&&o?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==s&&void 0!==s&&s.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]}):Object(j.jsx)(m,{})]})};var x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(d.useState)(""),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(s.ALL),g=Object(l.a)(y,2),T=g[0],L=g[1],C=Object(d.useState)(null),k=Object(l.a)(C,2),E=k[0],S=k[1];Object(d.useEffect)((function(){x(!0),h("/todos").then(a).finally((function(){return x(!1)}))}),[]);var w=function(e,t,c){var a=Object(i.a)(e),n=t.toLowerCase().trim();switch(t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))),c){case s.ALL:default:return a;case s.COMPLETED:return a.filter((function(e){return e.completed}));case s.ACTIVE:return a.filter((function(e){return!1===e.completed}))}}(c,p,T);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:p,setQuery:N,filter:T,setFilter:L})}),Object(j.jsx)("div",{className:"block",children:r?Object(j.jsx)(m,{}):Object(j.jsx)(u,{todos:w,setSelectedTodo:function(e){return S(e)},selectedTodo:E})})]})})}),E&&Object(j.jsx)(O,{loading:r,setLoading:x,selectedTodo:E,setSelectedTodo:S})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4ea98ff5.chunk.js.map