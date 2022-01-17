const p1span = document.getElementById('p1span')
const p2span = document.getElementById('p2span')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const resetbtn = document.getElementById('reset')

let p1score = 0;
let p2score = 0;
let winscore = 5;
let isGameover = false
p1.addEventListener("click", () => {
    if(!isGameover){
        p1score++
        if(p1score === winscore) {
            isGameover = true;
        }
        p1span.innerText = p1score
     
    }
})

p2.addEventListener("click", () => {
    if(!isGameover){
        p2score++
        if(p2score === winscore) {
            isGameover = true;
        }
        p2span.innerText = p2score
    }
})

resetbtn.addEventListener("click", () => {
    isGameover = false 
    p1score = 0;
    p2score = 0;
    p1span.innerText = 0;
    p2span.innerText = 0;
})

