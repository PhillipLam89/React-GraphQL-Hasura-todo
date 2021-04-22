(this["webpackJsonpreact-graphql-hasura-todo"]=this["webpackJsonpreact-graphql-hasura-todo"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var r,a,o,c,i=n(4),s=n.n(i),u=n(63),d=n.n(u),l=n(27),p=n.n(l),b=n(42),h=n(34),j=n(33),f=n(82),x=n(26),m=n(11),O=Object(x.a)(r||(r=Object(j.a)(["\nquery getTodos {\n  todos {\n    done\n    text\n    id\n  }\n}\n"]))),g=Object(x.a)(a||(a=Object(j.a)(["\nmutation toggleTodo($id: uuid!, $done: Boolean!) {\n  update_todos(where: {id: {_eq: $id}}, _set: {done: $done}) {\n    returning {\n      done\n      id\n      text\n    }\n  }\n}\n"]))),v=Object(x.a)(o||(o=Object(j.a)(["\nmutation addTodo($text: String!) {\n  insert_todos(objects: {text: $text}) {\n    returning {\n      id\n      text\n      done\n    }\n  }\n}\n"]))),y=Object(x.a)(c||(c=Object(j.a)(["\nmutation deleteTodo($id: uuid!) {\n  delete_todos(where: {id: {_eq: $id}}) {\n    returning {\n      id\n      text\n      done\n    }\n  }\n}\n"])));var w=function(){var e=s.a.useState(""),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(f.useQuery)(O),o=a.data,c=a.loading,i=a.error,u=Object(f.useMutation)(g),d=Object(h.a)(u,1)[0],l=Object(f.useMutation)(v),j=Object(h.a)(l,1)[0],x=Object(f.useMutation)(y),w=Object(h.a)(x,1)[0];function k(){return(k=Object(b.a)(p.a.mark((function e(t){var n,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.done,e.next=3,d({variables:{id:n,done:!r}});case 3:a=e.sent,console.log("toggled this todo item ==>",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.trim()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,j({variables:{text:n},refetchQueries:[{query:O}]});case 5:a=e.sent,console.log("newest todo added ==>",a),r("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(b.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,!window.confirm("Sure you wanna delete this??")){e.next=7;break}return e.next=5,w({variables:{id:n},update:function(e){var t=e.readQuery({query:O}).todos.filter((function(e){return e.id!==n}));e.writeQuery({query:O,data:{todos:t}})}});case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i?Object(m.jsx)("h1",{children:"Error while fetching data..."}):c?Object(m.jsx)("h1",{children:"Loading..."}):Object(m.jsxs)("div",{className:"vh-100 code flex flex-column items-center bg-purple white pa3",children:[Object(m.jsxs)("h1",{className:"f2-l",children:["GraphQL Checklist",Object(m.jsx)("span",{role:"img","aria-label":"Checkmark",children:"\u2714\ufe0f"})]}),Object(m.jsxs)("form",{onSubmit:function(e){return q.apply(this,arguments)},className:"mb3",children:[Object(m.jsx)("input",{className:"pa2 f4 b--dashed",type:"text",placeholder:"write your todo",onChange:function(e){return r(e.target.value)},value:n}),Object(m.jsx)("button",{className:"pa2 f4 bg-green",type:"submit",children:"Create"})]}),Object(m.jsx)("div",{className:"flex items-center justify-center flex-column",children:o.todos.map((function(e){return Object(m.jsxs)("p",{onDoubleClick:function(){return function(e){return k.apply(this,arguments)}(e)},children:[Object(m.jsx)("span",{className:"pointer list pa1 f3 ".concat(e.done&&"strike"),children:e.text}),Object(m.jsx)("button",{onClick:function(){return function(e){return N.apply(this,arguments)}(e)},className:"bg-transparent bn f4",style:{marginLeft:".5rem",color:"red",transform:"scale(2)",cursor:"pointer"},children:"\xd7"})]},e.id)}))})]})},k=new(n(45).a)({uri:"https://react-graph-ql.herokuapp.com/v1/graphql"}),q=document.querySelector("#root");d.a.render(Object(m.jsx)(f.ApolloProvider,{client:k,children:Object(m.jsx)(w,{})}),q)}},[[81,1,2]]]);
//# sourceMappingURL=main.f9259513.chunk.js.map