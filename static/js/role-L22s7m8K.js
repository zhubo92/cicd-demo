import{a as p}from"./use-form-common-props-CM7w3N3x.js";import{o as B,O as U,H as $}from"./index-ht37-DqN.js";import{l as A}from"./request-B7Qe9N7R.js";const j=(t,e,L,a)=>{let i={offsetX:0,offsetY:0};const u=f=>{const X=f.clientX,Y=f.clientY,{offsetX:c,offsetY:m}=i,o=t.value.getBoundingClientRect(),r=o.left,v=o.top,w=o.width,x=o.height,H=document.documentElement.clientWidth,b=document.documentElement.clientHeight,D=-r+c,T=-v+m,W=H-r-w+c,y=b-v-x+m,d=g=>{let n=c+g.clientX-X,s=m+g.clientY-Y;a!=null&&a.value||(n=Math.min(Math.max(n,D),W),s=Math.min(Math.max(s,T),y)),i={offsetX:n,offsetY:s},t.value&&(t.value.style.transform=`translate(${p(n)}, ${p(s)})`)},h=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)},E=()=>{e.value&&t.value&&e.value.addEventListener("mousedown",u)},l=()=>{e.value&&t.value&&e.value.removeEventListener("mousedown",u)},M=()=>{i={offsetX:0,offsetY:0},t.value&&(t.value.style.transform="none")};return B(()=>{U(()=>{L.value?E():l()})}),$(()=>{l()}),{resetPosition:M}},k=()=>A({},"/getRoleList");export{k as g,j as u};
