const gridContainer = document.querySelector(".container");
const body = document.body;



const inputSize = document.querySelector(".input-size");
let number =16;

inputSize.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){
         number = parseInt(inputSize.value);
         console.log(number);

        buildGrid(number);
        
    }

});

function buildGrid(){

    gridContainer.innerHTML = ""; //to lear the container everytime//

    let totalSqaures = number * number;


        for(let i =0;i<totalSqaures;i++){
                const grids = document.createElement("div");

            grids.classList.add("grid")
            grids.style.width=`${512/number}px`;
            grids.style.height=`${512/number}px`;


            gridContainer.appendChild(grids);


        }


}
buildGrid();



