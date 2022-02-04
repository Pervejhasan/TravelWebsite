function getpin(){
    const pin=Math.round(Math.random()*10000);
    const pinstr=pin+'';
    if(pinstr.length==4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatePin(){
   const pin=getpin();
   document.getElementById("display-pin").value=pin;

}

document.getElementById("key-pad").addEventListener("click",function(e){
const number=e.target.innerText;

const calcinput=document.getElementById("typed-number");
if(isNaN(number)){
  if(number=="C"){
    calcinput.value=' ';
  }
}

else{

   
    const previousnumber=calcinput.value;  
    const newnumber=previousnumber+number;
    calcinput.value= newnumber;

}

});


function verifyPin(){



const currentpin=document.getElementById("display-pin").value;

const typednumber=document.getElementById("typed-number").value;
const successMessage= document.getElementById("notify-success");
const failError= document.getElementById("notify-fail");



if(currentpin==typednumber){
 
 successMessage.style.display="block";
 failError.style.display="none";
}
else{
 
 failError.style.display="block";
 successMessage.style.display="none";
}

}