const container = document.querySelector("#container");

// generate 16 squares in container
for (i = 0; i<16 ;i++) {
const square = document.createElement("div");
square.className = "square";
container.appendChild(square);
}

container.addEventListener("mouseover",(event) =>{
    // change color
    if (event.target.className = "square") {
    event.target.style.backgroundColor = "red";
    }
})

