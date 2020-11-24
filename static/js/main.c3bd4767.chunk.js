(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},205:function(e,t,c){},210:function(e,t,c){},212:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),s=c.n(n),r=c(11),o=c.n(r),i=(c(102),c(26)),l=c.n(i),u=c(39),j=c(16),d=c(247),f=c(248),h=c(249),b=c(238),O=c(242),v=(c(104),c(19)),p=c(243),x=c(18),m=c.n(x);c(105);var _=function(e){var t=e.title,c=e.cases,n=e.isRed,s=e.isBlack,r=e.isGreenYellow,o=e.total,i=e.active,l=Object(v.a)(e,["title","cases","isRed","isBlack","isGreenYellow","total","active"]);return Object(a.jsx)(b.a,{onClick:l.onClick,className:"infoBox ".concat(i&&"infoBox--selected"," ").concat(n&&"infoBox--isRed"," ").concat(s&&"infoBox--isBlack"),children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(p.a,{className:"infoBox__title",color:"textSecondary",children:Object(a.jsx)("strong",{children:t})}),Object(a.jsx)("h2",{className:"infoBox__cases ".concat(r&&"infoBox__cases--greenyellow"," ").concat(s&&"infoBox__cases--black"),children:c}),Object(a.jsxs)(p.a,{className:"infoBOx__total",color:"textSecondary",children:[m()(o).format("0,0")," Total"]})]})})},y=c(87),N={legend:{display:!1},elements:{point:{radius:0},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return m()(e.value).format("+0,0")}}}},scales:{xAxes:[{type:"time",time:{format:"MM:DD:YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return m()(e).format("0a")}}}]}},g=function(e,t){var c,a=[];for(var n in e.cases){if(c){var s={x:n,y:e[t][n]-c};a.push(s)}c=e[t][n]}return a};var k=function(e){var t=e.casesType,c=void 0===t?"cases":t,s=Object(v.a)(e,["casesType"]),r=Object(n.useState)({}),o=Object(j.a)(r,2),i=o[0],d=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){return e.json()})).then((function(e){var t=g(e,c);d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(a.jsx)("div",{className:s.className,children:(null===i||void 0===i?void 0:i.length)>0&&Object(a.jsx)(y.Line,{options:N,data:{datasets:[{backgroundColor:"rgba(204,16,52,0.5)",borderColor:"#cc1034",data:i}]}})})},C=c(246),S=c(250),w=(c(205),c(89)),B=c(244),I=c(245),T=(c(83),c(206),c(4),c(207),c(88)),R=c.n(T),D=function(e){return Object(w.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},Y=function(e){return e?"+".concat(m()(e).format("0,0a")):"+0"},z=function(e){return e.map((function(e){return Object(a.jsx)(R.a,{children:Object(a.jsx)(B.a,{position:[e.countryInfo.lat,e.countryInfo.long],children:Object(a.jsx)(I.a,{children:Object(a.jsxs)("div",{className:"info__container",children:[Object(a.jsx)("div",{className:"info__flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(a.jsx)("div",{className:"info__countryName",children:e.country}),Object(a.jsxs)("div",{className:"info__confirmed",children:["Case: ",m()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:"info__recovered",children:["Recovered: ",m()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:"info__deaths",children:["Deaths: ",m()(e.deaths).format("0,0")]})]})})})})}))};var E=function(e){var t=e.countries,c=e.casesType,n=e.center,s=e.zoom;return Object(a.jsx)("div",{className:"map",children:Object(a.jsxs)(C.a,{casesType:c,center:n,zoom:s,countries:t,children:[Object(a.jsx)(S.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),z(t,c)]})})};c(210);var M=function(e){var t=e.countries;return Object(a.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(a.jsxs)("tr",{className:"table__rows",children:[Object(a.jsx)("td",{className:"table__data",children:t}),Object(a.jsx)("td",{className:"table__data",children:Object(a.jsx)("strong",{children:m()(c).format("0,0")})})]})}))})};var A=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("Select Country"),o=Object(j.a)(r,2),i=o[0],v=o[1],p=Object(n.useState)({}),x=Object(j.a)(p,2),m=x[0],y=x[1],N=Object(n.useState)([]),g=Object(j.a)(N,2),C=g[0],S=g[1],w=Object(n.useState)([]),B=Object(j.a)(w,2),I=B[0],T=B[1],R=Object(n.useState)({lat:34.80746,lng:-40.4796}),z=Object(j.a)(R,2),A=z[0],G=z[1],L=Object(n.useState)(3),J=Object(j.a)(L,2),V=J[0],F=J[1],W=Object(n.useState)("cases"),q=Object(j.a)(W,2),H=q[0],K=q[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=D(e);S(c),s(t),T(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,a="Select Country"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){v(c),y(e),G([e.countryInfo.lat,e.countryInfo.long]),F(5)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsxs)("div",{className:"app__left",children:[Object(a.jsxs)("div",{className:"app__header",children:[Object(a.jsx)("h1",{children:"COVID-19 Tracker"}),Object(a.jsx)(d.a,{className:"app__dropDown",children:Object(a.jsxs)(f.a,{variant:"outlined",value:i,onChange:P,children:[Object(a.jsx)(h.a,{value:"Select Country",children:"Select Country"}),c.map((function(e){return Object(a.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(a.jsxs)("div",{className:"app__stats",children:[Object(a.jsx)(_,{isRed:!0,active:"cases"===H,onClick:function(e){return K("cases")},title:"CoronaVirus Cases",cases:Y(m.todayCases),total:m.cases}),Object(a.jsx)(_,{isGreenYellow:!0,active:"recovered"===H,onClick:function(e){return K("recovered")},title:"Recovered",cases:Y(m.todayRecovered),total:m.recovered}),Object(a.jsx)(_,{isBlack:!0,active:"deaths"===H,onClick:function(e){return K("deaths")},title:"Deaths",cases:Y(m.todayDeaths),total:m.deaths})]}),Object(a.jsx)(E,{countries:I,casesType:H,center:A,zoom:V})]}),Object(a.jsx)(b.a,{className:"app__right",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)("h3",{children:"Live Case by Country"}),Object(a.jsx)(M,{countries:C}),Object(a.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide New ",H]}),Object(a.jsx)(k,{className:"app__graph",casesType:H})]})})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.c3bd4767.chunk.js.map