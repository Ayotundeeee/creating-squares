let button = document.getElementById("btn");
let parent = document.querySelector("container");
let squares = document.querySelector("squares")

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let newSquare = document.createElement("div");
    newSquare.classList.add("square")
    squares.appendChild(newSquare);
})