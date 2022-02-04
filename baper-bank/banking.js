//handle deposit btn event
let depositeadd=0;
document.getElementById("deposit-btn").addEventListener("click",()=>{
   
    const deposit_input=document.getElementById("deposit-input");
    const depositeamount=deposit_input.value;
    const depositetotal=document.getElementById("deposite-amount-show");

   
    depositeadd=depositeadd+parseFloat( depositeamount);
    depositetotal.innerText=depositeadd;

    deposit_input.value=" ";
    
    })

//handle withdraw btn event

    document.getElementById("withdraw-btn").addEventListener("click",()=>{
   
        const withdraw_input=document.getElementById("withdraw-input");
       
        })
    