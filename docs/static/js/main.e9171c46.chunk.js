(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(205)},121:function(e,t,a){},122:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(10),o=a.n(c),s=(a(121),a(122),a(208)),u=a(27),i=a(42),m={target:"",owner:"",name:"",since:"",until:"",sheetId:"1ywCxG8xTKOYK89AEZIqgpTvbvpbrb1s4H_bMVvKV59I",username:"ec29e90c-188d-11e8-bb72-00163ec1cd01",password:"0b82fe63b6bd450519ade02c3cb8f77ee581f25a810db28f3910e6cdd9d041bf",result:"",waiting:!1};!function(e){e.SET_URL="SET_URL",e.SET_TARGET="SET_TARGET",e.SET_DURATION="SET_DURATION",e.GET_COMMIT_COUNT="GET_COMMIT_COUNT",e.SET_RESULT="SET_RESULT",e.SET_WAITING="SET_WAITING"}(n||(n={}));var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_URL:var a=(t.payload||"").split("/"),r=Object(u.a)(a,2),l=r[0],c=r[1];return l&&c?Object(i.a)({},e,{owner:l,name:c}):e;case n.SET_TARGET:var o=t.payload;return Object(i.a)({},e,{target:o});case n.SET_RESULT:var s=t.payload;return Object(i.a)({},e,{result:s});case n.SET_DURATION:var d=t.payload,p=d.since,E=d.until;return Object(i.a)({},e,{since:p,until:E});case n.SET_WAITING:var b=t.payload;return Object(i.a)({},e,{waiting:b});default:return e}},p=a(75),E=a.n(p),b=a(102),f=a(103),h=a.n(f),v=function(e){var t=e.target,a=e.owner,n=e.name,r=e.sheetId,l=e.username,c=e.password,o=e.since,s=void 0===o?"":o,u=e.until,i=void 0===u?"":u;return h.a.post("https://protected-depths-49487.herokuapp.com/statemachine/commit_count_report.json?blocking=true ",{input:{github:{target:t,owner:a,name:n,since:s,until:i},gsheet:{sheetId:r}}},{auth:{username:l,password:c}}).then(function(e){return e.data.output.github.output.values[0][5]})},g=function(){var e=Object(b.a)(E.a.mark(function e(t,a,r){var l,c,o,s,u,i,m,d,p;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.target,c=r.owner,o=r.name,s=r.since,u=r.until,i=r.username,m=r.password,d=r.sheetId,a({type:n.SET_WAITING,payload:!0}),e.prev=2,e.next=5,v({target:l,owner:c,name:o,since:s,until:u,username:i,password:m,sheetId:d});case 5:p=e.sent,a({type:n.SET_RESULT,payload:p}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,a({type:n.SET_WAITING,payload:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[2,9,12,15]])}));return function(t,a,n){return e.apply(this,arguments)}}(),T=function(e,t,a){switch(e.type){case n.GET_COMMIT_COUNT:return void g(e,t,a)}},O=function(e,t,a,n){return function(r){t(r),a(r,n,e)}},w=Object(r.createContext)({state:m,dispatch:function(e){}}),N=function(e){var t=e.children,a=function(e,t){var a=Object(u.a)(e,2),n=a[0],l=a[1],c=Object(r.useCallback)(O(n,l,t,function(e){c(e)}),[n,l]);return[n,c]}(Object(r.useReducer)(d,m),T),n=Object(u.a)(a,2),c={state:n[0],dispatch:n[1]};return l.a.createElement(w.Provider,{value:c},t)},C=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},l.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Commit Count Report"))},S=function(e){var t=e.children,a=Object(r.useContext)(w),c=a.dispatch,o=a.state.waiting,s=Object(r.useCallback)(function(e){o||c({type:n.GET_COMMIT_COUNT}),e.preventDefault()},[c,o]);return l.a.createElement("form",{onSubmit:s},t)},_=function(){return l.a.createElement("p",{className:"lead pt-1"},"FaaS Shell sample Commit Count Report Web GUI.")},I=a(104),y=a.n(I),j=function(e){var t=e.label,a=e.placeholder,n=e.prepend,c=e.id,o=void 0===c?y.a.uniqueId("input"):c,s=e.onChange;return function(){var e=Object(r.useContext)(w).dispatch,c=Object(r.useCallback)(function(t){s(t.target.value,e)},[s,e]);return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:o,className:"col-sm-3 col-form-label"},t),l.a.createElement("div",{className:"input-group col-sm-9"},n&&l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},n)),l.a.createElement("input",{onChange:c,required:!0,className:"form-control",id:o,placeholder:a})))}},R=j({label:"GitHub Repository URL:",placeholder:"naohirotamura/faasshell",prepend:"https://github.com/",onChange:function(e,t){t({type:n.SET_URL,payload:e})}}),G=j({label:"Commiter's search string:",placeholder:"fujitsu.com",onChange:function(e,t){t({type:n.SET_TARGET,payload:e})}}),k=a(207),U=a(7),x=a.n(U),A=k.a.RangePicker,M=function(){var e=Object(r.useContext)(w).dispatch,t=Object(r.useCallback)(function(t){var a=Object(u.a)(t,2),r=a[0],l=a[1];if(r&&l){var c=r.startOf("day").toISOString(),o=l.endOf("day").toISOString();e({type:n.SET_DURATION,payload:{since:c,until:o}})}},[e]),a=Object(r.useCallback)(function(e){return!!(e&&e>=x()().endOf("day"))},[]),c=[x()().subtract(1,"year"),x()()];return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Search Duration (Option):"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(A,{onChange:t,disabledDate:a,defaultPickerValue:c})))},L=a(206),W=function(){var e=Object(r.useContext)(w).state.waiting;return l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-sm-9 offset-sm-3"},l.a.createElement("button",{disabled:e,className:"btn-info btn"},"Get Commit Count"),l.a.createElement(L.a,{className:"ml-2",spinning:e})))},D=function(){var e=Object(r.useContext)(w).state.result;return l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Result:"),l.a.createElement("div",{className:"input-group col-sm-9"},l.a.createElement(s.a,null,e)))},K=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"All results are logged into"," ",l.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1ywCxG8xTKOYK89AEZIqgpTvbvpbrb1s4H_bMVvKV59I/edit#gid=0",title:"Google Sheets",target:"_blank"},"Google Sheets"),"."),l.a.createElement("small",{className:"from-text text-muted"},"Get Commit Count button privdes the same effect as the following git command:"),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("pre",null,l.a.createElement("small",null,l.a.createElement("code",null,"$ git clone https://github.com/NaohiroTamura/faasshell",l.a.createElement("br",null),"$ cd faasshell",l.a.createElement("br",null),"$ git log --since=2018-06-21T00:00:00+00:00 --until=2018-07-20T00:00:00+00:00 --no-merges --format=%ae | grep fujitsu.com | wc -l"))))))},V=function(){return l.a.createElement(N,null,l.a.createElement(C,null),l.a.createElement("div",{className:"container"},l.a.createElement(_,null),l.a.createElement(s.a,null,l.a.createElement(S,null,l.a.createElement(R,null),l.a.createElement(G,null),l.a.createElement(M,null),l.a.createElement(W,null),l.a.createElement(D,null),l.a.createElement(K,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,1,2]]]);
//# sourceMappingURL=main.e9171c46.chunk.js.map