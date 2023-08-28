import{d as y,o as n,c as d,a as h,t as r,F as f,r as x,b as o,e as v,w as i,f as s,g as w,u as V}from"./index-23d6e172.js";const L=y({__name:"ShowMaterialInfo",props:{material:{type:Object},index:Number},setup(p){const a=p;return(l,u)=>(n(),d(f,null,[h(r(a.index)+" ",1),(n(!0),d(f,null,x(a.material,(m,t,c)=>(n(),d("p",{key:c},r(c)+". "+r(t)+" = "+r(l.$t("game."+m)),1))),128))],64))}}),b=y({__name:"CardRecipe",props:{recipe:{type:Object},skillLevel:Number,clothingLevel:Number},setup(p){const a=p;return(l,u)=>{const m=o("v-card-title"),t=o("v-card-item"),c=o("v-card-text"),_=o("v-card");return n(),v(_,{class:"my-3"},{default:i(()=>[s(t,null,{default:i(()=>[s(m,null,{default:i(()=>{var e;return[h(r(l.$t("game."+((e=a.recipe)==null?void 0:e.name)))+" "+r(a.skillLevel)+" "+r(a.clothingLevel),1)]}),_:1})]),_:1}),s(c,null,{default:i(()=>{var e;return[(n(!0),d(f,null,x((e=a.recipe)==null?void 0:e.materials,(g,k)=>(n(),v(L,{key:k,index:k,material:g},null,8,["index","material"]))),128))]}),_:1})]),_:1})}}}),C=y({__name:"CardsRecipes",props:{recipes:{type:Object}},setup(p){const a=p,l=w(100),u=w(0);return(m,t)=>{const c=o("v-text-field"),_=o("v-slider");return n(),d(f,null,[s(_,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),max:"100",step:"0.1","hide-details":"",class:"ma-4"},{prepend:i(()=>[h(r(m.$t("Level of skill")),1)]),append:i(()=>[s(c,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),type:"number",style:{width:"100px"},density:"compact","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),s(_,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=e=>u.value=e),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:i(()=>[h(r(m.$t("Level of clothing")),1)]),append:i(()=>[s(c,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),type:"number",style:{width:"100px"},density:"compact","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),(n(!0),d(f,null,x(a.recipes,(e,g)=>(n(),v(b,{key:g,recipe:e,skillLevel:l.value,clothingLevel:u.value},null,8,["recipe","skillLevel","clothingLevel"]))),128))],64)}}}),$=[{name:"Artisan",recipes:[{name:"Mortar and pestle",materials:[{name:"Branch",quantity:1,weight:10},{name:"Rock",quantity:1,weight:10}]},{name:"Primitive Crucible and Stick",materials:[{name:"Rock",quantity:2,weight:10},{name:"Branch",quantity:1,weight:10}]},{name:"Primitive Fishing Pole",materials:[{name:"Branch",quantity:1,weight:10},{name:"Plant fiber",quantity:2,weight:10}]}]},{name:"Construction",recipes:[{name:"Furnace",materials:[{name:"Plant fiber",quantity:10,weight:10},{name:"Clay",quantity:60,weight:10},{name:"Water",quantity:25,weight:10}]}]}],q=y({__name:"AccordionSkills",setup(p){return(a,l)=>{const u=o("v-expansion-panel-title"),m=o("v-expansion-panel-text"),t=o("v-expansion-panel"),c=o("v-expansion-panels");return n(),v(c,{variant:"accordion"},{default:i(()=>[(n(!0),d(f,null,x(V($),(_,e)=>(n(),v(t,{key:e},{default:i(()=>[s(u,null,{default:i(()=>[h(r(a.$t("game."+_.name)),1)]),_:2},1024),s(m,null,{default:i(()=>[s(C,{recipes:_.recipes},null,8,["recipes"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),B=y({__name:"QualityCalculator",setup(p){return(a,l)=>(n(),v(q))}}),P=y({__name:"QualityCalculatorView",setup(p){return(a,l)=>(n(),v(B))}});export{P as default};
