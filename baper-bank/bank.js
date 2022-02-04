document.getElementById("login-submit").addEventListener("click",()=>{
   const emailfield =document.getElementById("user-email");
   const useremail=emailfield.value;
console.log(useremail);

//password
   const passwordfield =document.getElementById("user-password");
   const userpasword=passwordfield.value;
console.log(userpasword);
if(useremail=="sontan@gmail.com" && userpasword=="secret"){
   window.location.href="banking.html";
}

})

