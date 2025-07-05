// class person{
//     constructor(){
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();//to invoke parent class constructor
//         this.branch=branch;console.log("exits child constructor");
//     }
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let vidobj = new engineer("chemical engg");

// let data="secret info";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
//         console.log("data=",data);
//     }
// }
// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         data="some new value";
//     }
// }
// let student1=new user("vid","vid@gmail.com");
// let student2=new user("hi","hi@gmail.com");

//error handling
// let a=10;
// let b=20;
// try{
//     console.log("a+b= ",a+c);
// }catch(err){
//     console.log(err);
// }


//callback,async
// setTimeout(()=>{
//     console.log("hello");
// },4000);//timeout

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// function getData(dataid){
//     setTimeout(()=>{
//        console.log("data",dataid); 
//     },2000);
// }

//callback hell
// function getData(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });

// //promise
// function getData(dataid,getnextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//             if(getnextdata){
//                 getnextdata();
//             }
//         },5000);
//     });
// }

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
    });
};
let promise=getpromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("rejected",err);
});