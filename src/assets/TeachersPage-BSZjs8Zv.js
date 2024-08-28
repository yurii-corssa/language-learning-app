const __vite__fileDeps=["src/assets/AuthRequiredModal-CsKTJa-u.js","src/assets/hooks-K7UW4uoY.js","src/assets/react-vendor-CibYK_bk.js","src/assets/firebase-database-vendor-CbbLdNQs.js","src/assets/firebase-app-vendor-Dm8EoJqR.js","src/assets/firebase-auth-vendor-BiLe07Fo.js","src/assets/index-Blcma-hn.js","src/assets/ModalBody-BIEym9nb.js","src/assets/AuthModal-CnY2qAOL.js","src/assets/RingLoader-DZMRWw2m.js","src/assets/SectionContainer-RNjQcKlV.js","src/assets/BookLessonModal-Dz5YWZDF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e,c as g,p as D,b as p,t as A,n as xe,a as he,f as U,g as me,r as ue,h as ge,u as fe,i as we,d as ve,k as je}from"./hooks-K7UW4uoY.js";import{r as c,a as ye,h as O}from"./react-vendor-CibYK_bk.js";import{L as be,D as $e,o as F,a as ke,b as Se,S as k,A as M,O as Le,d as Ce,c as W,u as a,e as B,m as y,f as H,B as K,_ as q,s as Fe,g as Te,h as Ee,i as Ie}from"./index-Blcma-hn.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-database-vendor-CbbLdNQs.js";import{S as _e}from"./SectionContainer-RNjQcKlV.js";const Pe=({value:t,isSelected:i,onChange:s})=>e.jsx(be,{$isSelected:i,onClick:s,children:`#${t}`}),T=({id:t,label:i,value:s,options:x,minWidth:h,disabled:r,onChange:m})=>{const[n,o]=c.useState(!1),l=c.useRef(null),w=c.useRef(null),u=()=>{o(d=>!d)},f=d=>{d.key==="Enter"&&(m(d),o(!1))},b=d=>{(d.key==="Enter"||d.key===" ")&&u()};return c.useEffect(()=>{const d=j=>{l.current&&!l.current.contains(j.target)&&o(!1)},v=j=>{j.key==="Escape"&&o(!1)};return n?(document.addEventListener("click",d),document.addEventListener("keydown",v),window.addEventListener("blur",u)):(document.removeEventListener("click",d),document.removeEventListener("keydown",v),window.removeEventListener("blur",u)),()=>{document.removeEventListener("click",d),document.removeEventListener("keydown",v),window.removeEventListener("blur",u)}},[n]),e.jsxs($e,{ref:w,variants:F,children:[e.jsx(ke,{htmlFor:t,children:i}),e.jsxs(Se,{ref:l,value:s,$disabled:r,$minWidth:h,$isOpen:n,onClick:u,onKeyDown:b,tabIndex:r?-1:0,children:[e.jsx("span",{children:s||"All"}),e.jsx(k,{name:"icon-chevron-down",width:"20",height:"20"})]}),w.current&&ye.createPortal(e.jsx(M,{children:n&&e.jsxs(Le,{variants:Ce,initial:"closed",animate:"open",exit:"closed",children:[e.jsx(W,{"data-name":t,"data-value":"",onClick:m,onKeyDown:f,tabIndex:0,children:"All"},`default${t}`),x.map(d=>e.jsx(W,{"data-name":t,"data-value":d,$isSelected:s===d+"",onClick:m,onKeyDown:f,tabIndex:0,children:d},d))]},"options-list")}),w.current)]})},Re=(t,i,s=[],x)=>{const{language:h,level:r,price:m}=i;return t.filter(n=>{const o=x?s.includes(n.tid):!0,l=h?n.languages.includes(h):!0,w=r?n.levels.includes(r):!0,u=m?n.price_per_hour===Number(m):!0;return l&&w&&o&&u})},Q=a.p`
  font-weight: 500;
  color: ${g.semiTransparent(.3)};
`,De=a.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
`,Ae=a.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 154px 0 96px 0;
`,Oe=({isLastPage:t,showMore:i})=>e.jsx(Ae,{children:t?e.jsx(Q,{children:D.isLastPage}):e.jsx(B,{onClick:i,children:"Load more"})}),Me=a.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  @media only screen and (max-width: ${p.desktop-1}px) {
    column-gap: 18px;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: s;
  }
  @media only screen and (min-width: ${p.desktop}px) {
    column-gap: 32px;
  }
`,C=a.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 24px;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    ${({$star:t})=>t?`fill: ${g.primary}`:"stroke: currentColor"}
  }

  @media only screen and (min-width: ${p.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${g.semiTransparent(.2)};
    }
  }
