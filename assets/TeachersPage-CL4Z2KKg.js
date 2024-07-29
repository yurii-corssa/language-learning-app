import{f as R,p as ve,g as ee,h as we,i as be,k as B,o as ye,l as $e,n as c,d as te,j as e,L as Se,D as ke,q,t as Le,v as Ce,S,w as Ee,A,O as Fe,x as Te,y as Y,P as Ie,N as ne,M as se,z as J,r as G,C as Re,E as k,F as X,G as Be,H as Ae,I as Me,J as Ne,K as F,Q as Pe,T as M,U as We,V as N,W as De,X as Ve,Y as _e,Z as Oe,_ as Ge,$ as Ue,a0 as He,u as d,a1 as U,b as x,c as f,a2 as K,a3 as z,m as $,B as ae,a4 as qe,s as Ke,a5 as ze,a6 as Qe,a7 as Ye,a8 as Je,a9 as Xe}from"./index-BYV9qCv5.js";import{S as Ze}from"./SectionContainer-ChjGH1wq.js";const et=async(t,n)=>{const a=R(B,`users/${t}/favorites`);ve(a,n)},tt=async(t,n)=>{const a=R(B,`users/${t}/favorites`);(await ee(a)).forEach(r=>{r.val()===n&&we(be(a,r.key))})},nt=(t,n)=>{const a=R(B,`users/${t}/favorites`),s=r=>{r.exists()?n(r.val()):n({})};return ye(a,s),()=>{$e(a,s)}},st=()=>{const[t,n]=c.useState([]),[a,s]=c.useState(!0),{user:r,isLoadingAuth:l}=te();return c.useEffect(()=>{if(l)s(!0);else if(r){const h=nt(r.uid,i=>{n(Object.values(i).reverse()),s(!1)});return()=>{h()}}else s(!1)},[l,r]),[t,a]},ie=async()=>{const t=[],n=R(B,"teachers"),a=await ee(n);return a.exists()&&a.forEach(s=>{t.push({tid:s.key,...s.val()})}),t},at=()=>{const[t,n]=c.useState([]),[a,s]=c.useState([]),[r,l]=c.useState([]),[h,i]=c.useState(!0),[p,o]=c.useState(null);return c.useEffect(()=>{(async()=>{try{const u=await ie(),g=new Set,w=new Set,b=new Set;u.forEach(y=>{y.languages.forEach(m=>g.add(m)),y.levels.forEach(m=>w.add(m)),b.add(y.price_per_hour)}),n([...g]),s([...w]),l([...b])}catch(u){o(u)}finally{i(!1)}})()},[]),[t,a,r,h,p]},it=({value:t,isSelected:n,onChange:a})=>e.jsx(Se,{$isSelected:n,onClick:a,children:`#${t}`}),P=({id:t,label:n,value:a,options:s,minWidth:r,disabled:l,onChange:h})=>{var b,y,m;const[i,p]=c.useState(!1),o=c.useRef(null),v=document.getElementById("dropdown-root"),u=()=>{p(j=>!j)},g=j=>{j.key==="Enter"&&(h(j),p(!1))},w=j=>{(j.key==="Enter"||j.key===" ")&&u()};return c.useEffect(()=>{const j=E=>{o.current&&!o.current.contains(E.target)&&p(!1)},C=E=>{E.key==="Escape"&&p(!1)};return i?(document.addEventListener("click",j),document.addEventListener("keydown",C),window.addEventListener("blur",u)):(document.removeEventListener("click",j),document.removeEventListener("keydown",C),window.removeEventListener("blur",u)),()=>{document.removeEventListener("click",j),document.removeEventListener("keydown",C),window.removeEventListener("blur",u)}},[i]),e.jsxs(ke,{variants:q,children:[e.jsx(Le,{htmlFor:t,children:n}),e.jsxs(Ce,{ref:o,value:a,$disabled:l,$minWidth:r,$isOpen:i,onClick:u,onKeyDown:w,tabIndex:l?-1:0,children:[e.jsx("span",{children:a||"All"}),e.jsx(S,{name:"icon-chevron-down",width:"20",height:"20"})]}),Ee.createPortal(e.jsx(A,{children:i&&e.jsxs(Fe,{variants:Te,initial:"closed",animate:"open",exit:"closed",$top:(b=o==null?void 0:o.current)==null?void 0:b.getBoundingClientRect().bottom,$left:(y=o==null?void 0:o.current)==null?void 0:y.getBoundingClientRect().left,$width:(m=o==null?void 0:o.current)==null?void 0:m.getBoundingClientRect().width,children:[e.jsx(Y,{"data-name":t,"data-value":"",onClick:h,onKeyDown:g,tabIndex:0,children:"All"},`default${t}`),s.map(j=>e.jsx(Y,{"data-name":t,"data-value":j,$isSelected:a===j+"",onClick:h,onKeyDown:g,tabIndex:0,children:j},j))]},"options-list")}),v)]})},H=({src:t,notification:n})=>e.jsxs(Ie,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx("svg",{width:"250",height:"250",children:e.jsx("use",{href:`${t}#picture`})}),e.jsx(ne,{children:n})]}),rt=({openModal:t})=>e.jsxs(se,{title:J.authRequiredModal.title,text:J.authRequiredModal.text,children:[e.jsx(H,{src:`${G.BASE}/images/authentication.svg`}),e.jsxs(Re,{children:[e.jsx(k,{width:"100%",onClick:()=>t(e.jsx(X,{type:"login"},"login")),children:"Log in"}),e.jsx(k,{width:"100%",onClick:()=>t(e.jsx(X,{type:"registration"},"registration")),children:"Registration"})]})]}),ot=({closeModal:t})=>{var l,h,i,p;const{register:n,handleSubmit:a,formState:s}=Be({resolver:De(Ve)}),r=async o=>{console.log(o),t()};return e.jsxs(Ae,{onSubmit:a(r),children:[e.jsxs(Me,{children:[e.jsx(Ne,{children:"What is your main reason for learning English?"}),e.jsx(F,{id:"career",name:"reason",value:"career",label:"Career and business",disabled:s.isSubmitting,...n("reason")}),e.jsx(F,{id:"kids",name:"reason",value:"kids",label:"Lesson for kids",disabled:s.isSubmitting,...n("reason")}),e.jsx(F,{id:"abroad",name:"reason",value:"abroad",label:"Living abroad",disabled:s.isSubmitting,...n("reason")}),e.jsx(F,{id:"exams",name:"reason",value:"exams",label:"Exams and coursework",disabled:s.isSubmitting,...n("reason")}),e.jsx(F,{id:"hobby",name:"reason",value:"hobby",label:"Culture, travel or hobby",disabled:s.isSubmitting,...n("reason")}),e.jsx(A,{children:((l=s.errors.reason)==null?void 0:l.message)&&e.jsx(Pe,{variants:M,initial:"initial",animate:"animate",exit:"exit",children:s.errors.reason.message})})]}),e.jsxs(We,{children:[e.jsx(N,{type:"text",placeholder:"Full Name",disabled:s.isSubmitting,autoComplete:"name",errorMessage:(h=s.errors.fullName)==null?void 0:h.message,...n("fullName")}),e.jsx(N,{type:"email",placeholder:"Email",disabled:s.isSubmitting,autoComplete:"email",errorMessage:(i=s.errors.email)==null?void 0:i.message,...n("email")}),e.jsx(N,{type:"tel",placeholder:"Phone number",disabled:s.isSubmitting,autoComplete:"tel",errorMessage:(p=s.errors.phoneNumber)==null?void 0:p.message,...n("phoneNumber")})]}),e.jsx(k,{type:"submit",width:"100%",disabled:s.isSubmitting,children:s.isSubmitting?"loading...":"Book"})]})},lt=({teacherData:t,closeModal:n})=>{const{name:a,surname:s,avatar_url:r}=t,l=`${a} ${s}`;return e.jsxs(se,{title:"Book trial lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.",children:[e.jsxs(_e,{children:[e.jsx(Oe,{children:e.jsx(Ge,{src:r,alt:l,width:"44",height:"44"})}),e.jsxs("div",{children:[e.jsx(Ue,{children:"Your teacher"}),e.jsx(He,{children:l})]})]}),e.jsx(ot,{closeModal:n})]})},dt=(t,n,a=[],s)=>{const{language:r,level:l,price:h}=n;return t.filter(i=>{const p=s?a.includes(i.tid):!0,o=r?i.languages.includes(r):!0,v=l?i.levels.includes(l):!0,u=h?i.price_per_hour===Number(h):!0;return o&&v&&p&&u})},ct=d.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 154px 0 96px 0;
`,ht=({isLastPage:t,showMore:n})=>e.jsx(ct,{children:t?e.jsx(ne,{children:U.isLastPage}):e.jsx(k,{onClick:n,children:"Load more"})}),pt=d.ul`
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
    ${({$star:t})=>t?`fill: ${f.primary}`:"stroke: currentColor"}
  }

  @media only screen and (min-width: ${x.desktop}px) {
    &:not(:last-child)::after {
      content: "";
      position: relative;
      top: 0;
      right: -16px;
      width: 1px;
      height: 16px;
      background-color: ${f.semiTransparent(.2)};
    }
  }
