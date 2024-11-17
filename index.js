const container = document.querySelector("#container");

// generate 16 squares in container
for (i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.flexBasis = "25%";
    container.appendChild(square);
}

container.addEventListener("mouseover", (event) => {
    // change color
    console.log(event.target.id);
    if (event.target.id != "container") {
        event.target.classList.add("active");
    }


})

container.addEventListener("mouseout", (event) => {
    // change color back on mouse leave
    console.log(event.target.classList);
    if (event.target.id != "container") {
        event.target.classList.remove("active");
    }
})

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {

    console.log(e);

    // button event listener
    let sideCount = prompt("How many squares per side?", "(max 100)");
    let squareTotal = sideCount * sideCount; // total square #
    let squarePercent = 100 / sideCount; // Flex Basis value for new squares
    container.innerHTML = '';     // delete current squares in grid
    // set new square size based on percentage
    let newSquare = document.createElement("div");
})