`,Be=a.span`
  margin-left: 0.25rem;
  color: ${g.green};
`,Ve=({lessonsDone:t,rating:i,price:s})=>e.jsxs(Me,{children:[e.jsxs(C,{children:[e.jsx(k,{name:"icon-book-open"}),e.jsx("span",{children:"Lessons online"})]}),e.jsx(C,{children:e.jsx("span",{children:`Lessons done: ${t}`})}),e.jsxs(C,{$star:!0,children:[e.jsx(k,{name:"icon-star"}),e.jsx("span",{children:`Rating: ${i}`})]}),e.jsxs(C,{children:[e.jsx("span",{children:"Price / 1 hour:"}),e.jsx(Be,{children:`${s}$`})]})]}),We=a.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: i;
  }
`,E=a.p`
  font-weight: 500;
  line-height: 24px;

  & > span {
    color: ${g.grey};
  }
`,N=a.button`
  text-decoration: underline;
  color: ${({$isSelected:t})=>t?g.primary:"currentColor"};
  background: none;
  border: none;
  transition: color ${A.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${g.primary};
    }
  }
  &:active {
    color: ${g.darkPrimary};
  }
`,Ne=({tid:t,languages:i,lessonInfo:s,conditions:x})=>{const[h,r]=O(),m=n=>{const o=n.target.textContent.split(",")[0];h.get("language")===o?r(l=>(l.delete("language"),l)):r(l=>(l.set("language",o),l))};return e.jsxs(We,{children:[e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Speaks:"})," ",i.map((n,o)=>{const l=h.get("language")===n;return o!==i.length-1?e.jsx(N,{$isSelected:l,onClick:m,children:`${n},`},`${t}${n}`):e.jsx(N,{$isSelected:l,onClick:m,children:n},`${t}${n}`)})]})}),e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Lesson Info:"})," ",s]})}),e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Conditions:"})," ",x.join(" ")]})})]})},ze=a(y.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${p.tablet-1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    gap: 32px;
  }
`,Ge=a(y.li)`
  font-weight: 500;
  line-height: 24px;
`,Ue=a.span`
  display: block;
  color: ${g.grey};
  margin-bottom: 2px;
`,He=a.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;

  @media only screen and (min-width: ${p.tablet}px) {
    margin-bottom: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${g.primary};
  }
`,J=c.memo(({reviews:t=[]})=>t.length?e.jsx(ze,{children:t.map(i=>{const s=xe();return e.jsxs(Ge,{variants:H,children:[e.jsx(Ue,{children:i.reviewer_name}),e.jsxs(He,{children:[e.jsx(k,{name:"icon-star",width:"16",height:"16"}),Number(i.reviewer_rating).toFixed(1)]}),e.jsx("span",{children:i.comment})]},s)})}):null);J.displayName="Reviews";const Ke=a.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: l;
  }
