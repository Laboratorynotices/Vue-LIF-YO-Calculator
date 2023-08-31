import{_ as p,a as i,b as d,e as r,w as l,g as a,k as v,d as h,r as w,p as x,l as y,h as n,f as e,i as M,t as q,F as B}from"./index-52747561.js";const C={};function I(o,_){const c=i("v-card-text"),u=i("v-card");return d(),r(u,{class:"mb-6"},{default:l(()=>[a(c,null,{default:l(()=>[v(o.$slots,"default")]),_:3})]),_:3})}const s=p(C,[["render",I]]),t=o=>(x("data-v-e1439e29"),o=o(),y(),o),V=t(()=>n("h1",null,"Формат рецептов",-1)),W=t(()=>n("p",null," Чтобы этот калькулятор быстрее заработал, мне нужна ваша помощь, чтобы вы высылали мне рецепты производства. ",-1)),L=t(()=>n("p",null,[e(" Но описание этих рецептов должно следовать правилам. Все "),n("b",null,"названия в описании рецепта должны быть на английском языке"),e(", а следовательно запускаем игру на английском или пользуемся "),n("a",{href:"https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki",target:"_blank"},"https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki"),e(' для перевода, но учтите, что на сайте фандомпедии могут быть ошибки (не указаны веса для ингредиентов, либо даёт рецепт для MMO). А так же "блокнот", где мы будем описывать рецепт. ')],-1)),S=t(()=>n("h2",null,"Первый пример",-1)),$=t(()=>n("p",null," Находим рецепт, который ещё не описан, или в котором сделана ошибка, во втором случае указывайте это в сообщении. ",-1)),A=t(()=>n("p",null,[e(" Опишем рецепт "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Mortar_and_pestle",target:"_blank"},"ступки и пестика"),e(". ")],-1)),F=t(()=>n("p",null,[e(" В блокноте записываем категорию навыков, к которому принадлежит этот рецепт, и внешние фигурные скобки. А в этих фигурных скобках в атрибуте "),n("b",null,'"name"'),e(" английское название предмета: ")],-1)),R=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle"
}`,-1)),N=t(()=>n("p",null,' Дальше добавим в описание рецепта второй атрибут "materials" с квадратными скобками, внутри которых мы будем перечислять ингредиенты. ',-1)),T=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
  ]
}`,-1)),D=t(()=>n("p",null,[n("b",null,"Ступка и пестик"),e(" делаются из двух ингредиентов "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Rock",target:"_blank"},"камня"),e(" и "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Branch",target:"_blank"},"ветки"),e(". Добавим их по очереди. ")],-1)),E=t(()=>n("p",null,[e(" Начнём с "),n("b",null,"камня"),e(". Нужна 1 штука ("),n("i",null,"quantity"),e(") с влиянием на качество 30% ("),n("i",null,"weight"),e("). Записываем эти данные внутри новых фигурных скобок: ")],-1)),O=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    }
  ]
}`,-1)),U=t(()=>n("p",null,[e(" Добавим и "),n("b",null,"ветку"),e(". Нужна 1 штука ("),n("i",null,"quantity"),e(") с таким же влиянием на качество 30% ("),n("i",null,"weight"),e("): ")],-1)),j=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    },
    {
      "name": "Branch",
      "quantity": 1,
      "weight": 30
    }
  ]
}`,-1)),z=t(()=>n("p",null,[e(" На последок добавим два дополнительных атрибута. "),n("i",null,"src"),e(" со ссылкой на картинку на фандомпедии, а так же "),n("i",null,"minLevel"),e(" с уровнем навыка, когда этот рецепт в игре открывается. ")],-1)),G=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "src": "https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Mortar_and_pestle.png",
  "minLevel": 0,
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    },
    {
      "name": "Branch",
      "quantity": 1,
      "weight": 30
    }
  ]
}`,-1)),H=t(()=>n("h2",null,"Второй пример",-1)),J=t(()=>n("p",null,[e(" В качестве второго примера рассмотрим рецепт "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Cheese",target:"_blank"},"Сыра"),e(", для приготовления которого помимо одного "),n("b",null,"молока"),e(" с весом 60% в виде ингредиента нужны "),n("b",null,"инструмент"),e(" и "),n("b",null,'"верстак"'),e(". ")],-1)),K=t(()=>n("p",null,[e(" Для обозначения влияния на качество инструмента используем атрибут "),n("i",null,"toolWeight"),e(' (тут 10%), а для обозначения влияния "верстака" добавим другой атрибут '),n("i",null,"workbenchWeight"),e(" (тоже 10%). ")],-1)),P=t(()=>n("p",null," И получается: ",-1)),Q=t(()=>n("pre",null,`Кулинария
{
  "name": "Cheese",
  "src": "static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/a5/Cheese.png",
  "minLevel": 0,
  "materials": [
    {
      "name": "Milk",
      "quantity": 1,
      "weight": 60
    }
  ],
  "toolWeight": 10,
  "workbenchWeight": 10
}`,-1)),X=h({__name:"AboutInstruction",setup(o){const _=w(["last"]);return(c,u)=>{const m=i("v-expansion-panel-title"),f=i("v-expansion-panel-text"),k=i("v-expansion-panel"),g=i("v-expansion-panels");return d(),r(g,{modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=b=>_.value=b),multiple:""},{default:l(()=>[a(k,{value:"last"},{default:l(()=>[a(m,null,{default:l(()=>[V]),_:1}),a(f,null,{default:l(()=>[W,L,S,$,A,F,a(s,null,{default:l(()=>[R]),_:1}),N,a(s,null,{default:l(()=>[T]),_:1}),D,E,a(s,null,{default:l(()=>[O]),_:1}),U,a(s,null,{default:l(()=>[j]),_:1}),z,a(s,null,{default:l(()=>[G]),_:1}),H,J,K,P,a(s,null,{default:l(()=>[Q]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});const Y=p(X,[["__scopeId","data-v-e1439e29"]]),Z={class:"mb-6"},en=h({__name:"AboutView",setup(o){return(_,c)=>(d(),M(B,null,[n("h1",Z,q(_.$t("This will not be translated")),1),a(Y)],64))}});export{en as default};
