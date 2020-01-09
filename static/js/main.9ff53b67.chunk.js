(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),o=n(2),l=n(5),u=n.n(l),m=n(7),i=n(11),p=n(15),d="https://jsonplaceholder.typicode.com/posts",f="https://jsonplaceholder.typicode.com/users",h="https://jsonplaceholder.typicode.com/comments",E=function(e){var t=e.user;return r.a.createElement("p",{className:"post__author"},r.a.createElement("span",null,t.name),r.a.createElement("br",null),r.a.createElement("span",null,t.email),r.a.createElement("br",null),r.a.createElement("span",null,t.address.city))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPosts":return t.posts;case"deletePost":return e.filter(function(e){return e.id!==t.postId});case"deleteComment":return e.map(function(e){return e.id===t.postId?Object(m.a)({},e,{comments:e.comments.filter(function(e){return e.id!==t.commentId})}):e});default:return e}},y=Object(o.b)(null,{deleteComment:function(e,t){return{type:"deleteComment",postId:e,commentId:t}}})(function(e){var t=e.comment,n=e.deleteComment,a=e.postId;return r.a.createElement("div",{className:"comments__item"},r.a.createElement("button",{type:"button",className:"post__delete",onClick:function(){return n(a,t.id)}},"Delete comment"),r.a.createElement("p",{className:"comments__text"},t.body),r.a.createElement("div",{className:"comments__author"},r.a.createElement("span",null,t.name),r.a.createElement("br",null),r.a.createElement("span",null,t.email)))}),_=function(e){var t=e.comments,n=e.postId;return t.length>0&&r.a.createElement("div",{className:"post__comments comments"},r.a.createElement("h2",{className:"comments__title"},"Comments:"),t.map(function(e){return r.a.createElement(y,{key:e.id,comment:e,postId:n})}))},v=Object(o.b)(null,{deletePost:function(e){return{type:"deletePost",postId:e}}})(function(e){var t=e.post,n=e.deletePost;return r.a.createElement("article",{className:"post__item"},r.a.createElement("button",{type:"button",className:"post__delete",onClick:function(){return n(t.id)}},"Delete post"),r.a.createElement("h2",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__text"},t.body),r.a.createElement(E,{user:t.user}),r.a.createElement(_,{comments:t.comments,postId:t.id}))}),N=function(e){var t=e.posts;return r.a.createElement("section",{className:"post__list"},t.map(function(e){return r.a.createElement(v,{key:e.id,post:e})}))},j=function(e){var t;return u.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}})},w=(n(29),n(4)),I=n(16),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"searchQuery":return t.searchQuery;default:return e}},C=function(e){return e.posts},O=function(e){return e.searchQuery},P=Object(w.d)(Object(w.c)({posts:b,searchQuery:g}),Object(w.a)(I.a));var Q=Object(o.b)(function(e){return{posts:C(e),searchQuery:O(e)}},{setPosts:function(e){return{type:"setPosts",posts:e}},setSearchQuery:function(e){return{type:"searchQuery",searchQuery:e}}})(function(e){var t=e.posts,n=e.searchQuery,s=e.setPosts,c=e.setSearchQuery,o=Object(a.useState)(!1),l=Object(i.a)(o,2),E=l[0],b=l[1],y=function(e,t,n){return e.map(function(e){return Object(m.a)({},e,{comments:n.filter(function(t){return t.postId===e.id}),user:t.find(function(t){return t.id===e.userId})})})};return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("div",{className:"post"},r.a.createElement("h1",{className:"title"},"Dynamic list of posts"),r.a.createElement(p.DebounceInput,{className:"post__search",debounceTimeout:500,placeholder:"Type to search...",onChange:function(e){c(e.target.value.trim().toLowerCase())}}),r.a.createElement(N,{posts:t.filter(function(e){return(e.title+e.body).toLowerCase().includes(n)})})):r.a.createElement("div",{className:"post__start"},r.a.createElement("button",{disabled:E,className:"post__button",type:"button",onClick:function(){var e,t,n,a,r,c;return u.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return b(!0),o.next=3,u.a.awrap(Promise.all([j(d),j(f),j(h)]));case 3:e=o.sent,t=Object(i.a)(e,3),n=t[0],a=t[1],r=t[2],c=y(n,a,r),s(c),b(!1);case 11:case"end":return o.stop()}})}},E?"Loading...":"Load Posts")))});c.a.render(r.a.createElement(o.a,{store:P},r.a.createElement(Q,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9ff53b67.chunk.js.map