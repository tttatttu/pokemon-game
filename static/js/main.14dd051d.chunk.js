(this["webpackJsonppakemon-game"]=this["webpackJsonppakemon-game"]||[]).push([[0],{22:function(e,t,a){e.exports={root:"style_root__3EDU_","stars-move-in":"style_stars-move-in__3cgo4",forest:"style_forest__2l_b9","forest-move-in":"style_forest-move-in__qZA3m",silhouette:"style_silhouette__13n9s","silhouette-move-in":"style_silhouette-move-in__3Avbb",moon:"style_moon__2fHAp","moon-move-in":"style_moon-move-in__j_efo",container:"style_container__3TbXE","text-fade-in":"style_text-fade-in__32u_A",button:"style_button__5uRkk"}},23:function(e,t,a){e.exports={navbar:"style_navbar__36EK2",bgActive:"style_bgActive__2iQZg",navWrapper:"style_navWrapper__2Hp2P",brand:"style_brand__3WcoB",menuButton:"style_menuButton__21VS2",active:"style_active__I46oS"}},27:function(e,t,a){e.exports={root:"style_root__3iurA",wrapper:"style_wrapper__NNZoX",title:"style_title__3q_Ze",separator:"style_separator__3Iwm3",subtitle:"style_subtitle__3TSsQ",desc:"style_desc__14pKG",full:"style_full__3XGPX"}},28:function(e,t,a){e.exports={root:"style_root__31q2h",board:"style_board__242EF",boardPlate:"style_boardPlate__sSFIh",disabled:"style_disabled__1ZLHw",playerOne:"style_playerOne__3vi__",playerTwo:"style_playerTwo__184oU"}},29:function(e,t,a){e.exports={flex:"style_flex__2fXYi",button:"style_button__3EE-R",card:"style_card__14Ohd"}},30:function(e,t,a){e.exports={menuContainer:"style_menuContainer__2u9xj",overlay:"style_overlay__3fIpH",active:"style_active__2B_-F","overlay-slide-in":"style_overlay-slide-in__1MPBY","overlay-slide-out":"style_overlay-slide-out__1TXr7",deactive:"style_deactive__1U690","fade-out":"style_fade-out__3Ca7R","fade-in":"style_fade-in__3e8E-","slide-out":"style_slide-out__2OLKY","slide-in":"style_slide-in__2kAJO","menu-container":"style_menu-container__1TnB6"}},32:function(e,t,a){e.exports={flex:"style_flex__19QqC",button:"style_button__2RFVe",card:"style_card__3I4Ms"}},42:function(e,t,a){e.exports={cardBoard:"style_cardBoard__Ajxrq",selected:"style_selected__3L2yI"}},43:function(e,t,a){e.exports={wrap:"style_wrap__2ilXy",isHomePage:"style_isHomePage__39VeD"}},47:function(e,t,a){e.exports={wrapper:"style_wrapper__2bQcZ"}},53:function(e,t,a){},6:function(e,t,a){e.exports={pokemonCard:"style_pokemonCard__8ZvSx",active:"style_active__1Ws21",selected:"style_selected__1WY-R",cardFront:"style_cardFront__2YrLu",cardBack:"style_cardBack__13iOl",wrap:"style_wrap__3Pchb",front:"style_front__37dBN",back:"style_back__3vnDg",pokemon:"style_pokemon__3XkM5",fire:"style_fire__4Ewzg",grass:"style_grass__1_-6_",electric:"style_electric__2vMHc",water:"style_water__3OXYO",ground:"style_ground__2O8F0",rock:"style_rock__368z_",fairy:"style_fairy__2utDC",poison:"style_poison__3CkeB",bug:"style_bug__3SoKj",dragon:"style_dragon__1ndfA",psychic:"style_psychic__1G8FQ",flying:"style_flying__1KRo4",fighting:"style_fighting__34PS_",normal:"style_normal__1U4li",red:"style_red___jwBy",blue:"style_blue__2CzqT",imgContainer:"style_imgContainer__A5Yeq",info:"style_info__2Iru8",number:"style_number__36aC9",name:"style_name__1PM2A",values:"style_values__2YYnw",count:"style_count__3Dflr",top:"style_top__mOtmU",left:"style_left__1Rk5N",right:"style_right__pqciI",bottom:"style_bottom__17ped",flipFront:"style_flipFront__9tfbt"}},62:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a.n(c),r=a(33),o=a.n(r),i=(a(53),a(12)),l=a(18),d=a(26),u=a(4),b=Object(d.b)({name:"counter",initialState:{value:0},reducers:{plusAction:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{value:e.value+t.payload})},minusAction:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{value:e.value-t.payload})}}}),j=b.actions,p=(j.plusAction,j.minusAction,b.reducer),_=a(17),h=a.n(_),m=a(20),O=a(46),f=a(39);a(58);f.a.initializeApp({apiKey:"AIzaSyDRWQmSXQ5N8bQjUygBrOmNstP5AIof7Ws",authDomain:"pocemon-game.firebaseapp.com",databaseURL:"https://pocemon-game-default-rtdb.firebaseio.com",projectId:"pocemon-game",storageBucket:"pocemon-game.appspot.com",messagingSenderId:"627601982488",appId:"1:627601982488:web:403b35dd3df4ab96002f6d"});var y=new function e(){var t=this;Object(O.a)(this,e),this.getPokemonSoket=function(e){t.database.ref("pokemons").on("value",(function(t){e(t.val())}))},this.offPokemonSoket=function(){t.database.ref("pokemons").off()},this.getPokemonsOnce=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.database.ref("pokemons").once("value").then((function(e){return e.val()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.postPokemon=function(e,a){t.database.ref("pokemons/".concat(e)).set(a)},this.addPokemon=function(e,a){var n=t.database.ref().child("pokemons").push().key;t.database.ref("pokemons/"+n).set(e).then((function(){return a&&a()}))},this.fire=f.a,this.database=this.fire.database()},x=Object(d.b)({name:"pokemons",initialState:{isLoading:!1,data:{},error:null},reducers:{fetchPokemons:function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0})},fetchPokemonsResolve:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,data:t.payload})},fetchPokemonsReject:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,data:{},error:t.payload})}}}),v=x.actions,g=v.fetchPokemons,k=v.fetchPokemonsResolve,N=(v.fetchPokemonsReject,function(e){return e.pokemons.isLoading}),C=function(e){return e.pokemons.data},w=x.reducer,S=Object(d.a)({reducer:{counter:p,pokemons:w}}),A=a(9),P=a(8),B=a.p+"static/media/bg1.339e2b02.jpg",I=a(22),T=a.n(I),E=function(e){var t=e.title,a=e.desc,c=(e.onClickButton,Object(P.g)());return Object(n.jsxs)("header",{className:T.a.root,children:[Object(n.jsx)("div",{className:T.a.forest}),Object(n.jsx)("div",{className:T.a.silhouette}),Object(n.jsx)("div",{className:T.a.moon}),Object(n.jsxs)("div",{className:T.a.container,children:[Object(n.jsx)("h1",{children:t}),Object(n.jsx)("p",{children:a}),Object(n.jsx)("button",{className:T.a.button,onClick:function(){c.push("/game")},children:"Start Game"})]})]})},F=a(27),R=a.n(F),L=a(10),H=a.n(L),G=function(e){var t={};return e.urlBg&&(t.backgroundImage="url(".concat(e.urlBg,")")),e.colorBg&&(t.backgroundColor=e.colorBg),Object(n.jsx)("section",{className:R.a.root,id:e.id,style:t,children:Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("article",{children:[Object(n.jsxs)("div",{className:R.a.title,children:[Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("span",{className:R.a.separator})]}),Object(n.jsx)("div",{className:H()(R.a.desc,R.a.full),children:e.children})]})})})},M=a(7),W=a(32),X=a.n(W),D=a(6),Y=a.n(D),q=function(e){var t,a=e.className,c=e.name,s=e.img,r=e.id,o=e.type,i=e.values,l=e.isActive,d=e.onClickCard,u=e.minimize,b=e.isSelected,j=e.possession;return Object(n.jsxs)("div",{onClick:function(){d&&d(r)},className:H()(a,Y.a.pokemonCard,(t={},Object(A.a)(t,Y.a.active,l),Object(A.a)(t,Y.a.selected,b),t)),children:[Object(n.jsx)("div",{className:Y.a.cardFront,children:Object(n.jsx)("div",{className:H()(Y.a.wrap,Y.a.front),children:Object(n.jsxs)("div",{className:H()(Y.a.pokemon,Y.a[o],Y.a[j]),children:[Object(n.jsxs)("div",{className:Y.a.values,children:[Object(n.jsx)("div",{className:H()(Y.a.count,Y.a.top),children:i.top}),Object(n.jsx)("div",{className:H()(Y.a.count,Y.a.right),children:i.right}),Object(n.jsx)("div",{className:H()(Y.a.count,Y.a.bottom),children:i.bottom}),Object(n.jsx)("div",{className:H()(Y.a.count,Y.a.left),children:i.left})]}),Object(n.jsx)("div",{className:Y.a.imgContainer,children:Object(n.jsx)("img",{src:s,alt:c})}),!u&&Object(n.jsxs)("div",{className:Y.a.info,children:[Object(n.jsxs)("span",{className:Y.a.number,children:["#",r]}),Object(n.jsx)("h3",{className:Y.a.name,children:c}),Object(n.jsxs)("small",{className:Y.a.type,children:["Type: ",Object(n.jsx)("span",{children:o})]})]})]})})}),Object(n.jsx)("div",{className:Y.a.cardBack,children:Object(n.jsx)("div",{className:H()(Y.a.wrap,Y.a.back)})})]})},z=s.a.createContext(null),Q=s.a.createContext(null),U=function(){var e=Object(c.useContext)(Q),t=(Object(l.c)(N),Object(l.c)(C)),a=Object(l.b)(),s=Object(P.g)(),r=Object(c.useState)(t),o=Object(M.a)(r,2),i=o[0],d=o[1];Object(c.useEffect)((function(){a(function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.next=3,y.getPokemonsOnce();case 3:a=e.sent,t(k(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useEffect)((function(){d(t)}),[t]);return Object(n.jsxs)(n.Fragment,{children:["/game"===s.location.pathname?Object(n.jsx)("button",{className:X.a.button,onClick:function(){s.push("/game/board")},disabled:Object.keys(e.pokemons).length<5,children:"Start Game"}):null,Object(n.jsx)("div",{className:X.a.flex,children:Object.entries(i).map((function(t){var a=Object(M.a)(t,2),c=a[0],s=a[1],r=s.name,o=s.img,l=s.id,b=s.type,j=s.values,p=s.selected;return Object(n.jsx)(q,{className:X.a.card,name:r,img:o,id:l,type:b,values:j,isActive:!0,isSelected:p,onClickCard:function(){(Object.keys(e.pokemons).length<5||p)&&function(t){var a=Object(u.a)({},i[t]);e.onSelectedPokemons(t,a),d((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(A.a)({},t,Object(u.a)(Object(u.a)({},e[t]),{},{selected:!e[t].selected})))}))}(c)}},c)}))}),"/game"===s.location.pathname?Object(n.jsx)("button",{onClick:function(){s.push("/")},className:X.a.button,children:"Go HOME"}):null]})},K=a(28),Z=a.n(K),J=a(42),V=a.n(J),$=function(e){var t=e.player,a=e.cards,s=e.onClickCard,r=Object(c.useState)(null),o=Object(M.a)(r,2),i=o[0],l=o[1];return Object(n.jsx)(n.Fragment,{children:a.map((function(e){return Object(n.jsx)("div",{className:H()(V.a.cardBoard,Object(A.a)({},V.a.selected,i===e.id)),onClick:function(){l(e.id),s&&s(Object(u.a)({player:t},e))},children:Object(n.jsx)(q,{name:e.name,img:e.img,id:e.id,type:e.type,values:e.values,minimize:!0,isActive:!0,isSelected:e.selected},e.id)},e.id)}))})},ee=function(){var e=Object(c.useContext)(Q),t=e.pokemons,a=e.onGetCardsPlayer,s=Object(c.useState)([]),r=Object(M.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)((function(){return Object.values(t).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{possession:"blue"})}))})),d=Object(M.a)(l,2),b=d[0],j=d[1],p=Object(c.useState)([]),_=Object(M.a)(p,2),O=_[0],f=_[1],y=Object(c.useState)(null),x=Object(M.a)(y,2),v=x[0],g=x[1],k=Object(c.useState)(0),N=Object(M.a)(k,2),C=N[0],w=N[1],S=Object(P.g)();Object(c.useEffect)(Object(m.a)(h.a.mark((function e(){var t,n,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reactmarathon-api.netlify.app/api/board");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,i(n.data),e.next=9,fetch("https://reactmarathon-api.netlify.app/api/create-player");case 9:return c=e.sent,e.next=12,c.json();case 12:s=e.sent,a(b,s.data),f((function(){return s.data.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{possession:"red"})}))}));case 15:case"end":return e.stop()}}),e)}))),[]),0===Object.keys(t).length&&S.replace("/game");var A=function(){var e=Object(m.a)(h.a.mark((function e(t){var a,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=12;break}return a={position:t,card:v,board:o},e.next=4,fetch("https://reactmarathon-api.netlify.app/api/players-turn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,1===v.player&&j((function(e){return e.filter((function(e){return e.id!==v.id}))})),2===v.player&&f((function(e){return e.filter((function(e){return e.id!==v.id}))})),i(c.data),w((function(e){return e+1}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(9===C){var e=function(e,t,a){var n=t.length,c=a.length;return e.forEach((function(e){"red"===e.card.position&&n++,"blue"===e.card.position&&c++})),[n,c]}(o,b,O),t=Object(M.a)(e,2),a=t[0],n=t[1];return a>n?alert("WIN"):a<n?alert("LOSE"):alert("DRAW"),S.push("/game/finish")}}),[C]),Object(n.jsxs)("div",{className:Z.a.root,children:[Object(n.jsx)("div",{className:Z.a.playerOne,children:Object(n.jsx)($,{player:1,cards:b,onClickCard:function(e){return g(e)}})}),Object(n.jsx)("div",{className:Z.a.board,children:o.map((function(e){return Object(n.jsx)("div",{className:Z.a.boardPlate,onClick:function(){return!e.card&&A(e.position)},children:e.card&&Object(n.jsx)(q,Object(u.a)(Object(u.a)({},e.card),{},{isActive:!0,minimize:!0}))},e.position)}))}),Object(n.jsx)("div",{className:Z.a.playerTwo,children:Object(n.jsx)($,{player:2,cards:O,onClickCard:function(e){return g(e)}})})]})},te=a(29),ae=a.n(te),ne=function(){var e=Object(c.useContext)(Q),t=e.player1,a=e.player2,s=e.onSelectedPokemons,r=(Object(c.useContext)(z),Object(P.g)()),o=Object(c.useState)(a),i=Object(M.a)(o,2),l=i[0],d=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:ae.a.flex,children:Object.entries(t).map((function(e){var t=Object(M.a)(e,2),a=t[0],c=t[1],s=c.name,r=c.img,o=c.id,i=c.type,l=c.values,d=c.selected;return Object(n.jsx)(q,{className:ae.a.card,name:s,img:r,id:o,type:i,values:l,isActive:!0,isSelected:d,onClickCard:function(){console.log("\u041c\u043e\u0438 \u0433\u0435\u0440\u043e\u0438!")}},a)}))}),Object(n.jsx)("button",{className:ae.a.button,onClick:function(){r.push("/game")},children:"END GAME"}),Object(n.jsx)("div",{className:ae.a.flex,children:Object.entries(a).map((function(e){var t=Object(M.a)(e,2),a=t[0],c=t[1],r=c.name,o=c.img,i=c.id,b=c.type,j=c.values,p=c.selected;return Object(n.jsx)(q,{className:ae.a.card,name:r,img:o,id:i,type:b,values:j,isActive:!0,isSelected:p,onClickCard:function(){!function(e){var t=Object(u.a)({},l[e]);s(e,t),d((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(A.a)({},e,Object(u.a)(Object(u.a)({},t[e]),{},{selected:!t[e].selected})))})),console.log(l[e])}(a)}},a)}))})]})},ce=function(){var e=Object(P.i)(),t=Object(c.useState)({}),a=Object(M.a)(t,2),s=a[0],r=a[1],o=Object(c.useState)({}),i=Object(M.a)(o,2),l=i[0],d=i[1],b=Object(c.useState)({}),j=Object(M.a)(b,2),p=j[0],_=j[1];return Object(n.jsx)(Q.Provider,{value:{pokemons:s,onSelectedPokemons:function(e,t){r((function(a){if(a[e]){var n=Object(u.a)({},a);return delete n[e],n}return Object(u.a)(Object(u.a)({},a),{},Object(A.a)({},e,t))}))},onGetCardsPlayer:function(e,t){d(e),_(t)},player1:l,player2:p},children:Object(n.jsxs)(P.d,{children:[Object(n.jsx)(P.b,{path:"".concat(e.path,"/"),exact:!0,component:U}),Object(n.jsx)(P.b,{path:"".concat(e.path,"/board"),component:ee}),Object(n.jsx)(P.b,{path:"".concat(e.path,"/finish"),component:ne})]})})},se=function(e){var t=e.onChangePage;return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{title:"Pokemon game",desc:"pause, strain your brain",onClickButton:function(e){console.log("<HomePage />"),t&&t(e)}}),Object(n.jsxs)(G,{id:1,title:"Layout1",desc:"test1",urlBg:B,colorBg:"",children:[Object(n.jsx)("p",{children:'In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.'}),Object(n.jsx)("p",{children:"Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue."}),Object(n.jsxs)("p",{children:["To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead."," "]})]}),Object(n.jsx)(G,{id:2,title:"Layout2",desc:"test3",urlBg:"",colorBg:"#f2ef94",children:Object(n.jsx)(ce,{})}),Object(n.jsxs)(G,{id:3,title:"Layout3",desc:"test3",urlBg:B,colorBg:"",children:[Object(n.jsx)("p",{children:'In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the opponent\'s cards by turning them into the player\'s own color of red or blue.'}),Object(n.jsxs)("p",{children:["To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead."," "]})]})]})},re=a(30),oe=a.n(re),ie=[{title:"HOME",to:"/"},{title:"GAME",to:"/game"},{title:"ABOUT",to:"/about"},{title:"CONTACT",to:"/contact"}],le=function(e){var t,a=e.isOpen,c=e.onClickMenu,s=function(){c()};return Object(n.jsxs)("div",{className:H()(oe.a.menuContainer,(t={},Object(A.a)(t,oe.a.active,!0===a),Object(A.a)(t,oe.a.deactive,!1===a),t)),children:[Object(n.jsx)("div",{className:oe.a.overlay}),Object(n.jsx)("div",{className:oe.a.menuItems,children:Object(n.jsx)("ul",{children:ie.map((function(e,t){var a=e.title,c=e.to;return Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:c,onClick:s,children:a})},t)}))})})]})},de=a(23),ue=a.n(de),be=function(e){var t=e.onClickHamburg,a=e.isOpen,c=e.bgActive,s=void 0!==c&&c;return Object(n.jsx)("nav",{id:ue.a.navbar,className:H()(Object(A.a)({},ue.a.bgActive,s)),children:Object(n.jsxs)("div",{className:ue.a.navWrapper,children:[Object(n.jsx)("p",{className:ue.a.brand,children:"LOGO"}),Object(n.jsx)("div",{className:H()(ue.a.menuButton,Object(A.a)({},ue.a.active,a)),onClick:t,children:Object(n.jsx)("span",{})})]})})},je=function(e){var t=e.bgActive,a=Object(c.useState)(null),s=Object(M.a)(a,2),r=s[0],o=s[1],i=function(){o((function(e){return!e}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(le,{onClickMenu:i,isOpen:r}),Object(n.jsx)(be,{onClickHamburg:i,isOpen:r,bgActive:t})]})},pe=a(47),_e=a.n(pe),he=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:_e.a.wrapper,children:[Object(n.jsx)("h3",{children:"THANKS FOR VISITING"}),Object(n.jsx)("p",{children:"\xa9 2021 #ReactMarathon."})]})})},me=a(43),Oe=a.n(me),fe=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:" This is AboutPage "}),Object(n.jsx)("button",{onClick:function(){},children:"Change Theme"})]})},ye=function(){return Object(n.jsx)("h1",{children:" This is ContactPage "})},xe=function(){var e=Object(P.h)(),t="/"===e.pathname||"/game/board"===e.pathname||"/pokemon-game"===e.pathname;return Object(n.jsx)(z.Provider,{value:y,children:Object(n.jsxs)(P.d,{children:[Object(n.jsx)(P.b,{path:"/404",render:function(){return Object(n.jsx)("h1",{children:" 404 Not Found"})}}),Object(n.jsx)(P.b,{children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(je,{bgActive:!t}),Object(n.jsx)("div",{className:H()(Oe.a.wrap,Object(A.a)({},Oe.a.isHomePage,t)),children:Object(n.jsxs)(P.d,{children:[Object(n.jsx)(P.b,{path:"/",exact:!0,component:se}),Object(n.jsx)(P.b,{path:"/game",component:ce}),Object(n.jsx)(P.b,{path:"/about",component:fe}),Object(n.jsx)(P.b,{path:"/contact",component:ye}),Object(n.jsx)(P.b,{path:"/pokemon-game",component:se}),Object(n.jsx)(P.b,{path:"/about",render:function(){return Object(n.jsx)("h1",{children:" This is page About"})}}),Object(n.jsx)(P.b,{render:function(){P.a}})]})}),Object(n.jsx)(he,{})]})})]})})};o.a.render(Object(n.jsx)(l.a,{store:S,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(xe,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.14dd051d.chunk.js.map