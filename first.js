// console.log("welcome");

//create a object project and store info
// const product={
//     title: "ball pen",
//     rating:4,
//     offer:5,
//     price:270,
// };
// console.log(product);

//create an object profile and store info
// const profile={
//     username:"xyz",
//     followers:540,
//     posts:74,
//     qual:"entrepreneur",
// };
// console.log(profile);

//arithmetic operators
// let a=5;
// let b=2;
// console.log("a= ",a ,"&b= ",b);
// console.log("a+b= ",a+b);
// console.log("a-b= ",a-b);
// console.log("a*b= ",a*b);
// console.log("a/b= ",a/b);
// console.log("a%b= ",a%b);
// console.log("a**b= ",a**b);//5^2

//check a number divisible by 5 or not
// let num = prompt("enter a number: ");
// if(num%5===0)
// {
//     console.log(num,"divisible by 5");
// }else{
//     console.log(num,"not divisible");
// }

//random number game
// let gamenum = 25;
// let usernum = prompt("guess the game number: ");
// while(usernum != gamenum)
// {
//     usernum = prompt("you entered wrong number,guess the number: ");
// }
// console.log("congratulations you won");

//takes a number and return the number of vowels
// function countvowels(str){
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o" || char==="u")
//         {
//             count++;
//         }
//     }
//     return count;
// }

// const countvow = (str)=>{
//     let count = 0;
//     for(const char of str)
//     {
//         if(char==="a"|| char==="e"|| char==="i" || char==="o"|| char==="u")
//         {
//             count++;
//         }
//     }
//     return count;
// }

//arr of numbers and print their square
// let nums = [1,2,3,4];
// nums.forEach((num)=>
// {
//     console.log(num*num);
// })

// let nums = [5,6,7,8];
// let calcsquare = (num) =>{
//     console.log(num*num);
// }
// nums.forEach(calcsquare);

// let nums=[4,5,6,7];
// let newarr = nums.map((val)=>
// {
//     return val*val;
// })
// console.log(newarr);

// let nums = [7,8,9,4];
// let evenarr = nums.filter((val)=>
// {
//     return val%2===0;
// })
// console.log(evenarr);

// let arr = [1,2,3,4];
// let output = arr.reduce((result,current)=>
// {
//     return result + current;
// });
// console.log(output);

//to find the largest in arr
// let arr = [1,2,3,4];
// let output =arr.reduce ((previous,current)=>
// {
//     return previous>current?previous:current;
// });
// console.log(output);

//sum of all array elements
// let n = prompt("enter a number");
// let arr = [];
// for(let i=1;i<=n;i++)
// {
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr)=>
// {
//     return res+curr;
// });
// console.log(sum);
// let factorial = arr.reduce((res,curr)=>
// {
//     return res*curr;
// });
// console.log(factorial);

// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innertext="Hello";
// let newheading=document.createElement("h1");
// newheading.innerHTML="<i>Hi i am new!</i>";
// document.querySelector("body").prepend(newheading);
// let para=document.querySelector("p");
// para.remove();
// newheading.remove();
//q1
// let newbtn=document.createElement("button");
// newbtn.innerText="click me!";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);
//q2
let para=document.querySelector("p");