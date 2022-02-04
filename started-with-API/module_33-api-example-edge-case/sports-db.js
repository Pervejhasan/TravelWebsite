function sports_db(){
fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
.then(res=>res.json())
// .then(data=>console.log(data.sports))
.then(data=>displaySportsDetails(data.sports))

}

sports_db();


function displaySportsDetails(Sports){
    const sports=document.getElementById("card-container");
   
Sports.forEach(sport=>{
    // console.log(sport.strSport);
    const div=document.createElement("div");
    div.setAttribute("class","col");
    div.innerHTML=`
              <div class="card h-100 p-2">
                <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-warning">${sport.strFormat}</h5>
                  <h5 class="card-title">${sport.strSport}</h5>
                  <p class="card-text text-secondary">${sport.strSportDescription.slice(0,120)}</p>
                </div>
              </div>
            
    `;
    sports.appendChild(div);
});


}