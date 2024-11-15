const container = document.querySelector("#container");

// generate 16 squares in container
for (i = 0; i<16 ;i++) {
const square = document.createElement("div");
square.className = "square";
container.appendChild(square);
}