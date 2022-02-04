function buddy(){

    fetch("https://randomuser.me/api/?results=50")
    .then(res=>res.json())
    .then(data=>displaybuddies(data))
};
buddy();

function displaybuddies(buddies){
const buddiess=buddies.results;
const buddiesDiv=document.getElementById("buddies");


for(const buddy of buddiess){

    // console.log(buddy.email);
    const div=document.createElement("div");
    div.classList.add("content");
   
//     const h2= document.createElement("h2");
//  h2.innerText=buddy.name.title+" "+buddy.name.first+" "+buddy.name.last;

  const p= document.createElement("p");
p.innerText=`Name: ${buddy.name.title+" "+buddy.name.first+" "+buddy.name.last} \n\n Email: ${buddy.email}`;
const image=document.createElement("img");
image.setAttribute("src",`${buddy.picture.medium}`);


// ===================add class two different ways===================

// image.classList.add("image-style");
image.setAttribute("class","image-style");

//  div.appendChild(h2);
div.appendChild(image);
div.appendChild(p);
buddiesDiv.appendChild(div);

}

}