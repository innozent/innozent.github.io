import{C as c,a as m,L as g,P as u,b as x,p as _,c as h,d as p,e as v}from"./index-BccehHJj.js";import{d as w,u as f,j as y,c as n,a as s,t as o,k as l,F as b,l as k,m as P,n as C,i as j,o as a}from"./index-CWcHh2JV.js";import{u as M}from"./projects-qgoUz6aG.js";const B={class:"min-h-screen bg-gray-100"},S={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},L={class:"grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6"},A={class:"bg-white overflow-hidden shadow rounded-lg"},R={class:"p-5"},V={class:"flex items-center"},z={class:"ml-5 w-0 flex-1"},D={class:"flex items-baseline"},E={class:"text-2xl font-semibold text-gray-900"},F={class:"bg-white overflow-hidden shadow rounded-lg"},N={class:"p-5"},J={class:"flex items-center"},H={class:"ml-5 w-0 flex-1"},I={class:"flex items-baseline"},O={class:"text-2xl font-semibold text-gray-900"},T={class:"bg-white overflow-hidden shadow rounded-lg"},Z={class:"p-5"},q={class:"flex items-center"},G={class:"ml-5 w-0 flex-1"},K={class:"flex items-baseline"},Q={class:"text-2xl font-semibold text-gray-900"},U={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},W={class:"bg-white shadow rounded-lg"},X={class:"p-6"},Y={class:"mt-5"},$={class:"flow-root"},ss={role:"list",class:"-my-5 divide-y divide-gray-200"},ts={class:"flex items-center space-x-4"},es={class:"flex-1 min-w-0"},os={class:"text-sm font-medium text-gray-900 truncate"},ls={class:"text-sm text-gray-500 truncate"},is={class:"bg-white shadow rounded-lg p-6"},ns={class:"h-[300px]"},gs=w({__name:"DashboardView",setup(as){c.register(m,g,u,x,_,h,p),j(),f();const i=M(),d=y(()=>({labels:["January","February","March","April","May","June"],datasets:[{label:"Completed Projects",data:[4,6,8,7,10,12],borderColor:"#0066cc",tension:.4}]})),r={responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}},scales:{y:{beginAtZero:!0}}};return(ds,t)=>(a(),n("div",B,[s("main",S,[s("div",L,[s("div",A,[s("div",R,[s("div",V,[t[1]||(t[1]=s("div",{class:"flex-shrink-0"},[s("svg",{class:"h-6 w-6 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})])],-1)),s("div",z,[s("dl",null,[t[0]||(t[0]=s("dt",{class:"text-sm font-medium text-gray-500 truncate"},"Total Projects",-1)),s("dd",D,[s("div",E,o(l(i).totalProjects),1)])])])])])]),s("div",F,[s("div",N,[s("div",J,[t[3]||(t[3]=s("div",{class:"flex-shrink-0"},[s("svg",{class:"h-6 w-6 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)),s("div",H,[s("dl",null,[t[2]||(t[2]=s("dt",{class:"text-sm font-medium text-gray-500 truncate"},"In Progress",-1)),s("dd",I,[s("div",O,o(l(i).inProgressProjects),1)])])])])])]),s("div",T,[s("div",Z,[s("div",q,[t[5]||(t[5]=s("div",{class:"flex-shrink-0"},[s("svg",{class:"h-6 w-6 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)),s("div",G,[s("dl",null,[t[4]||(t[4]=s("dt",{class:"text-sm font-medium text-gray-500 truncate"},"Completed",-1)),s("dd",K,[s("div",Q,o(l(i).completedProjects),1)])])])])])])]),s("div",U,[s("div",W,[s("div",X,[t[6]||(t[6]=s("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Recent Projects",-1)),s("div",Y,[s("div",$,[s("ul",ss,[(a(!0),n(b,null,k(l(i).projects.slice(0,5),e=>(a(),n("li",{key:e.id,class:"py-4"},[s("div",ts,[s("div",es,[s("p",os,o(e.name),1),s("p",ls,o(e.description),1)]),s("div",null,[s("span",{class:C(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",{"bg-green-100 text-green-800":e.status==="completed","bg-yellow-100 text-yellow-800":e.status==="in_progress","bg-gray-100 text-gray-800":e.status==="not_started"}])},o(e.status.replace("_"," ")),3)])])]))),128))])])])])]),s("div",is,[t[7]||(t[7]=s("h3",{class:"text-lg leading-6 font-medium text-gray-900 mb-4"},"Project Performance",-1)),s("div",ns,[P(l(v),{data:d.value,options:r},null,8,["data"])])])]),t[8]||(t[8]=s("div",{class:"mt-6 flex space-x-3"},[s("button",{class:"btn-primary"}," Create New Project "),s("button",{class:"btn-secondary"}," Continue Recent Project ")],-1))])]))}});export{gs as default};
