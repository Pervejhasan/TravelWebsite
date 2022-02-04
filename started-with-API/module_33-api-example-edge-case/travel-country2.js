function travel_countries(){
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    //  .then(data=>console.log(data))
      .then(data=>displayCountries(data))
    
    };
    
    travel_countries();
    
    function displayCountries(countries){
     const country_information=  document.getElementById("showCountries");
    for( const country of countries)
    {
     const div=document.createElement("div");
    // console.log(country);


div.innerHTML=`
<img src="${country.flags.png}" class="style-image">
<h1>${country.name}</h1>

 <button class="btn" onclick="loadcountryByName('${country.name}')">Details</button>

`;


// =========================================
// <h2>${country.capital}</h2>
// <h2>${country.nativeName}</h2>

// <p>${country.population}</p>
// <p>${country.region}</p>
// =======================================


    //  const image=document.createElement("img");
    //  image.setAttribute("src",`${country.flags.png}`);
    //  image.setAttribute("class","style-image");
    //  const h1=document.createElement("h1");
    
    //  h1.innerText=country.name;
  
    //  const second_h2=document.createElement("h2");
    // second_h2.innerText=country.capital;
    // // console.log(country.capital);
    //  const h2=document.createElement("h2");
    //  h2.innerText=country.nativeName;
    
    
    //  const p=document.createElement("p");
    //  p.innerText=country.population;
    
    
    
    // const p2=document.createElement("p");
    //  p2.innerText=country.region;
    
    
    //  div.appendChild(image);
    //  div.appendChild(h1);
    //  div.appendChild(h2);
    //  div.appendChild(second_h2);
    //  div.appendChild(p);
    //  div.appendChild(p2);
    
     div.classList.add("country-details");
    
     country_information.appendChild(div);
    //  console.log(country);
    //  console.log(country.status);
    }
    
    
    
    
        
    }

const loadcountryByName=name=>{

    const url=`https://restcountries.com/v2/name/${name}`;
fetch(url)
.then(res=>res.json())
.then(data=>displaycountriesdetails(data[0]))


    // console.log(url);
}

const displaycountriesdetails =country =>{
const detailsShow=document.getElementById("countryDetails");
detailsShow.innerHTML=`
<img src="${country.flags.png}" class="style-image">
<h1>${country.name}</h1>
<h2>${country.capital}</h2>
<h2>${country.nativeName}</h2>
<p>${country.population}</p>
<p>${country.region}</p>

`;


}