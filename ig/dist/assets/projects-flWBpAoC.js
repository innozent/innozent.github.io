import{av as o}from"./index-CSKCY9Ck.js";const i=o("projects",{state:()=>({projects:[{id:"1",name:"Process Optimization",description:"Optimize customer service workflow",manager:"John Smith",year:2024,phase:"define",status:"in_progress",progress:25,createdAt:"2024-03-01T00:00:00Z",updatedAt:"2024-03-01T00:00:00Z"},{id:"2",name:"Quality Improvement",description:"Reduce defect rate in manufacturing",manager:"Jane Doe",year:2024,phase:"analyze",status:"in_progress",progress:65,createdAt:"2024-02-15T00:00:00Z",updatedAt:"2024-03-10T00:00:00Z"},{id:"3",name:"Cost Reduction",description:"Reduce operational costs",manager:"Mike Johnson",year:2024,phase:"improve",status:"completed",progress:100,createdAt:"2024-01-01T00:00:00Z",updatedAt:"2024-03-15T00:00:00Z"}],currentProject:null}),actions:{createProject(e){const t={...e,id:Date.now().toString(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return this.projects.push(t),t},updateProject(e,t){const r=this.projects.findIndex(s=>s.id===e);return r!==-1?(this.projects[r]={...this.projects[r],...t,updatedAt:new Date().toISOString()},this.projects[r]):null},deleteProject(e){var r;const t=this.projects.findIndex(s=>s.id===e);return t!==-1?(this.projects.splice(t,1),((r=this.currentProject)==null?void 0:r.id)===e&&(this.currentProject=null),!0):!1},setCurrentProject(e){this.currentProject=e}},getters:{projectsByPhase:e=>t=>e.projects.filter(r=>r.phase===t),projectsByStatus:e=>t=>e.projects.filter(r=>r.status===t),totalProjects:e=>e.projects.length,inProgressProjects:e=>e.projects.filter(t=>t.status==="in_progress").length,completedProjects:e=>e.projects.filter(t=>t.status==="completed").length}});export{i as u};
