import{d as u,o as e,c as l,r as f,t as s,F as y,a as i,b as _,w as o,e as h,f as k,u as x}from"./index-151ffd84.js";const C=[{name:"Mortar and pestle",materials:[{name:"Branch",quantity:1,weight:10},{name:"Rock",quantity:1,weight:10}]},{name:"Primitive Crucible and Stick",materials:[{name:"Rock",quantity:2,weight:10},{name:"Branch",quantity:1,weight:10}]},{name:"Primitive Fishing Pole",materials:[{name:"Branch",quantity:1,weight:10},{name:"Plant fiber",quantity:2,weight:10}]}],q=u({__name:"ShowMaterialInfo",props:{material:{type:Object}},setup(a){const t=a;return(m,p)=>(e(!0),l(y,null,f(t.material,(n,d,c)=>(e(),l("p",{key:c},s(c)+". "+s(d)+" = "+s(n),1))),128))}}),B=u({__name:"CardRecipe",props:{recipe:{type:Object}},setup(a){const t=a;return(m,p)=>{const n=i("v-card-title"),d=i("v-card-item"),c=i("v-card-text"),v=i("v-card");return e(),_(v,{class:"my-3"},{default:o(()=>[h(d,null,{default:o(()=>[h(n,null,{default:o(()=>{var r;return[k(s((r=t.recipe)==null?void 0:r.name),1)]}),_:1})]),_:1}),h(c,null,{default:o(()=>{var r;return[(e(!0),l(y,null,f((r=t.recipe)==null?void 0:r.materials,(w,g)=>(e(),_(q,{key:g,material:w},null,8,["material"]))),128))]}),_:1})]),_:1})}}}),b=u({__name:"QualityCalculator",setup(a){return(t,m)=>(e(!0),l(y,null,f(x(C),(p,n)=>(e(),_(B,{key:n,recipe:p},null,8,["recipe"]))),128))}}),R=u({__name:"QualityCalculatorView",setup(a){return(t,m)=>(e(),_(b))}});export{R as default};
