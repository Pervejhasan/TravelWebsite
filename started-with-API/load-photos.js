function photos_load(){
fetch("https://jsonplaceholder.typicode.com/photos")
.then(res=>res.json())
.then(data=>displayPhoto(data))
  
};

 photos_load();
function displayPhoto(photos){
   const  dive=document.getElementById("photo-show");


    for(const photo of photos){

const h1=document.createElement("h1");
h1.innerText=photo.title;

dive.appendChild(h1);



    }


}