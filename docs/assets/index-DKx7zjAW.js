const __vite__fileDeps=["./PolygonDrawer-obx4ssyZ.js","./PolygonDrawerBase-B7OLB_bo.js","./index-CSZeOtIp.js","./index-DdYVmfh3.css","./TriangleDrawer-KzJfOtAY.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-CSZeOtIp.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer-obx4ssyZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer-KzJfOtAY.js"),__vite__mapDeps([4,1,2,3]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};