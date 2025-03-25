import{d as k,r,c as b,a as t,n,e as g,f as m,v as f,w as j,o as c}from"./index-CWcHh2JV.js";import{u as C}from"./projects-qgoUz6aG.js";const M={class:"bg-white p-6"},$={class:"mb-6"},V={class:"flex space-x-4"},z={class:"flex items-center"},B={class:"w-6 h-6 mr-2"},N={key:0,class:"text-cpf-blue",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},P={class:"flex items-center"},T={class:"w-6 h-6 mr-2"},q={key:0,class:"text-cpf-blue",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},S=["placeholder"],h={class:"mt-2 flex space-x-4"},D={class:"flex items-center space-x-2"},H={class:"flex space-x-2"},U={class:"flex space-x-2"},E={class:"flex justify-between pt-6"},Y=k({__name:"NewProjectView",emits:["close"],setup(F,{emit:v}){const x=v,y=C(),s=r("quality"),u=r(""),d=r(""),a=r(!1),i=r(),o=r("reduce"),w=()=>{const p={name:u.value,description:`Target: ${o.value} ${i.value}% of Type 2 issues`,manager:d.value,year:new Date().getFullYear(),phase:"define",status:"not_started",progress:0,targetType:o.value};y.createProject(p),x("close")};return(p,e)=>(c(),b("div",M,[e[25]||(e[25]=t("div",{class:"mb-8"},[t("h2",{class:"text-2xl font-bold text-gray-900"},"Define New Project"),t("p",{class:"mt-1 text-sm text-gray-600"},"Fill in the project details to get started.")],-1)),t("form",{onSubmit:j(w,["prevent"]),class:"space-y-6"},[t("div",$,[e[14]||(e[14]=t("label",{class:"text-lg font-medium text-gray-900 block mb-4"},"คุณต้องการปรับปรุงเรื่องใด",-1)),t("div",V,[t("button",{type:"button",onClick:e[0]||(e[0]=l=>s.value="quality"),class:n(["flex-1 p-4 rounded-lg border-2 transition-colors",s.value==="quality"?"border-cpf-blue bg-blue-50":"border-gray-200"])},[t("div",z,[t("div",B,[s.value==="quality"?(c(),b("svg",N,e[10]||(e[10]=[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1)]))):g("",!0)]),e[11]||(e[11]=t("span",{class:"text-lg"},"คุณภาพ (Quality)",-1))])],2),t("button",{type:"button",onClick:e[1]||(e[1]=l=>s.value="speed"),class:n(["flex-1 p-4 rounded-lg border-2 transition-colors",s.value==="speed"?"border-cpf-blue bg-blue-50":"border-gray-200"])},[t("div",P,[t("div",T,[s.value==="speed"?(c(),b("svg",q,e[12]||(e[12]=[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1)]))):g("",!0)]),e[13]||(e[13]=t("span",{class:"text-lg"},"ความเร็ว (Speed)",-1))])],2)])]),t("div",null,[e[15]||(e[15]=t("label",{for:"projectName",class:"text-lg font-medium text-gray-900 block mb-2"},"ชื่อโครงการ",-1)),m(t("input",{type:"text",id:"projectName","onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cpf-blue focus:border-cpf-blue sm:text-sm",placeholder:s.value==="quality"?"ลด %ปัญหา เบอร์ 2":""},null,8,S),[[f,u.value]])]),t("div",null,[e[16]||(e[16]=t("label",{for:"projectManager",class:"text-lg font-medium text-gray-900 block mb-2"},"Project Manager",-1)),m(t("input",{type:"text",id:"projectManager","onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cpf-blue focus:border-cpf-blue sm:text-sm",placeholder:"Enter project manager name"},null,512),[[f,d.value]])]),t("div",null,[e[19]||(e[19]=t("label",{class:"text-lg font-medium text-gray-900 block mb-2"},"คุณมีข้อมูลย้อนหลังมากกว่า 6 เดือนแล้วใช่หรือไม่",-1)),t("div",h,[t("button",{type:"button",onClick:e[4]||(e[4]=l=>a.value=!0),class:n(["flex-1 p-3 rounded-lg border-2 transition-colors",a.value?"border-cpf-blue bg-blue-50":"border-gray-200"])},e[17]||(e[17]=[t("span",{class:"text-lg"},"ใช่",-1)]),2),t("button",{type:"button",onClick:e[5]||(e[5]=l=>a.value=!1),class:n(["flex-1 p-3 rounded-lg border-2 transition-colors",a.value?"border-gray-200":"border-cpf-blue bg-blue-50"])},e[18]||(e[18]=[t("span",{class:"text-lg"},"ไม่ใช่",-1)]),2)])]),t("div",null,[e[23]||(e[23]=t("label",{class:"text-lg font-medium text-gray-900 block mb-2"},"เป้าหมาย",-1)),t("div",D,[t("div",H,[t("div",U,[t("button",{type:"button",onClick:e[6]||(e[6]=l=>o.value="reduce"),class:n(["px-4 py-2 rounded-lg border-2 transition-colors flex items-center space-x-2",o.value==="reduce"?"border-cpf-blue bg-blue-50 text-cpf-blue":"border-gray-200 hover:bg-gray-50"])},e[20]||(e[20]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M16 10a1 1 0 01-1 1H5a1 1 0 110-2h10a1 1 0 011 1z","clip-rule":"evenodd"})],-1),t("span",null,"ลด",-1)]),2),t("button",{type:"button",onClick:e[7]||(e[7]=l=>o.value="increase"),class:n(["px-4 py-2 rounded-lg border-2 transition-colors flex items-center space-x-2",o.value==="increase"?"border-cpf-blue bg-blue-50 text-cpf-blue":"border-gray-200 hover:bg-gray-50"])},e[21]||(e[21]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),t("span",null,"เพิ่ม",-1)]),2)])]),m(t("input",{placeholder:"จำนวน",type:"number","onUpdate:modelValue":e[8]||(e[8]=l=>i.value=l),class:"mt-1 block w-24 border-gray-300 rounded-md shadow-sm focus:ring-cpf-blue focus:border-cpf-blue sm:text-sm"},null,512),[[f,i.value]]),e[22]||(e[22]=t("input",{type:"text",placeholder:"หน่วย"},null,-1))])]),t("div",E,[t("button",{type:"button",onClick:e[9]||(e[9]=l=>p.$emit("close")),class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cpf-blue"}," Cancel "),e[24]||(e[24]=t("button",{type:"submit",class:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cpf-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cpf-blue"}," Create Project ",-1))])],32)]))}});export{Y as _};
