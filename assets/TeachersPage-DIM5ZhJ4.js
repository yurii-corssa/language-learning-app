import{f as I,p as ve,g as J,h as we,i as be,k as R,o as ye,l as $e,n as l,d as X,j as e,L as ke,D as Se,q as E,t as Le,v as Ce,S as k,w as Fe,A as P,O as Ee,x as Te,y as q,P as Ie,N as Z,M as ee,z as K,C as Re,E as S,F as z,G as Pe,H as Me,I as Ae,J as Be,K as C,Q as Ne,T as We,U as M,V as De,W as Ve,X as _e,Y as Oe,Z as Ue,_ as Ge,$ as He,u as d,a0 as _,b as m,c as v,a1 as U,a2 as G,m as $,a3 as te,B as ne,a4 as qe,s as Ke,a5 as ze,a6 as Qe,a7 as Ye,a8 as Je,a9 as Xe}from"./index-xOxtrsdn.js";import{S as Ze}from"./SectionContainer-CfCeyaNV.js";const et=async(t,n)=>{const a=I(R,`users/${t}/favorites`);ve(a,n)},tt=async(t,n)=>{const a=I(R,`users/${t}/favorites`);(await J(a)).forEach(r=>{r.val()===n&&we(be(a,r.key))})},nt=(t,n)=>{const a=I(R,`users/${t}/favorites`),s=r=>{r.exists()?n(r.val()):n({})};return ye(a,s),()=>{$e(a,s)}},st=()=>{const[t,n]=l.useState([]),[a,s]=l.useState(!0),{user:r,isLoadingAuth:o}=X();return l.useEffect(()=>{if(o)s(!0);else if(r){const c=nt(r.uid,i=>{n(Object.values(i).reverse()),s(!1)});return()=>{c()}}else s(!1)},[o,r]),[t,a]},se=async()=>{const t=[],n=I(R,"teachers"),a=await J(n);return a.exists()&&a.forEach(s=>{t.push({tid:s.key,...s.val()})}),t},at=()=>{const[t,n]=l.useState([]),[a,s]=l.useState([]),[r,o]=l.useState([]),[c,i]=l.useState(!0),[h,p]=l.useState(null);return l.useEffect(()=>{(async()=>{try{const g=await se(),f=new Set,w=new Set,x=new Set;g.forEach(u=>{u.languages.forEach(y=>f.add(y)),u.levels.forEach(y=>w.add(y)),x.add(u.price_per_hour)});const b=[...x].sort((u,y)=>u-y);n([...f]),s([...w]),o(b)}catch(g){p(g)}finally{i(!1)}})()},[]),[t,a,r,c,h]},it=({value:t,isSelected:n,onChange:a})=>e.jsx(ke,{$isSelected:n,onClick:a,children:`#${t}`}),A=({id:t,label:n,value:a,options:s,minWidth:r,disabled:o,onChange:c})=>{const[i,h]=l.useState(!1),p=l.useRef(null),j=l.useRef(null),g=()=>{h(x=>!x)},f=x=>{x.key==="Enter"&&(c(x),h(!1))},w=x=>{(x.key==="Enter"||x.key===" ")&&g()};return l.useEffect(()=>{const x=u=>{p.current&&!p.current.contains(u.target)&&h(!1)},b=u=>{u.key==="Escape"&&h(!1)};return i?(document.addEventListener("click",x),document.addEventListener("keydown",b),window.addEventListener("blur",g)):(document.removeEventListener("click",x),document.removeEventListener("keydown",b),window.removeEventListener("blur",g)),()=>{document.removeEventListener("click",x),document.removeEventListener("keydown",b),window.removeEventListener("blur",g)}},[i]),e.jsxs(Se,{ref:j,variants:E,children:[e.jsx(Le,{htmlFor:t,children:n}),e.jsxs(Ce,{ref:p,value:a,$disabled:o,$minWidth:r,$isOpen:i,onClick:g,onKeyDown:w,tabIndex:o?-1:0,children:[e.jsx("span",{children:a||"All"}),e.jsx(k,{name:"icon-chevron-down",width:"20",height:"20"})]}),j.current&&Fe.createPortal(e.jsx(P,{children:i&&e.jsxs(Ee,{variants:Te,initial:"closed",animate:"open",exit:"closed",children:[e.jsx(q,{"data-name":t,"data-value":"",onClick:c,onKeyDown:f,tabIndex:0,children:"All"},`default${t}`),s.map(x=>e.jsx(q,{"data-name":t,"data-value":x,$isSelected:a===x+"",onClick:c,onKeyDown:f,tabIndex:0,children:x},x))]},"options-list")}),j.current)]})},O=({src:t,notification:n})=>e.jsxs(Ie,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx("svg",{width:"250",height:"250",children:e.jsx("use",{href:`${t}#picture`})}),e.jsx(Z,{children:n})]}),rt="/language-learning-app/",ot=({openModal:t})=>e.jsxs(ee,{title:K.authRequiredModal.title,text:K.authRequiredModal.text,children:[e.jsx(O,{src:`${rt}images/authentication.svg`}),e.jsxs(Re,{children:[e.jsx(S,{width:"100%",onClick:()=>t(e.jsx(z,{type:"login"},"login")),children:"Log in"}),e.jsx(S,{width:"100%",onClick:()=>t(e.jsx(z,{type:"registration"},"registration")),children:"Registration"})]})]}),lt=({closeModal:t})=>{var o,c,i,h;const{register:n,handleSubmit:a,formState:s}=Pe({resolver:De(Ve)}),r=async p=>{console.log(p),t()};return e.jsxs(Me,{onSubmit:a(r),children:[e.jsxs(Ae,{children:[e.jsx(Be,{children:"What is your main reason for learning English?"}),e.jsx(C,{id:"career",name:"reason",value:"career",label:"Career and business",disabled:s.isSubmitting,...n("reason")}),e.jsx(C,{id:"kids",name:"reason",value:"kids",label:"Lesson for kids",disabled:s.isSubmitting,...n("reason")}),e.jsx(C,{id:"abroad",name:"reason",value:"abroad",label:"Living abroad",disabled:s.isSubmitting,...n("reason")}),e.jsx(C,{id:"exams",name:"reason",value:"exams",label:"Exams and coursework",disabled:s.isSubmitting,...n("reason")}),e.jsx(C,{id:"hobby",name:"reason",value:"hobby",label:"Culture, travel or hobby",disabled:s.isSubmitting,...n("reason")}),e.jsx(P,{children:((o=s.errors.reason)==null?void 0:o.message)&&e.jsx(Ne,{variants:E,initial:"initial",animate:"animate",exit:"exit",children:s.errors.reason.message})})]}),e.jsxs(We,{children:[e.jsx(M,{type:"text",placeholder:"Full Name",disabled:s.isSubmitting,autoComplete:"name",errorMessage:(c=s.errors.fullName)==null?void 0:c.message,...n("fullName")}),e.jsx(M,{type:"email",placeholder:"Email",disabled:s.isSubmitting,autoComplete:"email",errorMessage:(i=s.errors.email)==null?void 0:i.message,...n("email")}),e.jsx(M,{type:"tel",placeholder:"Phone number",disabled:s.isSubmitting,autoComplete:"tel",errorMessage:(h=s.errors.phoneNumber)==null?void 0:h.message,...n("phoneNumber")})]}),e.jsx(S,{type:"submit",width:"100%",disabled:s.isSubmitting,children:s.isSubmitting?"loading...":"Book"})]})},dt=({teacherData:t,closeModal:n})=>{const{name:a,surname:s,avatar_url:r}=t,o=`${a} ${s}`;return e.jsxs(ee,{title:"Book trial lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.",children:[e.jsxs(_e,{children:[e.jsx(Oe,{children:e.jsx(Ue,{src:r,alt:o,width:"44",height:"44"})}),e.jsxs("div",{children:[e.jsx(Ge,{children:"Your teacher"}),e.jsx(He,{children:o})]})]}),e.jsx(lt,{closeModal:n})]})},ct=(t,n,a=[],s)=>{const{language:r,level:o,price:c}=n;return t.filter(i=>{const h=s?a.includes(i.tid):!0,p=r?i.languages.includes(r):!0,j=o?i.levels.includes(o):!0,g=c?i.price_per_hour===Number(c):!0;return p&&j&&h&&g})},ht=d.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 154px 0 96px 0;
`,pt=({isLastPage:t,showMore:n})=>e.jsx(ht,{children:t?e.jsx(Z,{children:_.isLastPage}):e.jsx(S,{onClick:n,children:"Load more"})}),xt=d.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  @media only screen and (max-width: ${m.desktop-1}px) {
    column-gap: 18px;
  }
  @media only screen and (min-width: ${m.tablet}px) {
    grid-area: s;
  }
  @media only screen and (min-width: ${m.desktop}px) {
    column-gap: 32px;
  }
`,T=d.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 24px;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    ${({$star:t})=>t?`fill: ${v.primary}`:"stroke: currentColor"}
  }

  @media only screen and (min-width: ${m.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${v.semiTransparent(.2)};
    }
  }
