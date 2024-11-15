const container = document.querySelector("#container");
container.style.cssText= "display: flex; flex-wrap: wrap; aspect-ratio: 1/1;    justify-content: space-around; align-content: space-around; background-color: grey;max-height:95vh;max-width:95vw; box-sizing:border-box; margin: auto;";

// generate 16 squares in container
for (i = 0; i<16 ;i++) {
let square = document.createElement("div");
square.style.cssText = "flex-grow:1; flex-shrink:1; flex-basis: 25%; aspect-ratio: 1; background-color: white; box-sizing:border-box;border:2px solid;";

container.appendChild(square);
}