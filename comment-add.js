document.getElementById("submit-comment").addEventListener("click", function () {

    let element = document.createElement("p");
    let value = element.innerText = document.getElementById("new-comment").value;
    let add = document.getElementById("addComment").appendChild(element);

    document.getElementById("new-comment").value = " ";


})
