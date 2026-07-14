const form=document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();
const pass=document.getElementById("password").value;

const msg=document.getElementById("msg");

if(pass.length<6){

msg.style.color="red";
msg.innerHTML="كلمة المرور يجب أن تكون 6 أحرف على الأقل.";

return;

}

msg.style.color="green";
msg.innerHTML="تم تسجيل الدخول بنجاح ✔";

});