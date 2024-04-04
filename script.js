// Access elements from HTML file.
let button = document.getElementById("btn");
let container = document.querySelector(".container");


// initialize array to hold created squares.
let squareList = [];

button.addEventListener("click", (e)=>{
    e.preventDefault();
    
    //create and style newSquare.
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.style.width = "100%";
    newSquare.style.height = "100%";
    newSquare.style.border = `10px solid ${randomColor()}`;
    
    // make condition for determining to which element newSquare will be appended.
    if(squareList.length === 0){
        container.appendChild(newSquare);
    }

    else {

        //get dimensions of button and last square.

        let lastSquare = squareList[squareList.length - 1];
        let lastSize = lastSquare.getBoundingClientRect();
        let minSize = button.getBoundingClientRect();

        //prevent new squares if minSize has been reached.
        if (lastSize.width < minSize.width || lastSize.height < minSize.height) {
            return;
        }
        squareList[squareList.length - 1].appendChild(newSquare);
            
    }

    //push newSquare into array.
    squareList.push(newSquare);
})

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}