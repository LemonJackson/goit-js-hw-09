import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r="feedback-msg",s=document.querySelector(".feedback-form");function m(e){const a=e.email.value,t=e.message.value;return{email:a,message:t}}const l={};s.addEventListener("submit",e=>{e.preventDefault();const{elements:{email:a,message:t}}=e.currentTarget;a.value===""||t.value===""?alert("All form fields must be filled in"):(l.email=a.value,l.message=t.value,console.log(l)),localStorage.removeItem(r),s.reset()});s.addEventListener("input",e=>{e.preventDefault();const a=m(e.currentTarget),t=JSON.stringify(a);localStorage.setItem(r,t)});const o=localStorage.getItem(r);if(o){const e=JSON.parse(o);s.email.value=e.email,s.message.value=e.message}
//# sourceMappingURL=commonHelpers2.js.map
