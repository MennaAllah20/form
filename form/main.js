     const password = document.querySelector('.password');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(password.type === "password"){
         password.type = "text";
         showBtn.textContent = "Hide";
         showBtn.style.color = "#3498db";
       }else{
         password.type = "password";
         showBtn.textContent = "show";
         showBtn.style.color = "#222";
       }
      });
      linkCreateAccount.onclick=function()
{
    'use strict';
    fLogin.classList.toggle("display");
};
