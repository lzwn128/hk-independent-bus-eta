(this["webpackJsonphk-independent-bus-eta"]=this["webpackJsonphk-independent-bus-eta"]||[]).push([[0],{111:function(t){t.exports=JSON.parse('{"en":{"translation":{"kmb":"KMB","ctb":"CTB","nwfb":"NWFB","\u5f80":"To","\u641c\u5c0b":"Search","\u53d6\u6d88":"Clear","\u5206\u9418":"min"}},"zh":{"translation":{"kmb":"\u4e5d\u5df4","ctb":"\u57ce\u5df4","nwfb":"\u65b0\u5df4"}}}')},122:function(t,e,n){},123:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(122),n(123),n(183)),i=n(112),u=n(11),l=n(18),b=n(182),j=n(167),d=n(140),h=n(76),f=n(184),p=n(163),O=n(25),g=n(162),x=n(187),m=n(186),v=n(164),k=n(6),y=n(190),S=n(8),C=n(81),w=n.n(C),I=n(82),E=n(93),N=n(19),z=n.n(N),R={co:"kmb",fetchRouteList:function(){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/route/").then((function(t){return t.json()})).then((function(t){return t.data.reduce((function(t,e){return t[[e.route,e.service_type,e.bound].join("+")]={route:e.route,co:"kmb",bound:e.bound,orig:{en:e.orig_en,zh:e.orig_tc},dest:{en:e.dest_en,zh:e.dest_tc},stops:[],serviceType:e.service_type},t}),{})})).then((function(t){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop/").then((function(t){return t.json()})).then((function(e){var n=e.data;e.generated_timestamp;return n.forEach((function(e){t[[e.route,e.service_type,e.bound].join("+")].stops.push(e.stop)})),Object.entries(t).map((function(t){var e=Object(S.a)(t,2);e[0];return e[1]}))}))}))},fetchStopList:function(){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop").then((function(t){return t.json()})).then((function(t){var e=t.data,n=(t.generated_timestamp,{});return e.forEach((function(t){n[t.stop]={name:{en:t.name_en,zh:T(t.name_tc)},location:{lat:parseFloat(t.lat),lng:parseFloat(t.long)}}})),n}))},fetchRouteStops:function(t){t.route,t.bound,t.serviceType;return null},fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.seq,r=t.serviceType,c=t.bound;return fetch("https://data.etabus.gov.hk/v1/transport/kmb/eta/".concat(e,"/").concat(n,"/").concat(r),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.dir===c&&t.seq===a})).map((function(t){return{eta:t.eta?Math.round(z()(t.eta).diff(z()())/60/1e3):t.eta,remark:{zh:t.rmk_tc,en:t.rmk_en},co:"kmb"}}))}))},fetchStopEtas:function(t){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/".concat(t),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{route:t.route,bound:t.dir,seq:t.seq,eta:t.eta?Math.round(z()(t.eta).diff(z()())/60/1e3):t.eta,dest:{zh:t.dest_tc,en:t.dest_en},remark:{zh:t.rmk,en:t.rmk},co:"kmb"}}))}))}},T=function(t){return"\u761d\u55f5\u770e\ufffd\ud85e\ude3e\ufffd\ufffd\ufffd"===t?"\u6c99\u7530\u5773\u9053":"\u66ba\ufffd\u61ad\u627e\ufffd\u55f5\ufffd\ufffd"===t?"\u9ec3\u5927\u4ed9\u7ad9":t},_={co:"nwfb",fetchRouteList:function(){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route/nwfb").then((function(t){return t.json()})).then((function(t){return t.data.reduce((function(t,e){return t.concat([{route:e.route,bound:"O",orig:{en:e.orig_en,zh:e.orig_tc},dest:{en:e.dest_en,zh:e.dest_tc},co:"nwfb",stops:null,serviceType:1},{route:e.route,bound:"I",orig:{en:e.dest_en,zh:e.dest_tc},dest:{en:e.orig_en,zh:e.orig_tc},co:"nwfb",stops:null,serviceType:1}])}),[])}))},fetchRouteStops:function(t){var e=t.route,n=t.bound;if(!n)return null;var a="I"===n?"inbound":"outbound";return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/NWFB/".concat(e,"/").concat(a)).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return t.stop}))})).then((function(t){return Promise.all(t.map((function(t){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/".concat(t)).then((function(t){return t.json()})).then((function(e){var n=e.data;return{stopId:t,name:{zh:n.name_tc,en:n.name_en},location:{lat:parseFloat(n.lat),lng:parseFloat(n.long)}}}))}))).then((function(e){var n={};return e.forEach((function(t){return n[t.stopId]=t})),{routeStops:t,stopList:n,co:"nwfb"}}))}))},fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.bound;return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/NWFB/".concat(e,"?lang=zh-hant"),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.eta&&t.route===n&&t.dir===a&&t.eta})).map((function(t){return{eta:t.eta?Math.round(z()(t.eta).diff(z()())/60/1e3):t.eta,remark:{zh:t.rmk,en:t.rmk},co:"nwfb"}}))}))}},L={co:"ctb",fetchRouteList:function(){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route/ctb").then((function(t){return t.json()})).then((function(t){return t.data.reduce((function(t,e){return t.concat([{route:e.route,bound:"O",orig:{en:e.orig_en,zh:e.orig_tc},dest:{en:e.dest_en,zh:e.dest_tc},co:"ctb",stops:null,serviceType:1},{route:e.route,bound:"I",orig:{en:e.dest_en,zh:e.dest_tc},dest:{en:e.orig_en,zh:e.orig_tc},co:"ctb",stops:null,serviceType:1}])}),[])}))},fetchRouteStops:function(t){var e=t.route,n=t.bound;if(!n)return null;var a="I"===n?"inbound":"outbound";return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/CTB/".concat(e,"/").concat(a)).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return t.stop}))})).then((function(t){return Promise.all(t.map((function(t){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/".concat(t)).then((function(t){return t.json()})).then((function(e){var n=e.data;return{stopId:t,name:{zh:n.name_tc,en:n.name_en},location:{lat:parseFloat(n.lat),lng:parseFloat(n.long)}}}))}))).then((function(e){var n={};return e.forEach((function(t){return n[t.stopId]=t})),{routeStops:t,stopList:n,co:"ctb"}}))}))},fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.bound;return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/CTB/".concat(e,"?lang=zh-hant"),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.eta&&t.route===n&&t.dir===a})).map((function(t){return{eta:t.eta?Math.round(z()(t.eta).diff(z()())/60/1e3):t.eta,remark:{zh:t.rmk,en:t.rmk},co:"ctb"}}))}))},fetchStopEtas:function(t){return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/CTB/".concat(t,"?lang=zh-hant"),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{eta:t.eta?Math.round(z()(t.eta).diff(z()())/60/1e3):t.eta,remark:{zh:t.rmk,en:t.rmk},co:"ctb"}}))}))}},F=function(){var t=Object(E.a)(w.a.mark((function t(e){var n,a,r,c,o,s,i,u,l,b;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.route,a=e.routeStops,r=e.bound,c=e.seq,o=e.serviceType,s=e.co,i=[],u=Object(I.a)(s),t.prev=3,u.s();case 5:if((l=u.n()).done){t.next=31;break}if("kmb"!==(b=l.value)||!a.kmb){t.next=15;break}return t.t0=i,t.next=11,R.fetchEtas({route:n,stopId:a.kmb[c-1],seq:c===a.kmb.length?1e3:c,serviceType:o,bound:r[b]});case 11:t.t1=t.sent,i=t.t0.concat.call(t.t0,t.t1),t.next=29;break;case 15:if("ctb"!==b||!a.ctb){t.next=23;break}return t.t2=i,t.next=19,L.fetchEtas({stopId:a.ctb[c-1],route:n,bound:r[b]});case 19:t.t3=t.sent,i=t.t2.concat.call(t.t2,t.t3),t.next=29;break;case 23:if("nwfb"!==b||!a.nwfb){t.next=29;break}return t.t4=i,t.next=27,_.fetchEtas({stopId:a.nwfb[c-1],route:n,bound:r[b]});case 27:t.t5=t.sent,i=t.t4.concat.call(t.t4,t.t5);case 29:t.next=5;break;case 31:t.next=36;break;case 33:t.prev=33,t.t6=t.catch(3),u.e(t.t6);case 36:return t.prev=36,u.f(),t.finish(36);case 39:return t.abrupt("return",i.sort((function(t,e){return t.eta<e.eta?-1:1})).filter((function(t){return!Number.isInteger(t.eta)||t.eta>1})));case 40:case"end":return t.stop()}}),t,null,[[3,33,36,39]])})));return function(e){return t.apply(this,arguments)}}(),P=function(t){var e=t.route,n=t.bound;return Promise.all([R,_,L].map((function(t){return t.fetchRouteStops({route:e,bound:n[t.co]})})).filter((function(t){return t})))},B=function(t,e){return t.route===e.route&&t.co!==e.co&&["orig","dest"].map((function(n){var a=t[n].en.toUpperCase(),r=e[n].en.toUpperCase();return a.includes(r)||r.includes(a)})).includes(!0)},M=function(t){var e={route:t.route,co:[t.co],bound:{},orig:{en:t.orig.en,zh:t.orig.zh},dest:{en:t.dest.en,zh:t.dest.zh},stops:{},serviceType:t.serviceType};return e.stops[t.co]=t.stops,e.bound[t.co]=t.bound,e},D=n(2),J=r.a.createContext(),q=function(t){var e=Object(a.useState)(localStorage.getItem("schemaVersion")),n=Object(S.a)(e,2),r=n[0],c=n[1],o=Object(a.useState)(JSON.parse(localStorage.getItem("routeList"))),s=Object(S.a)(o,2),i=s[0],u=s[1],l=Object(a.useState)(JSON.parse(localStorage.getItem("stopList"))),b=Object(S.a)(l,2),j=b[0],d=b[1],h=Object(a.useState)(parseInt(localStorage.getItem("updateTime"))),f=Object(S.a)(h,2),p=f[0],g=f[1],x=Object(a.useState)(""),m=Object(S.a)(x,2),v=m[0],k=m[1],y=Object(a.useState)("1+1+CHUK YUEN ESTATE+STAR FERRY"),C=Object(S.a)(y,2),w=C[0],I=C[1],E=Object(a.useState)(localStorage.getItem("geoPermission")),N=Object(S.a)(E,2),z=N[0],T=N[1],F=Object(a.useState)(JSON.parse(localStorage.getItem("geolocation"))||{lat:22.302711,lng:114.177216}),P=Object(S.a)(F,2),q=P[0],W=P[1],U=Object(a.useState)(JSON.parse(localStorage.getItem("hotRoute"))||{}),H=Object(S.a)(U,2),V=H[0],A=H[1],G=Object(a.useState)(JSON.parse(localStorage.getItem("savedEtas"))||[]),$=Object(S.a)(G,2),K=$[0],X=$[1],Z=Object(a.useState)([]),Q=Object(S.a)(Z,2),tt=Q[0],et=Q[1],nt=function(){Promise.all([R,_,L].map((function(t){return t.fetchRouteList()}))).then((function(t){var e,n,a={},r=t.reduce((function(t,e){return t.concat(e)})).sort((function(t,e){return t.route<e.route?-1:0}));for(e=0;e<r.length;++e)if(!r[e].imported){var c=M(r[e]);for(n=e+1;n<r.length&&r[e].route===r[n].route;++n)r[n].imported||B(r[e],r[n])&&(c.co.push(r[n].co),c.stops[r[n].co]=r[n].stops,c.bound[r[n].co]=r[n].bound,r[n].imported=!0);a["".concat(c.route,"+").concat(c.serviceType,"+").concat(c.orig.en,"+").concat(c.dest.en)]=c}var o=a;return a={},Object.entries(o).sort((function(t,e){return t[0]<e[0]?-1:1})).forEach((function(t){var e=Object(S.a)(t,2),n=e[0],r=e[1];a[n]=r})),a})).then((function(t){return rt(t)})).then((function(){return R.fetchStopList().then((function(t){at(t);var e=Date.now();g(e),localStorage.setItem("updateTime",e)}))}))};Object(a.useEffect)((function(){fetch("/hk-independent-bus-eta/schema-version.txt").then((function(t){return t.text()})).then((function(t){var e=!1;r!==t&&(c(t),localStorage.setItem("schemaVersion",t),e=!0),(e=e||null==i||null==j||null==p||p<Date.now()-6048e5)&&nt()})),"granted"===z&&navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,n=e.latitude,a=e.longitude;W({lat:n,lng:a})}))}),[]),Object(a.useEffect)((function(){"granted"===z&&navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,n=e.latitude,a=e.longitude;W({lat:n,lng:a})}))}),[z]),Object(a.useEffect)((function(){et(Y(v,i))}),[v,i]),Object(a.useEffect)((function(){localStorage.setItem("savedEtas",JSON.stringify(K))}),[K]),Object(a.useEffect)((function(){localStorage.setItem("stopList",JSON.stringify(j))}),[j]),Object(a.useEffect)((function(){localStorage.setItem("routeList",JSON.stringify(i))}),[i]),Object(a.useEffect)((function(){localStorage.setItem("geolocation",JSON.stringify(q))}),[q]),Object(a.useEffect)((function(){localStorage.setItem("geoPermission",z)}),[z]);var at=function(t){d(t)},rt=function(t){"function"===typeof t&&(t=t(i)),u(t)};return Object(D.jsx)(J.Provider,{value:{routeList:i,stopList:j,updateNewlyFetchedRouteStops:function(t,e){if(0!==e.length){var n={};e.forEach((function(t){n=Object(O.a)(Object(O.a)({},n),t.stopList)})),at(Object(O.a)(Object(O.a)({},j),n)),rt((function(n){var a=JSON.parse(JSON.stringify(n));return e.forEach((function(e){return a[t].stops[e.co]=e.routeStops})),a}))}},searchRoute:v,setSearchRoute:k,updateSearchRouteByButton:function(t){switch(t){case"b":k(v.slice(0,-1));break;case"-":k("");break;default:k(v+t)}},selectedRoute:w,updateSelectedRoute:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";I("".concat(t,"/").concat(e)),e&&A((function(n){return n[t+"/"+e]=V[t+"/"+e]?V[t+"/"+e]+1:1,localStorage.setItem("hotRoute",JSON.stringify(n)),n}))},possibleChar:tt,hotRoute:V,geolocation:q,savedEtas:K,updateSavedEtas:function(t){X((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))},resetUsageRecord:function(){A({}),localStorage.setItem("hotRoute",null)},renewDb:nt,schemaVersion:r,updateTime:p,geoPermission:z,updateGeoPermission:function(t){T(t)}},children:t.children})},W=J,Y=function(t,e){if(null==e)return[];var n={};return Object.entries(e).forEach((function(e){if(e[0].startsWith(t.toUpperCase())){var a=e[0].slice(t.length,t.length+1);n[a]=isNaN(n[a])?1:n[a]+1}})),Object.entries(n).map((function(t){return t[0]})).filter((function(t){return"+"!==t}))},U=Object(p.a)((function(t){return{toolbar:{"& a":{color:"black",textDecoration:"none"},display:"flex",justifyContent:"space-between",zIndex:2*t.zIndex.drawer},searchRouteInput:{maxWidth:"50px","& input":{textAlign:"center"}}}})),H=Object(k.a)({root:{borderBottom:"none",minHeight:24},indicator:{backgroundColor:"transparent"}})(m.a),V=Object(k.a)((function(t){return{root:{textTransform:"none",minWidth:36,fontWeight:900,marginRight:t.spacing(0),fontSize:"15px",opacity:1,padding:"6px 6px"},selected:{"& > .MuiTab-wrapper":{color:"#3B3C45",backgroundColor:"#FEFBFA"}},wrapper:{color:"#3B3C45",borderRadius:"30px",padding:"2px 10px 0px 10px"}}}))((function(t){return Object(D.jsx)(v.a,Object(O.a)({disableRipple:!0},t))})),A=function(t){var e=Object(a.useContext)(W),n=e.searchRoute,r=e.setSearchRoute,c=Object(u.j)().path,o=Object(y.a)(),s=o.t,i=o.i18n,b=U(),j=Object(u.h)(),d=Object(u.g)();return Object(D.jsxs)(g.a,{className:b.toolbar,children:[Object(D.jsxs)(l.b,{to:{pathname:"/".concat(i.language,"/search")},children:[Object(D.jsx)(h.a,{variant:"h6",children:"\u9999\u6e2f"}),Object(D.jsx)(h.a,{variant:"subtitle2",children:"\u7368\u7acb\u5df4\u58eb\u9810\u5831"})]}),Object(D.jsx)(x.a,{className:b.searchRouteInput,type:"text",value:n,placeholder:s("\u5df4\u58eb\u7dda"),onChange:function(t){return r(t.target.value)},disabled:c.includes("route")}),Object(D.jsxs)(H,{value:i.language,onChange:function(t,e){return n=e,d.replace(j.pathname.replace("/"+i.language+"/","/"+n+"/")),void i.changeLanguage(n);var n},children:[Object(D.jsx)(V,{value:"en",label:"En"}),Object(D.jsx)(V,{value:"zh",label:"\u7e41"})]})]})},G=n(165),$=n(166),K=n(168),X=n(169),Z=function(t){var e=t.routeId,n=Object(y.a)(),r=n.t,c=n.i18n,o=Object(a.useContext)(W),s=o.routeList,i=o.stopList,u=o.updateNewlyFetchedRouteStops,b=e.split("+"),d=Object(S.a)(b,2),h=d[0],f=d[1],p=e.split("/"),O=Object(S.a)(p,2),g=O[0],x=O[1],m=s[g],v=m.co,k=m.stops,C=m.dest,w=m.bound,I=i[k[v[0]]?k[v[0]][x]:null],E=Object(a.useState)(null),N=Object(S.a)(E,2),z=N[0],R=N[1],T=et();Object(a.useEffect)((function(){var t=!0,e=function(){return F({route:h,routeStops:k,seq:parseInt(x)+1,bound:w,serviceType:f,co:v}).then((function(e){t&&R(e)}))};P({route:h,bound:w}).then((function(t){u(g,t),e()}));var n=setInterval((function(){e()}),3e4);return function(){t=!1,clearInterval(n)}}),[]);var _=function(t){if(!t)return"";var e="";switch(t.eta){case null:e=t.remark[c.language];break;case 0:e="- "+r("\u5206\u9418");break;default:e=t.eta+" "+r("\u5206\u9418")}return e};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(G.a,{button:!0,component:l.b,to:"/".concat(c.language,"/route/").concat(e),children:[Object(D.jsx)($.a,{primary:h,className:T.route}),Object(D.jsx)($.a,{primary:r("\u5f80")+" "+C[c.language],secondary:I?I.name[c.language]:Object(D.jsx)(j.a,{size:15}),className:T.routeDest}),Object(D.jsx)($.a,{primary:z?_(z[0]):"",secondary:z?_(z[1]):"",className:T.routeEta})]}),Object(D.jsx)(K.a,{})]})},Q=function(){var t=Object(a.useContext)(W),e=t.hotRoute,n=t.savedEtas,r=t.geoPermission,c=t.geolocation,o=t.routeList,s=t.stopList,i=Object(a.useState)(n.concat(Object.entries(e).filter((function(t){var e=Object(S.a)(t,2);e[0];return e[1]>5})).sort((function(t,e){return e[1]-t[1]})).map((function(t){return Object(S.a)(t,1)[0]}))).filter((function(t,e,n){return n.indexOf(t)===e})).slice(0,20)),u=Object(S.a)(i,2),l=u[0],b=u[1];Object(a.useEffect)((function(){"granted"===r&&Object.entries(s).map((function(t){return t.concat(tt(t[1].location,c))})).filter((function(t){return t[2]<200})).sort((function(t,e){return t[2]-e[2]})).slice(0,3).map((function(t){return function(t,e){return Promise.all([R].map((function(e){return e.fetchStopEtas(t)}))).then((function(t){return[].concat.apply([],t)})).then((function(t){return Object.entries(e).map((function(e){var n,a=Object(S.a)(e,1)[0],r=Object(I.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(a.startsWith("".concat(c.route,"+"))&&a.endsWith("+".concat(c.dest.en)))return"".concat(a,"/").concat(c.seq-1)}}catch(o){r.e(o)}finally{r.f()}return null})).filter((function(t){return t}))}))}(Object(S.a)(t,1)[0],o).then((function(t){b((function(e){return e.concat(t).filter((function(t,e,n){return n.indexOf(t)===e}))}))}))}))}),[c]);var j=et();return Object(D.jsx)(d.a,{className:j.root,children:Object(D.jsx)(X.a,{children:l.map((function(t){return Object(D.jsx)(Z,{routeId:t},t)}))})})},tt=function(t,e){var n=t.lat*Math.PI/180,a=e.lat*Math.PI/180,r=(e.lat-t.lat)*Math.PI/180,c=(e.lng-t.lng)*Math.PI/180,o=Math.sin(r/2)*Math.sin(r/2)+Math.cos(n)*Math.cos(a)*Math.sin(c/2)*Math.sin(c/2);return 6371e3*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},et=Object(p.a)((function(t){return{root:{background:"white",height:"calc(100vh - 120px)",overflowY:"scroll"},route:{width:"15%"},routeDest:{width:"65%"},routeEta:{width:"20%"}}})),nt=n(172),at=n(173),rt=n(174),ct=n(85),ot=n(33),st=n(170),it=n(171),ut=n(185),lt=n(142),bt=n(97),jt=n.n(bt),dt=function(t){var e=t.k,n=t.handleClick,a=t.disabled,r=void 0!==a&&a,c=Ot(),o=Object(y.a)().t;return Object(D.jsx)(st.a,{size:"large",variant:"contained",className:c.button,onClick:function(){return n(e)},disabled:r,children:"b"===e?Object(D.jsx)(jt.a,{}):"-"===e?o("\u53d6\u6d88"):e})},ht=function(){var t=Object(a.useContext)(W),e=t.searchRoute,n=t.updateSearchRouteByButton,r=t.possibleChar;return Object(D.jsx)(it.a,{container:!0,spacing:0,children:"789456123-0b".split("").map((function(t){return Object(D.jsx)(it.a,{item:!0,xs:4,children:Object(D.jsx)(dt,{k:t,handleClick:n,style:{fontSize:"0.6rem"},disabled:"b"===t&&""===e||!"b-".includes(t)&&!r.includes(t)||"-"===t&&""===e})},"input-"+t)}))})},ft=function(){var t=Object(a.useContext)(W),e=t.updateSearchRouteByButton,n=t.possibleChar;return Object(D.jsx)(it.a,{container:!0,spacing:1,children:n.filter((function(t){return isNaN(t)})).map((function(t){return Object(D.jsx)(it.a,{item:!0,xs:12,children:Object(D.jsx)(dt,{k:t,handleClick:e})},"input-"+t)}))})},pt=function(){var t=Ot();return Object(D.jsxs)(ut.a,{className:t.boxContainer,padding:0,children:[Object(D.jsx)(ut.a,{className:t.numPadContainer,padding:0,children:Object(D.jsx)(ht,{})}),Object(D.jsx)(ut.a,{className:t.alphabetPadContainer,padding:0,children:Object(D.jsx)(ft,{})})]})},Ot=Object(lt.a)((function(t){return{boxContainer:{display:"flex",flexDirection:"row",height:"180px",justifyContent:"space-around"},numPadContainer:{width:"60%"},alphabetPadContainer:{width:"20%",height:"100%",overflowX:"hidden",overflowY:"scroll"},button:{width:"100%",height:42,borderRadius:"unset"}}})),gt=r.a.memo((function(t){var e=t.data,n=t.index,a=t.style,r=Object(y.a)(),c=r.t,o=r.i18n,s=e.routeList[n],i=s[0].split("+").slice(0,2),u=Object(S.a)(i,2),b=u[0],j=u[1],d=kt();return Object(D.jsx)(l.b,{to:"/"+o.language+"/route/"+s[0],children:Object(D.jsx)(nt.a,{variant:"outlined",style:a,square:!0,children:Object(D.jsx)(at.a,{children:Object(D.jsxs)(rt.a,{className:d.cardContent,children:[Object(D.jsx)(h.a,{variant:"h5",display:"inline",children:b}),Object(D.jsxs)(h.a,{variant:"caption",children:[" - ",s[1].co.map((function(t){return c(t)})).join("+")]}),Object(D.jsx)("br",{}),Object(D.jsxs)(h.a,{variant:"subtitle2",display:"inline",children:[c("\u5f80")," ",s[1].dest[o.language],"  "]}),Object(D.jsx)(h.a,{variant:"caption",children:j>="2"?c("\u7279\u5225\u73ed\u6b21"):"\u3000"})]})})},s[0])})}),ct.b),xt=Object(ot.a)((function(t){return{routeList:t}})),mt=function(){var t=Object(a.useContext)(W),e=t.routeList,n=t.searchRoute,r=Object.entries(e).filter((function(t){return t[0].startsWith(n.toUpperCase())})),c=xt(r);return Object(D.jsx)(ct.a,{height:330,itemCount:r.length,itemSize:69,width:"100%",itemData:c,children:gt})},vt=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(mt,{}),Object(D.jsx)("hr",{}),Object(D.jsx)(pt,{})]})},kt=Object(p.a)((function(t){return{cardContent:{padding:"8px 16px"}}})),yt=n(175),St=n(192),Ct=n(176),wt=function(t){t.geolocation;var e=t.position,n=Et();return Object(D.jsx)(ut.a,{className:n.mapContainer,children:Object(D.jsxs)(yt.a,{center:It(e),zoom:16,scrollWheelZoom:!1,className:n.mapContainer,children:[Object(D.jsx)(St.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(D.jsx)(Ct.a,{position:It(e)})]})})},It=function(t){return t&&"number"===typeof t.lat&&isFinite(t.lat)&&"number"===typeof t.lng&&isFinite(t.lng)?t:{lat:22.302711,lng:114.177216}},Et=Object(p.a)((function(t){return{mapContainer:{height:"30vh"}}})),Nt=n(141),zt=n(189),Rt=n(177),Tt=n(178),_t=n(98),Lt=n.n(_t),Ft=n(99),Pt=n.n(Ft),Bt=function(){var t=Object(u.i)(),e=t.id,n=t.panel,r=Object(a.useState)(parseInt(n)),c=Object(S.a)(r,2),o=c[0],s=c[1],i=Object(a.useContext)(W),l=i.routeList,b=i.stopList,d=i.savedEtas,f=i.geolocation,p=i.updateNewlyFetchedRouteStops,O=i.updateSelectedRoute,g=i.updateSavedEtas,x=l[e],m=x.route,v=x.serviceType,k=x.bound,C=x.stops,w=x.co,I=x.dest,E=Object(y.a)(),N=E.t,z=E.i18n,R=Object(u.g)(),T=Object(a.useRef)([]),_=function(t){return function(n,a){if(s(!!a&&t),a)return R.replace("/".concat(z.language,"/route/").concat(e,"/").concat(t)),void O(e,t)}};Object(a.useEffect)((function(){O(e),P({route:m,bound:k}).then((function(t){return p(e,t)})),parseInt(n)&&T.current[parseInt(n)]&&(s(parseInt(n)),T.current[parseInt(n)].scrollIntoView({behavior:"smooth",block:"start"}))}),[]);var L=Wt();if(null==C[w[0]])return Object(D.jsx)(ut.a,{className:L.loadingContainer,children:Object(D.jsx)(j.a,{size:30})});return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(h.a,{variant:"subtitle1",align:"center",children:m}),Object(D.jsxs)(h.a,{variant:"caption",align:"center",children:[N("\u5f80")," ",I[z.language]]}),Object(D.jsx)(wt,{geolocation:f,position:isNaN(o)?f:b[C[w[0]][o]].location}),Object(D.jsx)(ut.a,{className:L.boxContainer,children:C[w[0]].map((function(t,a){return Object(D.jsxs)(Dt,{expanded:o===a,onChange:_(a),TransitionProps:{unmountOnExit:!0},ref:function(t){T.current[a]=t},children:[Object(D.jsx)(Jt,{children:b[t].name[z.language]}),Object(D.jsxs)(qt,{children:[Object(D.jsx)(Mt,{route:m,seq:a+1,routeStops:C,serviceType:v,bound:k,co:w}),Object(D.jsx)(Nt.a,{"aria-label":"favourite",onClick:function(){return t="".concat(e,"/").concat(n),g(t);var t},children:d.includes("".concat(e,"/").concat(n))?Object(D.jsx)(Lt.a,{}):Object(D.jsx)(Pt.a,{})})]})]},"stop-"+a)}))})]})},Mt=function(t){var e=t.route,n=t.routeStops,r=t.seq,c=t.bound,o=t.serviceType,s=t.co,i=Object(y.a)(),u=i.t,l=i.i18n,b=Object(a.useState)(null),d=Object(S.a)(b,2),f=d[0],p=d[1];if(Object(a.useEffect)((function(){var t=!0,a=function(){F({route:e,routeStops:n,seq:r,bound:c,serviceType:o,co:s}).then((function(e){t&&p(e)}))};a();var i=setInterval((function(){a()}),3e4);return function(){t=!1,clearInterval(i)}}),[]),null==f)return Object(D.jsx)(j.a,{size:20,style:{}});var O=function(t){var e="";switch(t){case null:break;case 0:e="- "+u("\u5206\u9418");break;default:e=t+" "+u("\u5206\u9418")}return e};return Object(D.jsx)("div",{children:0===f.length?u("\u66ab\u7121\u73ed\u6b21"):f.map((function(t,e){return Object(D.jsxs)(h.a,{variant:"subtitle1",children:[O(t.eta)," - ",t.remark[l.language]?t.remark[l.language]:""," ",u(t.co)]},"route-".concat(e))}))})},Dt=Object(k.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(zt.a),Jt=Object(k.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(Rt.a),qt=Object(k.a)((function(t){return{root:{padding:t.spacing(2),justifyContent:"space-between"}}}))(Tt.a),Wt=Object(p.a)((function(t){return{boxContainer:{overflowY:"scroll"},loadingContainer:{display:"flex",justifyContent:"center"}}})),Yt=n(179),Ut=n(191),Ht=n(188),Vt=n(100),At=n.n(Vt),Gt=n(101),$t=n.n(Gt),Kt=n(102),Xt=n.n(Kt),Zt=n(104),Qt=n.n(Zt),te=n(105),ee=n.n(te),ne=n(103),ae=n.n(ne),re=function(){var t=Object(a.useContext)(W),e=t.schemaVersion,n=t.updateTime,r=t.geoPermission,c=t.updateGeoPermission,o=t.renewDb,s=t.resetUsageRecord,i=Object(a.useState)(!1),u=Object(S.a)(i,2),l=u[0],b=u[1],j=Object(y.a)(),h=j.t,f=j.i18n,p=ce();return Object(a.useEffect)((function(){b(!1)}),[n]),Object(D.jsxs)(d.a,{className:p.root,children:[Object(D.jsxs)(X.a,{children:[Object(D.jsxs)(G.a,{button:!0,onClick:function(){b(!0),o()},children:[Object(D.jsx)(Yt.a,{children:Object(D.jsx)(Ut.a,{children:Object(D.jsx)(At.a,{})})}),Object(D.jsx)($.a,{primary:h("\u67b6\u69cb\u7248\u672c")+": "+e,secondary:h("\u66f4\u65b0\u6642\u9593\uff1a")+" "+z()(n).format("YYYY-MM-DD HH:mm:ss")})]}),Object(D.jsxs)(G.a,{button:!0,onClick:function(){"granted"===r?c("closed"):navigator.geolocation.getCurrentPosition((function(t){c("granted")}))},children:[Object(D.jsx)(Yt.a,{children:Object(D.jsx)(Ut.a,{children:"granted"===r?Object(D.jsx)($t.a,{}):Object(D.jsx)(Xt.a,{})})}),Object(D.jsx)($.a,{primary:h("\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd"),secondary:h("granted"===r?"\u958b\u555f":"\u95dc\u9589")})]}),Object(D.jsxs)(G.a,{button:!0,onClick:function(){s()},children:[Object(D.jsx)(Yt.a,{children:Object(D.jsx)(Ut.a,{children:Object(D.jsx)(ae.a,{})})}),Object(D.jsx)($.a,{primary:h("\u4e00\u9375\u6e05\u7a7a\u7528\u6236\u7d00\u9304"),secondary:h("\u5305\u62ec\u9396\u5b9a\u548c\u5e38\u7528\u5831\u6642")})]}),Object(D.jsx)(K.a,{}),Object(D.jsxs)(G.a,{button:!0,component:"a",href:"https://donate.612fund.hk/".concat(f.language,"/"),target:"_blank",children:[Object(D.jsx)(Yt.a,{children:Object(D.jsx)(Ut.a,{children:Object(D.jsx)(Qt.a,{})})}),Object(D.jsx)($.a,{primary:h("\u6350\u6b3e\u652f\u6301"),secondary:h("\u8acb\u6350\u6b3e\u5230 612 \u4eba\u9053\u652f\u63f4\u57fa\u91d1")})]}),Object(D.jsx)(K.a,{}),Object(D.jsxs)(G.a,{children:[Object(D.jsx)(Yt.a,{children:Object(D.jsx)(Ut.a,{children:Object(D.jsx)(ee.a,{})})}),Object(D.jsx)($.a,{primary:h("\u8cc7\u6599\u4f86\u6e90"),secondary:h("\u8cc7\u6599\u4e00\u7dda\u901a")+"  https://data.gov.hk"})]})]}),Object(D.jsx)(Ht.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:l,message:h("\u8cc7\u6599\u66f4\u65b0\u4e2d...")})]})},ce=Object(p.a)((function(t){return{root:{background:"white",height:"calc(100vh - 120px)"}}})),oe=n(180),se=n(181),ie=n(106),ue=n.n(ie),le=n(107),be=n.n(le),je=n(108),de=n.n(je),he=n(109),fe=n.n(he),pe=function(){var t=Object(y.a)(),e=t.t,n=t.i18n,r=Object(u.h)(),c=Object(a.useContext)(W).selectedRoute;return Object(D.jsxs)(oe.a,{value:r.pathname,showLabels:!0,children:[Object(D.jsx)(se.a,{label:e("\u5e38\u7528"),component:l.b,to:"/".concat(n.language),value:"/".concat(n.language),icon:Object(D.jsx)(ue.a,{})}),Object(D.jsx)(se.a,{label:e("\u641c\u5c0b"),component:l.b,to:"/".concat(n.language,"/search"),value:"/".concat(n.language,"/search"),icon:Object(D.jsx)(be.a,{})}),Object(D.jsx)(se.a,{label:c.split("+")[0],component:l.b,to:"/".concat(n.language,"/route/").concat(c),value:"/".concat(n.language,"/route/").concat(c),icon:Object(D.jsx)(de.a,{})}),Object(D.jsx)(se.a,{label:e("\u8a2d\u5b9a"),component:l.b,to:"/".concat(n.language,"/settings"),value:"/".concat(n.language,"/settings"),icon:Object(D.jsx)(fe.a,{})})]})},Oe=n(110),ge=function(){var t=Object(u.j)().path;return Object(D.jsxs)(u.d,{children:[Object(D.jsx)(u.b,{path:"".concat(t,"/route/:id/:panel?"),children:Object(D.jsx)(Bt,{})}),Object(D.jsx)(u.b,{path:"".concat(t,"/settings"),children:Object(D.jsx)(re,{})}),Object(D.jsx)(u.b,{path:"".concat(t,"/search"),children:Object(D.jsx)(vt,{})}),Object(D.jsx)(u.b,{path:"".concat(t),children:Object(D.jsx)(Q,{})})]})},xe=function(){var t=ve(),e=Object(a.useContext)(W),n=e.routeList,r=e.stopList;return null==n||null==r?Object(D.jsxs)(b.a,{maxWidth:"xs",disableGutters:!0,className:t.loadingContainer,children:[Object(D.jsx)(j.a,{size:40}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)(d.a,{className:t.loadingTextContainer,elevation:0,children:Object(D.jsx)(Oe.a,{date:Date.now()+2e4,renderer:function(t){var e=t.seconds;return t.completed?Object(D.jsx)(h.a,{variant:"subtitle2",align:"center",children:"\u4ecb\u9762\u958b\u555f\u4e2d..."}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(h.a,{variant:"subtitle2",align:"center",children:"\u521d\u59cb\u8a2d\u5b9a..."}),Object(D.jsx)(h.a,{variant:"subtitle2",align:"center",children:"\u6b63\u5728\u66f4\u65b0\u5df4\u58eb\u8def\u7dda\u8cc7\u6599..."}),Object(D.jsxs)(h.a,{variant:"subtitle2",align:"center",children:["\u7d04\u9700",e,"\u79d2"]})]})}})})]}):Object(D.jsx)(s.a,{theme:me,children:Object(D.jsx)(b.a,{maxWidth:"xs",disableGutters:!0,className:t.container,children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)(u.b,{exact:!0,path:"/",children:Object(D.jsx)(u.a,{to:"/zh/"})}),Object(D.jsxs)(u.b,{path:"/:lang",children:[Object(D.jsx)(f.a,{}),Object(D.jsx)(A,{}),Object(D.jsx)(ge,{}),Object(D.jsx)(pe,{})]})]})})})},me=Object(i.a)({typography:{fontFamily:"Noto Sans TC, Chivo, sans-serif"},palette:{background:{default:"#ffff00"}}}),ve=Object(p.a)((function(t){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},loadingContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},loadingText:{}}})),ke=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))},ye=n(86),Se=n(57),Ce=n(111),we="en"===window.location.pathname.substr(1,2)?"en":"zh";ye.a.use(Se.e).init({resources:Ce,whitelist:["en","zh"],lowerCaseLng:!0,lng:we,nsSeparator:!1,keySeparator:!1,debug:!1,interpolation:{escapeValue:!1}});ye.a;o.a.render(Object(D.jsx)(q,{children:Object(D.jsx)(xe,{})}),document.getElementById("root")),ke()}},[[138,1,2]]]);
//# sourceMappingURL=main.a16338c2.chunk.js.map