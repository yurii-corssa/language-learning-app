const __vite__fileDeps=["src/assets/AuthModal-CdZGuo7q.js","src/assets/hooks--aaWd0HJ.js","src/assets/react-vendor-fKLcOhQA.js","src/assets/firebase-database-vendor-CbbLdNQs.js","src/assets/firebase-app-vendor-Dm8EoJqR.js","src/assets/firebase-auth-vendor-BiLe07Fo.js","src/assets/index-S2FKb3ZH.js","src/assets/bookLesson.schema-C4LHJII3.js","src/assets/ModalBody-B8h2S4SI.js","src/assets/RingLoader-CFrTKX64.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as s,_ as n,e as i}from"./index-S2FKb3ZH.js";import{b as o,j as t,m as r}from"./hooks--aaWd0HJ.js";import{r as d}from"./react-vendor-fKLcOhQA.js";import{M as l}from"./ModalBody-B8h2S4SI.js";import{P as p}from"./TeachersPage-TSID93c5.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./SectionContainer-CvPTrIsI.js";const m=s.div`
  display: flex;
  gap: 18px;

  @media only screen and (max-width: ${o.desktop-1}px) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${o.desktop}px) {
    flex-direction: row;
  }
`,a=d.lazy(()=>n(()=>import("./AuthModal-CdZGuo7q.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),x="/language-learning-app/",k=({openModal:e})=>t.jsxs(l,{title:r.authRequiredModal.title,text:r.authRequiredModal.text,children:[t.jsx(p,{src:`${x}images/authentication.svg`}),t.jsxs(m,{children:[t.jsx(i,{width:"100%",onClick:()=>e(t.jsx(a,{type:"login"},"login")),children:"Log in"}),t.jsx(i,{width:"100%",onClick:()=>e(t.jsx(a,{type:"registration"},"registration")),children:"Registration"})]})]});export{k as default};
