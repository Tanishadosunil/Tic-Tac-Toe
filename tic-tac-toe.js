let win = document.querySelector("#winner");
let boxes = document.querySelectorAll(".box");
let divBtns = document.querySelector(".div-btns");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector(".new-btn");
newBtn.classList.add("hide");

let content1, content2, content3;
let count=0;
let turnO = true;
let arrayOfWinners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

for(let box of boxes) {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        let winner = checkWinner();
        if(winner) {
            divBtns.classList.add("hide");
            resetBtn.classList.add("hide");
            newBtn.classList.remove("hide");
            win.classList.remove("hide");
            win.innerText = `Winner is ${content1}!`;
        }
        count++;
        if(count === 9) {
            divBtns.classList.add("hide");
            resetBtn.classList.add("hide");
            newBtn.classList.remove("hide");
            win.classList.remove("hide");
            win.innerText = `DRAW!`;
        }
    })
}
let disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
 }

let checkWinner = () => {
    let i;
    for(i=0; i<arrayOfWinners.length; i++) {
        let j=0;
        content1 = boxes[arrayOfWinners[i][j]].innerText;
        content2 = boxes[arrayOfWinners[i][j+1]].innerText;
        content3 = boxes[arrayOfWinners[i][j+2]].innerText;
        if(content1 != "" && content2 != "" && content3 != "") {
            if(content1 === content2 && content2 === content3) {
                disableBoxes();
                return true;
            } 
        }
    }
    return false;
    
}

let startGame = () => {
    turnO = true;
    count=0;
    newBtn.classList.add("hide");
    win.classList.add("hide");
    divBtns.classList.remove("hide");
    resetBtn.classList.remove("hide");
    enableBoxes();
}

newBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", startGame);