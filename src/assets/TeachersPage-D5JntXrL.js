const __vite__fileDeps=["src/assets/AuthRequiredModal-DzExeg1O.js","src/assets/hooks-K7UW4uoY.js","src/assets/react-vendor-CibYK_bk.js","src/assets/firebase-database-vendor-CbbLdNQs.js","src/assets/firebase-app-vendor-Dm8EoJqR.js","src/assets/firebase-auth-vendor-BiLe07Fo.js","src/assets/index-ZFOfhqv3.js","src/assets/ModalBody-BrjLGZFk.js","src/assets/PagePlaceholder-DtpzdRgF.js","src/assets/AuthModal-zB4pnUzu.js","src/assets/RingLoader-DbR8Q_jJ.js","src/assets/BookLessonModal-fH1y6lRe.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e,p as D,b as p,c as w,t as A,n as pe,a as he,f as U,g as xe,r as me,h as ue,u as ge,i as we,d as fe,k as ve}from"./hooks-K7UW4uoY.js";import{r as c,a as je,h as B}from"./react-vendor-CibYK_bk.js";import{L as ye,D as be,o as F,a as $e,b as ke,S as k,A as M,O as Se,d as Le,c as W,u as a,e as O,m as b,f as H,B as K,_ as q,s as Ce,g as Fe,h as Te,i as Ee}from"./index-ZFOfhqv3.js";import{N as Ie,P as N,T as Re}from"./PagePlaceholder-DtpzdRgF.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-database-vendor-CbbLdNQs.js";import{S as _e}from"./SectionContainer-rHw1Ezgd.js";const Pe=({value:t,isSelected:i,onChange:s})=>e.jsx(ye,{$isSelected:i,onClick:s,children:`#${t}`}),T=({id:t,label:i,value:s,options:h,minWidth:x,disabled:r,onChange:m})=>{const[n,o]=c.useState(!1),l=c.useRef(null),f=c.useRef(null),u=()=>{o(d=>!d)},g=d=>{d.key==="Enter"&&(m(d),o(!1))},y=d=>{(d.key==="Enter"||d.key===" ")&&u()};return c.useEffect(()=>{const d=j=>{l.current&&!l.current.contains(j.target)&&o(!1)},v=j=>{j.key==="Escape"&&o(!1)};return n?(document.addEventListener("click",d),document.addEventListener("keydown",v),window.addEventListener("blur",u)):(document.removeEventListener("click",d),document.removeEventListener("keydown",v),window.removeEventListener("blur",u)),()=>{document.removeEventListener("click",d),document.removeEventListener("keydown",v),window.removeEventListener("blur",u)}},[n]),e.jsxs(be,{ref:f,variants:F,children:[e.jsx($e,{htmlFor:t,children:i}),e.jsxs(ke,{ref:l,value:s,$disabled:r,$minWidth:x,$isOpen:n,onClick:u,onKeyDown:y,tabIndex:r?-1:0,children:[e.jsx("span",{children:s||"All"}),e.jsx(k,{name:"icon-chevron-down",width:"20",height:"20"})]}),f.current&&je.createPortal(e.jsx(M,{children:n&&e.jsxs(Se,{variants:Le,initial:"closed",animate:"open",exit:"closed",children:[e.jsx(W,{"data-name":t,"data-value":"",onClick:m,onKeyDown:g,tabIndex:0,children:"All"},`default${t}`),h.map(d=>e.jsx(W,{"data-name":t,"data-value":d,$isSelected:s===d+"",onClick:m,onKeyDown:g,tabIndex:0,children:d},d))]},"options-list")}),f.current)]})},De=(t,i,s=[],h)=>{const{language:x,level:r,price:m}=i;return t.filter(n=>{const o=h?s.includes(n.tid):!0,l=x?n.languages.includes(x):!0,f=r?n.levels.includes(r):!0,u=m?n.price_per_hour===Number(m):!0;return l&&f&&o&&u})},Ae=a.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 154px 0 96px 0;
`,Be=({isLastPage:t,showMore:i})=>e.jsx(Ae,{children:t?e.jsx(Ie,{children:D.isLastPage}):e.jsx(O,{onClick:i,children:"Load more"})}),Me=a.ul`
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
    ${({$star:t})=>t?`fill: ${w.primary}`:"stroke: currentColor"}
  }

  @media only screen and (min-width: ${p.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${w.semiTransparent(.2)};
    }
  }
`,Oe=a.span`
  margin-left: 0.25rem;
  color: ${w.green};
