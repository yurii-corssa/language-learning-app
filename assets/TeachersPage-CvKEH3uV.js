import{f as R,p as ve,g as ee,h as we,i as be,k as B,o as ye,l as $e,n as c,d as te,j as e,L as ke,D as Se,q as H,t as Le,v as Ce,S as k,w as Fe,A as M,O as Ee,x as Te,y as Q,P as Ie,N as ne,M as se,z as Y,C as Re,E as S,F as J,G as Be,H as Me,I as Pe,J as Ae,K as E,Q as Ne,T as P,U as We,V as A,W as De,X as Ve,Y as _e,Z as Oe,_ as Ue,$ as Ge,a0 as He,u as d,a1 as U,b as x,c as j,a2 as q,a3 as K,m as $,B as ae,a4 as qe,s as Ke,a5 as ze,a6 as Qe,a7 as Ye,a8 as Je,a9 as Xe}from"./index-bkmxFgDs.js";import{S as Ze}from"./SectionContainer-el403DIv.js";const et=async(t,n)=>{const a=R(B,`users/${t}/favorites`);ve(a,n)},tt=async(t,n)=>{const a=R(B,`users/${t}/favorites`);(await ee(a)).forEach(r=>{r.val()===n&&we(be(a,r.key))})},nt=(t,n)=>{const a=R(B,`users/${t}/favorites`),s=r=>{r.exists()?n(r.val()):n({})};return ye(a,s),()=>{$e(a,s)}},st=()=>{const[t,n]=c.useState([]),[a,s]=c.useState(!0),{user:r,isLoadingAuth:l}=te();return c.useEffect(()=>{if(l)s(!0);else if(r){const h=nt(r.uid,i=>{n(Object.values(i).reverse()),s(!1)});return()=>{h()}}else s(!1)},[l,r]),[t,a]},ie=async()=>{const t=[],n=R(B,"teachers"),a=await ee(n);return a.exists()&&a.forEach(s=>{t.push({tid:s.key,...s.val()})}),t},at=()=>{const[t,n]=c.useState([]),[a,s]=c.useState([]),[r,l]=c.useState([]),[h,i]=c.useState(!0),[p,o]=c.useState(null);return c.useEffect(()=>{(async()=>{try{const u=await ie(),g=new Set,w=new Set,b=new Set;u.forEach(y=>{y.languages.forEach(m=>g.add(m)),y.levels.forEach(m=>w.add(m)),b.add(y.price_per_hour)}),n([...g]),s([...w]),l([...b])}catch(u){o(u)}finally{i(!1)}})()},[]),[t,a,r,h,p]},it=({value:t,isSelected:n,onChange:a})=>e.jsx(ke,{$isSelected:n,onClick:a,children:`#${t}`}),N=({id:t,label:n,value:a,options:s,minWidth:r,disabled:l,onChange:h})=>{var b,y,m;const[i,p]=c.useState(!1),o=c.useRef(null),v=document.getElementById("dropdown-root"),u=()=>{p(f=>!f)},g=f=>{f.key==="Enter"&&(h(f),p(!1))},w=f=>{(f.key==="Enter"||f.key===" ")&&u()};return c.useEffect(()=>{const f=F=>{o.current&&!o.current.contains(F.target)&&p(!1)},C=F=>{F.key==="Escape"&&p(!1)};return i?(document.addEventListener("click",f),document.addEventListener("keydown",C),window.addEventListener("blur",u)):(document.removeEventListener("click",f),document.removeEventListener("keydown",C),window.removeEventListener("blur",u)),()=>{document.removeEventListener("click",f),document.removeEventListener("keydown",C),window.removeEventListener("blur",u)}},[i]),e.jsxs(Se,{variants:H,children:[e.jsx(Le,{htmlFor:t,children:n}),e.jsxs(Ce,{ref:o,value:a,$disabled:l,$minWidth:r,$isOpen:i,onClick:u,onKeyDown:w,tabIndex:l?-1:0,children:[e.jsx("span",{children:a||"All"}),e.jsx(k,{name:"icon-chevron-down",width:"20",height:"20"})]}),Fe.createPortal(e.jsx(M,{children:i&&e.jsxs(Ee,{variants:Te,initial:"closed",animate:"open",exit:"closed",$top:(b=o==null?void 0:o.current)==null?void 0:b.getBoundingClientRect().bottom,$left:(y=o==null?void 0:o.current)==null?void 0:y.getBoundingClientRect().left,$width:(m=o==null?void 0:o.current)==null?void 0:m.getBoundingClientRect().width,children:[e.jsx(Q,{"data-name":t,"data-value":"",onClick:h,onKeyDown:g,tabIndex:0,children:"All"},`default${t}`),s.map(f=>e.jsx(Q,{"data-name":t,"data-value":f,$isSelected:a===f+"",onClick:h,onKeyDown:g,tabIndex:0,children:f},f))]},"options-list")}),v)]})},G=({src:t,notification:n})=>e.jsxs(Ie,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx("svg",{width:"250",height:"250",children:e.jsx("use",{href:`${t}#picture`})}),e.jsx(ne,{children:n})]}),rt="/language-learning-app/",ot=({openModal:t})=>e.jsxs(se,{title:Y.authRequiredModal.title,text:Y.authRequiredModal.text,children:[e.jsx(G,{src:`${rt}images/authentication.svg`}),e.jsxs(Re,{children:[e.jsx(S,{width:"100%",onClick:()=>t(e.jsx(J,{type:"login"},"login")),children:"Log in"}),e.jsx(S,{width:"100%",onClick:()=>t(e.jsx(J,{type:"registration"},"registration")),children:"Registration"})]})]}),lt=({closeModal:t})=>{var l,h,i,p;const{register:n,handleSubmit:a,formState:s}=Be({resolver:De(Ve)}),r=async o=>{console.log(o),t()};return e.jsxs(Me,{onSubmit:a(r),children:[e.jsxs(Pe,{children:[e.jsx(Ae,{children:"What is your main reason for learning English?"}),e.jsx(E,{id:"career",name:"reason",value:"career",label:"Career and business",disabled:s.isSubmitting,...n("reason")}),e.jsx(E,{id:"kids",name:"reason",value:"kids",label:"Lesson for kids",disabled:s.isSubmitting,...n("reason")}),e.jsx(E,{id:"abroad",name:"reason",value:"abroad",label:"Living abroad",disabled:s.isSubmitting,...n("reason")}),e.jsx(E,{id:"exams",name:"reason",value:"exams",label:"Exams and coursework",disabled:s.isSubmitting,...n("reason")}),e.jsx(E,{id:"hobby",name:"reason",value:"hobby",label:"Culture, travel or hobby",disabled:s.isSubmitting,...n("reason")}),e.jsx(M,{children:((l=s.errors.reason)==null?void 0:l.message)&&e.jsx(Ne,{variants:P,initial:"initial",animate:"animate",exit:"exit",children:s.errors.reason.message})})]}),e.jsxs(We,{children:[e.jsx(A,{type:"text",placeholder:"Full Name",disabled:s.isSubmitting,autoComplete:"name",errorMessage:(h=s.errors.fullName)==null?void 0:h.message,...n("fullName")}),e.jsx(A,{type:"email",placeholder:"Email",disabled:s.isSubmitting,autoComplete:"email",errorMessage:(i=s.errors.email)==null?void 0:i.message,...n("email")}),e.jsx(A,{type:"tel",placeholder:"Phone number",disabled:s.isSubmitting,autoComplete:"tel",errorMessage:(p=s.errors.phoneNumber)==null?void 0:p.message,...n("phoneNumber")})]}),e.jsx(S,{type:"submit",width:"100%",disabled:s.isSubmitting,children:s.isSubmitting?"loading...":"Book"})]})},dt=({teacherData:t,closeModal:n})=>{const{name:a,surname:s,avatar_url:r}=t,l=`${a} ${s}`;return e.jsxs(se,{title:"Book trial lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.",children:[e.jsxs(_e,{children:[e.jsx(Oe,{children:e.jsx(Ue,{src:r,alt:l,width:"44",height:"44"})}),e.jsxs("div",{children:[e.jsx(Ge,{children:"Your teacher"}),e.jsx(He,{children:l})]})]}),e.jsx(lt,{closeModal:n})]})},ct=(t,n,a=[],s)=>{const{language:r,level:l,price:h}=n;return t.filter(i=>{const p=s?a.includes(i.tid):!0,o=r?i.languages.includes(r):!0,v=l?i.levels.includes(l):!0,u=h?i.price_per_hour===Number(h):!0;return o&&v&&p&&u})},ht=d.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 154px 0 96px 0;
`,pt=({isLastPage:t,showMore:n})=>e.jsx(ht,{children:t?e.jsx(ne,{children:U.isLastPage}):e.jsx(S,{onClick:n,children:"Load more"})}),xt=d.ul`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  @media only screen and (max-width: ${x.desktop-1}px) {
    column-gap: 18px;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: s;
  }
  @media only screen and (min-width: ${x.desktop}px) {
    column-gap: 32px;
  }