`,ut=d.span`
  margin-left: 0.25rem;
  color: ${v.green};
`,mt=({lessonsDone:t,rating:n,price:a})=>e.jsxs(xt,{children:[e.jsxs(T,{children:[e.jsx(k,{name:"icon-book-open"}),e.jsx("span",{children:"Lessons online"})]}),e.jsx(T,{children:e.jsx("span",{children:`Lessons done: ${t}`})}),e.jsxs(T,{$star:!0,children:[e.jsx(k,{name:"icon-star"}),e.jsx("span",{children:`Rating: ${n}`})]}),e.jsxs(T,{children:[e.jsx("span",{children:"Price / 1 hour:"}),e.jsx(ut,{children:`${a}$`})]})]}),gt=d.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${m.tablet}px) {
    grid-area: i;
  }
`,B=d.p`
  font-weight: 500;
  line-height: 24px;

  & > span {
    color: ${v.grey};
  }
`,Q=d.button`
  text-decoration: underline;
  color: ${({$isSelected:t})=>t?v.primary:"currentColor"};
  background: none;
  border: none;
  transition: color ${U.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${v.primary};
    }
  }
  &:active {
    color: ${v.darkPrimary};
  }
`,ft=({tid:t,languages:n,lessonInfo:a,conditions:s})=>{const[r,o]=G(),c=i=>{const h=i.target.textContent.split(",")[0];r.get("language")===h?o(p=>(p.delete("language"),p)):o(p=>(p.set("language",h),p))};return e.jsxs(gt,{children:[e.jsx("li",{children:e.jsxs(B,{children:[e.jsx("span",{children:"Speaks:"})," ",n.map((i,h)=>{const p=r.get("language")===i;return h!==n.length-1?e.jsx(Q,{$isSelected:p,onClick:c,children:`${i},`},`${t}${i}`):e.jsx(Q,{$isSelected:p,onClick:c,children:i},`${t}${i}`)})]})}),e.jsx("li",{children:e.jsxs(B,{children:[e.jsx("span",{children:"Lesson Info:"})," ",a]})}),e.jsx("li",{children:e.jsxs(B,{children:[e.jsx("span",{children:"Conditions:"})," ",s.join(" ")]})})]})},jt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let vt=(t=21)=>{let n="",a=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=jt[a[t]&63];return n};const wt=d($.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${m.tablet-1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${m.tablet}px) {
    gap: 32px;
  }
`,bt=d($.li)`
  font-weight: 500;
  line-height: 24px;
`,yt=d.span`
  display: block;
  color: ${v.grey};
  margin-bottom: 2px;
`,$t=d.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;

  @media only screen and (min-width: ${m.tablet}px) {
    margin-bottom: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${v.primary};
  }
`,ae=l.memo(({reviews:t=[]})=>t.length?e.jsx(wt,{children:t.map(n=>{const a=vt();return e.jsxs(bt,{variants:te,children:[e.jsx(yt,{children:n.reviewer_name}),e.jsxs($t,{children:[e.jsx(k,{name:"icon-star",width:"16",height:"16"}),Number(n.reviewer_rating).toFixed(1)]}),e.jsx("span",{children:n.comment})]},a)})}):null);ae.displayName="Reviews";const kt=d.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${m.tablet}px) {
    grid-area: l;
  }
