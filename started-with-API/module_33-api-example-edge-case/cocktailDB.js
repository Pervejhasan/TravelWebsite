const searchJuice=()=>{
const inputText=document.getElementById("inputField");
const inputValue=inputText.value;
inputText.value="";



const searchValidName=document.getElementById("not-found");

if(inputValue === ''){
    searchValidName.innerHTML=" ";
  
    const h2=document.createElement("h2");

h2.innerText="Search a juice name...";

searchValidName.append(h2);

}
else{
    searchValidName.innerHTML=" ";
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayJuices(data.drinks))
    // .then(data=>console.log(data.drinks))
}

// console.log(inputValue);
};



function displayJuices(juices){

    const container=document.getElementById("div-container");
container.textContent=" ";





    juices.forEach(juice =>{
       
const div=document.createElement("div");
div.classList.add("col");

       div.innerHTML=  ` <div  onclick="loadjuicedetails('${juice.idDrink}')" class="card h-100 p-2">
            <img src="${juice.strDrinkThumb}" class="card-img-top rounded-2" alt="...">
            <div class="card-body">
              <h5 class="card-title">${juice.strCategory}</h5>
             <button class="btn btn-outline-warning mt-3 btn-sm btn-style rounded-pill">Order</button>
            </div>
          </div>
       
`;

container.appendChild(div)

        // console.log(juice.idDrink);
    });
// console.log(juices);
}




const loadjuicedetails=(juiceid)=>{

    const url2=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${juiceid}`;
    fetch(url2)
    .then(res=>res.json())
      .then(data=>displayFoodDetails(data.drinks[0]))
    //  .then(data=>console.log(data.drinks[0]))
 


}



function displayFoodDetails(juice){

    const singlejuicedetails= document.getElementById("juiceDetails");


    // ===========================clear previous single meal details=========================== 

    singlejuicedetails.textContent=" ";


  const div=document.createElement("div");
  div.setAttribute("class","card mb-4 p-2");
  div.innerHTML=`
    
  <img src="${juice.strDrinkThumb}" class="card-img-top rounded-2" alt="...">
    <div class="card-body">
    <h5 class="card-title">${juice.strCategory}</h5>
    <h5 class="card-title">${juice.strDrink}</h5>
    <p class="card-text">${juice.strInstructions.slice(0,150)}</p>
 
    </div>
  
  `;
  
  singlejuicedetails.appendChild(div);
  // console.log(meal);




}