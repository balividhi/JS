const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
for(let select of dropdowns){
    for(currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name ==="from" && currcode === "USD"){
            newoption.selected="selected";
        }else if(select.name==="to" && currcode === "INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}
const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
};
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value='1';
    }
    //console.log(fromCurr.value,toCurr.value);
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalamt=amtval
    
    
    *rate;
    msg.innerText=`${amtval} ${fromCurr.value} ${toCurr.value}`;
});