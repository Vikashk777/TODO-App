let input = document.querySelector("input");
let btn = document.querySelector("#submit");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    if(input.value !=""){
    ul.appendChild(item);
    item.appendChild(delbtn);
    input.value = "";
    }

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName = "BUTTON"){
        let ListItem = event.target.parentElement;
        ListItem.remove();
    }
})