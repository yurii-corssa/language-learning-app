import{c as p,j as e}from"./hooks--aaWd0HJ.js";import{u as h,o as b,b as g}from"./bookLesson.schema-C4LHJII3.js";import{u as i,m as f,w as r,A as j,o as v,T as d,e as y}from"./index-Cto0a8a3.js";import"./react-vendor-fKLcOhQA.js";import{M as S}from"./ModalBody-CPAQiQdc.js";import"./firebase-database-vendor-CbbLdNQs.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-auth-vendor-BiLe07Fo.js";const k=i.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,w=i.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`,N=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,T=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,B=i(f.small)`
  display: block;
  padding: 2px 8px;
  color: ${p.red};
`,L=({closeModal:t})=>{var o,m,c,u;const{register:a,handleSubmit:n,formState:s}=h({resolver:b(g)}),l=async x=>{console.log(x),t()};return e.jsxs(k,{onSubmit:n(l),children:[e.jsxs(N,{children:[e.jsx(w,{children:"What is your main reason for learning English?"}),e.jsx(r,{id:"career",name:"reason",value:"career",label:"Career and business",disabled:s.isSubmitting,...a("reason")}),e.jsx(r,{id:"kids",name:"reason",value:"kids",label:"Lesson for kids",disabled:s.isSubmitting,...a("reason")}),e.jsx(r,{id:"abroad",name:"reason",value:"abroad",label:"Living abroad",disabled:s.isSubmitting,...a("reason")}),e.jsx(r,{id:"exams",name:"reason",value:"exams",label:"Exams and coursework",disabled:s.isSubmitting,...a("reason")}),e.jsx(r,{id:"hobby",name:"reason",value:"hobby",label:"Culture, travel or hobby",disabled:s.isSubmitting,...a("reason")}),e.jsx(j,{children:((o=s.errors.reason)==null?void 0:o.message)&&e.jsx(B,{variants:v,initial:"initial",animate:"animate",exit:"exit",children:s.errors.reason.message})})]}),e.jsxs(T,{children:[e.jsx(d,{type:"text",placeholder:"Full Name",disabled:s.isSubmitting,autoComplete:"name",errorMessage:(m=s.errors.fullName)==null?void 0:m.message,...a("fullName")}),e.jsx(d,{type:"email",placeholder:"Email",disabled:s.isSubmitting,autoComplete:"email",errorMessage:(c=s.errors.email)==null?void 0:c.message,...a("email")}),e.jsx(d,{type:"tel",placeholder:"Phone number",disabled:s.isSubmitting,autoComplete:"tel",errorMessage:(u=s.errors.phoneNumber)==null?void 0:u.message,...a("phoneNumber")})]}),e.jsx(y,{type:"submit",width:"100%",disabled:s.isSubmitting,children:s.isSubmitting?"loading...":"Book"})]})},M=i.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,C=i.div`
  width: 44px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`,E=i.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,F=i.p`
  color: ${p.grey};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`,A=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,U=({teacherData:t,closeModal:a})=>{const{name:n,surname:s,avatar_url:l}=t,o=`${n} ${s}`;return e.jsxs(S,{title:"Book trial lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.",children:[e.jsxs(M,{children:[e.jsx(C,{children:e.jsx(E,{src:l,alt:o,width:"44",height:"44"})}),e.jsxs("div",{children:[e.jsx(F,{children:"Your teacher"}),e.jsx(A,{children:o})]})]}),e.jsx(L,{closeModal:a})]})};export{U as default};
