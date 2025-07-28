const user = {
    name:"Sarthak",//data property
    age:21,//data property
    message: function(){
        //console.log(`${this.name},welcome to the website!`);
        //console.log(this); //this will print the object. 
    }
}
// user.message()
// user.name = "Aman"
user.message()
//console.log(this);//{}


// There are two ways of writing a function:

// 1.
// function greet1(name){
//     console.log(`Hello ${name}!`);
// }
// greet1("Sarthak")//Hello Sarthak!

// // 2(a).
// const greet2 = function(name){
//     console.log(`Hello ${name}!`);
// }
// greet2("Sarthak")//Hello Sarthak!

// // 2(b).
// const greet3 = function(name){
//     return name
// }
// console.log(greet3("Sarthak"))//Sarthak


//Arrow function:
//The 2(b) way of writing a function(just above this line) can also be written in form of an arrow function(implicit return):
const addNum = (num1,num2) => (num1+num2)//Two changes are done: 1.The word 'function' is removed and 2.return is removed.
//Jab bhi return likha hai to curly braces use karna hai aur jab return nhi likha hai to normal brackets use karna hai.
// console.log(addNum(3,4));//7

//If you are returning an object:
const info = () => ({name:"John",age:20,address:"India"})//In this case,the normal brackets are necessary,otherwise it will show undefined.
//console.log(info());//this will return the object