`,St=({tid:t,levels:n})=>{const[a,s]=G(),r=o=>{const c=o.target.textContent.slice(1);a.get("level")===c?s(i=>(i.delete("level"),i)):s(i=>(i.set("level",c),i))};return e.jsx(kt,{children:n.map(o=>{const c=a.get("level")===o;return e.jsx(it,{isSelected:c,value:o,onChange:r},`${t}-${o}`)})})},Lt=d($.li)`
  position: relative;
  padding: 24px;
  background-color: ${v.white};
  border-radius: 24px;
  scroll-margin-top: 50px;

  @media only screen and (max-width: ${m.tablet-1}px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media only screen and (min-width: ${m.tablet}px) {
    display: grid;
    gap: 32px;

    @media (max-width: ${m.desktop-1}px) {
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "a n"
        "a s"
        "i i"
        "m m"
        "l l";
    }
  }

  @media only screen and (min-width: ${m.desktop}px) {
    scroll-margin-top: 40px;
    column-gap: 39px;
    grid-template-columns: auto max-content 1fr;
    grid-template-areas:
      "a n s"
      "a i i"
      ". m m"
      ". l l";
  }
`,Ct=d.div`
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 3px solid ${v.avatarBorder};
  border-radius: 50%;
  overflow: hidden;

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
    background-color: ${({$isOnline:t})=>t?v.green:v.red};
    border-radius: 50%;
    border: 2px solid ${v.white};
  }

  @media only screen and (min-width: ${m.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${m.desktop}px) {
    margin-right: 9px;
  }
`,Ft=d($.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: ${m.tablet-1}px) {
    gap: 16px;
  }
  @media only screen and (min-width: ${m.tablet}px) {
    margin-top: -16px;
    grid-area: m;
    gap: 32px;
  }
`,Et=d.h2`
  font-weight: 500;
  line-height: 24px;
  margin-right: auto;

  @media only screen and (min-width: ${m.tablet}px) {
    align-self: end;
    grid-area: n;
  }
`,Tt=d.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  color: ${({$isFavorite:t})=>t?v.primary:"currentColor"};
  transition: ${U.default};
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
      color: ${v.primary};
    }
  }
  &:active {
    color: ${v.darkPrimary};
  }
