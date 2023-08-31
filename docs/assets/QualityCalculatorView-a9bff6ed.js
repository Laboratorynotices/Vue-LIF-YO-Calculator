import{d as V,r as w,c as W,o as j,a as c,b as v,e as y,w as n,f as g,t as _,g as u,h as F,i as $,F as B,j as q,k as O,u as Q}from"./index-863979f3.js";const A=F("br",null,null,-1),I=V({__name:"ShowMaterialInfo",props:{material:{type:Object},index:Number},emits:{returnWeigt:(m,e)=>0<=m&&m<=100&&e>=0,updateSummand:(m,e)=>0<=m&&m<=100&&e>=0},setup(m,{emit:e}){const a=m,r=w(100),d=W(()=>{var o;return Math.floor(r.value*((o=a.material)==null?void 0:o.weight)/100)});return j(()=>{var o;e("returnWeigt",(o=a.material)==null?void 0:o.weight,a.index),e("updateSummand",d.value,a.index)}),(o,s)=>{const p=c("v-text-field"),h=c("v-slider");return v(),y(h,{modelValue:r.value,"onUpdate:modelValue":[s[2]||(s[2]=t=>r.value=t),s[3]||(s[3]=t=>e("updateSummand",d.value,a.index))],max:"100",step:"1","hide-details":"","thumb-label":"",class:"my-4"},{prepend:n(()=>{var t,f;return[g(_(o.$t("game."+((t=a.material)==null?void 0:t.name)))+" x "+_((f=a.material)==null?void 0:f.quantity)+" ",1),A,g(" "+_(o.$t("Level of item")),1)]}),append:n(()=>[u(p,{modelValue:r.value,"onUpdate:modelValue":[s[0]||(s[0]=t=>r.value=t),s[1]||(s[1]=t=>e("updateSummand",d.value,a.index))],type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"])}}}),D=V({__name:"CardRecipe",props:{recipe:{type:Object},skillLevel:Number,clothingLevel:Number,toolLevel:Number,workbenchLevel:Number,primitiveTool:Boolean,workbenchBonus:Boolean},setup(m){var f,k,x,l,C,S;const e=m,a=w([]),r=(i,b)=>{a.value[b]=i},d=((f=e.recipe)==null?void 0:f.toolWeight)!==void 0&&((k=e.recipe)==null?void 0:k.toolWeight)!==null?(x=e.recipe)==null?void 0:x.toolWeight:0,o=((l=e.recipe)==null?void 0:l.workbenchWeight)!==void 0&&((C=e.recipe)==null?void 0:C.workbenchWeight)!==null?(S=e.recipe)==null?void 0:S.workbenchWeight:0,s=W(()=>{let i=100-d-o;return a.value.map(b=>{i-=b}),i}),p=w([]),h=(i,b)=>{p.value[b]=i},t=W(()=>{let i=Math.floor(s.value*(e.skillLevel+e.clothingLevel/5)/100);return i+=Math.floor(d*e.toolLevel/100),i+=Math.floor(o*e.workbenchLevel/100),p.value.map(b=>{i+=b}),e.workbenchBonus&&(i=Math.floor(i*(1+"20"/100))),e.primitiveTool&&(i=Math.floor(i/2)),Math.min(i,Math.floor(e.skillLevel))});return(i,b)=>{const M=c("v-card-title"),N=c("v-card-item"),T=c("v-card-text"),P=c("v-card");return v(),y(P,{class:"my-3"},{default:n(()=>[u(N,null,{default:n(()=>[u(M,null,{default:n(()=>{var L;return[g(_(i.$t("game."+((L=e.recipe)==null?void 0:L.name)))+" "+_(t.value),1)]}),_:1})]),_:1}),u(T,null,{default:n(()=>{var L;return[(v(!0),$(B,null,q((L=e.recipe)==null?void 0:L.materials,(R,U)=>(v(),y(I,{key:U,index:U,material:R,onUpdateSummand:h,onReturnWeigt:r},null,8,["index","material"]))),128))]}),_:1})]),_:1})}}}),E=V({__name:"CardsRecipes",props:{recipes:{type:Object},professionalClothing:Boolean},setup(m){const e=m,a=w(100),r=w(0),d=w(100),o=w(!1),s=w(!1),p=w(100);return(h,t)=>{const f=c("v-text-field"),k=c("v-slider"),x=c("v-switch");return v(),$(B,null,[u(k,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l),max:"100",step:"0.1","hide-details":"",class:"ma-4"},{prepend:n(()=>[g(_(h.$t("Level of skill")),1)]),append:n(()=>[u(f,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),e.professionalClothing?(v(),y(k,{key:0,modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=l=>r.value=l),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:n(()=>[g(_(h.$t("Level of clothing")),1)]),append:n(()=>[u(f,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"])):O("",!0),u(k,{modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=l=>d.value=l),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:n(()=>[g(_(h.$t("Level of tool")),1)]),append:n(()=>[u(f,{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=l=>d.value=l),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),u(x,{modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=l=>o.value=l),"hide-details":"",color:"red"},{label:n(()=>[g(_(h.$t("Is primitive tool?")),1)]),_:1},8,["modelValue"]),u(k,{modelValue:p.value,"onUpdate:modelValue":t[8]||(t[8]=l=>p.value=l),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:n(()=>[g(_(h.$t("Level of workbench")),1)]),append:n(()=>[u(f,{modelValue:p.value,"onUpdate:modelValue":t[7]||(t[7]=l=>p.value=l),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),u(x,{modelValue:s.value,"onUpdate:modelValue":t[9]||(t[9]=l=>s.value=l),"hide-details":"",color:"blue"},{label:n(()=>[g(_(h.$t("Has workbench bonus?")),1)]),_:1},8,["modelValue"]),(v(!0),$(B,null,q(e.recipes,(l,C)=>(v(),y(D,{key:C,recipe:l,skillLevel:a.value,clothingLevel:r.value,toolLevel:d.value,primitiveTool:o.value,workbenchBonus:s.value,workbenchLevel:p.value},null,8,["recipe","skillLevel","clothingLevel","toolLevel","primitiveTool","workbenchBonus","workbenchLevel"]))),128))],64)}}}),H=[{name:"Artisan",professionalClothing:!1,recipes:[{name:"Mortar and pestle",materials:[{name:"Branch",quantity:1,weight:30},{name:"Rock",quantity:1,weight:30}]},{name:"Primitive Crucible and Stick",materials:[{name:"Rock",quantity:2,weight:10},{name:"Branch",quantity:1,weight:10}]},{name:"Primitive Fishing Pole",materials:[{name:"Branch",quantity:1,weight:10},{name:"Plant fiber",quantity:2,weight:10}]}]},{name:"Construction",professionalClothing:!1,recipes:[{name:"Furnace",materials:[{name:"Plant fiber",quantity:10,weight:10},{name:"Clay",quantity:60,weight:10},{name:"Water",quantity:25,weight:10}]}]},{name:"Cooking",professionalClothing:!0,recipes:[{name:"Cheese",src:"static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/a5/Cheese.png",minLevel:0,materials:[{name:"Milk",quantity:1,weight:60}],toolWeight:10,workbenchWeight:10}]}],z=V({__name:"AccordionSkills",setup(m){return(e,a)=>{const r=c("v-expansion-panel-title"),d=c("v-expansion-panel-text"),o=c("v-expansion-panel"),s=c("v-expansion-panels");return v(),y(s,{variant:"accordion"},{default:n(()=>[(v(!0),$(B,null,q(Q(H),(p,h)=>(v(),y(o,{key:h},{default:n(()=>[u(r,null,{default:n(()=>[g(_(e.$t("game."+p.name)),1)]),_:2},1024),u(d,null,{default:n(()=>[u(E,{professionalClothing:p.professionalClothing,recipes:p.recipes},null,8,["professionalClothing","recipes"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),G=V({__name:"QualityCalculator",setup(m){return(e,a)=>(v(),y(z))}}),K=V({__name:"QualityCalculatorView",setup(m){return(e,a)=>(v(),y(G))}});export{K as default};