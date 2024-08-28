import{c as h,j as e,m as x}from"./hooks-K7UW4uoY.js";import{M as g,u as f,o as v,b as y}from"./ModalBody-BrjLGZFk.js";import{u as o,m as k,e as b,w as l,A as S,o as w,T as m}from"./index-ZFOfhqv3.js";import"./react-vendor-CibYK_bk.js";import{P as M}from"./PagePlaceholder-DtpzdRgF.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";const N=o.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,C=o.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`,L=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,T=o.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,B=o(k.small)`
  display: block;
  padding: 2px 8px;
  color: ${h.red};
`,$="/language-learning-app/",E=({title:i,text:r,svgName:a,onClose:t})=>e.jsxs(g,{title:i,text:r,children:[e.jsx(M,{src:`${$}images/${a}.svg`}),e.jsx(b,{width:"100%",onClick:t,children:"Okay"})]}),F=({openModal:i,closeModal:r})=>{var n,c,u,p;const{register:a,handleSubmit:t,formState:s}=f({resolver:v(y)}),d=async j=>{console.log(j),i(e.jsx(E,{title:x.thankYouModal.title,text:x.thankYouModal.text,svgName:"thank-you",onClose:r},"noticeModal"))};return e.jsxs(N,{onSubmit:t(d),children:[e.jsxs(L,{children:[e.jsx(C,{children:"What is your main reason for learning English?"}),e.jsx(l,{id:"career",name:"reason",value:"career",label:"Career and business",disabled:s.isSubmitting,...a("reason")}),e.jsx(l,{id:"kids",name:"reason",value:"kids",label:"Lesson for kids",disabled:s.isSubmitting,...a("reason")}),e.jsx(l,{id:"abroad",name:"reason",value:"abroad",label:"Living abroad",disabled:s.isSubmitting,...a("reason")}),e.jsx(l,{id:"exams",name:"reason",value:"exams",label:"Exams and coursework",disabled:s.isSubmitting,...a("reason")}),e.jsx(l,{id:"hobby",name:"reason",value:"hobby",label:"Culture, travel or hobby",disabled:s.isSubmitting,...a("reason")}),e.jsx(S,{children:((n=s.errors.reason)==null?void 0:n.message)&&e.jsx(B,{variants:w,initial:"initial",animate:"animate",exit:"exit",children:s.errors.reason.message})})]}),e.jsxs(T,{children:[e.jsx(m,{type:"text",placeholder:"Full Name",disabled:s.isSubmitting,autoComplete:"name",errorMessage:(c=s.errors.fullName)==null?void 0:c.message,...a("fullName")}),e.jsx(m,{type:"email",placeholder:"Email",disabled:s.isSubmitting,autoComplete:"email",errorMessage:(u=s.errors.email)==null?void 0:u.message,...a("email")}),e.jsx(m,{type:"tel",placeholder:"Phone number",disabled:s.isSubmitting,autoComplete:"tel",errorMessage:(p=s.errors.phoneNumber)==null?void 0:p.message,...a("phoneNumber")})]}),e.jsx(b,{type:"submit",width:"100%",disabled:s.isSubmitting,children:s.isSubmitting?"loading...":"Book"})]})},P=o.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,A=o.div`
  width: 44px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`,R=o.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,z=o.p`
  color: ${h.grey};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,I=o.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,D=({teacherData:i,openModal:r,closeModal:a})=>{const{name:t,surname:s,avatar_url:d}=i,n=`${t} ${s}`;return e.jsxs(g,{title:"Book trial lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.",children:[e.jsxs(P,{children:[e.jsx(A,{children:e.jsx(R,{src:d,alt:n,width:"44",height:"44"})}),e.jsxs("div",{children:[e.jsx(z,{children:"Your teacher"}),e.jsx(I,{children:n})]})]}),e.jsx(F,{openModal:r,closeModal:a})]})};export{D as default};
