import{c as n,j as r}from"./hooks--aaWd0HJ.js";import{u as e,m as s,o as c}from"./index-Cto0a8a3.js";const l=e(s.div)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${n.backdrop};
`,m=({onClose:i,children:a})=>{const o=t=>{t.target===t.currentTarget&&i()};return r.jsx(l,{variants:c,initial:"initial",animate:"animate",exit:"exit",onClick:o,children:a},"backdrop")};export{m as B};
