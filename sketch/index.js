
const gridContainer = document.querySelector(".container")

for(let i =0;i<256;i++){
        const grids = document.createElement("div");

    grids.classList.add("grid")


    gridContainer.appendChild(grids);


}