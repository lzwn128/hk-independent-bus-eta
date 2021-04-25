(this["webpackJsonphk-independent-bus-eta"]=this["webpackJsonphk-independent-bus-eta"]||[]).push([[0],{102:function(t,e,n){},103:function(t,e,n){},118:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),s=(n(102),n(103),n(152)),i=n(90),u=n(10),b=n(24),l=n(151),h=n(147),f=n(153),p=n(140),d=n(33),j=n(51),g=n(138),x=n(139),O=n(156),m=n(155),v=n(141),k=n(5),S=n(158),w=n(18),y=n.n(w),C=n(32),L=n(14),z=n(21),I=n.n(z),_=n(82),E={co:"kmb",fetchRouteList:function(){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/route/").then((function(t){return t.json()})).then((function(t){var e=t.data,n={};return e.forEach((function(t){n[[t.route,t.service_type,t.bound].join("+")]={co:["kmb"],orig:{en:t.orig_en,zh:t.orig_tc},dest:{en:t.dest_en,zh:t.dest_tc},stops:{kmb:[]}}})),n})).then((function(t){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/route-stop/").then((function(t){return t.json()})).then((function(e){var n=e.data,r=e.generated_timestamp;return n.forEach((function(e){t[[e.route,e.service_type,e.bound].join("+")].stops.kmb.push(e.stop)})),[t,r]}))}))},fetchStopList:function(){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop").then((function(t){return t.json()})).then((function(t){var e=t.data,n=t.generated_timestamp,r={};return e.forEach((function(t){r[t.stop]={name:{en:t.name_en,zh:t.name_tc},location:{lat:t.lat,long:t.long}}})),[r,n]}))},fetchEtas:function(t){var e=t.stopId,n=t.route,r=t.seq,a=t.serviceType,o=t.bound;return fetch("https://data.etabus.gov.hk/v1/transport/kmb/eta/".concat(e,"/").concat(n,"/").concat(a)).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.dir===o&&t.seq===r})).map((function(t){return{eta:t.eta?Math.trunc(I()(t.eta).diff(I()())/60/1e3):t.eta,remark:{zh:t.rmk_tc,en:t.rmk_en},co:"kmb"}}))}))}},N={co:"nwfb",fetchRouteList:function(){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route/nwfb").then((function(t){return t.json()})).then((function(t){var e=t.data,n=t.generated_timestamp,r={};return e.forEach((function(t){r[[t.route,"1","I"].join("+")]={orig:{en:t.orig_en,zh:t.orig_tc},dest:{en:t.dest_en,zh:t.dest_tc},co:["nwfb"],stops:{nwfb:null}},r[[t.route,"1","O"].join("+")]={dest:{en:t.orig_en,zh:t.orig_tc},orig:{en:t.dest_en,zh:t.dest_tc},co:["nwfb"],stops:{nwfb:null}}})),[r,n]}))},fetchRouteStops:function(t){var e=t.route,n=t.bound,r=(t.routeList,"I"===n?"outbound":"inbound");return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/NWFB/".concat(e,"/").concat(r)).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return t.stop}))})).then((function(t){return Promise.all(t.map((function(t){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/".concat(t)).then((function(t){return t.json()})).then((function(e){var n=e.data;return{stopId:t,name:{zh:n.name_tc,en:n.name_en},location:{lat:n.lat,long:n.long}}}))}))).then((function(e){var n={};return e.forEach((function(t){return n[t.stopId]=t})),{routeStops:t,stopList:n,co:"nwfb"}}))}))},fetchEtas:function(t){var e=t.stopId,n=t.route,r=t.bound;return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/NWFB/".concat(e,"?lang=zh-hant")).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.route===n&&t.dir!==r&&t.eta})).map((function(t){return{eta:t.eta?Math.trunc(I()(t.eta).diff(I()())/60/1e3):t.eta,remark:{zh:t.rmk,en:t.rmk},co:"nwfb"}}))}))}},R={co:"ctb",fetchRouteList:function(){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route/ctb").then((function(t){return t.json()})).then((function(t){var e=t.data,n=t.generated_timestamp,r={};return e.forEach((function(t){r[[t.route,"1","I"].join("+")]={orig:{en:t.orig_en,zh:t.orig_tc},dest:{en:t.dest_en,zh:t.dest_tc},co:["ctb"],stops:{ctb:null}},r[[t.route,"1","O"].join("+")]={dest:{en:t.orig_en,zh:t.orig_tc},orig:{en:t.dest_en,zh:t.dest_tc},co:["ctb"],stops:{ctb:null}}})),[r,n]}))},fetchRouteStops:function(t){var e=t.route,n=t.bound,r=(t.routeList,"I"===n?"outbound":"inbound");return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/route-stop/CTB/".concat(e,"/").concat(r)).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return t.stop}))})).then((function(t){return Promise.all(t.map((function(t){return fetch("https://rt.data.gov.hk/v1/transport/citybus-nwfb/stop/".concat(t)).then((function(t){return t.json()})).then((function(e){var n=e.data;return{stopId:t,name:{zh:n.name_tc,en:n.name_en},location:{lat:n.lat,long:n.long}}}))}))).then((function(e){var n={};return e.forEach((function(t){return n[t.stopId]=t})),console.log(n),{routeStops:t,stopList:n,co:"ctb"}}))}))},fetchEtas:function(t){var e=t.stopId,n=t.route,r=t.bound;return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/CTB/".concat(e,"?lang=zh-hant")).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.route===n&&t.dir!==r})).map((function(t){return{eta:t.eta?Math.trunc(I()(t.eta).diff(I()())/60/1e3):t.eta,remark:{zh:t.rmk,en:t.rmk},co:"ctb"}}))}))}},T=function(){var t=Object(C.a)(y.a.mark((function t(e){var n,r,a,o,c,s,i,u,b,l,h;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.route,r=e.routeStops,a=e.bound,o=e.seq,c=e.serviceType,s=e.co,i=e.routeSize,u=[],b=Object(_.a)(s),t.prev=3,b.s();case 5:if((l=b.n()).done){t.next=31;break}if("kmb"!==(h=l.value)||!r.kmb){t.next=15;break}return t.t0=u,t.next=11,E.fetchEtas({route:n,stopId:r.kmb[o-1],seq:o===i?1e3:o,serviceType:c,bound:a});case 11:t.t1=t.sent,u=t.t0.concat.call(t.t0,t.t1),t.next=29;break;case 15:if("ctb"!==h||!r.ctb){t.next=23;break}return t.t2=u,t.next=19,R.fetchEtas({stopId:r.ctb[o-1],route:n,bound:a});case 19:t.t3=t.sent,u=t.t2.concat.call(t.t2,t.t3),t.next=29;break;case 23:if("nwfb"!==h||!r.nwfb){t.next=29;break}return t.t4=u,t.next=27,N.fetchEtas({stopId:r.nwfb[o-1],route:n,bound:a});case 27:t.t5=t.sent,u=t.t4.concat.call(t.t4,t.t5);case 29:t.next=5;break;case 31:t.next=36;break;case 33:t.prev=33,t.t6=t.catch(3),b.e(t.t6);case 36:return t.prev=36,b.f(),t.finish(36);case 39:return t.abrupt("return",u.sort((function(t,e){return t.eta<e.eta?-1:1})).filter((function(t){return!Number.isInteger(t.eta)||t.eta>1})));case 40:case"end":return t.stop()}}),t,null,[[3,33,36,39]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(C.a)(y.a.mark((function t(e){var n,r,a,o,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,r=e.serviceType,a=e.bound,"kmb"!==(o=e.co)){t.next=5;break}c=E,t.next=15;break;case 5:if("nwfb"!==o){t.next=9;break}c=N,t.next=15;break;case 9:if("ctb"!==o){t.next=13;break}c=R,t.next=15;break;case 13:return console.error(o+" is not a valid company id"),t.abrupt("return",null);case 15:return t.next=17,c.fetchRouteStops({route:n,serviceType:r,bound:a});case 17:return t.abrupt("return",t.sent);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=n(2),F=a.a.createContext(),P=function(t){var e=Object(r.useState)(localStorage.getItem("version")),n=Object(L.a)(e,2),a=n[0],o=n[1],c=Object(r.useState)(null),s=Object(L.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(null),l=Object(L.a)(b,2),h=l[0],f=l[1],p=Object(r.useState)(""),d=Object(L.a)(p,2),j=d[0],g=d[1],x=Object(r.useState)("1+1+I"),O=Object(L.a)(x,2),m=O[0],v=O[1],k=Object(r.useState)([]),S=Object(L.a)(k,2),w=S[0],y=S[1];Object(r.useEffect)((function(){fetch("https://api.github.com/repos/chunlaw/hk-independent-bus-eta/commits/gh-pages").then((function(t){return t.json()})).then((function(t){var e=t.sha;a!==e&&(localStorage.clear(),o(e),localStorage.setItem("version",e))})),J().then((function(){var t=JSON.parse(localStorage.getItem("routeList"));u(t),y(W("",t))})),M().then((function(){var t=JSON.parse(localStorage.getItem("stopList"));f(t)}))}),[]),Object(r.useEffect)((function(){y(W(j,i))}),[j,i]);return Object(D.jsx)(F.Provider,{value:{routeList:i,setRouteList:u,stopList:h,setStopList:f,searchRoute:j,setSearchRoute:g,updateSearchRouteByButton:function(t){switch(t){case"b":g(j.slice(0,-1));break;case"-":g("");break;default:g(j+t)}},selectedRoute:m,setSelectedRoute:v,possibleChar:w},children:t.children})},Y=F,J=function(){var t=Object(C.a)(y.a.mark((function t(){var e,n,r,a,o,c,s,i,u,b,l,h,f;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null==localStorage.getItem("routeList")||localStorage.getItem("routeListDbTime")<I()().subtract(1,"days").format("YYYY-MM-DDTHH:mm:ssZZ"))){t.next=22;break}e={},n="3000",r=0,a=[E,N,R];case 4:if(!(r<a.length)){t.next=17;break}return o=a[r],t.next=8,o.fetchRouteList();case 8:for(c=t.sent,s=Object(L.a)(c,2),i=s[0],u=s[1],b=0,l=Object.entries(i);b<l.length;b++)(h=l[b])[0]in e?h[1].orig.en.toUpperCase()===e[h[0]].orig.en.toUpperCase()?(e[h[0]].co.push(o.co),e[h[0]].stops[o.co]=h[1].stops[o.co]):e[h[0]+"+"+o.co]=h[1]:e[h[0]]=h[1];n=u<n?u:n;case 14:r++,t.next=4;break;case 17:f=e,e={},Object.entries(f).sort((function(t,e){return t[0]<e[0]?-1:1})).forEach((function(t){e[t[0]]=t[1]})),localStorage.setItem("routeList",JSON.stringify(e)),localStorage.setItem("routeListDbTime",n);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var t=Object(C.a)(y.a.mark((function t(){var e,n,r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null==localStorage.getItem("stopList")||localStorage.getItem("stopDbTime")<I()().subtract(1,"days").format("YYYY-MM-DDTHH:mm:ssZZ"))){t.next=9;break}return t.next=3,E.fetchStopList();case 3:e=t.sent,n=Object(L.a)(e,2),r=n[0],a=n[1],localStorage.setItem("stopList",JSON.stringify(r)),localStorage.setItem("stopDbTime",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(t,e){if(null==e)return[];var n={};return Object.entries(e).forEach((function(e){e[0].startsWith(t.toUpperCase())&&(n[e[0].slice(t.length,t.length+1)]=!0)})),Object.entries(n).map((function(t){return t[0]})).filter((function(t){return"+"!==t}))},q=Object(p.a)((function(t){return{tabsContainer:Object(j.a)({display:"flex"},t.breakpoints.down("sm"),{flexDirection:"row-reverse"}),toolbar:{display:"flex",justifyContent:"space-between",zIndex:2*t.zIndex.drawer}}})),H=Object(k.a)({root:{borderBottom:"none",minHeight:24},indicator:{backgroundColor:"transparent"}})(m.a),U=Object(k.a)((function(t){return{root:{textTransform:"none",minWidth:36,fontWeight:900,marginRight:t.spacing(0),fontSize:"15px",opacity:1,padding:"6px 6px"},selected:{"& > .MuiTab-wrapper":{color:"#3B3C45",backgroundColor:"#FEFBFA"}},wrapper:{color:"#3B3C45",borderRadius:"30px",padding:"2px 10px 0px 10px"}}}))((function(t){return Object(D.jsx)(v.a,Object(d.a)({disableRipple:!0},t))})),Z=function(t){var e=Object(r.useContext)(Y),n=e.searchRoute,a=e.setSearchRoute,o=Object(u.j)().path,c=Object(S.a)(),s=c.t,i=c.i18n,b=q(),l=Object(u.h)(),h=Object(u.g)();return Object(D.jsxs)(g.a,{className:b.toolbar,children:[Object(D.jsxs)("div",{children:[Object(D.jsx)(x.a,{variant:"h6",children:"\u9999\u6e2f"}),Object(D.jsx)(x.a,{variant:"subtitle2",children:"\u7368\u7acb\u5df4\u58eb\u9810\u5831"})]}),Object(D.jsx)(O.a,{type:"text",value:n,placeholder:s("\u641c\u5c0b\u5df4\u58eb\u7dda"),onChange:function(t){return a(t.target.value)},disabled:o.includes("route")}),Object(D.jsx)("div",{className:b.tabsContainer,children:Object(D.jsxs)(H,{value:i.language,onChange:function(t,e){return n=e,h.replace(l.pathname.replace("/"+i.language+"/","/"+n+"/")),void i.changeLanguage(n);var n},children:[Object(D.jsx)(U,{value:"en",label:"En"}),Object(D.jsx)(U,{value:"zh",label:"\u7e41"})]})})]})},$=n(144),G=n(145),A=n(146),K=n(77),V=n(28),X=n(142),Q=n(143),tt=n(154),et=n(121),nt=n(86),rt=n.n(nt),at=function(t){var e=t.k,n=t.handleClick,r=t.disabled,a=void 0!==r&&r,o=it(),c=Object(S.a)().t;return Object(D.jsx)(X.a,{variant:"contained",className:o.button,onClick:function(){return n(e)},disabled:a,children:"b"===e?Object(D.jsx)(rt.a,{}):"-"===e?c("\u53d6\u6d88"):e})},ot=function(){var t=Object(r.useContext)(Y),e=t.searchRoute,n=t.updateSearchRouteByButton,a=t.possibleChar;return Object(D.jsx)(Q.a,{container:!0,spacing:1,children:"789456123-0b".split("").map((function(t){return Object(D.jsx)(Q.a,{item:!0,xs:4,children:Object(D.jsx)(at,{k:t,handleClick:n,disabled:"b"===t&&""===e||!"b-".includes(t)&&!a.includes(t)||"-"===t&&""===e})},"input-"+t)}))})},ct=function(){var t=Object(r.useContext)(Y),e=t.updateSearchRouteByButton,n=t.possibleChar;return Object(D.jsx)(Q.a,{container:!0,spacing:1,children:n.filter((function(t){return isNaN(t)})).map((function(t){return Object(D.jsx)(Q.a,{item:!0,xs:12,children:Object(D.jsx)(at,{k:t,handleClick:e})},"input-"+t)}))})},st=function(){var t=it();return Object(D.jsxs)(tt.a,{className:t.boxContainer,padding:0,children:[Object(D.jsx)(tt.a,{className:t.numPadContainer,padding:0,children:Object(D.jsx)(ot,{})}),Object(D.jsx)(tt.a,{className:t.alphabetPadContainer,padding:0,children:Object(D.jsx)(ct,{})})]})},it=Object(et.a)((function(t){return{boxContainer:{display:"flex",flexDirection:"row",height:"180px",justifyContent:"space-around"},numPadContainer:{width:"60%"},alphabetPadContainer:{width:"20%",height:"100%",overflowX:"hidden",overflowY:"scroll"},button:{width:"100%"}}})),ut=a.a.memo((function(t){var e=t.data,n=t.index,r=t.style,a=Object(S.a)(),o=a.t,c=a.i18n,s=e.routeList[n],i=s[0].split("+").slice(0,2),u=Object(L.a)(i,2),l=u[0],h=u[1];return Object(D.jsx)(b.b,{to:"/"+c.language+"/route/"+s[0],children:Object(D.jsx)($.a,{variant:"outlined",style:r,square:!0,children:Object(D.jsx)(G.a,{children:Object(D.jsxs)(A.a,{children:[Object(D.jsx)(x.a,{variant:"h5",display:"inline",children:l}),Object(D.jsxs)(x.a,{variant:"caption",children:[" - ",s[1].co.map((function(t){return o(t)})).join("+")]}),Object(D.jsx)("br",{}),Object(D.jsxs)(x.a,{variant:"subtitle2",display:"inline",children:[o("\u5f80")," ",s[1].dest[c.language],"  "]}),Object(D.jsx)(x.a,{variant:"caption",children:"2"===h?o("\u7279\u5225\u73ed\u6b21"):"\u3000"})]})})},s[0])})}),K.b),bt=Object(V.a)((function(t){return{routeList:t}})),lt=function(){var t=Object(r.useContext)(Y),e=t.routeList,n=t.searchRoute,a=Object.entries(e).filter((function(t){return t[0].startsWith(n.toUpperCase())})),o=bt(a);return Object(D.jsx)(K.a,{height:358,itemCount:a.length,itemSize:85,width:"100%",itemData:o,children:ut})},ht=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(lt,{}),Object(D.jsx)("hr",{}),Object(D.jsx)(st,{})]})},ft=n(157),pt=n(159),dt=n(148),jt=function(){var t=Object(u.i)().id,e=Object(r.useState)(!1),n=Object(L.a)(e,2),a=n[0],o=n[1],c=Object(r.useContext)(Y),s=c.routeList,i=c.stopList,b=c.setRouteList,l=c.setStopList,f=c.setSelectedRoute,p=t.split("+").slice(0,3),j=Object(L.a)(p,3),g=j[0],x=j[1],O=j[2],m=Object(S.a)().i18n,v=s[t];Object(r.useEffect)((function(){v.co.filter((function(t){return null==v.stops[t]})).length&&Promise.all(v.co.map((function(t){return null!==v.stops[t]?null:B({route:g,serviceType:x,bound:O,co:t})})).filter((function(t){return t}))).then((function(e){var n={};e.forEach((function(t){n=Object(d.a)(Object(d.a)({},n),t.stopList)})),l(Object(d.a)(Object(d.a)({},i),n)),b((function(n){var r=JSON.parse(JSON.stringify(n));return e.forEach((function(e){return r[t].stops[e.co]=e.routeStops})),r}))})),f(t)}),[]);var k=vt();return null==v.stops[v.co[0]]?Object(D.jsx)(tt.a,{className:k.loadingContainer,children:Object(D.jsx)(h.a,{size:30})}):Object(D.jsx)(tt.a,{className:k.boxContainer,children:v.stops[v.co[0]].map((function(e,n){return Object(D.jsxs)(xt,{expanded:a===n,onChange:(r=n,function(t,e){o(!!e&&r)}),TransitionProps:{unmountOnExit:!0},children:[Object(D.jsx)(Ot,{children:i[e].name[m.language]}),Object(D.jsx)(mt,{children:Object(D.jsx)(gt,{route:g,seq:n+1,routeStops:v.stops,serviceType:x,bound:O,co:s[t].co,routeSize:v.stops[v.co[0]].length})})]},"stop-"+n);var r}))})},gt=function(t){var e=t.route,n=t.routeStops,a=t.seq,o=t.bound,c=t.serviceType,s=t.co,i=t.routeSize,u=Object(S.a)(),b=u.t,l=u.i18n,f=Object(r.useState)(null),p=Object(L.a)(f,2),d=p[0],j=p[1],g=function(){(function(){var t=Object(C.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j,t.next=3,T({route:e,routeStops:n,seq:a,bound:o,serviceType:c,co:s,routeSize:i});case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()};if(Object(r.useEffect)((function(){g();var t=setInterval((function(){g()}),3e4);return function(){return clearInterval(t)}}),[]),null==d)return Object(D.jsx)(h.a,{size:20,style:{}});var O=function(t){var e="";switch(t){case null:break;case 0:e="- "+b("\u5206\u9418");break;default:e=t+b("\u5206\u9418")}return e};return Object(D.jsx)("div",{children:0===d.length?b("\u66ab\u7121\u73ed\u6b21"):d.map((function(t,e){return Object(D.jsxs)(x.a,{variant:"subtitle1",children:[O(t.eta)," ",t.remark[l.language]?" - "+t.remark[l.language]:""," ",b(t.co)]},"route-".concat(e))}))})},xt=Object(k.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(ft.a),Ot=Object(k.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(pt.a),mt=Object(k.a)((function(t){return{root:{padding:t.spacing(2)}}}))(dt.a),vt=Object(p.a)((function(t){return{boxContainer:{height:"500px",overflowY:"scroll"},loadingContainer:{display:"flex",justifyContent:"center"}}})),kt=n(149),St=n(150),wt=n(87),yt=n.n(wt),Ct=n(88),Lt=n.n(Ct),zt=function(){var t=Object(S.a)().i18n,e=Object(u.h)(),n=Object(r.useContext)(Y).selectedRoute;return Object(D.jsxs)(kt.a,{value:e.pathname,onChange:function(t){console.log(t)},children:[Object(D.jsx)(St.a,{label:"Search",component:b.b,to:"/".concat(t.language,"/search"),value:"/".concat(t.language,"/search"),icon:Object(D.jsx)(yt.a,{})}),Object(D.jsx)(St.a,{label:n.split("+")[0],component:b.b,to:"/".concat(t.language,"/route/").concat(n),value:"/".concat(t.language,"/route/").concat(n),icon:Object(D.jsx)(Lt.a,{})})]})},It=function(){var t=Object(u.j)().path;return Object(D.jsxs)(u.d,{children:[Object(D.jsx)(u.b,{path:"".concat(t,"/route/:id?"),children:Object(D.jsx)(jt,{})}),Object(D.jsx)(u.b,{path:"".concat(t,"/search"),children:Object(D.jsx)(ht,{})})]})},_t=function(){var t=Nt(),e=Object(r.useContext)(Y),n=e.routeList,a=e.stopList;return null==n||null==a?Object(D.jsx)(l.a,{maxWidth:"xs",disableGutters:!0,className:t.container,children:Object(D.jsx)(h.a,{size:40,className:t.loading})}):Object(D.jsx)(s.a,{theme:Et,children:Object(D.jsx)(l.a,{maxWidth:"xs",disableGutters:!0,className:t.container,children:Object(D.jsxs)(b.a,{basename:"/hk-independent-bus-eta",children:[Object(D.jsx)(u.b,{exact:!0,path:"/",children:Object(D.jsx)(u.a,{to:"/zh/search"})}),Object(D.jsxs)(u.b,{path:"/:lang",children:[Object(D.jsx)(f.a,{}),Object(D.jsx)(Z,{}),Object(D.jsx)(It,{}),Object(D.jsx)(zt,{})]})]})})})},Et=Object(i.a)({typography:{fontFamily:"Noto Sans TC, Chivo, sans-serif"},palette:{background:{default:"yellow"}}}),Nt=Object(p.a)((function(t){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},loading:{alignSelf:"center",margin:"auto"}}})),Rt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))},Tt=n(78),Bt=n(44),Dt=n(89),Ft="en"===window.location.pathname.substr(1,2)?"en":"zh";Tt.a.use(Bt.e).init({resources:Dt,whitelist:["en","zh"],lowerCaseLng:!0,lng:Ft,nsSeparator:!1,keySeparator:!1,debug:!1,interpolation:{escapeValue:!1}});Tt.a;c.a.render(Object(D.jsx)(P,{children:Object(D.jsx)(_t,{})}),document.getElementById("root")),Rt()},89:function(t){t.exports=JSON.parse('{"en":{"translation":{"kmb":"KMB","ctb":"CTB","nwfb":"NWFB","\u5f80":"To"}},"zh":{"translation":{"kmb":"\u4e5d\u5df4","ctb":"\u57ce\u5df4","nwfb":"\u65b0\u5df4"}}}')}},[[118,1,2]]]);
//# sourceMappingURL=main.f8242a9d.chunk.js.map