`,Ve=({lessonsDone:t,rating:i,price:s})=>e.jsxs(Me,{children:[e.jsxs(C,{children:[e.jsx(k,{name:"icon-book-open"}),e.jsx("span",{children:"Lessons online"})]}),e.jsx(C,{children:e.jsx("span",{children:`Lessons done: ${t}`})}),e.jsxs(C,{$star:!0,children:[e.jsx(k,{name:"icon-star"}),e.jsx("span",{children:`Rating: ${i}`})]}),e.jsxs(C,{children:[e.jsx("span",{children:"Price / 1 hour:"}),e.jsx(Oe,{children:`${s}$`})]})]}),We=a.ul`
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
    color: ${w.grey};
  }
`,z=a.button`
  text-decoration: underline;
  color: ${({$isSelected:t})=>t?w.primary:"currentColor"};
  background: none;
  border: none;
  transition: color ${A.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${w.primary};
    }
  }
  &:active {
    color: ${w.darkPrimary};
  }
`,Ne=({tid:t,languages:i,lessonInfo:s,conditions:h})=>{const[x,r]=B(),m=n=>{const o=n.target.textContent.split(",")[0];x.get("language")===o?r(l=>(l.delete("language"),l)):r(l=>(l.set("language",o),l))};return e.jsxs(We,{children:[e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Speaks:"})," ",i.map((n,o)=>{const l=x.get("language")===n;return o!==i.length-1?e.jsx(z,{$isSelected:l,onClick:m,children:`${n},`},`${t}${n}`):e.jsx(z,{$isSelected:l,onClick:m,children:n},`${t}${n}`)})]})}),e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Lesson Info:"})," ",s]})}),e.jsx("li",{children:e.jsxs(E,{children:[e.jsx("span",{children:"Conditions:"})," ",h.join(" ")]})})]})},ze=a(b.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${p.tablet-1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    gap: 32px;
  }
`,Ge=a(b.li)`
  font-weight: 500;
  line-height: 24px;
`,Ue=a.span`
  display: block;
  color: ${w.grey};
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
    fill: ${w.primary};
  }
`,Q=c.memo(({reviews:t=[]})=>t.length?e.jsx(ze,{children:t.map(i=>{const s=pe();return e.jsxs(Ge,{variants:H,children:[e.jsx(Ue,{children:i.reviewer_name}),e.jsxs(He,{children:[e.jsx(k,{name:"icon-star",width:"16",height:"16"}),Number(i.reviewer_rating).toFixed(1)]}),e.jsx("span",{children:i.comment})]},s)})}):null);Q.displayName="Reviews";const Ke=a.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: l;
  }
`,qe=({tid:t,levels:i})=>{const[s,h]=B(),x=r=>{const m=r.target.textContent.slice(1);s.get("level")===m?h(n=>(n.delete("level"),n)):h(n=>(n.set("level",m),n))};return e.jsx(Ke,{children:i.map(r=>{const m=s.get("level")===r;return e.jsx(Pe,{isSelected:m,value:r,onChange:x},`${t}-${r}`)})})},Qe=a(b.li)`
  position: relative;
  padding: 24px;
  background-color: ${w.white};
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
  border: 3px solid ${w.avatarBorder};
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
    background-color: ${({$isOnline:t})=>t?w.green:w.red};
    border-radius: 50%;
    border: 2px solid ${w.white};
  }

  @media only screen and (min-width: ${p.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${p.desktop}px) {
    margin-right: 9px;
  }
`,Xe=a(b.div)`
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
  color: ${({$isFavorite:t})=>t?w.primary:"currentColor"};
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
      color: ${w.primary};
    }
  }
  &:active {
    color: ${w.darkPrimary};
  }
`,et=a(b.p)`
  line-height: 24px;
