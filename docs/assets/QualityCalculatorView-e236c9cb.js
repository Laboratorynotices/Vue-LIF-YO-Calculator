import{d as S,r as u,o as r,c as y,w as i,a as n,b as g,t as m,e as B,F as N,f as F,g as M,h as P,i as q,j as R,k as I,_ as O,u as D}from"./index-749e91a4.js";const K=S({__name:"CardRecipePopover",props:{recipe:{type:Object},skillLevel:Number,clothingLevel:Number,toolLevel:Number,workbenchLevel:Number,primitiveTool:Boolean,workbenchBonus:Boolean},setup(h){const l=h;return(e,p)=>{const w=u("v-card-title"),o=u("v-col"),s=u("v-row"),d=u("v-container"),k=u("v-card"),_=u("v-menu");return r(),y(_,{activator:"parent",location:"bottom","open-on-hover":"","close-on-content-click":!1},{default:i(()=>[n(k,{"min-width":"300","max-width":"600",class:"pb-1"},{default:i(()=>{var W,b;return[n(w,null,{default:i(()=>{var c;return[g(m(e.$t("game."+((c=l.recipe)==null?void 0:c.name))),1)]}),_:1}),n(d,{class:"mb-3"},{default:i(()=>{var c;return[n(s,null,{default:i(()=>[n(o,{class:"py-0 my-0"},{default:i(()=>[g(m(e.$t("Required"))+": ",1)]),_:1}),n(o,{cols:"3",class:"py-0 my-0"},{default:i(()=>[g(m(e.$t("Influence"))+": ",1)]),_:1})]),_:1}),(r(!0),B(N,null,F((c=l.recipe)==null?void 0:c.materials,(a,f)=>(r(),y(s,{key:f},{default:i(()=>[n(o,{class:"py-0 my-0"},{default:i(()=>[M("b",null,"- "+m(a.quantity)+"x",1),g(" "+m(e.$t("game."+a.name))+": ",1)]),_:2},1024),n(o,{cols:"3",class:"py-0 my-0"},{default:i(()=>[g(m(a.weight)+"% ",1)]),_:2},1024)]),_:2},1024))),128))]}),_:1}),(W=l.recipe)!=null&&W.toolWeight||(b=l.recipe)!=null&&b.workbenchWeight?(r(),y(d,{key:0,class:"mb-3"},{default:i(()=>{var c,a;return[(c=l.recipe)!=null&&c.toolWeight?(r(),y(s,{key:0},{default:i(()=>[n(o,{class:"py-0 my-0"},{default:i(()=>[g(m(e.$t("Tool")),1)]),_:1}),n(o,{cols:"3",class:"py-0 my-0"},{default:i(()=>{var f;return[g(m((f=l.recipe)==null?void 0:f.toolWeight)+"% ",1)]}),_:1})]),_:1})):P("",!0),(a=l.recipe)!=null&&a.workbenchWeight?(r(),y(s,{key:1},{default:i(()=>[n(o,{class:"py-0 my-0"},{default:i(()=>[g(m(e.$t("Device")),1)]),_:1}),n(o,{cols:"3",class:"py-0 my-0"},{default:i(()=>{var f;return[g(m((f=l.recipe)==null?void 0:f.workbenchWeight)+"% ",1)]}),_:1})]),_:1})):P("",!0)]}),_:1})):P("",!0)]}),_:1})]),_:1})}}}),Q=M("br",null,null,-1),E=S({__name:"ShowMaterialInfo",props:{material:{type:Object},index:Number},emits:{returnWeigt:(h,l)=>0<=h&&h<=100&&l>=0,updateSummand:(h,l)=>0<=h&&h<=100&&l>=0},setup(h,{emit:l}){const e=h,p=q(100),w=R(()=>{var o;return Math.floor(p.value*((o=e.material)==null?void 0:o.weight)/100)});return I(()=>{var o;l("returnWeigt",(o=e.material)==null?void 0:o.weight,e.index),l("updateSummand",w.value,e.index)}),(o,s)=>{const d=u("v-text-field"),k=u("v-slider");return r(),y(k,{modelValue:p.value,"onUpdate:modelValue":[s[2]||(s[2]=_=>p.value=_),s[3]||(s[3]=_=>l("updateSummand",w.value,e.index))],max:"100",step:"1","hide-details":"","thumb-label":"",class:"my-4"},{prepend:i(()=>{var _,W;return[g(m(o.$t("game."+((_=e.material)==null?void 0:_.name)))+" x "+m((W=e.material)==null?void 0:W.quantity)+" ",1),Q,g(" "+m(o.$t("Level of item")),1)]}),append:i(()=>[n(d,{modelValue:p.value,"onUpdate:modelValue":[s[0]||(s[0]=_=>p.value=_),s[1]||(s[1]=_=>l("updateSummand",w.value,e.index))],type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"])}}}),G=["src","alt","title"],z=S({__name:"CardRecipe",props:{recipe:{type:Object},skillLevel:Number,clothingLevel:Number,toolLevel:Number,workbenchLevel:Number,primitiveTool:Boolean,workbenchBonus:Boolean},emits:{toolNeeded:Boolean,workbenchNeeded:Boolean},setup(h,{emit:l}){var b,c,a,f,L,x;const e=h,p=q([]),w=(t,v)=>{p.value[v]=t},o=((b=e.recipe)==null?void 0:b.toolWeight)!==void 0&&((c=e.recipe)==null?void 0:c.toolWeight)!==null?(a=e.recipe)==null?void 0:a.toolWeight:0,s=((f=e.recipe)==null?void 0:f.workbenchWeight)!==void 0&&((L=e.recipe)==null?void 0:L.workbenchWeight)!==null?(x=e.recipe)==null?void 0:x.workbenchWeight:0,d=R(()=>{let t=100-o-s;return p.value.map(v=>{t-=v}),t}),k=q([]),_=(t,v)=>{k.value[v]=t},W=R(()=>{let t=Math.floor(d.value*(e.skillLevel+e.clothingLevel/5)/100);return t+=Math.floor(o*e.toolLevel/100),t+=Math.floor(s*e.workbenchLevel/100),k.value.map(v=>{t+=v}),e.workbenchBonus&&(t=Math.floor(t*(1+"20"/100))),e.primitiveTool&&(t=Math.floor(t/2)),Math.min(t,Math.floor(e.skillLevel))});return I(()=>{var t,v,$,H;((t=e.recipe)==null?void 0:t.toolWeight)!==void 0&&((v=e.recipe)==null?void 0:v.toolWeight)!==null&&l("toolNeeded"),(($=e.recipe)==null?void 0:$.workbenchWeight)!==void 0&&((H=e.recipe)==null?void 0:H.workbenchWeight)!==null&&l("workbenchNeeded")}),(t,v)=>{const $=u("v-card-title"),H=u("v-card-item"),A=u("v-card-text"),j=u("v-card");return r(),y(j,{class:"my-3"},{default:i(()=>[n(H,null,{default:i(()=>[n($,null,{default:i(()=>{var V,T,C,U;return[M("img",{src:(V=e.recipe)==null?void 0:V.src,alt:(T=e.recipe)==null?void 0:T.name,title:(C=e.recipe)==null?void 0:C.name},null,8,G),g(" "+m(t.$t("game."+((U=e.recipe)==null?void 0:U.name)))+" "+m(W.value)+" ",1),n(K,{recipe:e.recipe},null,8,["recipe"])]}),_:1})]),_:1}),n(A,null,{default:i(()=>{var V;return[(r(!0),B(N,null,F((V=e.recipe)==null?void 0:V.materials,(T,C)=>(r(),y(E,{key:C,index:C,material:T,onUpdateSummand:_,onReturnWeigt:w},null,8,["index","material"]))),128))]}),_:1})]),_:1})}}});const J=O(z,[["__scopeId","data-v-196d6152"]]),X={key:1},Y={key:2},Z=S({__name:"CardsRecipes",props:{recipes:{type:Object},professionalClothing:Boolean},setup(h){const l=h,e=q(100),p=q(0),w=q(100),o=q(!1),s=q(!1),d=q(100),k=q(!1),_=()=>{k.value=!0},W=q(!1),b=()=>{W.value=!0};return(c,a)=>{const f=u("v-text-field"),L=u("v-slider"),x=u("v-switch");return r(),B(N,null,[n(L,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value=t),max:"100",step:"0.1","hide-details":"",class:"ma-4"},{prepend:i(()=>[g(m(c.$t("Level of skill")),1)]),append:i(()=>[n(f,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),l.professionalClothing?(r(),y(L,{key:0,modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=t=>p.value=t),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:i(()=>[g(m(c.$t("Level of clothing")),1)]),append:i(()=>[n(f,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=t=>p.value=t),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"])):P("",!0),k.value?(r(),B("div",X,[n(L,{modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=t=>w.value=t),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:i(()=>[g(m(c.$t("Level of tool")),1)]),append:i(()=>[n(f,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=t=>w.value=t),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),n(x,{modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=t=>o.value=t),"hide-details":"",color:"red"},{label:i(()=>[g(m(c.$t("Is primitive tool?")),1)]),_:1},8,["modelValue"])])):P("",!0),W.value?(r(),B("div",Y,[n(L,{modelValue:d.value,"onUpdate:modelValue":a[8]||(a[8]=t=>d.value=t),max:"100",step:"1","hide-details":"",class:"ma-4"},{prepend:i(()=>[g(m(c.$t("Level of workbench")),1)]),append:i(()=>[n(f,{modelValue:d.value,"onUpdate:modelValue":a[7]||(a[7]=t=>d.value=t),type:"number",style:{width:"100px"},density:"compact","hide-details":"",max:"100",min:"0",variant:"outlined"},null,8,["modelValue"])]),_:1},8,["modelValue"]),n(x,{modelValue:s.value,"onUpdate:modelValue":a[9]||(a[9]=t=>s.value=t),"hide-details":"",color:"blue"},{label:i(()=>[g(m(c.$t("Has workbench bonus?")),1)]),_:1},8,["modelValue"])])):P("",!0),(r(!0),B(N,null,F(l.recipes,(t,v)=>(r(),y(J,{key:v,recipe:t,skillLevel:e.value,clothingLevel:p.value,toolLevel:w.value,primitiveTool:o.value,workbenchBonus:s.value,workbenchLevel:d.value,onToolNeededOnce:_,onWorkbenchNeededOnce:b},null,8,["recipe","skillLevel","clothingLevel","toolLevel","primitiveTool","workbenchBonus","workbenchLevel"]))),128))],64)}}}),ee=[{name:"Artisan",nameRu:"Ремёсла",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/4/46/Artisan.png",professionalClothing:!1,recipes:[{name:"Primitive sickle",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/0a/Primitive_sickle.png",minLevel:0,materials:[{name:"Flint stone",quantity:1,weight:20},{name:"Branch",quantity:1,weight:10},{name:"Plant fiber",quantity:1,weight:10}]},{name:"Primitive shovel",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/a6/Primitive_shovel.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:20},{name:"Flint stone",quantity:1,weight:30},{name:"Plant fiber",quantity:1,weight:20}]},{name:"Primitive Hammer",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/c/c0/Primitive_hammer.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:25},{name:"Flint stone",quantity:4,weight:20},{name:"Plant fiber",quantity:3,weight:15}]},{name:"Primitive Axe",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/ec/Primitive_axe.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:10},{name:"Flint stone",quantity:1,weight:25},{name:"Plant fiber",quantity:2,weight:15}]},{name:"Primitive Pickaxe",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/00/Primitive_pickaxe.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:20},{name:"Flint stone",quantity:1,weight:45},{name:"Plant fiber",quantity:3,weight:15}]},{name:"Primitive saw",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/c/c6/Primitive_saw.png",minLevel:0,materials:[{name:"Branch",quantity:3,weight:20},{name:"Flint stone",quantity:7,weight:40},{name:"Plant fiber",quantity:3,weight:20}]},{name:"Torch",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/b/b2/Torch.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:20},{name:"Plant fiber",quantity:3,weight:30},{name:"Flint stone",quantity:1,weight:10}]},{name:"Primitive Knife",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/78/Primitive_knife.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:20},{name:"Flint stone",quantity:1,weight:50}]},{name:"Primitive Crucible and Stick",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9a/Primitive_crucible_and_stick.png",minLevel:0,materials:[{name:"Rock",quantity:2,weight:30},{name:"Branch",quantity:1,weight:20}]},{name:"Primitive Fishing Pole",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/72/Primitive_fishing_pole.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:40},{name:"Plant fiber",quantity:2,weight:20}]},{name:"Campfire",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/01/Campfire.png",minLevel:0,materials:[{name:"Branch",quantity:5,weight:40}]},{name:"Mortar and pestle",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Mortar_and_pestle.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:30},{name:"Rock",quantity:1,weight:30}]},{name:"Sleeping Bag",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/04/Sleeping_bag.png",minLevel:0,materials:[{name:"Branch",quantity:4,weight:20},{name:"Plant fiber",quantity:4,weight:30}]},{name:"Primitive Cooking Pot",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/f/fa/Primitive_cooking_pot.png",minLevel:0,materials:[{name:"Rock",quantity:1,weight:20},{name:"Branch",quantity:2,weight:20}]},{name:"Sling",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/93/Sling.png",minLevel:0,materials:[{name:"Branch",quantity:1,weight:20},{name:"Plant fiber",quantity:10,weight:60}]},{name:"Bark Box",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/5/5e/Bark_Box.png",minLevel:0,materials:[{name:"Bark",quantity:20,weight:50}]}]},{name:"Construction",nameRu:"Строительство",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/3/37/Construction.png",professionalClothing:!0,recipes:[{name:"Furnace",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/0f/Furnace.png",minLevel:0,materials:[{name:"Plant fiber",quantity:10,weight:10},{name:"Clay",quantity:60,weight:10},{name:"Water",quantity:25,weight:10}],toolWeight:10},{name:"Wooden Fence",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/3/3a/Wooden_fence.png",minLevel:0,materials:[{name:"Boards",quantity:5,weight:55},{name:"Simple rope",quantity:10,weight:10}],toolWeight:5},{name:"Wattle Fence",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/e5/Wattle_fence.png",minLevel:0,materials:[{name:"Branch",quantity:10,weight:65}],toolWeight:5},{name:"Wooden Wicket",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/2/26/Wooden_wicket.png",minLevel:0,materials:[{name:"Boards",quantity:5,weight:45},{name:"Simple rope",quantity:2,weight:20}],toolWeight:5},{name:"Palisade Wall",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/1/17/Palisade_wall.png",minLevel:0,materials:[{name:"Billets",quantity:15,weight:65}],toolWeight:5},{name:"Tiny shack",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/93/Tiny_shack.png",minLevel:0,materials:[{name:"Boards",quantity:5,weight:20},{name:"Billets",quantity:15,weight:20},{name:"Plant fiber",quantity:20,weight:15}],toolWeight:10},{name:"Wooden Wall with Stairs",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/73/Wooden_wall_with_stairs.png",minLevel:0,materials:[{name:"Billets",quantity:20,weight:40},{name:"Simple rope",quantity:10,weight:5},{name:"Hardwood board",quantity:10,weight:20}],toolWeight:5},{name:"Wooden Wall",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:0,materials:[{name:"Billets",quantity:15,weight:45},{name:"Boards",quantity:5,weight:20}],toolWeight:5},{name:"Wooden Gates",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/b/bd/Wooden_gates.png",minLevel:0,materials:[{name:"Building Log",quantity:20,weight:20},{name:"Boards",quantity:6,weight:40},{name:"Simple rope",quantity:20,weight:10}],toolWeight:5},{name:"Palisade Wall (diagonal)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/1/17/Palisade_wall.png",minLevel:0,materials:[{name:"Billets",quantity:15,weight:65}],toolWeight:5},{name:"Wooden Fence (diagonal)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/3/3a/Wooden_fence.png",minLevel:0,materials:[{name:"Boards",quantity:5,weight:55},{name:"Simple rope",quantity:10,weight:10}],toolWeight:5},{name:"Wattle Fence (diagonal)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/e5/Wattle_fence.png",minLevel:0,materials:[{name:"Branch",quantity:10,weight:65}],toolWeight:5},{name:"Plaster tiny shack",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/ae/Plaster_tiny_shack.png",minLevel:0,materials:[{name:"Billets",quantity:15,weight:30},{name:"Clay",quantity:80,weight:20},{name:"Plant fiber",quantity:20,weight:10}],toolWeight:5},{name:"Wooden Pillar",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/4/42/Wooden_pillar.png",minLevel:0,materials:[{name:"Building Log",quantity:2,weight:40}],toolWeight:10},{name:"Wooden Pillar",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/d/d8/Wooden_pillar2.png",minLevel:0,materials:[{name:"Building Log",quantity:2,weight:40}],toolWeight:10},{name:"Wooden Well",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/92/Well_B.png",minLevel:0,materials:[{name:"Building Log",quantity:4,weight:30},{name:"Boards",quantity:10,weight:20},{name:"Simple rope",quantity:10,weight:20}],toolWeight:10},{name:"Big cauldron",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/92/Big_cauldron.png",minLevel:30,materials:[{name:"Metal sheet",quantity:1,weight:50},{name:"Simple rope",quantity:4,weight:10},{name:"Branch",quantity:10,weight:10}],toolWeight:10},{name:"Kiln",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/5/58/Kiln.png",minLevel:30,materials:[{name:"Water",quantity:40,weight:5},{name:"Clay",quantity:250,weight:50},{name:"Plant fiber",quantity:30,weight:10}],toolWeight:0},{name:"Forge and anvil",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/c/cf/Forge_and_anvil.png",minLevel:30,materials:[{name:"Shaped rock",quantity:30,weight:10},{name:"Clay",quantity:20,weight:10},{name:"Hardwood billet",quantity:1,weight:10},{name:"Anvil",quantity:1,weight:20}],toolWeight:10},{name:"Oven",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/4/46/Oven.png",minLevel:30,materials:[{name:"Clay",quantity:250,weight:20},{name:"Metal sheet",quantity:1,weight:10},{name:"Mortar",quantity:5,weight:20}],toolWeight:5},{name:"Beehive",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/3/3c/Beehive.png",minLevel:30,materials:[{name:"Softwood billet",quantity:2,weight:20},{name:"Nails",quantity:45,weight:10},{name:"Straw",quantity:10,weight:20}],toolWeight:10},{name:"Coop",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/4/48/Coop.png",minLevel:30,materials:[{name:"Boards",quantity:30,weight:40},{name:"Plant fiber",quantity:10,weight:10},{name:"Nails",quantity:60,weight:10}],toolWeight:5},{name:"Training field",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/8/8f/Training_field.png",minLevel:30,materials:[{name:"Nails",quantity:20,weight:5},{name:"Boards",quantity:40,weight:45},{name:"Linen rope",quantity:2,weight:5},{name:"Building log",quantity:1,weight:10}],toolWeight:10},{name:"Wooden stairs",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/c/c7/Wooden_Ladder.png",minLevel:30,materials:[{name:"Hardwood billet",quantity:2,weight:30},{name:"Softwood board",quantity:4,weight:20},{name:"Nails",quantity:4,weight:30}],toolWeight:10},{name:"Wooden Wall (diagonal)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:5,weight:20},{name:"Billets",quantity:15,weight:45}],toolWeight:5},{name:"Wooden Wall (diagonal, loophole)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:5,weight:20},{name:"Billets",quantity:15,weight:45}],toolWeight:5},{name:"Wooden Wall defences",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:10,weight:20},{name:"Billets",quantity:20,weight:45}],toolWeight:5},{name:"Wooden Wall (loophole)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:5,weight:20},{name:"Billets",quantity:15,weight:45}],toolWeight:5},{name:"Wooden Wall with Stairs (loophole)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:5,weight:20},{name:"Billets",quantity:15,weight:45}],toolWeight:5},{name:"Wooden Wall square",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Wooden_wall.png",minLevel:30,materials:[{name:"Boards",quantity:3,weight:20},{name:"Billets",quantity:15,weight:45}],toolWeight:5},{name:"Wooden canopy",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/f/fc/Wooden_canopy.png",minLevel:30,materials:[{name:"Nails",quantity:40,weight:20},{name:"Boards",quantity:20,weight:40}],toolWeight:10},{name:"Brewing Tank",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/ee/Brewing_tank.png",minLevel:60,materials:[{name:"Nails",quantity:40,weight:5},{name:"Hardwood board",quantity:4,weight:15},{name:"Metal Sheet",quantity:8,weight:30},{name:"Metal Band",quantity:4,weight:20}],toolWeight:5},{name:"Small Stable",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/0/0a/Small_stable.png",minLevel:60,materials:[{name:"Building log",quantity:10,weight:20},{name:"Rock",quantity:100,weight:20},{name:"Straw",quantity:50,weight:10},{name:"Hardwood board",quantity:4,weight:20}],toolWeight:5},{name:"Small Plaster house",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/e0/Small_plaster_house.png",minLevel:60,materials:[{name:"Building log",quantity:30,weight:10},{name:"Mortar",quantity:30,weight:20},{name:"Door module",quantity:1,weight:10},{name:"Window module",quantity:4,weight:10},{name:"Clay",quantity:150,weight:10}],toolWeight:5},{name:"Small Wooden House",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/f/f1/Small_wooden_house.png",minLevel:60,materials:[{name:"Building log",quantity:100,weight:30},{name:"Nails",quantity:200,weight:10},{name:"Door module",quantity:1,weight:10},{name:"Window module",quantity:4,weight:5},{name:"Hardwood board",quantity:60,weight:5}],toolWeight:5},{name:"Lamp Post",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/b/b1/Lamppost.png",minLevel:60,materials:[{name:"Lamp",quantity:1,weight:20},{name:"Naphtha",quantity:10,weight:30},{name:"Linen rope",quantity:1,weight:10},{name:"Building log",quantity:1,weight:10}],toolWeight:10},{name:"Sign",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/5/5d/Sign.png",minLevel:60,materials:[{name:"Building log",quantity:1,weight:30},{name:"Nails",quantity:5,weight:10},{name:"Boards",quantity:3,weight:20}],toolWeight:10},{name:"Big Wooden Canopy",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/1/13/Big_wooden_canopy.png",minLevel:60,materials:[{name:"Nails",quantity:70,weight:20},{name:"Boards",quantity:40,weight:40}],toolWeight:10},{name:"Stairs",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/6/63/Ladder.png",minLevel:60,materials:[{name:"Hardwood billet",quantity:20,weight:30},{name:"Hardwood board",quantity:30,weight:20},{name:"Nails",quantity:30,weight:30}],toolWeight:10},{name:"Palisade shield",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/b/b9/Palisade_shield.png",minLevel:60,materials:[{name:"Building logs",quantity:3,weight:45},{name:"Boards",quantity:5,weight:20}],toolWeight:5},{name:"Palisade shield (loophole)",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/78/Palisade_wall_diagonal.png",minLevel:60,materials:[{name:"Building logs",quantity:3,weight:45},{name:"Boards",quantity:5,weight:20}],toolWeight:5},{name:"Short Hardwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/ea/Short_hardwood_pillar.png",minLevel:60,materials:[{name:"Hardwood billet",quantity:2,weight:30},{name:"Hardwood board",quantity:1,weight:20},{name:"Nails",quantity:2,weight:30}],toolWeight:10},{name:"Hardwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/6/65/Hardwood_pillar.png",minLevel:60,materials:[{name:"Hardwood billet",quantity:4,weight:30},{name:"Hardwood board",quantity:1,weight:20},{name:"Nails",quantity:2,weight:30}],toolWeight:10},{name:"Tall Hardwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/e7/Tall_Hardwood_Pillar.png",minLevel:60,materials:[{name:"Hardwood billet",quantity:6,weight:30},{name:"Hardwood board",quantity:1,weight:20},{name:"Nails",quantity:4,weight:30}],toolWeight:10},{name:"Short Softwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/d/de/Short_softwood_pillar.png",minLevel:60,materials:[{name:"Softwood billet",quantity:2,weight:30},{name:"Softwood board",quantity:1,weight:20},{name:"Nails",quantity:2,weight:30}],toolWeight:10},{name:"Softwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/73/Softwood_pillar.png",minLevel:60,materials:[{name:"Softwood billet",quantity:4,weight:30},{name:"Softwood board",quantity:1,weight:20},{name:"Nails",quantity:2,weight:30}],toolWeight:10},{name:"Tall Softwood Pillars",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/e/ea/Tall_Softwood_Pillar.png",minLevel:60,materials:[{name:"Softwood billet",quantity:6,weight:30},{name:"Softwood board",quantity:1,weight:20},{name:"Nails",quantity:4,weight:30}],toolWeight:10},{name:"Small platform",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/3/37/Small_Platform.png",minLevel:60,materials:[{name:"Hardwood billet",quantity:6,weight:30},{name:"Softwood billet",quantity:4,weight:20},{name:"Simple rope",quantity:4,weight:30}],toolWeight:10},{name:"Cross platform",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/ad/Cross_Platform.png",minLevel:60,materials:[{name:"Softwood billet",quantity:6,weight:30},{name:"Softwood board",quantity:4,weight:20},{name:"Simple rope",quantity:4,weight:30}],toolWeight:10},{name:"Platform",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/7/7d/Platform.png",minLevel:60,materials:[{name:"Softwood billet",quantity:6,weight:30},{name:"Hardwood board",quantity:4,weight:20},{name:"Simple rope",quantity:4,weight:30}],toolWeight:10}]},{name:"Cooking",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/f/f4/Cooking.png",professionalClothing:!0,recipes:[{name:"Cheese",src:"https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/a5/Cheese.png",minLevel:0,materials:[{name:"Milk",quantity:1,weight:60}],toolWeight:10,workbenchWeight:10}]}],te=["src","alt","title"],ie=S({__name:"AccordionSkills",setup(h){return(l,e)=>{const p=u("v-expansion-panel-title"),w=u("v-expansion-panel-text"),o=u("v-expansion-panel"),s=u("v-expansion-panels");return r(),y(s,{variant:"accordion"},{default:i(()=>[(r(!0),B(N,null,F(D(ee),(d,k)=>(r(),y(o,{key:k},{default:i(()=>[n(p,null,{default:i(()=>[M("img",{src:d.src,class:"mr-2",alt:d.name,title:d.name},null,8,te),g(" "+m(l.$t("game."+d.name)),1)]),_:2},1024),n(w,null,{default:i(()=>[n(Z,{professionalClothing:d.professionalClothing,recipes:d.recipes},null,8,["professionalClothing","recipes"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}}});const ae=O(ie,[["__scopeId","data-v-b686e724"]]),ne=S({__name:"QualityCalculator",setup(h){return(l,e)=>(r(),y(ae))}}),oe=S({__name:"QualityCalculatorView",setup(h){return(l,e)=>(r(),y(ne))}});export{oe as default};
