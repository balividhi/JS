let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;         
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innertext="";
    }
}
const showwinner = (winner) =>{
    msg.innerText = `congratulations,winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innertext;
        let pos2val = boxes[pattern[1]].innertext;
        let pos3val = boxes[pattern[2]].innertext;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetgame);