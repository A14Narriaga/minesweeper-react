const __vite__fileDeps=["./Pusher-CtW24zCX.js","./ExternalInteractorBase-CIi3zRdK.js","./index-CSZeOtIp.js","./index-DdYVmfh3.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as r,_ as s}from"./index-CSZeOtIp.js";class o{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function a(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await s(()=>import("./Pusher-CtW24zCX.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new u(e)},t)}export{o as Push,a as loadExternalPushInteraction};