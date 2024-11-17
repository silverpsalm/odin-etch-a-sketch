const container = document.querySelector("#container");

// generate 16 squares in container
for (i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.flexBasis = "25%";
    square.style.opacity = 1.0;
    container.appendChild(square);
}

container.addEventListener("mouseover", (event) => {
    // change color
    if (event.target.id != "container") {
        event.target.classList.add("active");
    }


})

container.addEventListener("mouseout", (event) => {
    // change color back on mouse leave
    if (event.target.id != "container") {
        event.target.classList.remove("active");
        console.log(event.target.style.opacity.value);
        event.target.style.opacity -= 0.1;
    }
})

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    // button event listener
    let sideCount = prompt("How many squares per side?", "(max 100)");
    let squareTotal = sideCount * sideCount; // total square #
    let squarePercent = 100 / sideCount; // Flex Basis value for new squares
    container.innerHTML = '';     // delete current squares in grid
    // generate new squares:
    for (i = 0 ; i < squareTotal ; i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        // set new square size based on percentage
        newSquare.style.flexBasis = squarePercent + "%";
    
        container.appendChild(newSquare);
    }
})

/* extra credit: darken square by 10% each time:

    make squares turn black instead of red
    on mouseout, reduce square opacity by 10


*/