`,xt=d.span`
  margin-left: 0.25rem;
  color: ${f.green};
`,ut=({lessonsDone:t,rating:n,price:a})=>e.jsxs(pt,{children:[e.jsxs(I,{children:[e.jsx(S,{name:"icon-book-open"}),e.jsx("span",{children:"Lessons online"})]}),e.jsx(I,{children:e.jsx("span",{children:`Lessons done: ${t}`})}),e.jsxs(I,{$star:!0,children:[e.jsx(S,{name:"icon-star"}),e.jsx("span",{children:`Rating: ${n}`})]}),e.jsxs(I,{children:[e.jsx("span",{children:"Price / 1 hour:"}),e.jsx(xt,{children:`${a}$`})]})]}),mt=d.ul`
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
    color: ${f.semiTransparent(.6)};
  }
`,Z=d.button`
  text-decoration: underline;
  color: ${({$isSelected:t})=>t?f.primary:"currentColor"};
  background: none;
  border: none;
  transition: color ${K.default};
  margin-right: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: ${f.primary};
    }
  }
  &:active {
    color: color-mix(in srgb, ${f.primary}, ${f.black} 10%);
  }
`,gt=({tid:t,languages:n,lessonInfo:a,conditions:s})=>{const[r,l]=z(),h=i=>{const p=i.target.textContent.split(",")[0];r.get("language")===p?l(o=>(o.delete("language"),o)):l(o=>(o.set("language",p),o))};return e.jsxs(mt,{children:[e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Speaks:"})," ",n.map((i,p)=>{const o=r.get("language")===i;return p!==n.length-1?e.jsx(Z,{$isSelected:o,onClick:h,children:`${i},`},`${t}${i}`):e.jsx(Z,{$isSelected:o,onClick:h,children:i},`${t}${i}`)})]})}),e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Lesson Info:"})," ",a]})}),e.jsx("li",{children:e.jsxs(W,{children:[e.jsx("span",{children:"Conditions:"})," ",s.join(" ")]})})]})},ft="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let jt=(t=21)=>{let n="",a=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=ft[a[t]&63];return n};const vt=d($.ul)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${x.tablet-1}px) {
    gap: 12px;
  }
  @media only screen and (min-width: ${x.tablet}px) {
    gap: 32px;
  }
`,wt=d($.li)`
  font-weight: 500;
  line-height: 24px;
`,bt=d.span`
  display: block;
  color: ${f.semiTransparent(.6)};
  margin-bottom: 2px;
`,yt=d.span`
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
    fill: ${f.primary};
  }
`,re=c.memo(({reviews:t=[]})=>t.length?e.jsx(vt,{children:t.map(n=>{const a=jt();return e.jsxs(wt,{variants:q,children:[e.jsx(bt,{children:n.reviewer_name}),e.jsxs(yt,{children:[e.jsx(S,{name:"icon-star",width:"16",height:"16"}),Number(n.reviewer_rating).toFixed(1)]}),e.jsx("span",{children:n.comment})]},a)})}):null);re.displayName="Reviews";const $t=d.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: l;
  }
