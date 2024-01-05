"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[311],{301:(e,o,n)=>{n.d(o,{Z:()=>s});const t="Container_container__82qFW";var r=n(184);const s=e=>{let{children:o}=e;return(0,r.jsx)("div",{className:t,children:o})}},438:(e,o,n)=>{n.d(o,{V:()=>s});const t={googleButton:"GoogleButton_googleButton__v0uqx"};var r=n(184);const s=()=>(0,r.jsxs)("button",{className:t.googleButton,onClick:()=>alert("Google button clicked"),children:[(0,r.jsx)("img",{src:"../image/google-icon.svg",alt:"Google Logo",width:18,height:18,className:t.googleIcon}),"Google"]})},321:(e,o,n)=>{n.d(o,{a:()=>s});var t=n(768),r=n(184);const s=()=>(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsx)(t.RL,{height:80,width:80,radius:48,color:"blue",ariaLabel:"watch-loading",visible:!0})})},311:(e,o,n)=>{n.r(o),n.d(o,{default:()=>b});var t=n(301),r=n(791),s=n(133),a=n(321),l=n(87),i=n(438),c=n(184);const g=e=>{let{onLogin:o,isLoggingIn:n,error:t}=e;const[g,u]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),m=""!==g.trim()&&""!==d.trim();return(0,c.jsxs)("div",{className:s.Z.formContainer,children:[(0,c.jsxs)("form",{className:s.Z.form,onSubmit:e=>{e.preventDefault();const n=e.currentTarget;o({email:g,password:d}),n.reset()},children:[(0,c.jsx)(i.V,{}),(0,c.jsxs)("div",{className:s.Z.labelWrapper,children:[(0,c.jsx)("div",{className:s.Z.labelContainer,children:(0,c.jsxs)("label",{className:s.Z.label,children:[(0,c.jsx)("span",{children:"Email"}),(0,c.jsx)("span",{className:s.Z.required,children:" *"}),(0,c.jsx)("input",{className:s.Z.input,type:"email",name:"email",value:g,placeholder:"your@email.com",autoComplete:"false",onChange:e=>u(e.target.value),required:!0})]})}),(0,c.jsx)("div",{className:s.Z.labelContainer,children:(0,c.jsxs)("label",{className:s.Z.label,children:[(0,c.jsx)("span",{children:"Password"}),(0,c.jsx)("span",{className:s.Z.required,children:" *"}),(0,c.jsx)("input",{className:s.Z.input,type:"password",name:"password",value:d,placeholder:"Password",autoComplete:"false",onChange:e=>h(e.target.value),required:!0})]})})]}),(0,c.jsx)("button",{className:s.Z.loginButton,type:"submit",disabled:!m||n,children:"Log In"}),n&&a.a,t&&(0,c.jsx)("p",{children:t})]}),(0,c.jsx)(l.rU,{to:"/register",className:s.Z.link,children:"Register"})]})},u=()=>{const[e,o]=(0,r.useState)(!1),[n,t]=(0,r.useState)(!1),[s,a]=(0,r.useState)(null);return{isLoggedIn:e,isLoggingIn:n,error:s,setIsLoggedIn:o,setIsLoggingIn:t,setError:a}};var d=n(294);const h="https://bookread-backend.goit.global/",m=(e,o)=>d.Z.post("".concat(h).concat(e),o).then((e=>e.data)),_=()=>{const{isLoggedIn:e,isLoggingIn:o,error:n,setIsLoggedIn:t,setIsLoggingIn:r,setError:s}=u();return{isLoggedIn:e,isLoggingIn:o,error:n,login:async e=>{try{r(!0);const o=await m("auth/login",e);t(!0),r(!1),s(null),console.log("Logged in:",o)}catch(n){t(!1),r(!1),s("Incorrect email or password")}},logout:async()=>{try{await m("auth/logout"),t(!1),s(null),console.log("Logged out")}catch(n){s("Error during logout")}},refreshTokens:async e=>{try{const o=await m("auth/refresh",{refreshToken:e});console.log("Tokens refreshed:",o)}catch(n){s("Refresh tokens:",n)}},googleAuth:async()=>{try{const o=await(e="auth/google",d.Z.get("".concat(h).concat(e)).then((e=>e.data)));console.log("Google authentication:",o)}catch(n){s("Google authentication error:",n)}var e}}},p="Quote_quoteContainer__02t6S",x="Quote_quoteTitle__lNryk",L="Quote_quoteAuthor__I-483",j=()=>(0,c.jsx)(t.Z,{children:(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("h2",{className:x,children:"Books are the ships of thoughts, wandering through the waves of time."}),(0,c.jsx)("p",{className:L,children:"Francis Bacon"})]})});function b(){const{isLoggingIn:e,error:o,login:n}=_();return(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("title",{children:"Log In"}),(0,c.jsx)(g,{onLogin:e=>{n(e)},isLoggingIn:e,error:o}),(0,c.jsx)(j,{})]})}},133:(e,o,n)=>{n.d(o,{Z:()=>t});const t={formContainer:"LoginForm_formContainer__9cdD+",form:"LoginForm_form__6WwqY",labelWrapper:"LoginForm_labelWrapper__Egyb1",labelContainer:"LoginForm_labelContainer__j+bsM",label:"LoginForm_label__0Hx77",input:"LoginForm_input__RX4hS",required:"LoginForm_required__kElR9",loginButton:"LoginForm_loginButton__0rGcP",link:"LoginForm_link__ebgBK",linkContainer:"LoginForm_linkContainer__eJ0OS",linkRegister:"LoginForm_linkRegister__MJFBU"}}}]);
//# sourceMappingURL=311.cbe18c80.chunk.js.map