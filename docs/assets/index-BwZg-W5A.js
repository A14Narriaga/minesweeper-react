const __vite__fileDeps=["./ColorUpdater-3MvJBK_x.js","./index-BIipNrIC.js","./index-DdYVmfh3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-BIipNrIC.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-3MvJBK_x.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};