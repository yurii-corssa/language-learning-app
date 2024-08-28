import{b as e,j as t,m as o}from"./hooks-K7UW4uoY.js";import{u as n,e as r}from"./index-Blcma-hn.js";import"./react-vendor-CibYK_bk.js";import{M as s}from"./ModalBody-BIEym9nb.js";import{P as d}from"./TeachersPage-BSZjs8Zv.js";import a from"./AuthModal-CnY2qAOL.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./SectionContainer-RNjQcKlV.js";import"./RingLoader-DZMRWw2m.js";const l=n.div`
  display: flex;
  gap: 18px;

  @media only screen and (max-width: ${e.desktop-1}px) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${e.desktop}px) {
    flex-direction: row;
  }
`,p="/language-learning-app/",w=({openModal:i})=>t.jsxs(s,{title:o.authRequiredModal.title,text:o.authRequiredModal.text,children:[t.jsx(d,{src:`${p}images/authentication.svg`}),t.jsxs(l,{children:[t.jsx(r,{width:"100%",onClick:()=>i(t.jsx(a,{type:"login"},"login")),children:"Log in"}),t.jsx(r,{width:"100%",onClick:()=>i(t.jsx(a,{type:"registration"},"registration")),children:"Registration"})]})]});export{w as default};
