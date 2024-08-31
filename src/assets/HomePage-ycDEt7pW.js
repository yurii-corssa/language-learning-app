import{c as n,b as i,j as t,u as m}from"./hooks-K7UW4uoY.js";import{B as x}from"./Backdrop-CeN7K0f2.js";import{u as e,m as d,B as h,s as l,r as g,S as u}from"./index-D4rZqIn9.js";import{f as b}from"./react-vendor-CibYK_bk.js";import{S as f}from"./SectionContainer-DKE-XsE8.js";import{R as y}from"./RingLoader-CXiNM0pK.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";const w=e(d.div)`
  background-color: ${n.backgroundPage};
  padding: 98px 64px;
  border-radius: 30px;
`,j=e.h1`
  font-size: 42px;
  font-weight: 500;
  line-height: 56px;
  margin-bottom: 32px;
`,k=e.span`
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-style: italic;
  z-index: 1;
  &::before {
    content: "";
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 180px;
    height: 35px;
    background-color: ${n.lightPrimary};

    border-radius: 8px;
    z-index: -1;
  }
`,$=e.p`
  line-height: 22px;
  margin-bottom: 64px;
`,v=e(h)`
  @media only screen and (max-width: ${i.tablet-1}px) {
    width: 100%;
  }
  @media only screen and (min-width: ${i.tablet}px) {
    width: 267px;
  }
`,S=({delay:a})=>{const p=b(),c=()=>{p(g.TEACHERS)};return t.jsxs(w,{custom:a,initial:"initial",animate:"animate",exit:"exit",variants:l,layout:"position",children:[t.jsxs(j,{children:["Unlock your potential with the best ",t.jsx(k,{children:"language"})," tutors"]}),t.jsx($,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),t.jsx(v,{onClick:c,children:"Get started"})]})},E=e(d.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 40px;
  border-radius: 30px;
  border: 1.5px dashed ${n.primary};

  @media only screen and (min-width: ${i.tablet}px) {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`,o=e.div`
  display: flex;
  align-items: center;
  min-width: 120px;

  @media only screen and (max-width: ${i.desktop-1}px) {
    flex-direction: column-reverse;
    gap: 8px;
  }

  @media only screen and (min-width: ${i.desktop}px) {
    flex-direction: row;
    gap: 16px;
  }
`,r=e.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
`,s=e.p`
  color: ${n.grey};
  font-size: 14px;
  line-height: 18px;

  @media only screen and (min-width: ${i.desktop}px) {
    width: 96px;
  }
`,C=({delay:a})=>t.jsxs(E,{custom:a,initial:"initial",animate:"animate",exit:"exit",variants:l,layout:"position",children:[t.jsxs(o,{children:[t.jsx(r,{children:"32,000+"}),t.jsx(s,{children:"Experienced tutors"})]}),t.jsxs(o,{children:[t.jsx(r,{children:"300,000+"}),t.jsx(s,{children:"5-star tutor reviews"})]}),t.jsxs(o,{children:[t.jsx(r,{children:"120+"}),t.jsx(s,{children:"Subjects taught"})]}),t.jsxs(o,{children:[t.jsx(r,{children:"200+"}),t.jsx(s,{children:"Tutor nationalities"})]})]}),P=e.div`
  display: grid;
  background-color: #f8f8f8;
  padding-top: 20px;
  gap: 24px;
  margin-bottom: 24px;

  @media only screen and (max-width: ${i.desktop-1}px) {
    grid-template-columns: 100%;
  }
  @media only screen and (min-width: ${i.desktop}px) {
    grid-template-columns: 0.55fr 0.45fr;
  }
`,B=e(d.div)`
  grid-row-start: 1;
  grid-column-end: -1;

  position: relative;
  border-radius: 30px;
  background-color: ${n.lightPrimary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12%;
  padding-bottom: 18%;

  @media only screen and (max-width: ${i.tablet-1}px) {
    padding-top: 28%;
    padding-bottom: 26%;
  }
  @media only screen and (min-width: ${i.tablet}px) {
    padding-top: 12%;
    padding-bottom: 16.5%;
  }
  @media only screen and (min-width: ${i.desktop}px) {
    padding-top: 16%;
    padding-bottom: 11%;
  }
`,L=e.img`
  aspect-ratio: 1 / 1;

  @media only screen and (max-width: ${i.tablet-1}px) {
    width: 80%;
  }
  @media only screen and (min-width: ${i.tablet}px) {
    width: 50%;
  }
  @media only screen and (min-width: ${i.desktop}px) {
    width: 60%;
  }
`,R=e.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  aspect-ratio: 2 / 1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: linear-gradient(
    180deg,
    ${n.darkPrimary},
    color-mix(in srgb, ${n.darkPrimary} 85%, black 15%) 100%
  );

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12%;
    aspect-ratio: 1 / 1;
    fill: color-mix(in sRGB, ${n.darkPrimary} 30%, #ffffff 70%);
    mask-image: linear-gradient(rgb(0 0 0 / 100%), rgb(0 0 0 / 50%));
  }

  @media only screen and (max-width: ${i.tablet-1}px) {
    width: 82%;
  }
  @media only screen and (min-width: ${i.tablet}px) {
    width: 52%;
  }
  @media only screen and (min-width: ${i.desktop}px) {
    width: 62%;
  }
`,z="/language-learning-app/",H=()=>t.jsxs(P,{children:[t.jsxs(B,{custom:0,initial:"initial",animate:"animate",exit:"exit",variants:l,layout:"position",children:[t.jsx(L,{src:`${z}images/emoji.png`,alt:"emoji"}),t.jsx(R,{children:t.jsx(u,{name:"icon-mac",width:"100%",height:"100%"})})]}),t.jsx(S,{delay:.2}),t.jsx(C,{delay:.3})]}),M=()=>{const{isLoading:a}=m();return t.jsx(f,{children:a?t.jsx(x,{children:t.jsx(y,{})}):t.jsx(H,{})})};export{M as default};
