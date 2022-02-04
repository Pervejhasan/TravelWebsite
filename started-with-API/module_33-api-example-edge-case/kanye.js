function quote(){
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    .then(data=>displayQuote(data))
};


quote();
function displayQuote(quote){
   const quote1= document.getElementById("quote");
const h1=document.createElement("h1");
h1.classList.add("quoteStyle");
h1.innerText=quote.quote;
quote1.appendChild(h1);


}