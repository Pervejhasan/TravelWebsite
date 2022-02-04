fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>display(data))





// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res=>res.json())
// .then(data=>display(data))



function display(users){
const ul=document.getElementById("users");

for(const user of users){
  const li =document.createElement("li");
  li.innerText=`Name: ${user.name} Email: ${user.email}`;
  ul.appendChild(li);

}


}