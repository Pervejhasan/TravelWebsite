function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>displayPost(data))
};
loadPost();



function displayPost(posts){
const postContainer=document.getElementById("posts");
for(const post of posts){
const div=document.createElement("div");

/*
div.innerHTML=`
<h2>${post.title}</h2>
<p>${post.body}</p>

`;
*/


const h2=document.createElement("h2");
h2.innerText=post.title;

const p=document.createElement("p");
p.innerText=post.body;
div.appendChild(h2);
div.appendChild(p);
div.classList.add("border");

postContainer.appendChild(div);
}
}

// ===============================data post=================================
// function addPost(){

//     fetch("https://jsonplaceholder.typicode.com/posts",{
//         method="POST",
//         body:JSON.stringify({
// title:'my new post',
// body:"this is my post", 
// userId:1
//         }),

//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//     })
//     .then(res=>res.json())
//     .then(data=>console.log("data ok"))
// };