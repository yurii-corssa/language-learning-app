import{c as r,b as o,j as e}from"./hooks-K7UW4uoY.js";import{u as d,m as s,t as m,e as c,S as p}from"./index-D4rZqIn9.js";import{r as x}from"./react-vendor-CibYK_bk.js";import{B as l}from"./Backdrop-CeN7K0f2.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";const h=d(s.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  background: ${r.white};
  overflow: hidden;

  @media only screen and (max-width: ${o.tablet-1}px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: ${o.tablet}px) {
    width: 566px;
    height: auto;
    padding: 64px;
    border-radius: 30px;
  }
`,y=({content:i,onClose:t})=>(x.useEffect(()=>{const a=n=>{n.code==="Escape"&&t()};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t]),e.jsx(l,{onClose:t,children:e.jsxs(h,{variants:m,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(c,{variant:"x",onClick:t,children:e.jsx(p,{name:"icon-x"})}),i]},i.key)}));export{y as default};
