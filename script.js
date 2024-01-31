let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#newgame-btn");
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
          
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText="O";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});

let disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}

let enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     

    }
}
 let   showwinner=(winner)=>{
    msg.innerText="Congratulations,Winner is "+winner;
    msgConatiner.classList.remove("hide");
 }

let checkWinner=()=>{
    for(pattern of winPatterns){
        let po1=boxes[pattern[0]].innerText;
        let po2=boxes[pattern[1]].innerText;
        let po3=boxes[pattern[2]].innerText;
        if(po1!=""&&po2!=""&&po3!=""){
            if(po1===po2&&po2===po3){
               showwinner(po1);
               disabledBoxes();
            
            }

        }
       
    }
  

}

let reset=()=>{
    turnO=true;
    enabledBoxes();
    msgConatiner.classList.add("hide");

}

newGamebtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);