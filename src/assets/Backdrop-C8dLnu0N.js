import{c as n,j as r}from"./hooks-K7UW4uoY.js";import{u as e,m as s,o as c}from"./index-Blcma-hn.js";const l=e(s.div)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${n.backdrop};
`,m=({onClose:i,children:a})=>{const o=t=>{t.target===t.currentTarget&&i()};return r.jsx(l,{variants:c,initial:"initial",animate:"animate",exit:"exit",onClick:o,children:a},"backdrop")};export{m as B};
