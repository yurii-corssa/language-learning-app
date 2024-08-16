import{j as e,u as f,c as h,a as F,m as S}from"./hooks--aaWd0HJ.js";import{r as x}from"./react-vendor-fKLcOhQA.js";import{v as B,u as m,e as j,S as N,T as g}from"./index-S2FKb3ZH.js";import{u as v,o as w,l as P,r as T}from"./bookLesson.schema-C4LHJII3.js";import{M as z}from"./ModalBody-B8h2S4SI.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import"./firebase-database-vendor-CbbLdNQs.js";import{R as A}from"./RingLoader-CFrTKX64.js";const y=t=>e.jsxs(B,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",...t,children:[e.jsx("circle",{cx:4,cy:14,r:3,fill:"currentColor",children:e.jsx("animate",{id:"dotsLoader",fill:"freeze",attributeName:"opacity",begin:"0;svgSpinners3DotsFade1.end-0.25s",dur:"0.75s",values:"1;0.2"})}),e.jsx("circle",{cx:14,cy:14,r:3,fill:"currentColor",opacity:.4,children:e.jsx("animate",{fill:"freeze",attributeName:"opacity",begin:"dotsLoader.begin+0.15s",dur:"0.75s",values:"1;0.2"})}),e.jsx("circle",{cx:24,cy:14,r:3,fill:"currentColor",opacity:.3,children:e.jsx("animate",{id:"svgSpinners3DotsFade1",fill:"freeze",attributeName:"opacity",begin:"dotsLoader.begin+0.3s",dur:"0.75s",values:"1;0.2"})})]}),R=m.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,k=({onClose:t,isLoading:s,setIsLoading:a})=>{const[l,o]=x.useState(!1),{signinWithGoogleProvider:c}=f(),r=({message:n})=>{alert(n)},i=async()=>{a(!0);try{await c(),a(!1),t()}catch{r({message:"Authentication error, please try again"}),a(!1),o(!1)}};return e.jsx(R,{children:e.jsx(j,{variant:"provider",type:"button",onClick:i,disabled:s,width:"100%",children:l?e.jsx(y,{}):e.jsxs(e.Fragment,{children:[e.jsx(N,{name:"icon-google-logo",width:"28",height:"28"}),e.jsx("span",{children:"Google"})]})})})},C=m.form`
  margin-bottom: 18px;
`,M=m.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,G=({isLoading:t,setIsLoading:s,closeModal:a})=>{var p,u;const{signin:l}=f(),{register:o,handleSubmit:c,formState:r,control:i}=v({resolver:w(P)});x.useEffect(()=>{s(r.isSubmitting)},[r.isSubmitting,s]);const n=async({email:d,password:b})=>{try{await l(d,b),a()}catch{i.setError("authentication",{message:"Incorrect login or password, please try again"})}};return x.useEffect(()=>{var d;(d=r.errors.authentication)!=null&&d.message&&alert(r.errors.authentication.message)},[r.errors.authentication]),e.jsxs(C,{onSubmit:c(n),children:[e.jsxs(M,{children:[e.jsx(g,{type:"email",placeholder:"Email",disabled:t,autoComplete:"email",errorMessage:(p=r.errors.email)==null?void 0:p.message,...o("email")}),e.jsx(g,{type:"password",placeholder:"Password",disabled:t,autoComplete:"current-password",errorMessage:(u=r.errors.password)==null?void 0:u.message,...o("password")})]}),e.jsx(j,{type:"submit",variant:"primary",disabled:t,width:"100%",children:r.isSubmitting?e.jsx(y,{}):e.jsx("span",{children:"Log In"})})]})},I=({isLoading:t,setIsLoading:s,closeModal:a})=>{var p,u,d;const{signup:l}=f(),{register:o,handleSubmit:c,formState:r,control:i}=v({resolver:w(T)});x.useEffect(()=>{s(r.isSubmitting)},[r.isSubmitting,s]);const n=async({displayName:b,email:E,password:D})=>{try{await l(E,D,b),a()}catch{i.setError("authentication",{message:"Registration error, please try again later or use another email address"})}};return e.jsxs(C,{onSubmit:c(n),children:[e.jsxs(M,{children:[e.jsx(g,{type:"text",placeholder:"Name",disabled:t,autoComplete:"name",errorMessage:(p=r.errors.displayName)==null?void 0:p.message,...o("displayName")}),e.jsx(g,{type:"email",placeholder:"Email",disabled:t,autoComplete:"email",errorMessage:(u=r.errors.email)==null?void 0:u.message,...o("email")}),e.jsx(g,{type:"password",placeholder:"Password",disabled:t,autoComplete:"current-password",errorMessage:(d=r.errors.password)==null?void 0:d.message,...o("password")})]}),e.jsx(j,{type:"submit",variant:"primary",disabled:t,width:"100%",children:r.isSubmitting?e.jsx(y,{}):e.jsx("span",{children:"Sign Up"})})]})},W=m.p`
  font-size: 0.875rem;
  padding: 0 18px;
  margin-bottom: 18px;
  span {
    color: ${h.primary};
    cursor: pointer;
  }
`,$=m.div`
  display: flex;
  text-transform: uppercase;
  padding: 0 18px;
  align-items: center;
  margin-bottom: 18px;

  &::before {
    content: "";
    border-bottom: 1px solid ${h.semiTransparent(.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }

  &::after {
    content: "";
    border-bottom: 1px solid ${h.semiTransparent(.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }
`,L=m.span`
  font-size: 0.875rem;
  text-align: center;
  flex: 0.2 0 auto;
`,U=m.div`
  position: absolute;
  inset: 0;
  background-color: ${h.semiTransparent(.1)};
`,q=({type:t})=>{var r,i;const[s,a]=x.useState(!1),{openModal:l,closeModal:o}=F(),c=async()=>{const n=t==="login"?"registration":"login";l(e.jsx(q,{type:n},n))};return e.jsxs(z,{title:(r=S[t])==null?void 0:r.title,text:(i=S[t])==null?void 0:i.text,children:[t==="login"?e.jsx(G,{isLoading:s,setIsLoading:a,closeModal:o}):e.jsx(I,{isLoading:s,setIsLoading:a,closeModal:o}),e.jsxs(W,{children:[t==="login"?"Don't have an account? ":"Already have an account? ",e.jsx("span",{onClick:c,children:t==="login"?"Sign Up":"Sign In"})]}),e.jsx($,{children:e.jsx(L,{children:"or"})}),e.jsx(k,{onClose:o,isLoading:s,setIsLoading:a}),s&&e.jsx(U,{children:e.jsx(A,{width:"65",height:"65"})})]})};export{q as default};
