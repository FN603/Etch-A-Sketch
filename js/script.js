grid = 16
const container = document.getElementById("container")

let box = document.createElement("div")
box.style.width = "auto"
box.style.height = "auto"
// box.textContent = "wa"
box.setAttribute("class", "griddy")
let gridContainer = document.createElement("div")
gridContainer.setAttribute("class", "gridContainer")
function creategrid() {
    for(let i = 0; i <= grid; i++) {
        let gridcontainercloner = gridContainer.cloneNode(true)
        container.appendChild(gridcontainercloner)
    
        for(let j = 0; j <= grid; j++) {
            let boxer = box.cloneNode(true)
            gridcontainercloner.appendChild(boxer)


            boxer.addEventListener("mouseenter", (e) =>{
                e.target.style.backgroundColor = "black";
            });
        }
    }
}
creategrid()

const button = document.getElementById("askSize");

button.addEventListener("click", () =>{
    do {
        grid = prompt("Enter new grid size");
    } while (grid < 1 || grid > 100)
    container.textContent = "";
    creategrid();
})