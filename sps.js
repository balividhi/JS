let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score"); 
const gencompchoice=()=>{
    const options=["stone","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>{
    msg.innerText="game was draw.play again";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innertext=userscore; 
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innertext=compscore;
        msg.innerText=`you lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice = ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;  
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="stone"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});