`,I=d.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 24px;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    ${({$star:t})=>t?`fill: ${j.primary}`:"stroke: currentColor"}
  }

  @media only screen and (min-width: ${x.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${j.semiTransparent(.2)};
    }
  }
`,ut=d.span`
  margin-left: 0.25rem;
  color: ${j.green};
`,mt=({lessonsDone:t,rating:n,price:a})=>e.jsxs(xt,{children:[e.jsxs(I,{children:[e.jsx(k,{name:"icon-book-open"}),e.jsx("span",{children:"Lessons online"})]}),e.jsx(I,{children:e.jsx("span",{children:`Lessons done: ${t}`})}),e.jsxs(I,{$star:!0,children:[e.jsx(k,{name:"icon-star"}),e.jsx("span",{children:`Rating: ${n}`})]}),e.jsxs(I,{children:[e.jsx("span",{children:"Price / 1 hour:"}),e.jsx(ut,{children:`${a}$`})]})]}),gt=d.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: i;
  }
`,W=d.p`
  font-weight: 500;
  line-height: 24px;

  & > span {
    color: ${j.grey};
  }
`,X=d.button`
  text-decoration: underline;
  color: ${({$isSelected:t})=>t?j.primary:"currentColor"};
  background: none;
  border: none;
  transition: color ${q.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${j.primary};
    }
  }
  &:active {
    color: ${j.darkPrimary};
  }
