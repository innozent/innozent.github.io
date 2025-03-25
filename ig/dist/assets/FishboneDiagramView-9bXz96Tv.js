import{d as D,r as M,y as A,c as l,a as e,f as p,v as h,F as d,l as c,t as k,o as i}from"./index-CSKCY9Ck.js";import{u as S}from"./diagrams-CNyunn38.js";import{u as $}from"./projects-flWBpAoC.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const U={class:"h-full bg-gray-100 p-6"},E={class:"bg-white shadow rounded-lg h-full flex flex-col"},F={class:"border-b border-gray-200 p-4"},L={class:"flex items-center justify-between"},P={class:"flex space-x-2"},I={class:"p-4 border-b border-gray-200"},T={class:"flex-1 overflow-auto p-4"},N={class:"grid grid-cols-2 gap-8"},O={class:"space-y-8"},q={class:"text-lg font-medium text-gray-900 mb-4"},z={class:"space-y-4"},G={class:"flex items-start"},H=["onUpdate:modelValue","placeholder"],J=["onClick"],K={class:"ml-6 mt-2 space-y-2"},Q=["onUpdate:modelValue"],R=["onClick"],W=["onClick"],X=["onClick"],Y={class:"space-y-8"},Z={class:"text-lg font-medium text-gray-900 mb-4"},ee={class:"space-y-4"},te={class:"flex items-start"},se=["onUpdate:modelValue","placeholder"],oe=["onClick"],ne={class:"ml-6 mt-2 space-y-2"},le=["onUpdate:modelValue"],ie=["onClick"],ae=["onClick"],re=["onClick"],de=D({__name:"FishboneDiagramView",setup(ce){const C=S(),y=$(),f=M(""),u={man:[],machine:[],method:[],material:[],measurement:[],environment:[]},w=["man","machine","method"],V=["material","measurement","environment"],v=n=>u[n],x=n=>{const t={id:Date.now().toString(),text:"",subcauses:[]};u[n].push(t)},b=(n,t)=>{const o=u[n].findIndex(s=>s.id===t);o!==-1&&u[n].splice(o,1)},_=n=>{n.subcauses.push("")},g=(n,t)=>{n.subcauses.splice(t,1)},j=()=>{console.log("Export functionality to be implemented")};return A(()=>{const n=y.currentProject;if(n){const t=C.getFishboneDiagramsByProject(n.id)[0];t&&(f.value=t.problem,Object.entries(t.categories).forEach(([o,s])=>{u[o]=s}))}}),(n,t)=>(i(),l("div",U,[e("div",E,[e("div",F,[e("div",L,[t[2]||(t[2]=e("div",null,[e("h2",{class:"text-lg font-medium text-gray-900"},"Fishbone Diagram"),e("p",{class:"mt-1 text-sm text-gray-500"}," Also known as Cause and Effect or Ishikawa Diagram ")],-1)),e("div",P,[e("button",{class:"btn-primary",onClick:t[0]||(t[0]=(...o)=>n.addCause&&n.addCause(...o))}," Add Cause "),e("button",{class:"btn-secondary",onClick:j}," Export ")])])]),e("div",I,[t[3]||(t[3]=e("label",{class:"block text-sm font-medium text-gray-700"},"Main Problem/Effect",-1)),p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>f.value=o),type:"text",class:"input-field mt-1",placeholder:"Enter the main problem or effect"},null,512),[[h,f.value]])]),e("div",T,[e("div",N,[e("div",O,[(i(),l(d,null,c(w,o=>e("div",{key:o,class:"category-section"},[e("h3",q,k(o),1),e("div",z,[(i(!0),l(d,null,c(v(o),s=>(i(),l("div",{key:s.id,class:"cause-item"},[e("div",G,[p(e("input",{"onUpdate:modelValue":a=>s.text=a,type:"text",class:"input-field flex-1",placeholder:`Add ${o} cause`},null,8,H),[[h,s.text]]),e("button",{class:"ml-2 text-gray-400 hover:text-gray-500",onClick:a=>b(o,s.id)},t[4]||(t[4]=[e("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,J)]),e("div",K,[(i(!0),l(d,null,c(s.subcauses,(a,r)=>(i(),l("div",{key:r,class:"flex items-center"},[p(e("input",{"onUpdate:modelValue":m=>s.subcauses[r]=m,type:"text",class:"input-field flex-1",placeholder:"Add subcause"},null,8,Q),[[h,s.subcauses[r]]]),e("button",{class:"ml-2 text-gray-400 hover:text-gray-500",onClick:m=>g(s,r)},t[5]||(t[5]=[e("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,R)]))),128)),e("button",{class:"text-sm text-cpf-blue hover:text-cpf-green",onClick:a=>_(s)}," + Add Subcause ",8,W)])]))),128)),e("button",{class:"text-sm text-cpf-blue hover:text-cpf-green",onClick:s=>x(o)}," + Add Cause ",8,X)])])),64))]),e("div",Y,[(i(),l(d,null,c(V,o=>e("div",{key:o,class:"category-section"},[e("h3",Z,k(o),1),e("div",ee,[(i(!0),l(d,null,c(v(o),s=>(i(),l("div",{key:s.id,class:"cause-item"},[e("div",te,[p(e("input",{"onUpdate:modelValue":a=>s.text=a,type:"text",class:"input-field flex-1",placeholder:`Add ${o} cause`},null,8,se),[[h,s.text]]),e("button",{class:"ml-2 text-gray-400 hover:text-gray-500",onClick:a=>b(o,s.id)},t[6]||(t[6]=[e("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,oe)]),e("div",ne,[(i(!0),l(d,null,c(s.subcauses,(a,r)=>(i(),l("div",{key:r,class:"flex items-center"},[p(e("input",{"onUpdate:modelValue":m=>s.subcauses[r]=m,type:"text",class:"input-field flex-1",placeholder:"Add subcause"},null,8,le),[[h,s.subcauses[r]]]),e("button",{class:"ml-2 text-gray-400 hover:text-gray-500",onClick:m=>g(s,r)},t[7]||(t[7]=[e("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,ie)]))),128)),e("button",{class:"text-sm text-cpf-blue hover:text-cpf-green",onClick:a=>_(s)}," + Add Subcause ",8,ae)])]))),128)),e("button",{class:"text-sm text-cpf-blue hover:text-cpf-green",onClick:s=>x(o)}," + Add Cause ",8,re)])])),64))])])])])]))}}),fe=B(de,[["__scopeId","data-v-312e10cc"]]);export{fe as default};
