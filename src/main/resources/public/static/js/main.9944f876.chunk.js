(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),h=c(11),m=c(2),o=c(4),d=(c(28),c(0)),u=function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c===t.winner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{className:"vs",children:"VS "}),Object(d.jsx)(o.b,{to:n,children:a})]}),Object(d.jsx)("h4",{className:"match-date",children:t.date}),Object(d.jsxs)("h4",{className:"match-venue",children:["at ",t.venue]}),Object(d.jsxs)("h4",{className:"match-result",children:[t.winner," by ",t.resultMargin," ",t.result]})]}),Object(d.jsxs)("div",{className:"addition-detail",children:[Object(d.jsx)("h4",{children:"First Innings"}),Object(d.jsx)("p",{children:t.team1}),Object(d.jsx)("h4",{children:"Second Innings"}),Object(d.jsx)("p",{children:t.team2}),Object(d.jsx)("h4",{children:"Man of the match"}),Object(d.jsx)("p",{children:t.playerOfMatch}),Object(d.jsx)("h4",{children:"Umpires"}),Object(d.jsxs)("p",{children:[t.umpire1,",",t.umpire2]})]})]})},b=(c(35),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=c===t.team1?t.team2:t.team1,n="/teams/".concat(a),s=c===t.winner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsxs)("h3",{children:["vs",Object(d.jsxs)(o.b,{to:n,children:[" ",a]})]}),Object(d.jsxs)("h4",{className:"match-result",children:[t.winner," by ",t.resultMargin," ",t.result]})]})}),O=(c(36),c(20)),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(m.f)().teamName,r=c.totalMatches-c.totalWin;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080/","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h3",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(d.jsx)("div",{className:"win-loss-section-pie",children:Object(d.jsx)(O.PieChart,{data:[{title:"Loses : "+r,value:c.totalMatches-c.totalWin,color:"indianred"},{title:"Wins : "+c.totalWin,value:c.totalWin,color:"darkcyan"}]})})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h4",{children:"Latest Matches"}),Object(d.jsx)(u,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-section",children:Object(d.jsx)(o.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More.."})})]}):Object(d.jsx)("h1",{children:"Team doesn't Exists"})},f=(c(37),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(d.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:[e," "]})},e)}))})}),v=(c(38),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(m.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080/","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[Object(d.jsx)(o.b,{to:"/teams/".concat(r),children:r})," matches in ",i]}),c.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]})}),p=(c(39),c(40),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080/","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"header-text",children:"IPL Dashboard"})}),Object(d.jsx)("div",{className:"home-grid",children:c.map((function(e){return Object(d.jsx)(p,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(d.jsx)("div",{style:{width:500,height:300},className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(v,{})}),Object(d.jsx)(m.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(m.a,{path:"/",children:Object(d.jsx)(N,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.9944f876.chunk.js.map