`,tt=a(K)`
  @media only screen and (min-width: ${p.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${p.desktop}px) {
    grid-column: 2 / 3;
  }
`,nt=c.lazy(()=>q(()=>import("./AuthRequiredModal-DzExeg1O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),it=c.lazy(()=>q(()=>import("./BookLessonModal-fH1y6lRe.js"),__vite__mapDeps([11,1,2,3,4,5,7,6,8]))),J=c.memo(c.forwardRef((t,i)=>{const{id:s,user:h,isOnline:x=!0,teacherData:r,favoriteIds:m,delay:n}=t,[o,l]=c.useState(!1),[f,u]=c.useState(!1),[g,y]=c.useState(null),{openModal:d,closeModal:v}=he(),{addToast:j}=U(),{tid:$,name:X,surname:Y,avatar_url:Z}=r,{levels:ee,rating:te,reviews:ne,languages:ie,conditions:ae,experience:se}=r,{lesson_info:re,lessons_done:oe,price_per_hour:le}=r,V=`${X} ${Y}`;c.useEffect(()=>{h?Object.values(m).includes($)&&u(!0):u(!1)},[m,$,h]),c.useEffect(()=>{g&&j.error("Something went wrong. Please try again later or refresh the page.")},[j,g]);const de=async()=>{if(!h){d(e.jsx(nt,{openModal:d},"authRequired"));return}try{f?(await me(h.uid,$),u(!1)):(await xe(h.uid,$),u(!0))}catch(ce){y(ce)}};return e.jsxs(Qe,{id:s,custom:n,initial:"initial",animate:"animate",exit:"exit",variants:Ce,layout:"position",ref:i,children:[e.jsx(Ze,{$isFavorite:f,onClick:de,children:e.jsx(k,{name:"icon-heart",$isFavorite:f})}),e.jsx(Je,{$isOnline:x,children:e.jsx("img",{src:Z,alt:V,loading:"lazy",width:"96",height:"96"})}),e.jsx(Ye,{children:V}),e.jsx(Ve,{lessonsDone:oe,rating:te,price:le}),e.jsx(Ne,{tid:$,languages:ie,lessonInfo:re,conditions:ae}),e.jsx(Xe,{variants:Fe,initial:"initial",animate:o?"animate":"initial",exit:"exit",children:e.jsx(M,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(et,{variants:H,children:se}),e.jsx(Q,{reviews:ne})]}):e.jsx(O,{variant:"underline",onClick:()=>l(!o),children:"Read more"})})}),e.jsx(qe,{tid:$,levels:ee}),o&&e.jsx(tt,{onClick:()=>d(e.jsx(it,{teacherData:r,openModal:d,closeModal:v},"bookLesson")),children:"Book trial lesson"})]})}));J.displayName="TeacherCard";const at=a(b.ul)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,st=t=>{const{teachers:i,user:s,favoriteIds:h,initialCount:x,visibleCount:r,isLastPage:m,showMore:n}=t,o=c.useRef(null);c.useEffect(()=>{o.current&&o.current.scrollIntoView({behavior:"smooth",block:"start"})},[i.length]);const l=i.length%x||x,f=i.length-l;return e.jsxs(e.Fragment,{children:[e.jsx(at,{children:i.map((u,g)=>{const y=g%x===0,d=g>=x,$=y&&d&&g===f?{ref:o}:{};return e.jsx(J,{teacherData:u,user:s,favoriteIds:h,delay:(g-(r-x))*.1,...$},u.tid)})}),e.jsx(Be,{isLastPage:m,showMore:n})]})},G="/language-learning-app/",rt=({teachers:t,filters:i,onlyFavorites:s=!1,initialCount:h=4})=>{const[x,r]=c.useState(h),[m,n]=c.useState(!1),[o,l]=c.useState([]),[f,u]=c.useState(!1),[g,y]=ue(),{user:d}=ge();c.useLayoutEffect(()=>{r(h)},[h,i]),c.useEffect(()=>{if(y||!t.length)return;const j=De(t,i,g,s);if(j.length)u(!1);else{u(!0),l([]);return}const $=j.slice(0,x);l($),x>=j.length?n(!0):n(!1)},[t,g,i,y,s,x]);const v=()=>{r(j=>j+h)};return f?g.length===0?e.jsx(N,{src:`${G}images/empty.svg`,notification:D.isEmpty.noFavTeachers}):e.jsx(N,{src:`${G}images/filter.svg`,notification:D.isEmpty.noFilterTeachers}):o.length!==0&&e.jsx(st,{teachers:o,user:d,favoriteIds:g,initialCount:h,visibleCount:x,isLastPage:m,showMore:v})},ot=a.div`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: ${p.tablet}px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`,lt=a(b.div)`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: ${p.tablet-1}px) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${p.tablet}px) {
    flex-direction: row;
    min-height: 74px;
  }
`,dt=a(b.div)`
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
`,ct=a(K)`
  --direction: ${({$showFilter:t})=>t?"-180deg":"0"};
  ${t=>({...t})}

  svg {
    transform: rotate(var(--direction));
    transition: ${A.default};
    transition-property: transform;
  }