`,It=d($.p)`
  line-height: 24px;
`,Rt=d(ne)`
  @media only screen and (min-width: ${m.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${m.desktop}px) {
    grid-column: 2 / 3;
  }
`,ie=l.memo(l.forwardRef((t,n)=>{const{id:a,user:s,isOnline:r=!0,teacherData:o,favoriteIds:c,delay:i}=t,[h,p]=l.useState(!1),[j,g]=l.useState(!1),[f,w]=l.useState(null),{openModal:x,closeModal:b}=qe(),{tid:u,name:y,surname:re,avatar_url:oe}=o,{levels:le,rating:de,reviews:ce,languages:he,conditions:pe,experience:xe}=o,{lesson_info:ue,lessons_done:me,price_per_hour:ge}=o,H=`${y} ${re}`;l.useEffect(()=>{s?Object.values(c).includes(u)&&g(!0):g(!1)},[c,u,s]),l.useEffect(()=>{f&&alert(f)},[f]);const fe=async()=>{if(!s){x(e.jsx(ot,{openModal:x},"authRequired"));return}try{j?(await tt(s.uid,u),g(!1)):(await et(s.uid,u),g(!0))}catch(je){w(je)}};return e.jsxs(Lt,{id:a,custom:i,initial:"initial",animate:"animate",exit:"exit",variants:Ke,layout:"position",ref:n,children:[e.jsx(Tt,{$isFavorite:j,onClick:fe,children:e.jsx(k,{name:"icon-heart",$isFavorite:j})}),e.jsx(Ct,{$isOnline:r,children:e.jsx("img",{src:oe,alt:H,width:"96",height:"96"})}),e.jsx(Et,{children:H}),e.jsx(mt,{lessonsDone:me,rating:de,price:ge}),e.jsx(ft,{tid:u,languages:he,lessonInfo:ue,conditions:pe}),e.jsx(Ft,{variants:ze,initial:"initial",animate:h?"animate":"initial",exit:"exit",children:e.jsx(P,{children:h?e.jsxs(e.Fragment,{children:[e.jsx(It,{variants:te,children:xe}),e.jsx(ae,{reviews:ce})]}):e.jsx(S,{variant:"underline",onClick:()=>p(!h),children:"Read more"})})}),e.jsx(St,{tid:u,levels:le}),h&&e.jsx(Rt,{onClick:()=>x(e.jsx(dt,{teacherData:o,closeModal:b},"bookLesson")),children:"Book trial lesson"})]})}));ie.displayName="TeacherCard";const Pt=d($.ul)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Mt=t=>{const{teachers:n,user:a,favoriteIds:s,initialCount:r,visibleCount:o,isLastPage:c,showMore:i}=t,h=l.useRef(null);l.useEffect(()=>{h.current&&h.current.scrollIntoView({behavior:"smooth",block:"start"})},[n.length]);const p=n.length%r||r,j=n.length-p;return e.jsxs(e.Fragment,{children:[e.jsx(Pt,{children:n.map((g,f)=>{const w=f%r===0,x=f>=r,y=w&&x&&f===j?{ref:h}:{};return e.jsx(ie,{teacherData:g,user:a,favoriteIds:s,delay:(f-(o-r))*.1,...y},g.tid)})}),e.jsx(pt,{isLastPage:c,showMore:i})]})},Y="/language-learning-app/",At=({teachers:t,filters:n,onlyFavorites:a=!1,initialCount:s=4})=>{const[r,o]=l.useState(s),[c,i]=l.useState(!1),[h,p]=l.useState([]),[j,g]=l.useState(!1),[f,w]=st(),{user:x}=X();l.useLayoutEffect(()=>{o(s)},[s,n]),l.useEffect(()=>{if(w||!t.length)return;const u=ct(t,n,f,a);if(u.length)g(!1);else{g(!0),p([]);return}const y=u.slice(0,r);p(y),r>=u.length?i(!0):i(!1)},[t,f,n,w,a,r]);const b=()=>{o(u=>u+s)};return j?f.length===0?e.jsx(O,{src:`${Y}images/empty.svg`,notification:_.isEmpty.noFavTeachers}):e.jsx(O,{src:`${Y}images/filter.svg`,notification:_.isEmpty.noFilterTeachers}):h.length!==0&&e.jsx(Mt,{teachers:h,user:x,favoriteIds:f,initialCount:s,visibleCount:r,isLastPage:c,showMore:b})},Bt=d.div`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: ${m.tablet}px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`,Nt=d($.div)`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: ${m.tablet-1}px) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${m.tablet}px) {
    flex-direction: row;
    min-height: 74px;
  }
