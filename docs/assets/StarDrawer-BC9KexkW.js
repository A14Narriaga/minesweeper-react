import{F as i}from"./index-BIipNrIC.js";const c=2,s={x:0,y:0};function l(o){const{context:t,particle:e,radius:a}=o,n=e.sides,d=e.starInset??c;t.moveTo(s.x,s.y-a);for(let r=0;r<n;r++)t.rotate(Math.PI/n),t.lineTo(s.x,s.y-a*d),t.rotate(Math.PI/n),t.lineTo(s.x,s.y-a)}const u=2,I=5;class x{draw(t){l(t)}getSidesCount(t){const e=t.shapeData;return Math.round(i((e==null?void 0:e.sides)??I))}particleInit(t,e){const a=e.shapeData;e.starInset=i((a==null?void 0:a.inset)??u)}}export{x as StarDrawer};
