// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
// };
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// };
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked");
// });
// btn1.addEventListener("click" , ()=>{
//     console.log("button 1 was clicked-handler2");
// });
// const handler3 = ()=>{
//     console.log("button was clicked-handler 3");
// };
// btn1.addEventListener("click",handler3);
// btn1.removeEventListener("click",handler3);
// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// };

//toggle button which changes screen to dark mode when clicked and light mode when clicked again
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
modebtn.addEventListener("click",()=>{
    if(currmode === "light")
    {
        currmode = "dark";
        body.style.backgroundColor = "black";
    }else{
        currmode = "light";
        body.style.backgroundColor = "white";
    }
    console.log(currmode); 
});