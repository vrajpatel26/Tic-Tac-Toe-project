let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winmsg");

let newGame = document.querySelector("#new-game");


let turnO = true ; //playerO 

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame = () => {
    turnO = true;
    enabledboxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("button was clicked !");
        if(turnO){//playerO
            box.innerText = "O";
            turnO = false;
        }
        else{//playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ;

        checkwinner();
    })
})

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
msg.innerText = `Congratulations , Winner is ${winner}`;
msgContainer.classList.remove("hide");

disabledboxes();
}


const checkwinner = () =>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)

        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;

        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("winner" ,pos1val);

                showWinner(pos1val);
            }
        }
    }
}



newGame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
