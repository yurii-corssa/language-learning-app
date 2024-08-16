import{c as e,b as i,j as t}from"./hooks--aaWd0HJ.js";import{u as r}from"./index-Cto0a8a3.js";const d=r.div`
  overflow-y: auto;
  height: 100%;
  margin-right: -30px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: auto;
    background: ${e.semiTransparent(.1)};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e.semiTransparent(.3)};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${e.semiTransparent(.5)};
  }

  @media only screen and (max-width: ${i.tablet-1}px) {
    padding: 32px;
  }
  @media only screen and (min-width: ${i.tablet}px) {
    margin-right: -55px;
    max-height: 80vh;
  }
`,s=r.div`
  padding-right: 30px;

  @media only screen and (min-width: ${i.tablet}px) {
    padding-right: 55px;
  }
`,p=r.h2`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 20px;
`,h=r.p`
  line-height: 22px;
  margin-bottom: 40px;
`,x=({title:n,text:a,children:o})=>t.jsx(d,{children:t.jsxs(s,{children:[n&&t.jsx(p,{children:n}),a&&t.jsx(h,{children:a}),o]})});export{x as M};
