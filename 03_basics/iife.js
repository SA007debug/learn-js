//Immediately Invoked Function Expressions(IIFE):

//Note:
if(false){
    var a = 20
    const b = 10
}
// console.log(a);//undefined
// console.log(b);//error:b is not defined.

//1.Normal functions are reusable and iife's are usually not.
//2.The scope of normal functions depends while the scope of iife is ALWAYS local.
//3.A normal function needs explicit calling while an iife is immediately called after it is declared.
//https://chatgpt.com/share/68886cfb-6040-8010-8ded-694f49a6d127


function greet(){
    const name = "John"//this variable is declared inside the function.
    console.log("HELLO!");
}
//greet()
//console.log(name);//error:name is not defined.
//console.log(typeof name);//undefined

//Agar variable ko normal function ke andar declare kiya hai to vo andar hi reh jayega,chahe function ko call karo ya na karo.

let name2 = "John"
function greet2(){
    name2 = "Sam"
    console.log("HELLO!");    
}
//console.log(name2);//John
//==> function ko call nhi kiya to variable change nhi hua.

let name3 = "John"
function greet3(){
    name3 = "Sam"
    console.log("HELLO Sam!");    
}
// greet3()
// console.log(name3);//Sam
//==> agar function ko call kiya hai to variable change ho jayega.Isi ko kehte hai Scope pollution.The function accidentally pollutes the global scope by modifying name3. This is risky in large projects.

//Writing the greet3 function(just upar wala) in iife form:
// let name4 = "John";//Semocolon is necessary just before an iife!!
// (function greet3iife(){
//     name4 = "Sam"
//     console.log("HELLO IIFE!");
// })();
// console.log(name4);//Sam
//==> variable change ho gya.If you want to protect the global varible,use let/const inside the function.This applies to both normal and iife.
//https://chatgpt.com/share/68886cfb-6040-8010-8ded-694f49a6d12



//Study the three cases carefully:

//1.
(function first(){
    console.log("Hello");    
})()
console.log("Hi");
//the output will be Hello and Hi.No issue here


//2.
(function first(){
    console.log("Hello");    
})()
function meet(){
    console.log("Hi");    
}
meet();
//the output will be again Hello and Hi.No issue here also.


//3.
// (function first(){
//     console.log("Hello");    
// })()
// (function second(){
//     console.log("Hi");    
// })()
//Here,the output will be Hello and then error.

//So,in the first two cases,there was no issue.But,in the second case there are two consecutive iifes.
//Just before an iife,a semicolon is necessary!!
//Therefore the correct syntax is:
(function first(){
    console.log("Hello");    
})();
(function second(){
    console.log("Hi");    
})()
//the output will be Hello and Hi.
//https://chatgpt.com/c/688b9e85-87ac-8010-9e68-220d3d349b4f