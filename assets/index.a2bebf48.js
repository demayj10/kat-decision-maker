import{r as u,j as h,C as v,a as t,A as S,T as k,b as p,P as M,S as f,c as A,B as m,M as w,d as I,R as j,e as B}from"./vendor.625de518.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}};D();var L="./assets/katAndJohn.c25be254.jpg";const P={textAlign:"center",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",backgroundImage:`url(${L})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},R={margin:"10em 1em 1em",height:"fit-content"},T={position:"absolute",top:"45%",left:"23%",width:200,padding:"2em 1em",backgroundColor:"#fff",textAlign:"center",boxShadow:24},W=()=>{const[i,r]=u.exports.useState([{id:1,value:""},{id:2,value:""}]),[d,s]=u.exports.useState(""),[e,n]=u.exports.useState(!1),l=()=>{const o=i.length-1,a=1,c=Math.floor(Math.random()*(o-a+1))+a;s(i[c].value),n(!0)},x=()=>{n(!1),s("")},y=()=>{r([{id:1,value:""},{id:2,value:""}])},b=()=>{r([...i,{id:i.length+1,value:""}])},C=(o,a)=>{const c=i,g=c.findIndex(O=>a===O.id);if(g>=0)c[g].value=o.target.value,r([...c]);else throw Error(`Can't find item with id [${a}] in the options`)};return h(v,{sx:P,maxWidth:"lg",children:[t(S,{color:"secondary",children:t(k,{children:t(p,{variant:"h6",textAlign:"center",children:"Kat's Decision Maker"})})}),t(M,{elevation:20,sx:R,children:h(f,{spacing:5,padding:"2em 1em",children:[t(p,{variant:"h4",children:"What's the decision?"}),t(f,{direction:"column",spacing:2,children:i.map(o=>t(A,{variant:"outlined",size:"small",label:`Option ${o.id}`,value:o.value,onChange:a=>C(a,o.id)},`OptionInput${o.id}`))}),t(v,{maxWidth:"md",children:h(f,{spacing:1,children:[t(m,{variant:"contained",color:"primary",onClick:()=>b(),children:"I need more options!"}),t(m,{variant:"contained",color:"secondary",disabled:i.length!==i.filter(o=>o.value!=="").length,onClick:()=>l(),children:"Decide For Me!"}),t(m,{onClick:()=>y(),children:"Clear"})]})})]})}),t(w,{open:e,onClose:()=>x(),children:t(I,{sx:T,children:t(p,{variant:"body1",fontWeight:"700",children:d})})})]})};j.render(t(B.StrictMode,{children:t(W,{})}),document.getElementById("root"));
