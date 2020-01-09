(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),c=n(2),u=n(5),l=n.n(u),i=n(16),m=n(7),d=n(14),p=function(e){var t=e.user;return r.a.createElement("p",{className:"post__author"},r.a.createElement("span",null,t.name),r.a.createElement("br",null),r.a.createElement("span",null,t.email),r.a.createElement("br",null),r.a.createElement("span",null,t.address.city))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPosts":return t.posts;case"deletePost":return e.filter(function(e){return e.id!==t.postId});case"deleteComment":return e.map(function(e){return e.id===t.postId?Object(m.a)({},e,{comments:e.comments.filter(function(e){return e.id!==t.commentId})}):e});default:return e}},h=Object(c.b)(null,{deleteComment:function(e,t){return{type:"deleteComment",postId:e,commentId:t}}})(function(e){var t=e.comment,n=e.deleteComment,a=e.postId;return r.a.createElement("div",{className:"comments__item"},r.a.createElement("button",{type:"button",className:"post__delete",onClick:function(){return n(a,t.id)}},"Delete comment"),r.a.createElement("p",{className:"comments__text"},t.body),r.a.createElement("div",{className:"comments__author"},r.a.createElement("span",null,t.name),r.a.createElement("br",null),r.a.createElement("span",null,t.email)))}),y=function(e){var t=e.comments,n=e.postId;return t.length>0&&r.a.createElement("div",{className:"post__comments comments"},r.a.createElement("h2",{className:"comments__title"},"Comments:"),t.map(function(e){return r.a.createElement(h,{key:e.id,comment:e,postId:n})}))},E=Object(c.b)(null,{deletePost:function(e){return{type:"deletePost",postId:e}}})(function(e){var t=e.post,n=e.deletePost;return r.a.createElement("article",{className:"post__item"},r.a.createElement("button",{type:"button",className:"post__delete",onClick:function(){return n(t.id)}},"Delete post"),r.a.createElement("h2",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__text"},t.body),r.a.createElement(p,{user:t.user}),r.a.createElement(y,{comments:t.comments,postId:t.id}))}),b=function(e){var t=e.posts;return r.a.createElement("section",{className:"post__list"},t.map(function(e){return r.a.createElement(E,{key:e.id,post:e})}))},_=function(e){var t;return l.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(fetch(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}})},v=(n(29),n(4)),g=n(15),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"searchQuery":return t.searchQuery;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"isLoading":return t.isLoading;default:return e}},w=function(e){return e.posts},L=function(e){return e.searchQuery},j=function(e){return e.isLoading},C=Object(v.d)(Object(v.c)({posts:f,searchQuery:N,isLoading:I}),Object(v.a)(g.a)),P=Object(c.b)(function(e){return{posts:w(e),searchQuery:L(e),isLoading:j(e)}},{setPosts:function(e){return{type:"setPosts",posts:e}},setSearchQuery:function(e){return{type:"searchQuery",searchQuery:e}},setIsLoading:function(e){return{type:"isLoading",isLoading:e}}})(function(e){var t=e.posts,n=e.isLoading,a=e.searchQuery,s=e.setPosts,o=e.setSearchQuery,c=e.setIsLoading,u=function(e,t,n){return e.map(function(e){return Object(m.a)({},e,{comments:n.filter(function(t){return t.postId===e.id}),user:t.find(function(t){return t.id===e.userId})})})};return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("div",{className:"post"},r.a.createElement("h1",{className:"title"},"Dynamic list of posts"),r.a.createElement(d.DebounceInput,{className:"post__search",debounceTimeout:500,placeholder:"Type to search...",onChange:function(e){o(e.target.value.trim().toLowerCase())}}),r.a.createElement(b,{posts:t.filter(function(e){return(e.title+e.body).toLowerCase().includes(a)})})):r.a.createElement("div",{className:"post__start"},r.a.createElement("button",{disabled:n,className:"post__button",type:"button",onClick:function(){var e,t,n,a,r,o;return l.a.async(function(m){for(;;)switch(m.prev=m.next){case 0:return c(!0),m.next=3,l.a.awrap(Promise.all([_("https://jsonplaceholder.typicode.com/posts"),_("https://jsonplaceholder.typicode.com/users"),_("https://jsonplaceholder.typicode.com/comments")]));case 3:e=m.sent,t=Object(i.a)(e,3),n=t[0],a=t[1],r=t[2],o=u(n,a,r),s(o),c(!1);case 11:case"end":return m.stop()}})}},n?"Loading...":"Load Posts")))});o.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(P,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.89a5c544.chunk.js.map