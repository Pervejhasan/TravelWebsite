function travel_countries(){
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
// .then(data=>console.log(data))
 .then(data=>displayCountries(data))

};

travel_countries();

function displayCountries(countries){
 const country_information=  document.getElementById("showCountries");
for( const country of countries)
{
 const div=document.createElement("div");

const image=document.createElement("img");
image.setAttribute("src",`${country.flags.svg}`);
image.setAttribute("class","style-image");
const h1=document.createElement("h1");
h1.innerText=country.name.official;
const second_h2=document.createElement("h2");
second_h2.innerText=country.capital[0];
const h2=document.createElement("h2");
 h2.innerText=country.continents[0];


const p=document.createElement("p");
p.innerText=country.population;



const p2=document.createElement("p");
p2.innerText=country.status;


div.appendChild(image);
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(second_h2);
div.appendChild(p);
div.appendChild(p2);

div.classList.add("country-details");

country_information.appendChild(div);
// console.log(country);
// console.log(country.status);
}




    
}