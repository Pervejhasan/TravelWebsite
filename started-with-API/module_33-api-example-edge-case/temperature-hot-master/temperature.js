

const  api_key=`58cc598d022e457e90793ae883dabbe9`;


const searchtemperature =()=>{
  const city=  document.getElementById("city-name").value;

const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;


fetch(url)
.then(res=>res.json())
.then(data=>displayTemperature(data))
// console.log(url);
}



const setInnerText=(id , text)=>{
  
    document.getElementById(id).innerText=text;
   
    

}




const displayTemperature=(temperature)=>{
    document.getElementById("city-name").value="";
setInnerText("city_name",temperature.name);
 setInnerText("temperature",temperature.main.temp);
 setInnerText("weather",temperature.weather[0].main);

 //set weather icon
 const url=` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

//  http://openweathermap.org/img/wn/10d@2x.png 

 const img_icon=document.getElementById("weather-icon");
 img_icon.setAttribute("src",url);




}
