(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n.p+"static/media/icon.ef3567b5.png"},293:function(e,t,n){e.exports=n(374)},374:function(e,t,n){"use strict";n.r(t);n(373);var a=n(396),r=n(6),o=n.n(r),c=n(20),i=n.n(c),l=n(0),u=n.n(l),s=n(2),m=n(19),d=n(3),f=n(63),p=n(216),g=n(395),b=n(92);n(326),n(327),n(328);b.a.initializeApp({apiKey:"AIzaSyAHatqlMkgwtBwFSrIMA5o2rzmzjtBHllo",authDomain:"react-native-firebase-2d7aa.firebaseapp.com",projectId:"react-native-firebase-2d7aa",storageBucket:"react-native-firebase-2d7aa.appspot.com",messagingSenderId:"206190794167",appId:"1:206190794167:web:5d1de8a6eaff002e674432"});var h=b.a.firestore(),E=b.a.storage(),y=b.a.storage,v=b.a.auth(),w={firebase:b.a,db:h,stores:E,auth:v,storis:y},x=n(280),S=n(8),O=n.n(S),j=n(21),C=n.n(j),k=n(133);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=e.user,n=e.route,a=Object(l.useState)([]),r=i()(a,2),c=r[0],s=r[1],m=n.params.uid;Object(l.useEffect)((function(){var e=m>t.uid?t.uid+"-"+m:m+"-"+t.uid,n=w.db.collection("chatrooms").doc(e).collection("messages").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data().createdAt?A(A({},e.data()),{},{createdAt:e.data().createdAt.toDate()}):A(A({},e.data()),{},{createdAt:new Date})}));s(t)}));return function(){n()}}),[]);return u.a.createElement(d.a,{style:{flex:1,backgroundColor:"#f5f5f5"}},u.a.createElement(k.b,{messages:c,onSend:function(e){return function(e){var n=A(A({},e[0]),{},{sentBy:t.uid,sentTo:m,createdAt:new Date});s((function(e){return k.b.append(e,n)}));var a=m>t.uid?t.uid+"-"+m:m+"-"+t.uid;w.db.collection("chatrooms").doc(a).collection("messages").add(A({},n))}(e)},user:{_id:t.uid},renderBubble:function(e){return u.a.createElement(k.a,o()({},e,{wrapperStyle:{right:{backgroundColor:"green"}}}))},renderInputToolbar:function(e){return u.a.createElement(k.c,o()({},e,{containerStyle:{borderTopWidth:1.5,borderTopColor:"green"},textInputStyle:{color:"black"}}))}}))}var D=n(29),z=n(170),I=n(393);n(68);function B(e){var t=e.user,n=Object(l.useState)(""),a=i()(n,2),r=a[0],o=a[1];return Object(l.useEffect)((function(){w.db.collection("users").doc(t.uid).get().then((function(e){o(e.data())}))}),[]),u.a.createElement(d.a,{style:L.container},u.a.createElement(D.a,{style:L.img,source:{uri:r.pic}}),u.a.createElement(m.a,{style:L.text},"Name: ",r.name),u.a.createElement(d.a,{style:{flexDirection:"row"}},u.a.createElement(z.default,{name:"mail",size:30,color:"white"}),u.a.createElement(m.a,{style:[L.text,{marginLeft:10}]},r.email)),u.a.createElement(I.a,{style:L.btn,mode:"contained",onPress:function(){w.db.collection("users").doc(t.uid).update({}).then((function(){w.auth.signOut()}))}},"Logout"))}var L=s.a.create({container:{flex:1,backgroundColor:"green",alignItems:"center",justifyContent:"space-evenly"},img:{width:200,height:200,borderRadius:100,borderWidth:3,borderColor:"white"},text:{fontSize:23,color:"white"},btn:{borderColor:"white",borderWidth:3}}),W=n(26),F=n(48),H=n(394),N=n(397),R=n(281);function M(e){var t=e.user,n=e.navigation,a=Object(l.useState)(null),r=i()(a,2),o=(r[0],r[1],Object(l.useState)([])),c=i()(o,2),s=c[0],f=c[1],p=Object(l.useState)(""),g=i()(p,2),b=g[0],h=g[1],E=s.filter((function(e){return e.name.toLowerCase().indexOf(b.toLowerCase())>-1}));return Object(l.useEffect)((function(){!function(){var e,n;C.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.a.awrap(w.db.collection("users").where("uid","!=",t.uid).get());case 2:e=a.sent,n=e.docs.map((function(e){return e.data()})),f(n);case 5:case"end":return a.stop()}}),null,null,null,Promise)}()}),[]),s?u.a.createElement(u.a.Fragment,null,u.a.createElement(H.a,{placeholder:"Search...",onChangeText:function(e){return h(e)}}),u.a.createElement(R.a,null,E.map((function(e){return u.a.createElement(W.a,{onPress:function(){return n.navigate("chat",{name:e.name,uid:e.uid,status:"string"==typeof e.status?e.status:e.status.toDate().toString(),pic:e.pic})}},u.a.createElement(d.a,{style:q.mycard},u.a.createElement(D.a,{source:{uri:e.pic},style:q.img}),u.a.createElement(d.a,null,u.a.createElement(m.a,{style:q.text},e.name),u.a.createElement(m.a,{style:q.text},e.email))))}))),u.a.createElement(N.a,{style:q.fab,icon:"face-profile",color:"black",onPress:function(){return n.navigate("account")}})):u.a.createElement(F.a,{size:"large",color:"#00ff00"})}var q=s.a.create({img:{width:60,height:60,borderRadius:30,backgroundColor:"green"},text:{fontSize:18,marginLeft:15},mycard:{flexDirection:"row",margin:3,padding:4,backgroundColor:"white",borderBottomWidth:1,borderBottomColor:"grey"},fab:{position:"absolute",margin:16,right:0,bottom:0,backgroundColor:"white"}}),G=n(109),J=n(398);function U(e){var t=e.navigation,a=Object(l.useState)(""),r=i()(a,2),o=r[0],c=r[1],s=Object(l.useState)(""),f=i()(s,2),p=f[0],g=f[1],b=Object(l.useState)(!1),h=i()(b,2),E=h[0],y=h[1];if(E)return u.a.createElement(F.a,{size:"large",color:"#00ff00"});return u.a.createElement(G.a,{behavior:"position"},u.a.createElement(d.a,{style:_.box1},u.a.createElement(m.a,{style:_.text},"Bienvenido a Mss App"),u.a.createElement(D.a,{style:_.img,source:n(198)})),u.a.createElement(d.a,{style:_.box2},u.a.createElement(J.a,{label:"Email",mode:"outlined",value:o,onChangeText:function(e){return c(e)}}),u.a.createElement(J.a,{label:"password",mode:"outlined",value:p,onChangeText:function(e){return g(e)},secureTextEntry:!0}),u.a.createElement(I.a,{mode:"contained",onPress:function(){return C.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!0),o&&p){e.next=4;break}return alert("please add all the field"),e.abrupt("return");case 4:return e.prev=4,e.next=7,C.a.awrap(w.auth.signInWithEmailAndPassword(o,p));case 7:e.sent,y(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("something went wrong");case 14:case"end":return e.stop()}}),null,null,[[4,11]],Promise)}},"Login"),u.a.createElement(W.a,{onPress:function(){return t.navigate("signup")}},u.a.createElement(m.a,{style:{textAlign:"center"}},"Dont have an account ?"))))}var _=s.a.create({text:{fontSize:22,color:"green",margin:10},img:{width:200,height:200},box1:{alignItems:"center"},box2:{paddingHorizontal:40,justifyContent:"space-evenly",height:"50%"}}),K=n(10),X=n(176),Q=n(81);function V(e){var t=e.navigation,a=Object(l.useState)(""),r=i()(a,2),o=r[0],c=r[1],s=Object(l.useState)(""),f=i()(s,2),p=f[0],g=f[1],b=Object(l.useState)(""),h=i()(b,2),E=h[0],y=h[1],v=Object(l.useState)(""),x=i()(v,2),S=x[0],O=x[1],j=Object(l.useState)({url:""}),k=i()(j,2),P=k[0],A=(k[1],Object(l.useState)(!1)),T=i()(A,2),z=(T[0],T[1]),B=Object(l.useState)(!1),L=i()(B,2),H=L[0],N=L[1],R=Object(l.useState)(!1),M=i()(R,2),q=M[0],U=M[1],_=function(){var e;return C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(U(!0),o&&E&&p){t.next=4;break}return alert("please add all the field"),t.abrupt("return");case 4:return t.prev=4,t.next=7,C.a.awrap(w.auth.createUserWithEmailAndPassword(o,E));case 7:e=t.sent,w.db.collection("users").doc(e.user.uid).set({name:p,email:e.user.email,uid:e.user.uid,pic:P.url,status:"online"}),U(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),alert("something went wrong");case 15:if(!q){t.next=17;break}return t.abrupt("return",u.a.createElement(F.a,{size:"large",color:"#00ff00"}));case 17:case"end":return t.stop()}}),null,null,[[4,12]],Promise)};Object(l.useEffect)((function(){!function(){var e;C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"===K.a.OS){t.next=6;break}return t.next=3,C.a.awrap(X.b());case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]);return u.a.createElement(G.a,{behavior:"position"},u.a.createElement(d.a,{style:Y.box1},u.a.createElement(m.a,{style:Y.text},"Welcome to Whatsapp 5.0"),u.a.createElement(D.a,{style:Y.img,source:n(198)})),u.a.createElement(d.a,{style:Y.box2},!H&&u.a.createElement(u.a.Fragment,null,u.a.createElement(J.a,{label:"Email",value:o,onChangeText:function(e){return c(e)},mode:"outlined"}),u.a.createElement(J.a,{label:"password",mode:"outlined",value:E,onChangeText:function(e){return y(e)},secureTextEntry:!0})),H?u.a.createElement(u.a.Fragment,null,u.a.createElement(J.a,{label:"Name",value:p,onChangeText:function(e){return g(e)},mode:"outlined"}),u.a.createElement(I.a,{mode:"contained",onPress:function(){return function(){var e;return C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("funciano"),t.next=3,C.a.awrap(X.a({mediaTypes:Q.a.Images,allowsEditing:!0,aspect:[4,4],quality:1}));case 3:e=t.sent,console.log(e),e.cancelled||O(e.uri);case 6:case"end":return t.stop()}}),null,null,null,Promise)}()}},"select profile pic"),u.a.createElement(I.a,{mode:"contained",onPress:function(){return function(){var e,t,n;return C.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.a.awrap(new Promise((function(e,t){var n=new XMLHttpRequest;n.onload=function(){e(n.response)},n.onerror=function(){t(new TypeError("Network request failed"))},n.responseType="blob",n.open("GET",S,!0),n.send(null)})));case 2:e=a.sent,t=w.stores.ref().child((new Date).toISOString()),(n=t.put(e)).on(w.storis.TaskEvent.STATE_CHANGED,(function(){z(!0)}),(function(t){z(!1),console.log(t),e.close()}),(function(){n.snapshot.ref.getDownloadURL().then((function(e){return z(!1),console.log("download url: ",e),P.url=e,_(),e}))}));case 6:case"end":return a.stop()}}),null,null,null,Promise)}()}},"Signup")):u.a.createElement(I.a,{mode:"contained",onPress:function(){return N(!0)}},"Next"),u.a.createElement(W.a,{onPress:function(){return t.goBack()}},u.a.createElement(m.a,{style:{textAlign:"center"}},"Already have an account ?"))))}var Y=s.a.create({text:{fontSize:22,color:"green",margin:10},img:{width:200,height:200},box1:{alignItems:"center"},box2:{paddingHorizontal:40,justifyContent:"space-evenly",height:"50%"}}),Z=Object(g.a)(),$=function(){var e=Object(l.useState)(""),t=i()(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){var e=w.auth.onAuthStateChanged((function(e){e?(w.db.collection("users").doc(e.uid).update({status:"online"}),a(e)):a("")}));return function(){e()}}),[]),u.a.createElement(p.a,null,u.a.createElement(Z.Navigator,{screenOptions:{headerTintColor:"green"}},n?u.a.createElement(u.a.Fragment,null,u.a.createElement(Z.Screen,{name:"home",options:{title:"MssApp"}},(function(e){return u.a.createElement(M,o()({},e,{user:n}))})),u.a.createElement(Z.Screen,{name:"chat",options:function(e){var t=e.route;return{title:u.a.createElement(d.a,{style:ee.title},u.a.createElement(m.a,null,t.params.name),u.a.createElement(m.a,null,t.params.status)),headerRight:function(){return u.a.createElement(d.a,{style:ee.avatar},u.a.createElement(x.a,{rounded:!0,source:{uri:t.params.pic}}))}}}},(function(e){return u.a.createElement(T,o()({},e,{user:n}))})),u.a.createElement(Z.Screen,{name:"account"},(function(e){return u.a.createElement(B,o()({},e,{user:n}))}))):u.a.createElement(u.a.Fragment,null,u.a.createElement(Z.Screen,{name:"login",component:U,options:{headerShown:!1}}),u.a.createElement(Z.Screen,{name:"signup",component:V,options:{headerShown:!1}}))))},ee=s.a.create({container:{flex:1,backgroundColor:"white"},avatar:{marginRight:20},title:{alignItems:"center",justifyContent:"center"}}),te=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{barStyle:"light-content",backgroundColor:"green"}),u.a.createElement(d.a,{style:ee.container},u.a.createElement($,null)))};Object(a.a)(te)}},[[293,1,2]]]);
//# sourceMappingURL=app.221942ae.chunk.js.map