`,qe=({tid:t,levels:i})=>{const[s,x]=O(),h=r=>{const m=r.target.textContent.slice(1);s.get("level")===m?x(n=>(n.delete("level"),n)):x(n=>(n.set("level",m),n))};return e.jsx(Ke,{children:i.map(r=>{const m=s.get("level")===r;return e.jsx(Pe,{isSelected:m,value:r,onChange:h},`${t}-${r}`)})})},Qe=a(y.li)`
  position: relative;
  padding: 24px;
  background-color: ${g.white};
  border-radius: 24px;
  scroll-margin-top: 50px;

  @media only screen and (max-width: ${p.tablet-1}px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media only screen and (min-width: ${p.tablet}px) {
    display: grid;
    gap: 32px;

    @media (max-width: ${p.desktop-1}px) {
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "a n"
        "a s"
        "i i"
        "m m"
        "l l";
    }
  }

  @media only screen and (min-width: ${p.desktop}px) {
    scroll-margin-top: 40px;
    column-gap: 39px;
    grid-template-columns: auto 236px 1fr;
    grid-template-areas:
      "a n s"
      "a i i"
      ". m m"
      ". l l";
  }
`,Je=a.div`
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 3px solid ${g.avatarBorder};
  border-radius: 50%;
  overflow: hidden;
  background: url(${"/language-learning-app/"}images/user-round.svg) center center no-repeat;
  background-size: 60%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    right: 20px;
    width: 12px;
    height: 12px;
    background-color: ${({$isOnline:t})=>t?g.green:g.red};
    border-radius: 50%;
    border: 2px solid ${g.white};
  }

  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${p.desktop}px) {
    margin-right: 9px;
  }
`,Xe=a(y.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: ${p.tablet-1}px) {
    gap: 16px;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    margin-top: -16px;
    grid-area: m;
    gap: 32px;
  }
`,Ye=a.h2`
  font-weight: 500;
  line-height: 24px;
  margin-right: auto;

  @media only screen and (min-width: ${p.tablet}px) {
    align-self: end;
    grid-area: n;
  }
`,Ze=a.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  color: ${({$isFavorite:t})=>t?g.primary:"currentColor"};
  transition: ${A.default};
  transition-property: stroke, fill, color;
  cursor: pointer;

  & svg {
    stroke: currentColor;
    fill: ${({$isFavorite:t})=>t?"currentColor":"transparent"};
  }
  background: none;
  border: none;

  @media (hover: hover) {
    &:hover {
      color: ${g.primary};
    }
  }
  &:active {
    color: ${g.darkPrimary};
  }
`,et=a(y.p)`
  line-height: 24px;
