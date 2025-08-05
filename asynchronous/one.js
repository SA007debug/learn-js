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
//A function which is passed as an argument to another function is called a callback.
// function greet(name){
//     console.log(`How are you ${name}?`)
// }
// function greet2(name,func){
//     func(name);
// }
// greet2(greet,"Sam")
//Here,greet is a callback.
//setTimeout also uses callback.