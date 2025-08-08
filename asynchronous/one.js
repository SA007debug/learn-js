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

// function getdata(data){
//   setTimeout(() => {
//     console.log(`Data is ${data}`)
//   },2000);
// }
// getdata(1);
// getdata(2);
// getdata(3);
//After 2 seconds,all three will get executed at the same time.
//Note:setTimeout() is used to simulate actual delay from a real server.

//Promises in Javascript:
// let promise = new Promise(function(resolve, reject) {
//   let pizzaReady = false;//this is set by the user
// //The first parameter is always the resolve function.
// //The second parameter is always the reject function.
//   if (pizzaReady) {
//     resolve("Here is your pizza!");
//   } else {
//     reject("Sorry, no pizza today.");
//   }
// });
// promise
//   .then(function(result) {
//     console.log("Success:", result);
//   })
//   .catch(function(error) {
//     console.log("Error:", error);
//   });
//https://chatgpt.com/share/6893aa26-4774-8010-9b48-4e654cc43880
//.then() lets you do something with the result that the promise gives in case of success.
//.catch() lets you do something with the result that the promise gives in case of failure.
//If the promise has succeeded;.then() will run but if the promise has failed; .catch() will run.
//An example of  callback chaining:
// function getData(data,NextgetData){
//     setTimeout(()=> {
//       console.log(`Fetching Data.....`);
//     },500);
//     setTimeout(() => {
//       console.log(`Data is ${data}.`);   
//       if(NextgetData){
//         NextgetData();
//       }   
//     },5000)
// }
// getData(1,NextgetData(2));This is wrong,the parentheses will immediately execute NextgetData.
//Arrow method:
// getData(1,() => getData(2,() => getData(3,() => getData(4))));
//Bind Method:
// getData(1,getData.bind(null,2,getData.bind(null,3,getData.bind(null,4))));
//An API always returns a promise to us and we have to handle that promise.
//The below function can be seen as an API returning a promise:
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }
//Right now if you run this code in the console then it will show the state of the promise as 'pending' as there is neither resolve nor reject used as of now.
//But, if you add resolve and store the promise in a variable,then it will show 'fulfilled' as the promise state.
//Note:The API will return the result after 7 seconds(as mentioned in setTimeout) but it will immediately return a promise(which will be in pending state under those 7 seconds).After 7 seconds,the state of promise will change to either fulfilled or rejected.
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Successfully Done!");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 7000);
//   });
// }
//And if you add reject,it will show 'rejected' as the promise state:
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error is found.")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }