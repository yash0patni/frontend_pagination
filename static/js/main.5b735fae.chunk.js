(this.webpackJsonpfrontend_pagination=this.webpackJsonpfrontend_pagination||[]).push([[0],{40:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),s=n.n(c),r=n(14),i=n.n(r),o=n(5),l=n.n(o),u=n(15),j=n(3),p=n(16),b=n.n(p),d=function(t){var e=t.posts;return t.loading?Object(a.jsx)("h2",{children:"Loading..."}):Object(a.jsx)("ul",{className:"list-group mb-4",children:e.map((function(t){return Object(a.jsx)("li",{className:"list-group-item",children:t.title},t.id)}))})},h=function(t){for(var e=t.postsPerPage,n=t.totalPosts,c=t.paginate,s=[],r=1;r<=Math.ceil(n/e);r++)s.push(r);return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"pagination",children:s.map((function(t){return Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{onClick:function(){return c(t)},href:"!#",className:"page-link",children:t})},t)}))})})},O=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(!1),i=Object(j.a)(r,2),o=i[0],p=i[1],O=Object(c.useState)(1),f=Object(j.a)(O,2),m=f[0],g=f[1],x=Object(c.useState)(10),v=Object(j.a)(x,1)[0];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,b.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,s(e.data),p(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var N=m*v,P=N-v,k=n.slice(P,N);return Object(a.jsxs)("div",{className:"container mt-5",children:[Object(a.jsx)("h1",{className:"text-primary mb-3",children:"My Blog"}),Object(a.jsx)(d,{posts:k,loading:o}),Object(a.jsx)(h,{paginate:function(t){return g(t)},postsPerPage:v,totalPosts:n.length})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5b735fae.chunk.js.map