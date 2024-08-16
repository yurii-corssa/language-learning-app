import{j as e,d as c,b as d,c as x,s as u,e as m,u as p}from"./hooks--aaWd0HJ.js";import{j as h,k as j,u as r,m as v,l as g,e as b,S as f,U as M,n as C,H as i,p as n,r as t,q as k}from"./index-S2FKb3ZH.js";import"./react-vendor-fKLcOhQA.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import{B as w}from"./Backdrop-DC56piiN.js";const y="/language-learning-app/",A=({src:a,alt:s="user avatar",width:o="56px",height:l="56px"})=>e.jsx(h,{children:e.jsx(j,{src:a||`${y}images/user-round.svg`,alt:s,width:o,height:l})}),S=({children:a})=>c(`(max-width: ${d.tablet-1}px)`)?e.jsx(e.Fragment,{children:a}):null,E=r(v.div)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100vw;
  max-width: 448px;
  height: 100%;

  background-color: ${x.backgroundPage};
  box-shadow: ${u.menu};
  overflow: hidden;
`,H=r.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`,I=()=>{const{closeSidebar:a}=m(),{user:s}=p();return e.jsx(w,{onClose:a,children:e.jsxs(E,{variants:g,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(b,{variant:"x",onClick:a,children:e.jsx(f,{name:"icon-x",width:"32",height:"32"})}),s&&e.jsxs(M,{children:[e.jsx(A,{src:s.photoURL,alt:s.displayName}),e.jsx(C,{children:s.displayName})]}),e.jsx(S,{children:e.jsxs(H,{children:[e.jsx(i,{variants:n,to:t.HOME,onClick:a,children:"Home"}),e.jsx(i,{variants:n,to:t.TEACHERS,onClick:a,children:"Teachers"}),s&&e.jsx(i,{variants:n,to:t.FAVORITES,onClick:a,children:"Favorites"})]})}),e.jsx(k,{type:"mobile",onCloseMobileMenu:a})]})})};export{I as default};
