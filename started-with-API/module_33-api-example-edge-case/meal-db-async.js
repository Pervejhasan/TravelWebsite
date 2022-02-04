function searchFood(){


    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    //  console.log(searchText);
    
    searchField.value=" ";
    const searchValidName=document.getElementById("not-found");
    
    
    
    if(searchText == false){
    const h3=document.createElement("h3");
    h3.innerText="Search a food name...";
    searchValidName.append(h3);
    }
    
    else{
    
      searchValidName.innerHTML=' ';
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
      // console.log(url);
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayfood(data.meals))
    }
      
    
    }
    
    const displayfood = meals=>{
    
    const SearchResult=document.getElementById("search-result");
    
    // console.log(meals.length);
    //============================== clear search result==========================
    
    // SearchResult.innerHTML=" ";
    SearchResult.textContent=" ";
    
      meals.forEach(meal=>{
    
        const div=document.createElement("div");
        div.classList.add("col");
        
        div.innerHTML=`
        <div onclick="loadmealdetails('${meal.idMeal}')"  class="card h-100 bg-dark">
                <img src="${meal.strMealThumb}"class="card-img-top p-2 img-style" alt="..."/>
                <div class="card-body">
                  <h4 class="card-title text-warning">${meal.strMeal}</h4>
                  <h5 class="text-warning">${meal.strCategory}</h5>
                  
              
                </div>
              </div>
        `;
        
        SearchResult.appendChild(div);
        
            //  console.log(meal.strMeal);
        
        });
        
      
    }
    
    // ============================================use async await====================================
    const loadmealdetails= async  mealid=>{
    
        const url2=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;


       const res= await fetch(url2);
       const data= await res.json();
       displayFoodDetails(data.meals[0]);
        // .then(res=>res.json())
        // .then(data=>displayFoodDetails(data.meals[0]))
    // console.log(url2);
    
    }
    
    
    const displayFoodDetails=meal=>{
    
    
       const singlemealdetails= document.getElementById("mealDetails");
    
    
      // ===========================clear previous single meal details=========================== 
       singlemealdetails.textContent=" ";
    const div=document.createElement("div");
    div.setAttribute("class","card card2");
    div.innerHTML=`
    
      <img src="${meal.strMealThumb}" class="card-img-top image-style-2" alt="...">
      <hr>
      <div class="card-body">
        <h5 class="card-title text-warning">${meal.strMeal}</h5>
        <h6>${meal.strCategory}</h6>
        <h6>${meal.strArea}</h6>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-warning">How to make?</a>
      
      </div>
    
    `;
    
    singlemealdetails.appendChild(div);
    // console.log(meal);
    
    
    }
    