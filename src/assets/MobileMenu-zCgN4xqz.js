import{j as e,d as c,b as d,c as x,s as m,e as u,u as h}from"./hooks--aaWd0HJ.js";import{j as p,k as j,u as o,m as v,l as b,e as g,S as f,U as M,n as C,H as i,p as n,r as t,q as k}from"./index-Cto0a8a3.js";import"./react-vendor-fKLcOhQA.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import{B as w}from"./Backdrop-YruooF8V.js";const y=({src:a,alt:s="user avatar",width:r="56px",height:l="56px"})=>(console.log("src",a),e.jsx(p,{children:a&&e.jsx(j,{src:a,alt:s,width:r,height:l})})),A=({children:a})=>c(`(max-width: ${d.tablet-1}px)`)?e.jsx(e.Fragment,{children:a}):null,S=o(v.div)`
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
  box-shadow: ${m.menu};
  overflow: hidden;
`,E=o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`,I=()=>{const{closeSidebar:a}=u(),{user:s}=h();return e.jsx(w,{onClose:a,children:e.jsxs(S,{variants:b,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(g,{variant:"x",onClick:a,children:e.jsx(f,{name:"icon-x",width:"32",height:"32"})}),s&&e.jsxs(M,{children:[e.jsx(y,{src:s.photoURL,alt:s.displayName}),e.jsx(C,{children:s.displayName})]}),e.jsx(A,{children:e.jsxs(E,{children:[e.jsx(i,{variants:n,to:t.HOME,onClick:a,children:"Home"}),e.jsx(i,{variants:n,to:t.TEACHERS,onClick:a,children:"Teachers"}),s&&e.jsx(i,{variants:n,to:t.FAVORITES,onClick:a,children:"Favorites"})]})}),e.jsx(k,{type:"mobile",onCloseMobileMenu:a})]})})};export{I as default};