`,Wt=d($.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 24px;

  @media only screen and (max-width: ${m.tablet-1}px) {
    justify-content: end;
  }
  @media only screen and (min-width: ${m.tablet}px) {
    height: 48px;
    justify-content: start;
  }
`,Dt=d(ne)`
  --direction: ${({$showFilter:t})=>t?"-180deg":"0"};
  ${t=>({...t})}

  svg {
    transform: rotate(var(--direction));
    transition: ${U.default};
    transition-property: transform;
  }
`,Vt=({filters:t,setSearchParams:n})=>{const[a,s]=l.useState(!1),[r,o,c,i,h]=at(),p=Qe(`(max-width: ${m.tablet-1}px)`),j=w=>{const x=w.currentTarget.getAttribute("data-name"),b=w.currentTarget.getAttribute("data-value");n(b?u=>(u.set(x,b),u):u=>(u.delete(x),u))},g=()=>{s(w=>!w)},f=()=>{n(new URLSearchParams)};return e.jsxs(Bt,{children:[e.jsxs(P,{children:[e.jsxs(Wt,{children:[((t==null?void 0:t.language)||(t==null?void 0:t.level)||(t==null?void 0:t.price))&&e.jsx($.div,{variants:E,initial:"initial",animate:"animate",exit:"exit",children:e.jsx(S,{variant:"icon",onClick:f,disabled:i,children:e.jsx(k,{name:"icon-filter-x",width:"20px",height:"20px"})})},"reset-filter-btn"),p&&e.jsxs(Dt,{$variant:"icon",$showFilter:a,disabled:i,onClick:g,children:["Filter",e.jsx(k,{name:"icon-chevron-down",width:"20px",height:"20px"})]},"filter-btn")]},"filter-buttons"),(a||!p)&&e.jsxs(Nt,{variants:Ye,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(A,{id:"language",label:"Languages",value:(t==null?void 0:t.language)??"",options:r,minWidth:"220px",disabled:i,onChange:j}),e.jsx(A,{id:"level",label:"Level of knowledge",value:(t==null?void 0:t.level)??"",options:o,minWidth:"246px",disabled:i,onChange:j}),e.jsx(A,{id:"price",label:"Price",value:(t==null?void 0:t.price)??"",options:c,minWidth:"124px",disabled:i,onChange:j})]},"dropdowns")]}),h&&e.jsxs("p",{children:["Error: ",h.message]})]})},_t=Je`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,L=d.div`
  background-image: linear-gradient(
    90deg,
    ${v.semiTransparent(.03)} 25%,
    ${v.semiTransparent(.07)} 50%,
    ${v.semiTransparent(.03)} 75%
  );
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${_t} 1.2s infinite;
  border-radius: 12px;