`,ft=({tid:t,languages:n,lessonInfo:a,conditions:s})=>{const[r,l]=K(),h=i=>{const p=i.target.textContent.split(",")[0];r.get("language")===p?l(o=>(o.delete("language"),o)):l(o=>(o.set("language",p),o))};return e.jsxs(gt,{children:[e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Speaks:"})," ",n.map((i,p)=>{const o=r.get("language")===i;return p!==n.length-1?e.jsx(X,{$isSelected:o,onClick:h,children:`${i},`},`${t}${i}`):e.jsx(X,{$isSelected:o,onClick:h,children:i},`${t}${i}`)})]})}),e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Lesson Info:"})," ",a]})}),e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Conditions:"})," ",s.join(" ")]})})]})},jt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let vt=(t=21)=>{let n="",a=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=jt[a[t]&63];return n};const wt=d($.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${x.tablet-1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    gap: 32px;
  }
`,bt=d($.li)`
  font-weight: 500;
  line-height: 24px;
`,yt=d.span`
  display: block;
  color: ${j.grey};
  margin-bottom: 2px;
`,$t=d.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;

  @media only screen and (min-width: ${x.tablet}px) {
    margin-bottom: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${j.primary};
  }
`,re=c.memo(({reviews:t=[]})=>t.length?e.jsx(wt,{children:t.map(n=>{const a=vt();return e.jsxs(bt,{variants:H,children:[e.jsx(yt,{children:n.reviewer_name}),e.jsxs($t,{children:[e.jsx(k,{name:"icon-star",width:"16",height:"16"}),Number(n.reviewer_rating).toFixed(1)]}),e.jsx("span",{children:n.comment})]},a)})}):null);re.displayName="Reviews";const kt=d.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: l;
  }
`,St=({tid:t,levels:n})=>{const[a,s]=K(),r=l=>{const h=l.target.textContent.slice(1);a.get("level")===h?s(i=>(i.delete("level"),i)):s(i=>(i.set("level",h),i))};return e.jsx(kt,{children:n.map(l=>{const h=a.get("level")===l;return e.jsx(it,{isSelected:h,value:l,onChange:r},`${t}-${l}`)})})},Lt=d($.li)`
  position: relative;
  padding: 24px;
  background-color: ${j.white};
  border-radius: 24px;
  scroll-margin-top: 50px;

  @media only screen and (max-width: ${x.tablet-1}px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media only screen and (min-width: ${x.tablet}px) {
    display: grid;
    gap: 32px;

    @media (max-width: ${x.desktop-1}px) {
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "a n"
        "a s"
        "i i"
        "m m"
        "l l";
    }
  }

  @media only screen and (min-width: ${x.desktop}px) {
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
  border: 3px solid ${j.avatarBorder};
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
    background-color: ${({$isOnline:t})=>t?j.green:j.red};
    border-radius: 50%;
    border: 2px solid ${j.white};
  }

  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${x.desktop}px) {
    margin-right: 9px;
  }
`,Ft=d($.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media only screen and (max-width: ${x.tablet-1}px) {
    gap: 16px;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    margin-top: -16px;
    grid-area: m;
    gap: 32px;
  }
`,Et=d.h2`
  font-weight: 500;
  line-height: 24px;
  margin-right: auto;

  @media only screen and (min-width: ${x.tablet}px) {
    align-self: end;
    grid-area: n;
  }
`,Tt=d.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  color: ${({$isFavorite:t})=>t?j.primary:"currentColor"};
  transition: ${q.default};
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
      color: ${j.primary};
    }
  }
  &:active {
    color: ${j.darkPrimary};
  }
`,It=d($.p)`
  line-height: 24px;
`,Rt=d(ae)`
  @media only screen and (min-width: ${x.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${x.desktop}px) {
    grid-column: 2 / 3;
  }
`,oe=c.memo(c.forwardRef((t,n)=>{const{id:a,user:s,isOnline:r=!0,teacherData:l,favoriteIds:h,delay:i}=t,[p,o]=c.useState(!1),[v,u]=c.useState(!1),[g,w]=c.useState(null),{openModal:b,closeModal:y}=qe(),{tid:m,name:f,surname:C,avatar_url:F}=l,{levels:le,rating:de,reviews:ce,languages:he,conditions:pe,experience:xe}=l,{lesson_info:ue,lessons_done:me,price_per_hour:ge}=l,z=`${f} ${C}`;c.useEffect(()=>{s?Object.values(h).includes(m)&&u(!0):u(!1)},[h,m,s]),c.useEffect(()=>{g&&alert(g)},[g]);const fe=async()=>{if(!s){b(e.jsx(ot,{openModal:b},"authRequired"));return}try{v?(await tt(s.uid,m),u(!1)):(await et(s.uid,m),u(!0))}catch(je){w(je)}};return e.jsxs(Lt,{id:a,custom:i,initial:"initial",animate:"animate",exit:"exit",variants:Ke,layout:"position",ref:n,children:[e.jsx(Tt,{$isFavorite:v,onClick:fe,children:e.jsx(k,{name:"icon-heart",$isFavorite:v})}),e.jsx(Ct,{$isOnline:r,children:e.jsx("img",{src:F,alt:z,width:"96",height:"96"})}),e.jsx(Et,{children:z}),e.jsx(mt,{lessonsDone:me,rating:de,price:ge}),e.jsx(ft,{tid:m,languages:he,lessonInfo:ue,conditions:pe}),e.jsx(Ft,{variants:ze,initial:"initial",animate:p?"animate":"initial",exit:"exit",children:e.jsx(M,{children:p?e.jsxs(e.Fragment,{children:[e.jsx(It,{variants:H,children:xe}),e.jsx(re,{reviews:ce})]}):e.jsx(S,{variant:"underline",onClick:()=>o(!p),children:"Read more"})})}),e.jsx(St,{tid:m,levels:le}),p&&e.jsx(Rt,{onClick:()=>b(e.jsx(dt,{teacherData:l,closeModal:y},"bookLesson")),children:"Book trial lesson"})]})}));oe.displayName="TeacherCard";const Bt=d($.ul)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Mt=t=>{const{teachers:n,user:a,favoriteIds:s,initialCount:r,visibleCount:l,isLastPage:h,showMore:i}=t,p=c.useRef(null);c.useEffect(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",block:"start"})},[n.length]);const o=n.length%r||r,v=n.length-o;return e.jsxs(e.Fragment,{children:[e.jsx(Bt,{children:n.map((u,g)=>{const w=g%r===0,b=g>=r,f=w&&b&&g===v?{ref:p}:{};return e.jsx(oe,{teacherData:u,user:a,favoriteIds:s,delay:(g-(l-r))*.1,...f},u.tid)})}),e.jsx(pt,{isLastPage:h,showMore:i})]})},Z="/language-learning-app/",Pt=({teachers:t,filters:n,onlyFavorites:a=!1,initialCount:s=4})=>{const[r,l]=c.useState(s),[h,i]=c.useState(!1),[p,o]=c.useState([]),[v,u]=c.useState(!1),[g,w]=st(),{user:b}=te();c.useLayoutEffect(()=>{l(s)},[s,n]),c.useEffect(()=>{if(w||!t.length)return;const m=ct(t,n,g,a);if(m.length)u(!1);else{u(!0),o([]);return}const f=m.slice(0,r);o(f),r>=m.length?i(!0):i(!1)},[t,g,n,w,a,r]);const y=()=>{l(m=>m+s)};return v?g.length===0?e.jsx(G,{src:`${Z}images/empty.svg`,notification:U.isEmpty.noFavTeachers}):e.jsx(G,{src:`${Z}images/filter.svg`,notification:U.isEmpty.noFilterTeachers}):p.length!==0&&e.jsx(Mt,{teachers:p,user:b,favoriteIds:g,initialCount:s,visibleCount:r,isLastPage:h,showMore:y})},At=d.div`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: ${x.tablet}px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`,Nt=d($.div)`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: ${x.tablet-1}px) {
    flex-direction: column;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    flex-direction: row;
    min-height: 74px;
  }
`,Wt=d($.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 24px;

  @media only screen and (max-width: ${x.tablet-1}px) {
    justify-content: end;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    height: 48px;
    justify-content: start;
  }
`,Dt=d(ae)`
  --direction: ${({$showFilter:t})=>t?"-180deg":"0"};
  ${t=>({...t})}

  svg {
    transform: rotate(var(--direction));
    transition: ${q.default};
    transition-property: transform;
  }
`,Vt=({filters:t,setSearchParams:n})=>{const[a,s]=c.useState(!1),[r,l,h,i,p]=at(),o=Qe(`(max-width: ${x.tablet-1}px)`),v=w=>{const b=w.currentTarget.getAttribute("data-name"),y=w.currentTarget.getAttribute("data-value");n(y?m=>(m.set(b,y),m):m=>(m.delete(b),m))},u=()=>{s(w=>!w)},g=()=>{n(new URLSearchParams)};return e.jsxs(At,{children:[e.jsxs(M,{children:[e.jsxs(Wt,{children:[((t==null?void 0:t.language)||(t==null?void 0:t.level)||(t==null?void 0:t.price))&&e.jsx($.div,{variants:P,initial:"initial",animate:"animate",exit:"exit",children:e.jsx(S,{variant:"icon",onClick:g,disabled:i,children:e.jsx(k,{name:"icon-filter-x",width:"20px",height:"20px"})})},"reset-filter-btn"),o&&e.jsxs(Dt,{$variant:"icon",$showFilter:a,disabled:i,onClick:u,children:["Filter",e.jsx(k,{name:"icon-chevron-down",width:"20px",height:"20px"})]},"filter-btn")]},"filter-buttons"),(a||!o)&&e.jsxs(Nt,{variants:Ye,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(N,{id:"language",label:"Languages",value:(t==null?void 0:t.language)??"",options:r,minWidth:"220px",disabled:i,onChange:v}),e.jsx(N,{id:"level",label:"Level of knowledge",value:(t==null?void 0:t.level)??"",options:l,minWidth:"246px",disabled:i,onChange:v}),e.jsx(N,{id:"price",label:"Price",value:(t==null?void 0:t.price)??"",options:h,minWidth:"124px",disabled:i,onChange:v})]},"dropdowns")]}),p&&e.jsxs("p",{children:["Error: ",p.message]})]})},_t=Je`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,L=d.div`
  background-image: linear-gradient(
    90deg,
    ${j.semiTransparent(.03)} 25%,
    ${j.semiTransparent(.07)} 50%,
    ${j.semiTransparent(.03)} 75%
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

  @media only screen and (min-width: ${x.tablet}px) {
    gap: 32px;
  }
  @media only screen and (min-width: ${x.desktop}px) {
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
`,D=d(L)`
  height: ${({height:t})=>t||"20px"};
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
  margin-bottom: 8px;
`,T=d(L)`
  height: 32px;
  width: ${({width:t})=>t||"100%"};
  border-radius: 35px;
`,Kt=()=>e.jsxs(Ot,{variants:P,initial:"initial",animate:"animate",children:[e.jsx(Ut,{}),e.jsxs(Gt,{children:[e.jsx(qt,{height:"26px"}),e.jsx(D,{width:"174px",height:"24px"}),e.jsx(D,{width:"738px",height:"24px"}),e.jsx(D,{width:"808px",height:"24px"}),e.jsxs(Ht,{children:[e.jsx(T,{width:"110px"}),e.jsx(T,{width:"124px"}),e.jsx(T,{width:"133px"}),e.jsx(T,{width:"151px"}),e.jsx(T,{width:"124px"})]})]})]}),zt=d($.div)`
  display: flex;
  gap: 20px;
  width: 100%;
  padding-top: 32px;
`,V=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: ${({width:t})=>t||"100%"};
`,_=d(L)`
  height: 48px;
  width: 100%;
`,O=d(L)`
  height: 18px;
  width: 70px;
`,Qt=()=>e.jsxs(zt,{variants:P,initial:"initial",animate:"animate",children:[e.jsxs(V,{width:"220px",children:[e.jsx(O,{}),e.jsx(_,{})]}),e.jsxs(V,{width:"246px",children:[e.jsx(O,{}),e.jsx(_,{})]}),e.jsxs(V,{width:"124px",children:[e.jsx(O,{}),e.jsx(_,{})]})]}),Yt=()=>e.jsxs(e.Fragment,{children:[e.jsx(Qt,{}),Array(4).fill(0).map((t,n)=>e.jsx(Kt,{},n))]}),Zt=({onlyFavorites:t=!1})=>{const[n,a]=c.useState([]),[s,r]=c.useState(null),[l,h]=c.useState(!0),[i,p]=c.useState(null),[o,v]=K();return c.useEffect(()=>{const u=async()=>{try{const g=await ie();a(g)}catch(g){p(g)}finally{h(!1)}};h(!0),u()},[]),c.useEffect(()=>{r({language:o.get("language"),level:o.get("level"),price:o.get("price")})},[o]),i&&alert(i.message),e.jsx(Ze,{children:e.jsx(Xe,{children:l?e.jsx(Yt,{}):e.jsxs(e.Fragment,{children:[e.jsx(Vt,{filters:s,setSearchParams:v}),e.jsx(Pt,{teachers:n,filters:s,onlyFavorites:t})]})})})};export{Zt as default};
