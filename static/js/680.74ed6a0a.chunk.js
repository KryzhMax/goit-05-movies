"use strict";(self.webpackChunkgoit_05_movies=self.webpackChunkgoit_05_movies||[]).push([[680],{2563:function(n,e,t){var r=t(5861),a=t(7757),s=t.n(a),i=t(4569),c=t.n(i);c().defaults.baseURL="https://api.themoviedb.org/3";function o(){return(o=(0,r.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return l=(0,r.Z)(s().mark((function n(){var e,t,r,a,i=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:1,n.next=4,c()("search/movie?query=".concat(e,"&page=").concat(t));case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}c().defaults.params={api_key:"69ef3d9e681291ff53ca8282894d5480"};var d={fetchTrendMovies:function(){return o.apply(this,arguments)},fetchMovieById:function(n){return u.apply(this,arguments)},fetchCast:function(n){return p.apply(this,arguments)},fetchReviews:function(n){return f.apply(this,arguments)},fetchSearchMovies:function(){return l.apply(this,arguments)},IDLE:"idle",PENDING:"pending",LOADED:"loaded",RESOLVED:"resolved",REJECTED:"rejected"};e.ZP=d},2165:function(n,e,t){var r=t(7689),a=t(639),s=t(184);e.Z=function(n){var e=n.movies,t=(0,r.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.BJ,{children:e.length&&e.map((function(n){var e=n.id,r=n.poster_path,i=n.title,c=n.vote_average;return(0,s.jsxs)(a.q_,{children:[(0,s.jsxs)(a.w2,{to:"/movies/".concat(e),state:{from:t},children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(null===r?"/h5oGodvcoq8cyIDTy79yKn4qbey.jpg":r),alt:i,width:"280",height:"420",loading:"lazy"}),(0,s.jsx)(a.m9,{children:i})]}),(0,s.jsxs)("p",{children:[c," \u2736"]})]},e)}))})})}},7946:function(n,e,t){t.d(e,{Z:function(){return o}});var r,a=t(8402),s=t(168),i=t(6444).ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n"]))),c=t(184),o=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.NB,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},680:function(n,e,t){t.r(e);var r=t(885),a=t(2165),s=t(2791),i=t(2563),c=t(7946),o=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1],p=(0,s.useState)(i.ZP.IDLE),f=(0,r.Z)(p,2),l=f[0],d=f[1];return(0,s.useEffect)((function(){d(i.ZP.PENDING);try{i.ZP.fetchTrendMovies().then(u),d(i.ZP.RESOLVED)}catch(n){d(i.ZP.REJECTED),console.log(n)}}),[]),(0,o.jsxs)(o.Fragment,{children:[l===i.ZP.PENDING&&(0,o.jsx)(c.Z,{}),t&&(0,o.jsxs)("section",{children:[(0,o.jsx)("h1",{children:"This week's trending movies!"}),(0,o.jsx)(a.Z,{movies:t})]})]})}},639:function(n,e,t){t.d(e,{BJ:function(){return p},m9:function(){return l},q_:function(){return f},w2:function(){return d}});var r,a,s,i,c=t(168),o=t(6444),u=t(6731),p=o.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  column-gap: 20px;\n  row-gap: 30px;\n  margin: 30px 0;\n  padding-left: 0;\n"]))),f=o.ZP.li(a||(a=(0,c.Z)(["\n  max-width: 280px;\n  flex-basis: calc((100% - (5) - 1) * 20px / 5);\n  box-shadow: 0px 11px 15px -1px rgba(161, 161, 161, 0.64);\n  transition: transform 300ms linear;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),l=o.ZP.p(s||(s=(0,c.Z)(["\n  font-size: 18px;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 400;\n"]))),d=(0,o.ZP)(u.OL)(i||(i=(0,c.Z)(["\n  text-decoration: none;\n  color: #020202;\n"])))}}]);
//# sourceMappingURL=680.74ed6a0a.chunk.js.map