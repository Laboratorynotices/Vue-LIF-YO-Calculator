import{_ as r,a as o,b as p,e as f,w as l,g as a,l as x,f as e,h as n,d as h,r as b,p as w,m as y,i as M,t as $,F as q}from"./index-10ccf20c.js";const B={};function I(s,_){const c=o("v-card-text"),i=o("v-card");return p(),f(i,{class:"mb-6"},{default:l(()=>[a(c,null,{default:l(()=>[x(s.$slots,"default")]),_:3})]),_:3})}const u=r(B,[["render",I]]),C={},V=n("h1",null,"Изображения",-1),W=n("a",{href:"https://lifeisfeudal.fandom.com",target:"_blank"},"https://lifeisfeudal.fandom.com/",-1);function A(s,_){const c=o("v-expansion-panel-title"),i=o("v-expansion-panel-text"),d=o("v-expansion-panel");return p(),f(d,{value:"1"},{default:l(()=>[a(c,null,{default:l(()=>[V]),_:1}),a(i,null,{default:l(()=>[e(" Изображения были взяты с сайта "),W,e(". ")]),_:1})]),_:1})}const L=r(C,[["render",A]]),t=s=>(w("data-v-ff938934"),s=s(),y(),s),S=t(()=>n("h1",null,"Формат рецептов",-1)),F=t(()=>n("p",null," Чтобы этот калькулятор быстрее заработал, мне нужна ваша помощь, чтобы вы высылали мне рецепты производства. ",-1)),R=t(()=>n("p",null,[e(" Но описание этих рецептов должно следовать правилам. Все "),n("b",null,"названия в описании рецепта должны быть на английском языке"),e(", а следовательно запускаем игру на английском или пользуемся "),n("a",{href:"https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki",target:"_blank"},"https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki"),e(' для перевода, но учтите, что на сайте фандомпедии могут быть ошибки (не указаны веса для ингредиентов, либо даёт рецепт для MMO). А так же "блокнот", где мы будем описывать рецепт. ')],-1)),N=t(()=>n("h2",null,"Первый пример",-1)),T=t(()=>n("p",null," Находим рецепт, который ещё не описан, или в котором сделана ошибка, во втором случае указывайте это в сообщении. ",-1)),D=t(()=>n("p",null,[e(" Опишем рецепт "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Mortar_and_pestle",target:"_blank"},"ступки и пестика"),e(". ")],-1)),E=t(()=>n("p",null,[e(" В блокноте записываем категорию навыков, к которому принадлежит этот рецепт, и внешние фигурные скобки. А в этих фигурных скобках в атрибуте "),n("b",null,'"name"'),e(" английское название предмета: ")],-1)),O=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle"
}`,-1)),U=t(()=>n("p",null,' Дальше добавим в описание рецепта второй атрибут "materials" с квадратными скобками, внутри которых мы будем перечислять ингредиенты. ',-1)),j=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
  ]
}`,-1)),z=t(()=>n("p",null,[n("b",null,"Ступка и пестик"),e(" делаются из двух ингредиентов "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Rock",target:"_blank"},"камня"),e(" и "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Branch",target:"_blank"},"ветки"),e(". Добавим их по очереди. ")],-1)),G=t(()=>n("p",null,[e(" Начнём с "),n("b",null,"камня"),e(". Нужна 1 штука ("),n("i",null,"quantity"),e(") с влиянием на качество 30% ("),n("i",null,"weight"),e("). Записываем эти данные внутри новых фигурных скобок: ")],-1)),H=t(()=>n("pre",null,`Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    }
  ]
}`,-1)),J=t(()=>n("p",null,[e(" Добавим и "),n("b",null,"ветку"),e(". Нужна 1 штука ("),n("i",null,"quantity"),e(") с таким же влиянием на качество 30% ("),n("i",null,"weight"),e("): ")],-1)),K=t(()=>n("pre",null,`Ремёсла
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
}`,-1)),P=t(()=>n("p",null,[e(" На последок добавим два дополнительных атрибута. "),n("i",null,"src"),e(" со ссылкой на картинку на фандомпедии, а так же "),n("i",null,"minLevel"),e(" с уровнем навыка, когда этот рецепт в игре открывается. ")],-1)),Q=t(()=>n("pre",null,`Ремёсла
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
}`,-1)),X=t(()=>n("h2",null,"Второй пример",-1)),Y=t(()=>n("p",null,[e(" В качестве второго примера рассмотрим рецепт "),n("a",{href:"https://lifeisfeudal.fandom.com/wiki/Cheese",target:"_blank"},"Сыра"),e(", для приготовления которого помимо одного "),n("b",null,"молока"),e(" с весом 60% в виде ингредиента нужны "),n("b",null,"инструмент"),e(" и "),n("b",null,'"верстак"'),e(". ")],-1)),Z=t(()=>n("p",null,[e(" Для обозначения влияния на качество инструмента используем атрибут "),n("i",null,"toolWeight"),e(' (тут 10%), а для обозначения влияния "верстака" добавим другой атрибут '),n("i",null,"workbenchWeight"),e(" (тоже 10%). ")],-1)),nn=t(()=>n("p",null," И получается: ",-1)),en=t(()=>n("pre",null,`Кулинария
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
}`,-1)),tn=h({__name:"AboutInstruction",setup(s){const _=b(["last"]);return(c,i)=>{const d=o("v-expansion-panel-title"),m=o("v-expansion-panel-text"),v=o("v-expansion-panel"),g=o("v-expansion-panels");return p(),f(g,{modelValue:_.value,"onUpdate:modelValue":i[0]||(i[0]=k=>_.value=k),multiple:""},{default:l(()=>[a(v,{value:"last"},{default:l(()=>[a(d,null,{default:l(()=>[S]),_:1}),a(m,null,{default:l(()=>[F,R,N,T,D,E,a(u,null,{default:l(()=>[O]),_:1}),U,a(u,null,{default:l(()=>[j]),_:1}),z,G,a(u,null,{default:l(()=>[H]),_:1}),J,a(u,null,{default:l(()=>[K]),_:1}),P,a(u,null,{default:l(()=>[Q]),_:1}),X,Y,Z,nn,a(u,null,{default:l(()=>[en]),_:1})]),_:1})]),_:1}),a(L)]),_:1},8,["modelValue"])}}});const ln=r(tn,[["__scopeId","data-v-ff938934"]]),an={class:"mb-6"},sn=h({__name:"AboutView",setup(s){return(_,c)=>(p(),M(q,null,[n("h1",an,$(_.$t("This will not be translated")),1),a(ln)],64))}});export{sn as default};
