import{_ as h,r as _,o as n,c as a,a as t,b as l,w as g,d as p,n as F,e as z,f as B,k as x,p as $,g as k,F as y,h as T,l as E,t as w,i as L,j as b}from"./index-f73cc916.js";import{B as N,F as V}from"./BackToTop-d2799ba5.js";const D={name:"Menu",data(){return{screenWidth:screen.width,mobileMenu:!1,menuIcon:"fa-solid fa-bars"}},mounted(){this.onScreenResize()},methods:{onScreenResize(){window.addEventListener("resize",(function(){this.screenWidth=screen.width}).bind(this))},showMenu(){this.mobileMenu=!this.mobileMenu,this.menuIcon=this.menuIcon.includes("bars")?"fa-solid fa-x":"fa-solid fa-bars"},scrollToTarget(s){const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"})}}},H={class:"store-menu"},P={class:"logo"},U={key:0},R={key:2,class:"menu__links-mobile"};function j(s,e,u,c,r,i){const d=_("router-link");return n(),a("nav",H,[t("span",P,[l(d,{to:"/workout"},{default:g(()=>[p("workout")]),_:1})]),r.screenWidth>700?(n(),a("ul",U,[t("li",null,[t("a",{onClick:e[0]||(e[0]=o=>i.scrollToTarget("start"))},"С ЧЕГО НАЧАТЬ?")]),t("li",null,[t("a",{onClick:e[1]||(e[1]=o=>i.scrollToTarget("training"))},"ТРЕНИРОВКИ")]),t("li",null,[t("a",{onClick:e[2]||(e[2]=o=>i.scrollToTarget("prices"))},"ЦЕНЫ")])])):(n(),a("i",{key:1,class:F(r.menuIcon),onClick:e[3]||(e[3]=(...o)=>i.showMenu&&i.showMenu(...o))},null,2)),r.screenWidth<=700&&r.mobileMenu?(n(),a("ul",R,[t("li",null,[t("a",{onClick:e[4]||(e[4]=o=>i.scrollToTarget("start"))},"С ЧЕГО НАЧАТЬ?")]),t("li",null,[t("a",{onClick:e[5]||(e[5]=o=>i.scrollToTarget("training"))},"ТРЕНИРОВКИ")]),t("li",null,[t("a",{onClick:e[6]||(e[6]=o=>i.scrollToTarget("prices"))},"ЦЕНЫ")])])):z("",!0)])}const G=h(D,[["render",j],["__scopeId","data-v-a9399b35"]]),Q="/workout/assets/nike-a8ee31cd.svg",X="/workout/assets/buzzfeed-ce34dde3.svg",A="/workout/assets/espirit-501d54fa.svg",J="/workout/assets/national-geographic-5ec54538.svg",K="/workout/assets/dw-c301fd59.svg",O="/workout/assets/huffpost-e00671a6.svg",Y="/workout/assets/lead-6aba9263.png";const Z={name:"Header",setup(){return{redirectTo:e=>{B.push(e)}}}},S=s=>($("data-v-cf6a99ad"),s=s(),k(),s),tt={class:"header-store"},et={class:"lead__store"},st=S(()=>t("h1",null,[p("Cardio"),t("br"),p("Exercise")],-1)),ot=S(()=>t("p",null,"Огромный выбор материалов о здоровье и фитнесе, полезных рецептов и историй преображения, которые помогут вам привести себя в форму и оставаться в форме!",-1)),it=x('<div class="images" data-v-cf6a99ad><img src="'+Q+'" alt="Nike" data-v-cf6a99ad><img src="'+X+'" alt="BuzzFeed" data-v-cf6a99ad><img src="'+A+'" alt="Esprit" data-v-cf6a99ad><img src="'+J+'" alt="National Geographic" data-v-cf6a99ad><img src="'+K+'" alt="DW Fitness First" data-v-cf6a99ad><img src="'+O+'" alt="Huff post" data-v-cf6a99ad></div>',1),nt=x('<div data-v-cf6a99ad><img src="'+Y+'" alt="Workout" data-v-cf6a99ad><div class="lead__info__store" data-v-cf6a99ad><div class="lead__info__km" data-v-cf6a99ad><i class="fa-solid fa-person-running" data-v-cf6a99ad></i><span data-v-cf6a99ad>4,95</span> km </div><div class="lead__info__training" data-v-cf6a99ad><div data-v-cf6a99ad><i class="fa-solid fa-play" data-v-cf6a99ad></i></div><div data-v-cf6a99ad><span data-v-cf6a99ad>350+</span> Тренировок </div></div><div class="lead__info__videos" data-v-cf6a99ad><span data-v-cf6a99ad>500+</span> Бесплатных видео </div></div></div>',1);function at(s,e,u,c,r,i){return n(),a("div",tt,[t("div",et,[t("div",null,[st,ot,t("button",{onClick:e[0]||(e[0]=d=>c.redirectTo("/workout/log-in"))},"Присоединяйтесь"),it]),nt])])}const dt=h(Z,[["render",at],["__scopeId","data-v-cf6a99ad"]]);const rt={name:"Slider",data(){return{items:[{id:1,header:"Видео тренировки"},{id:2,header:"Программа курса"},{id:3,header:"Тарифы"},{id:4,header:"Полный доступ"},{id:5,header:"Лучшая команда"},{id:6,header:"Хорошие тренера"}],translate:0,itemWidth:0}},mounted(){this.itemWidth=document.querySelector(".item").offsetWidth},methods:{moveSlider(s){let e=document.querySelector(".container").clientWidth,u=Math.floor(e/(this.itemWidth+30)),c=-((this.itemWidth+30)*(this.items.length-u));(window.innerWidth>1500||window.innerWidth<=320)&&(c=-((this.itemWidth+30)*(this.items.length-1-u))),s==="next"&&(this.translate-=this.itemWidth+30),s==="back"&&(this.translate+=this.itemWidth+30),this.translate>=0?this.translate=0:this.translate<=c&&(this.translate=c)}}},v=s=>($("data-v-39393285"),s=s(),k(),s),lt={class:"slider"},ct=v(()=>t("h2",null,"Не знаете с чего начать?",-1)),_t=v(()=>t("p",null,"Программы предлагают ежедневные рекомендации в интерактивном календаре",-1)),ut=v(()=>t("div",null,[t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit"),t("a",{href:""},[t("i",{class:"fa-solid fa-arrow-right"})])],-1)),mt={class:"buttons"},pt=v(()=>t("i",{class:"fa-solid fa-arrow-right fa-rotate-180"},null,-1)),ht=[pt],vt=v(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1)),ft=[vt];function gt(s,e,u,c,r,i){return n(),a("div",lt,[ct,_t,t("div",{class:"blocks",style:E("transform: translateX("+r.translate+"px)")},[(n(!0),a(y,null,T(r.items,d=>(n(),a("div",{class:"item",key:d.id},[t("h3",null,w(d.header),1),ut]))),128))],4),t("div",mt,[t("div",{class:"back",onClick:e[0]||(e[0]=d=>i.moveSlider("back"))},ht),t("div",{class:"next",onClick:e[1]||(e[1]=d=>i.moveSlider("next"))},ft)])])}const $t=h(rt,[["render",gt],["__scopeId","data-v-39393285"]]),kt="/workout/assets/content1-2d8dcce2.png",wt="/workout/assets/content2-d5708e25.png";const bt={name:"Content"},m=s=>($("data-v-d008223a"),s=s(),k(),s),xt={class:"store-content"},yt={class:"block reverse"},Tt={class:"image",initial:{opacity:0,x:100},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:250,damping:50,mass:.5}}},St=m(()=>t("img",{src:kt,alt:"photo"},null,-1)),Ct=[St],Wt={class:"info"},It=m(()=>t("h3",null,"Тренируйтесь дома",-1)),Mt=m(()=>t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",-1)),qt=m(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1)),Ft={class:"block"},zt={class:"image",initial:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:250,damping:50,mass:.5}}},Bt=m(()=>t("img",{src:wt,alt:"photo"},null,-1)),Et=[Bt],Lt={class:"info"},Nt=m(()=>t("h3",null,"Получите еще больше полезного контента",-1)),Vt=m(()=>t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",-1)),Dt=m(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1));function Ht(s,e,u,c,r,i){const d=_("router-link"),o=L("motion");return n(),a("div",xt,[t("div",yt,[b((n(),a("div",Tt,Ct)),[[o]]),t("div",Wt,[It,Mt,t("span",null,[l(d,{to:"/workout/training-plans"},{default:g(()=>[p(" Больше"),qt]),_:1})])])]),t("div",Ft,[b((n(),a("div",zt,Et)),[[o]]),t("div",Lt,[Nt,Vt,t("span",null,[l(d,{to:"/workout/training-plans"},{default:g(()=>[p(" Больше"),Dt]),_:1})])])])])}const Pt=h(bt,[["render",Ht],["__scopeId","data-v-d008223a"]]);const Ut={name:"Prices",data(){return{items:[{id:1,header:"Free",price:0},{id:2,header:"Plus +",price:10}]}}},f=s=>($("data-v-5e0c09bd"),s=s(),k(),s),Rt={class:"prices"},jt=f(()=>t("h2",null,"Тарифы",-1)),Gt={class:"blocks"},Qt={class:"header"},Xt={class:"price"},At=f(()=>t("span",null,"$",-1)),Jt=f(()=>t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",-1)),Kt=f(()=>t("ul",null,[t("li",null,"Lorem ipsum dolor sit amet"),t("li",null,"Quis nostrud exercitation ullamco"),t("li",null,"Exercitation ullamco"),t("li",null,"Lorem ipsum dolor sit amet"),t("li",null,"Excepteur sint occaecat excepteur sint occaecat"),t("li",null,"Sed ut perspiciatis unde omnis")],-1)),Ot=f(()=>t("i",{class:"fa-solid fa-arrow-right"},null,-1));function Yt(s,e,u,c,r,i){const d=_("router-link");return n(),a("div",Rt,[jt,t("div",Gt,[(n(!0),a(y,null,T(r.items,o=>(n(),a("div",{class:"item",key:o.id},[t("div",Qt,[t("h3",null,w(o.header),1),t("span",Xt,[p(w(o.price)+" ",1),At])]),Jt,Kt,t("span",null,[l(d,{to:"/workout/log-in"},{default:g(()=>[p("Больше "),Ot]),_:1})])]))),128))])])}const Zt=h(Ut,[["render",Yt],["__scopeId","data-v-5e0c09bd"]]),te={name:"Store",components:{BackToTop:N,Prices:Zt,Content:Pt,Slider:$t,Header:dt,Footer:V,Menu:G},mounted(){document.body.style.overflow="auto"}};function ee(s,e,u,c,r,i){const d=_("Menu"),o=_("Header"),C=_("Slider"),W=_("Content"),I=_("Prices"),M=_("Footer"),q=_("BackToTop");return n(),a("div",null,[l(d),l(o),l(C,{id:"start"}),l(W,{id:"training"}),l(I,{id:"prices"}),l(M),l(q)])}const ie=h(te,[["render",ee]]);export{ie as default};