`,pt=({filters:t,setSearchParams:i})=>{const[s,h]=c.useState(!1),[x,r,m,n]=we(),o=fe(`(max-width: ${p.tablet-1}px)`),l=g=>{const y=g.currentTarget.getAttribute("data-name"),d=g.currentTarget.getAttribute("data-value");i(d?v=>(v.set(y,d),v):v=>(v.delete(y),v))},f=()=>{h(g=>!g)},u=()=>{i(new URLSearchParams)};return e.jsx(ot,{children:e.jsxs(M,{children:[e.jsxs(dt,{children:[((t==null?void 0:t.language)||(t==null?void 0:t.level)||(t==null?void 0:t.price))&&e.jsx(b.div,{variants:F,initial:"initial",animate:"animate",exit:"exit",children:e.jsx(O,{variant:"icon",onClick:u,disabled:n,children:e.jsx(k,{name:"icon-filter-x",width:"20px",height:"20px"})})},"reset-filter-btn"),o&&e.jsxs(ct,{$variant:"icon",$showFilter:s,disabled:n,onClick:f,children:["Filter",e.jsx(k,{name:"icon-chevron-down",width:"20px",height:"20px"})]},"filter-btn")]},"filter-buttons"),(s||!o)&&e.jsxs(lt,{variants:Te,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(T,{id:"language",label:"Languages",value:(t==null?void 0:t.language)??"",options:x,minWidth:"220px",disabled:n,onChange:l}),e.jsx(T,{id:"level",label:"Level of knowledge",value:(t==null?void 0:t.level)??"",options:r,minWidth:"246px",disabled:n,onChange:l}),e.jsx(T,{id:"price",label:"Price",value:(t==null?void 0:t.price)??"",options:m,minWidth:"124px",disabled:n,onChange:l})]},"dropdowns")]})})},ht=Ee`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,S=a.div`
  background-image: linear-gradient(
    90deg,
    ${w.semiTransparent(.03)} 25%,
    ${w.semiTransparent(.07)} 50%,
    ${w.semiTransparent(.03)} 75%
  );
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${ht} 1.2s infinite;
  border-radius: 12px;
`,xt=a(b.div)`
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
`,mt=a(S)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`,ut=a.div`
  width: 100%;
`,gt=a.div`
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
`,ft=()=>e.jsxs(xt,{variants:F,initial:"initial",animate:"animate",children:[e.jsx(mt,{}),e.jsxs(ut,{children:[e.jsx(wt,{height:"26px"}),e.jsx(I,{width:"174px",height:"24px"}),e.jsx(I,{width:"738px",height:"24px"}),e.jsx(I,{width:"808px",height:"24px"}),e.jsxs(gt,{children:[e.jsx(L,{width:"110px"}),e.jsx(L,{width:"124px"}),e.jsx(L,{width:"133px"}),e.jsx(L,{width:"151px"}),e.jsx(L,{width:"124px"})]})]})]}),vt=a(b.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 32px;
`,R=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
`,_=a(S)`
  height: 48px;
  width: 100%;
`,P=a(S)`
  height: 18px;
  width: 70px;
`,jt=()=>e.jsxs(vt,{variants:F,initial:"initial",animate:"animate",children:[e.jsxs(R,{width:"220px",children:[e.jsx(P,{}),e.jsx(_,{})]}),e.jsxs(R,{width:"246px",children:[e.jsx(P,{}),e.jsx(_,{})]}),e.jsxs(R,{width:"124px",children:[e.jsx(P,{}),e.jsx(_,{})]})]}),yt=()=>e.jsxs(e.Fragment,{children:[e.jsx(jt,{}),Array(4).fill(0).map((t,i)=>e.jsx(ft,{},i))]}),Et=({onlyFavorites:t=!1})=>{const[i,s]=c.useState([]),[h,x]=c.useState(null),[r,m]=c.useState(!0),[n,o]=B(),{addToast:l}=U();return c.useEffect(()=>{const f=async()=>{try{const u=await ve();s(u)}catch(u){console.error(u),l.error("Failed to load data. Please check your connection or try again later.")}finally{m(!1)}};m(!0),f()},[l]),c.useEffect(()=>{x({language:n.get("language"),level:n.get("level"),price:n.get("price")})},[n]),e.jsx(_e,{children:e.jsx(Re,{children:r?e.jsx(yt,{}):e.jsxs(e.Fragment,{children:[e.jsx(pt,{filters:h,setSearchParams:o}),e.jsx(rt,{teachers:i,filters:h,onlyFavorites:t})]})})})};export{Et as default};
