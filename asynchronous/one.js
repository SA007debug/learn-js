//Synchronous and Asynchronous coding:
// https://chatgpt.com/share/68922f25-9f7c-8010-b28b-b8eba0f541e5
//Asynchronous: The task which takes time is executed parallely and the code moves on to the next task.
//setTimeout(func_name,time):this executes the function after some time.That time is given by the user(in milliseconds).
//setTimeout expects a function as its first argument — not the result of a function call!!
// function greet(){
//     console.log(`How are you?`);
// }
// setTimeout(greet,7000)//this will be executed after 7 seconds than usual.
//NOTE: Agar setTimeout ke andar greet ke baad bracket lagaya to function turant call ho jayega aur error dega.
// function greet(){
//     console.log(`How are you?`);
// }
// setTimeout(greet(),7000)//This will immediately execute the function and will show error.
//If the function contains parameter:
// function greet3(name){
//     console.log(`How are you ${name}?`);
// }
//setTimeout(greet3("Sam",7000))//This is wrong for the same reason:the function will be called immediately.
//The correct way is:
//1.use arrow method:
// setTimeout(() => greet3("Sam"),7000)
//2.use bind:
// setTimeout(greet3.bind(null,"Sam"),5000)


//Callback:
//A callback is a function passed into another function as an argument,and it's called after the first function finishes its task (often used in asynchronous operations).
// function greet(name){
//     console.log(`How are you ${name}?`)
// }
// function greet2(name,func){
//     func(name);
// }
// greet2(greet,"Sam")
//Here,greet is a callback.
//setTimeout also uses callback.
//https://chatgpt.com/share/689268cd-77e0-8010-81fa-510004a8990f
// function getData(data){
//   setTimeout(() => {
//     console.log(`Data of ${data}`);
//   },0)
// }
// //setTimeout(..., 0) ≠ immediate. It just means “as soon as possible after current work finishes.”
// getData(1);
// console.log("How are you?");
// for(let i = 0; i < 1e5;i++){
//   console.log("I am fine.");
// }
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
//Even though the delay is 0ms, the callback must wait until all synchronous code finishes.Once everything finishes, the setTimeout callback is finally allowed to run.Until all synchronous code is completely done, the setTimeout callback won't run, even with 0ms.
// Blocking code means synchronous code that:
//(i)Runs immediately
//(ii)Prevents JavaScript from doing anything else until it finishes.
//The for loop + 10 console logs are blocking code.
//https://chatgpt.com/share/68937cae-5744-8010-b230-b577fafab7f4

function getdata(data){
  setTimeout(() => {
    console.log(`Data is ${data}`)
  },2000);
}
getdata(1);
getdata(2);
getdata(3);
//After 2 seconds,all three will get executed at the same time.