`,Ot=d($.div)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;

  @media only screen and (min-width: ${m.tablet}px) {
    gap: 32px;
  }
  @media only screen and (min-width: ${m.desktop}px) {
    flex-direction: row;
    gap: 48px;
  }
`,Ut=d(L)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`,Gt=d.div`
  width: 100%;
`,Ht=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
`,qt=d(L)`
  height: ${({height:t})=>t||"20px"};
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
  margin-bottom: 32px;
`,N=d(L)`
  height: ${({height:t})=>t||"20px"};
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
  margin-bottom: 8px;
`,F=d(L)`
  height: 32px;
  width: ${({width:t})=>t||"100%"};
  border-radius: 35px;
`,Kt=()=>e.jsxs(Ot,{variants:E,initial:"initial",animate:"animate",children:[e.jsx(Ut,{}),e.jsxs(Gt,{children:[e.jsx(qt,{height:"26px"}),e.jsx(N,{width:"174px",height:"24px"}),e.jsx(N,{width:"738px",height:"24px"}),e.jsx(N,{width:"808px",height:"24px"}),e.jsxs(Ht,{children:[e.jsx(F,{width:"110px"}),e.jsx(F,{width:"124px"}),e.jsx(F,{width:"133px"}),e.jsx(F,{width:"151px"}),e.jsx(F,{width:"124px"})]})]})]}),zt=d($.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 32px;
`,W=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
`,D=d(L)`
  height: 48px;
  width: 100%;
`,V=d(L)`
  height: 18px;
  width: 70px;
`,Qt=()=>e.jsxs(zt,{variants:E,initial:"initial",animate:"animate",children:[e.jsxs(W,{width:"220px",children:[e.jsx(V,{}),e.jsx(D,{})]}),e.jsxs(W,{width:"246px",children:[e.jsx(V,{}),e.jsx(D,{})]}),e.jsxs(W,{width:"124px",children:[e.jsx(V,{}),e.jsx(D,{})]})]}),Yt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Qt,{}),Array(4).fill(0).map((t,n)=>e.jsx(Kt,{},n))]}),Zt=({onlyFavorites:t=!1})=>{const[n,a]=l.useState([]),[s,r]=l.useState(null),[o,c]=l.useState(!0),[i,h]=l.useState(null),[p,j]=G();return l.useEffect(()=>{const g=async()=>{try{const f=await se();a(f)}catch(f){h(f)}finally{c(!1)}};c(!0),g()},[]),l.useEffect(()=>{r({language:p.get("language"),level:p.get("level"),price:p.get("price")})},[p]),i&&alert(i.message),e.jsx(Ze,{children:e.jsx(Xe,{children:o?e.jsx(Yt,{}):e.jsxs(e.Fragment,{children:[e.jsx(Vt,{filters:s,setSearchParams:j}),e.jsx(At,{teachers:n,filters:s,onlyFavorites:t})]})})})};export{Zt as default};