`,tt=a(K)`
  @media only screen and (min-width: ${p.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${p.desktop}px) {
    grid-column: 2 / 3;
  }
`,nt=c.lazy(()=>q(()=>import("./AuthRequiredModal-CsKTJa-u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),it=c.lazy(()=>q(()=>import("./BookLessonModal-Dz5YWZDF.js"),__vite__mapDeps([11,1,2,3,4,5,7,6,10]))),X=c.memo(c.forwardRef((t,i)=>{const{id:s,user:x,isOnline:h=!0,teacherData:r,favoriteIds:m,delay:n}=t,[o,l]=c.useState(!1),[w,u]=c.useState(!1),[f,b]=c.useState(null),{openModal:d,closeModal:v}=he(),{addToast:j}=U(),{tid:$,name:Y,surname:Z,avatar_url:ee}=r,{levels:te,rating:ne,reviews:ie,languages:ae,conditions:se,experience:re}=r,{lesson_info:oe,lessons_done:le,price_per_hour:de}=r,V=`${Y} ${Z}`;c.useEffect(()=>{x?Object.values(m).includes($)&&u(!0):u(!1)},[m,$,x]),c.useEffect(()=>{f&&j.error("Something went wrong. Please try again later or refresh the page.")},[j,f]);const ce=async()=>{if(!x){d(e.jsx(nt,{openModal:d},"authRequired"));return}try{w?(await ue(x.uid,$),u(!1)):(await me(x.uid,$),u(!0))}catch(pe){b(pe)}};return e.jsxs(Qe,{id:s,custom:n,initial:"initial",animate:"animate",exit:"exit",variants:Fe,layout:"position",ref:i,children:[e.jsx(Ze,{$isFavorite:w,onClick:ce,children:e.jsx(k,{name:"icon-heart",$isFavorite:w})}),e.jsx(Je,{$isOnline:h,children:e.jsx("img",{src:ee,alt:V,loading:"lazy",width:"96",height:"96"})}),e.jsx(Ye,{children:V}),e.jsx(Ve,{lessonsDone:le,rating:ne,price:de}),e.jsx(Ne,{tid:$,languages:ae,lessonInfo:oe,conditions:se}),e.jsx(Xe,{variants:Te,initial:"initial",animate:o?"animate":"initial",exit:"exit",children:e.jsx(M,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(et,{variants:H,children:re}),e.jsx(J,{reviews:ie})]}):e.jsx(B,{variant:"underline",onClick:()=>l(!o),children:"Read more"})})}),e.jsx(qe,{tid:$,levels:te}),o&&e.jsx(tt,{onClick:()=>d(e.jsx(it,{teacherData:r,openModal:d,closeModal:v},"bookLesson")),children:"Book trial lesson"})]})}));X.displayName="TeacherCard";const at=a(y.ul)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,st=t=>{const{teachers:i,user:s,favoriteIds:x,initialCount:h,visibleCount:r,isLastPage:m,showMore:n}=t,o=c.useRef(null);c.useEffect(()=>{o.current&&o.current.scrollIntoView({behavior:"smooth",block:"start"})},[i.length]);const l=i.length%h||h,w=i.length-l;return e.jsxs(e.Fragment,{children:[e.jsx(at,{children:i.map((u,f)=>{const b=f%h===0,d=f>=h,$=b&&d&&f===w?{ref:o}:{};return e.jsx(X,{teacherData:u,user:s,favoriteIds:x,delay:(f-(r-h))*.1,...$},u.tid)})}),e.jsx(Oe,{isLastPage:m,showMore:n})]})},rt=a(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;

  svg {
    --primary: ${g.primary};
  }
`,z=({src:t,notification:i})=>e.jsxs(rt,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx("svg",{width:"250",height:"250",children:e.jsx("use",{href:`${t}#picture`})}),e.jsx(Q,{children:i})]}),G="/language-learning-app/",ot=({teachers:t,filters:i,onlyFavorites:s=!1,initialCount:x=4})=>{const[h,r]=c.useState(x),[m,n]=c.useState(!1),[o,l]=c.useState([]),[w,u]=c.useState(!1),[f,b]=ge(),{user:d}=fe();c.useLayoutEffect(()=>{r(x)},[x,i]),c.useEffect(()=>{if(b||!t.length)return;const j=Re(t,i,f,s);if(j.length)u(!1);else{u(!0),l([]);return}const $=j.slice(0,h);l($),h>=j.length?n(!0):n(!1)},[t,f,i,b,s,h]);const v=()=>{r(j=>j+x)};return w?f.length===0?e.jsx(z,{src:`${G}images/empty.svg`,notification:D.isEmpty.noFavTeachers}):e.jsx(z,{src:`${G}images/filter.svg`,notification:D.isEmpty.noFilterTeachers}):o.length!==0&&e.jsx(st,{teachers:o,user:d,favoriteIds:f,initialCount:x,visibleCount:h,isLastPage:m,showMore:v})},lt=a.div`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: ${p.tablet}px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`,dt=a(y.div)`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: ${p.tablet-1}px) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    flex-direction: row;
    min-height: 74px;
  }
`,ct=a(y.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 24px;

  @media only screen and (max-width: ${p.tablet-1}px) {
    justify-content: end;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    height: 48px;
    justify-content: start;
  }
`,pt=a(K)`
  --direction: ${({$showFilter:t})=>t?"-180deg":"0"};
  ${t=>({...t})}

  svg {
    transform: rotate(var(--direction));
    transition: ${A.default};
    transition-property: transform;
  }
`,xt=({filters:t,setSearchParams:i})=>{const[s,x]=c.useState(!1),[h,r,m,n]=we(),o=ve(`(max-width: ${p.tablet-1}px)`),l=f=>{const b=f.currentTarget.getAttribute("data-name"),d=f.currentTarget.getAttribute("data-value");i(d?v=>(v.set(b,d),v):v=>(v.delete(b),v))},w=()=>{x(f=>!f)},u=()=>{i(new URLSearchParams)};return e.jsx(lt,{children:e.jsxs(M,{children:[e.jsxs(ct,{children:[((t==null?void 0:t.language)||(t==null?void 0:t.level)||(t==null?void 0:t.price))&&e.jsx(y.div,{variants:F,initial:"initial",animate:"animate",exit:"exit",children:e.jsx(B,{variant:"icon",onClick:u,disabled:n,children:e.jsx(k,{name:"icon-filter-x",width:"20px",height:"20px"})})},"reset-filter-btn"),o&&e.jsxs(pt,{$variant:"icon",$showFilter:s,disabled:n,onClick:w,children:["Filter",e.jsx(k,{name:"icon-chevron-down",width:"20px",height:"20px"})]},"filter-btn")]},"filter-buttons"),(s||!o)&&e.jsxs(dt,{variants:Ee,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(T,{id:"language",label:"Languages",value:(t==null?void 0:t.language)??"",options:h,minWidth:"220px",disabled:n,onChange:l}),e.jsx(T,{id:"level",label:"Level of knowledge",value:(t==null?void 0:t.level)??"",options:r,minWidth:"246px",disabled:n,onChange:l}),e.jsx(T,{id:"price",label:"Price",value:(t==null?void 0:t.price)??"",options:m,minWidth:"124px",disabled:n,onChange:l})]},"dropdowns")]})})},ht=Ie`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,S=a.div`
  background-image: linear-gradient(
    90deg,
    ${g.semiTransparent(.03)} 25%,
    ${g.semiTransparent(.07)} 50%,
    ${g.semiTransparent(.03)} 75%
  );
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${ht} 1.2s infinite;
  border-radius: 12px;
`,mt=a(y.div)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  @media only screen and (min-width: ${p.tablet}px) {
    gap: 32px;
  }
  @media only screen and (min-width: ${p.desktop}px) {
    flex-direction: row;
    gap: 48px;
  }
`,ut=a(S)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`,gt=a.div`
  width: 100%;
`,ft=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
`,wt=a(S)`
  height: ${({height:t})=>t||"20px"};
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
  margin-bottom: 32px;
`,I=a(S)`
  height: ${({height:t})=>t||"20px"};
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
  margin-bottom: 8px;
`,L=a(S)`
  height: 32px;
  width: ${({width:t})=>t||"100%"};
  border-radius: 35px;
`,vt=()=>e.jsxs(mt,{variants:F,initial:"initial",animate:"animate",children:[e.jsx(ut,{}),e.jsxs(gt,{children:[e.jsx(wt,{height:"26px"}),e.jsx(I,{width:"174px",height:"24px"}),e.jsx(I,{width:"738px",height:"24px"}),e.jsx(I,{width:"808px",height:"24px"}),e.jsxs(ft,{children:[e.jsx(L,{width:"110px"}),e.jsx(L,{width:"124px"}),e.jsx(L,{width:"133px"}),e.jsx(L,{width:"151px"}),e.jsx(L,{width:"124px"})]})]})]}),jt=a(y.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 32px;
`,_=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
`,P=a(S)`
  height: 48px;
  width: 100%;
`,R=a(S)`
  height: 18px;
  width: 70px;
`,yt=()=>e.jsxs(jt,{variants:F,initial:"initial",animate:"animate",children:[e.jsxs(_,{width:"220px",children:[e.jsx(R,{}),e.jsx(P,{})]}),e.jsxs(_,{width:"246px",children:[e.jsx(R,{}),e.jsx(P,{})]}),e.jsxs(_,{width:"124px",children:[e.jsx(R,{}),e.jsx(P,{})]})]}),bt=()=>e.jsxs(e.Fragment,{children:[e.jsx(yt,{}),Array(4).fill(0).map((t,i)=>e.jsx(vt,{},i))]}),$t=({onlyFavorites:t=!1})=>{const[i,s]=c.useState([]),[x,h]=c.useState(null),[r,m]=c.useState(!0),[n,o]=O(),{addToast:l}=U();return c.useEffect(()=>{const w=async()=>{try{const u=await je();s(u)}catch(u){console.error(u),l.error("Failed to load data. Please check your connection or try again later.")}finally{m(!1)}};m(!0),w()},[l]),c.useEffect(()=>{h({language:n.get("language"),level:n.get("level"),price:n.get("price")})},[n]),e.jsx(_e,{children:e.jsx(De,{children:r?e.jsx(bt,{}):e.jsxs(e.Fragment,{children:[e.jsx(xt,{filters:x,setSearchParams:o}),e.jsx(ot,{teachers:i,filters:x,onlyFavorites:t})]})})})},It=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"}));export{z as P,It as T};