`,St=({tid:t,levels:n})=>{const[a,s]=z(),r=l=>{const h=l.target.textContent.slice(1);a.get("level")===h?s(i=>(i.delete("level"),i)):s(i=>(i.set("level",h),i))};return e.jsx($t,{children:n.map(l=>{const h=a.get("level")===l;return e.jsx(it,{isSelected:h,value:l,onChange:r},`${t}-${l}`)})})},kt=d($.li)`
  position: relative;
  padding: 24px;
  background-color: ${f.white};
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
    grid-template-columns: auto 232px 1fr;
    grid-template-areas:
      "a n s"
      "a i i"
      ". m m"
      ". l l";
  }
`,Lt=d.div`
  position: relative;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 3px solid ${f.avatarBorder};
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
    background-color: ${({$isOnline:t})=>t?f.green:f.red};
    border-radius: 50%;
    border: 2px solid ${f.white};
  }

  @media only screen and (min-width: ${x.tablet}px) {
    grid-area: a;
  }

  @media only screen and (min-width: ${x.desktop}px) {
    margin-right: 9px;
  }
`,Ct=d($.div)`
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
`,Ft=d.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  color: ${({$isFavorite:t})=>t?f.primary:"currentColor"};
  transition: ${K.default};
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
      color: color-mix(in srgb, ${f.primary}, ${f.white} 20%);
    }
  }
  &:active {
    color: color-mix(in srgb, ${f.primary}, ${f.black} 10%);
  }
`,Tt=d($.p)`
  line-height: 24px;
`,It=d(ae)`
  @media only screen and (min-width: ${x.tablet}px) {
    grid-column: 1 / 3;
  }
  @media only screen and (min-width: ${x.desktop}px) {
    grid-column: 2 / 3;
  }
`,oe=c.memo(c.forwardRef((t,n)=>{const{id:a,user:s,isOnline:r=!0,teacherData:l,favoriteIds:h,delay:i}=t,[p,o]=c.useState(!1),[v,u]=c.useState(!1),[g,w]=c.useState(null),{openModal:b,closeModal:y}=qe(),{tid:m,name:j,surname:C,avatar_url:E}=l,{levels:le,rating:de,reviews:ce,languages:he,conditions:pe,experience:xe}=l,{lesson_info:ue,lessons_done:me,price_per_hour:ge}=l,Q=`${j} ${C}`;c.useEffect(()=>{s?Object.values(h).includes(m)&&u(!0):u(!1)},[h,m,s]),c.useEffect(()=>{g&&alert(g)},[g]);const fe=async()=>{if(!s){b(e.jsx(rt,{openModal:b},"authRequired"));return}try{v?(await tt(s.uid,m),u(!1)):(await et(s.uid,m),u(!0))}catch(je){w(je)}};return e.jsxs(kt,{id:a,custom:i,initial:"initial",animate:"animate",exit:"exit",variants:Ke,layout:"position",ref:n,children:[e.jsx(Ft,{$isFavorite:v,onClick:fe,children:e.jsx(S,{name:"icon-heart",$isFavorite:v})}),e.jsx(Lt,{$isOnline:r,children:e.jsx("img",{src:E,alt:Q,width:"96",height:"96"})}),e.jsx(Et,{children:Q}),e.jsx(ut,{lessonsDone:me,rating:de,price:ge}),e.jsx(gt,{tid:m,languages:he,lessonInfo:ue,conditions:pe}),e.jsx(Ct,{variants:ze,initial:"initial",animate:p?"animate":"initial",exit:"exit",children:e.jsx(A,{children:p?e.jsxs(e.Fragment,{children:[e.jsx(Tt,{variants:q,children:xe}),e.jsx(re,{reviews:ce})]}):e.jsx(k,{variant:"underline",onClick:()=>o(!p),children:"Read more"})})}),e.jsx(St,{tid:m,levels:le}),p&&e.jsx(It,{onClick:()=>b(e.jsx(lt,{teacherData:l,closeModal:y},"bookLesson")),children:"Book trial lesson"})]})}));oe.displayName="TeacherCard";const Rt=d($.ul)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Bt=t=>{const{teachers:n,user:a,favoriteIds:s,initialCount:r,visibleCount:l,isLastPage:h,showMore:i}=t,p=c.useRef(null);c.useEffect(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth",block:"start"})},[n.length]);const o=n.length%r||r,v=n.length-o;return e.jsxs(e.Fragment,{children:[e.jsx(Rt,{children:n.map((u,g)=>{const w=g%r===0,b=g>=r,j=w&&b&&g===v?{ref:p}:{};return e.jsx(oe,{teacherData:u,user:a,favoriteIds:s,delay:(g-(l-r))*.1,...j},u.tid)})}),e.jsx(ht,{isLastPage:h,showMore:i})]})},At=({teachers:t,filters:n,onlyFavorites:a=!1,initialCount:s=4})=>{const[r,l]=c.useState(s),[h,i]=c.useState(!1),[p,o]=c.useState([]),[v,u]=c.useState(!1),[g,w]=st(),{user:b}=te();c.useLayoutEffect(()=>{l(s)},[s,n]),c.useEffect(()=>{if(w||!t.length)return;const m=dt(t,n,g,a);if(m.length)u(!1);else{u(!0),o([]);return}const j=m.slice(0,r);o(j),r>=m.length?i(!0):i(!1)},[t,g,n,w,a,r]);const y=()=>{l(m=>m+s)};return v?g.length===0?e.jsx(H,{src:`${G.BASE}/images/empty.svg`,notification:U.isEmpty.noFavTeachers}):e.jsx(H,{src:`${G.BASE}/images/filter.svg`,notification:U.isEmpty.noFilterTeachers}):p.length!==0&&e.jsx(Bt,{teachers:p,user:b,favoriteIds:g,initialCount:s,visibleCount:r,isLastPage:h,showMore:y})},Mt=d.div`
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
`,Pt=d($.div)`
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
`,Wt=d(ae)`
  --direction: ${({$showFilter:t})=>t?"-180deg":"0"};
  ${t=>({...t})}

  svg {
    transform: rotate(var(--direction));
    transition: ${K.default};
    transition-property: transform;
  }
`,Dt=({filters:t,setSearchParams:n})=>{const[a,s]=c.useState(!1),[r,l,h,i,p]=at(),o=Qe(`(max-width: ${x.tablet-1}px)`),v=w=>{const b=w.currentTarget.getAttribute("data-name"),y=w.currentTarget.getAttribute("data-value");n(y?m=>(m.set(b,y),m):m=>(m.delete(b),m))},u=()=>{s(w=>!w)},g=()=>{n(new URLSearchParams)};return e.jsxs(Mt,{children:[e.jsxs(A,{children:[e.jsxs(Pt,{children:[((t==null?void 0:t.language)||(t==null?void 0:t.level)||(t==null?void 0:t.price))&&e.jsx($.div,{variants:M,initial:"initial",animate:"animate",exit:"exit",children:e.jsx(k,{variant:"icon",onClick:g,disabled:i,children:e.jsx(S,{name:"icon-filter-x",width:"20px",height:"20px"})})},"reset-filter-btn"),o&&e.jsxs(Wt,{$variant:"icon",$showFilter:a,disabled:i,onClick:u,children:["Filter",e.jsx(S,{name:"icon-chevron-down",width:"20px",height:"20px"})]},"filter-btn")]},"filter-buttons"),(a||!o)&&e.jsxs(Nt,{variants:Ye,initial:"initial",animate:"animate",exit:"exit",children:[e.jsx(P,{id:"language",label:"Languages",value:(t==null?void 0:t.language)??"",options:r,minWidth:"220px",disabled:i,onChange:v}),e.jsx(P,{id:"level",label:"Level of knowledge",value:(t==null?void 0:t.level)??"",options:l,minWidth:"246px",disabled:i,onChange:v}),e.jsx(P,{id:"price",label:"Price",value:(t==null?void 0:t.price)??"",options:h,minWidth:"124px",disabled:i,onChange:v})]},"dropdowns")]}),p&&e.jsxs("p",{children:["Error: ",p.message]})]})},Vt=Je`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,L=d.div`
  background-image: linear-gradient(
    90deg,
    ${f.semiTransparent(.03)} 25%,
    ${f.semiTransparent(.07)} 50%,
    ${f.semiTransparent(.03)} 75%
  );
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${Vt} 1.2s infinite;
  border-radius: 12px;
`,_t=d($.div)`
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
`,Ot=d(L)`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 12px;
`,Gt=d.div`
  width: 100%;
`,Ut=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding-top: 32px;
`,Ht=d(L)`
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
`,qt=()=>e.jsxs(_t,{variants:M,initial:"initial",animate:"animate",children:[e.jsx(Ot,{}),e.jsxs(Gt,{children:[e.jsx(Ht,{height:"26px"}),e.jsx(D,{width:"174px",height:"24px"}),e.jsx(D,{width:"738px",height:"24px"}),e.jsx(D,{width:"808px",height:"24px"}),e.jsxs(Ut,{children:[e.jsx(T,{width:"110px"}),e.jsx(T,{width:"124px"}),e.jsx(T,{width:"133px"}),e.jsx(T,{width:"151px"}),e.jsx(T,{width:"124px"})]})]})]}),Kt=d($.div)`
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
`,zt=()=>e.jsxs(Kt,{variants:M,initial:"initial",animate:"animate",children:[e.jsxs(V,{width:"220px",children:[e.jsx(O,{}),e.jsx(_,{})]}),e.jsxs(V,{width:"246px",children:[e.jsx(O,{}),e.jsx(_,{})]}),e.jsxs(V,{width:"124px",children:[e.jsx(O,{}),e.jsx(_,{})]})]}),Qt=()=>e.jsxs(e.Fragment,{children:[e.jsx(zt,{}),Array(4).fill(0).map((t,n)=>e.jsx(qt,{},n))]}),Xt=({onlyFavorites:t=!1})=>{const[n,a]=c.useState([]),[s,r]=c.useState(null),[l,h]=c.useState(!0),[i,p]=c.useState(null),[o,v]=z();return c.useEffect(()=>{const u=async()=>{try{const g=await ie();a(g)}catch(g){p(g)}finally{h(!1)}};h(!0),u()},[]),c.useEffect(()=>{r({language:o.get("language"),level:o.get("level"),price:o.get("price")})},[o]),i&&alert(i.message),e.jsx(Ze,{children:e.jsx(Xe,{children:l?e.jsx(Qt,{}):e.jsxs(e.Fragment,{children:[e.jsx(Dt,{filters:s,setSearchParams:v}),e.jsx(At,{teachers:n,filters:s,onlyFavorites:t})]})})})};export{Xt as default};
