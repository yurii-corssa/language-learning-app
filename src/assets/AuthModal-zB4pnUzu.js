import{j as e,u as j,f as y,c as f,a as B,m as w}from"./hooks-K7UW4uoY.js";import{r as u}from"./react-vendor-CibYK_bk.js";import{v as N,u as d,e as S,S as P,T as h}from"./index-ZFOfhqv3.js";import"./firebase-database-vendor-CbbLdNQs.js";import{u as C,o as M,l as z,r as A,M as R}from"./ModalBody-BrjLGZFk.js";import"./firebase-auth-vendor-BiLe07Fo.js";import"./firebase-app-vendor-Dm8EoJqR.js";import{R as k}from"./RingLoader-DbR8Q_jJ.js";const v=t=>e.jsxs(N,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",...t,children:[e.jsx("circle",{cx:4,cy:14,r:3,fill:"currentColor",children:e.jsx("animate",{id:"dotsLoader",fill:"freeze",attributeName:"opacity",begin:"0;svgSpinners3DotsFade1.end-0.25s",dur:"0.75s",values:"1;0.2"})}),e.jsx("circle",{cx:14,cy:14,r:3,fill:"currentColor",opacity:.4,children:e.jsx("animate",{fill:"freeze",attributeName:"opacity",begin:"dotsLoader.begin+0.15s",dur:"0.75s",values:"1;0.2"})}),e.jsx("circle",{cx:24,cy:14,r:3,fill:"currentColor",opacity:.3,children:e.jsx("animate",{id:"svgSpinners3DotsFade1",fill:"freeze",attributeName:"opacity",begin:"dotsLoader.begin+0.3s",dur:"0.75s",values:"1;0.2"})})]}),G=d.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,I=({onClose:t,isLoading:s,setIsLoading:o})=>{const[l,a]=u.useState(!1),{signinWithGoogleProvider:i}=j(),{addToast:n}=y(),r=async()=>{o(!0);try{await i(),o(!1),t()}catch{n.error("Authentication error, please try again"),o(!1),a(!1)}};return e.jsx(G,{children:e.jsx(S,{variant:"provider",type:"button",onClick:r,disabled:s,width:"100%",children:l?e.jsx(v,{}):e.jsxs(e.Fragment,{children:[e.jsx(P,{name:"icon-google-logo",width:"28",height:"28"}),e.jsx("span",{children:"Google"})]})})})},E=d.form`
  margin-bottom: 18px;
`,T=d.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`,W=({isLoading:t,setIsLoading:s,closeModal:o})=>{var g,x;const{signin:l}=j(),{addToast:a}=y(),{register:i,handleSubmit:n,formState:r,control:m}=C({resolver:M(z)});u.useEffect(()=>{s(r.isSubmitting)},[r.isSubmitting,s]),u.useEffect(()=>{var c;(c=r.errors.authentication)!=null&&c.message&&a.error(r.errors.authentication.message)},[a,r.errors.authentication]);const b=async({email:c,password:p})=>{try{await l(c,p),o()}catch{m.setError("authentication",{message:"Incorrect login or password, please try again"})}};return e.jsxs(E,{onSubmit:n(b),children:[e.jsxs(T,{children:[e.jsx(h,{type:"email",placeholder:"Email",disabled:t,autoComplete:"email",errorMessage:(g=r.errors.email)==null?void 0:g.message,...i("email")}),e.jsx(h,{type:"password",placeholder:"Password",disabled:t,autoComplete:"current-password",errorMessage:(x=r.errors.password)==null?void 0:x.message,...i("password")})]}),e.jsx(S,{type:"submit",variant:"primary",disabled:t,width:"100%",children:r.isSubmitting?e.jsx(v,{}):e.jsx("span",{children:"Log In"})})]})},$=({isLoading:t,setIsLoading:s,closeModal:o})=>{var g,x,c;const{signup:l}=j(),{addToast:a}=y(),{register:i,handleSubmit:n,formState:r,control:m}=C({resolver:M(A)});u.useEffect(()=>{s(r.isSubmitting)},[r.isSubmitting,s]),u.useEffect(()=>{var p;(p=r.errors.authentication)!=null&&p.message&&a.error(r.errors.authentication.message)},[a,r.errors.authentication]);const b=async({displayName:p,email:D,password:F})=>{try{await l(D,F,p),o()}catch{m.setError("authentication",{message:"Registration error, please try again later or use another email address"})}};return e.jsxs(E,{onSubmit:n(b),children:[e.jsxs(T,{children:[e.jsx(h,{type:"text",placeholder:"Name",disabled:t,autoComplete:"name",errorMessage:(g=r.errors.displayName)==null?void 0:g.message,...i("displayName")}),e.jsx(h,{type:"email",placeholder:"Email",disabled:t,autoComplete:"email",errorMessage:(x=r.errors.email)==null?void 0:x.message,...i("email")}),e.jsx(h,{type:"password",placeholder:"Password",disabled:t,autoComplete:"current-password",errorMessage:(c=r.errors.password)==null?void 0:c.message,...i("password")})]}),e.jsx(S,{type:"submit",variant:"primary",disabled:t,width:"100%",children:r.isSubmitting?e.jsx(v,{}):e.jsx("span",{children:"Sign Up"})})]})},L=d.p`
  font-size: 0.875rem;
  padding: 0 18px;
  margin-bottom: 18px;
  span {
    color: ${f.primary};
    cursor: pointer;
  }
`,U=d.div`
  display: flex;
  text-transform: uppercase;
  padding: 0 18px;
  align-items: center;
  margin-bottom: 18px;

  &::before {
    content: "";
    border-bottom: 1px solid ${f.semiTransparent(.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }

  &::after {
    content: "";
    border-bottom: 1px solid ${f.semiTransparent(.2)};
    flex: 1 0 auto;
    height: 1px;
    margin: 0;
  }
`,q=d.span`
  font-size: 0.875rem;
  text-align: center;
  flex: 0.2 0 auto;
`,H=d.div`
  position: absolute;
  inset: 0;
  background-color: ${f.semiTransparent(.1)};
`,J=({type:t})=>{var n,r;const[s,o]=u.useState(!1),{openModal:l,closeModal:a}=B(),i=async()=>{const m=t==="login"?"registration":"login";l(e.jsx(J,{type:m},m))};return e.jsxs(R,{title:(n=w[t])==null?void 0:n.title,text:(r=w[t])==null?void 0:r.text,children:[t==="login"?e.jsx(W,{isLoading:s,setIsLoading:o,closeModal:a}):e.jsx($,{isLoading:s,setIsLoading:o,closeModal:a}),e.jsxs(L,{children:[t==="login"?"Don't have an account? ":"Already have an account? ",e.jsx("span",{onClick:i,children:t==="login"?"Sign Up":"Sign In"})]}),e.jsx(U,{children:e.jsx(q,{children:"or"})}),e.jsx(I,{onClose:a,isLoading:s,setIsLoading:o}),s&&e.jsx(H,{children:e.jsx(k,{width:"65",height:"65"})})]})};export{J as default};
