//If you don't know the exact amount of arguments in the function and you want to add the arguments dynamically(like in a shopping cart),then you can use rest operator:
function printValues(...num){
    return num
}
//console.log(printValues(100,200,300,400));
//Jahan se rest operator shuru hota hai,vahan se multiple arguments allowed hai aur vo arguments ek array ke andar aa jate hai.
function printValues2(num1,num2,...num){
    return num
}
//console.log(printValues2(1,2,3,4,5,6,7));//[3,4,5,6,7]
//console.log(typeof printValues2(1,2,3,4,5,6,7));//object


//Scope:
//var scope ke bahar chala jata hai!!
if(false){
    var a = 20
    const b = 25
}
console.log(a);//20
console.log(b);//error:b is not defined.
let a1 = 10
if(true){//what if instead of true there was false?
    let a1 = 200//ye andar hi reh jayega.
    const b1 = 20
}
//console.log(a1);//10
//Agar koi variable declaration if-else ke scope ke andar aata hai aur vo if ya else true hai to vo bahar sirf tabhi jayega agar (i)var use hua ho ya phir (ii)bina kisi keyword kay declare kiya ho;agar let ya const use hua hai to vo scope ke andar hi reh jayega.
let a2 = 10
if(true){
    a2 = 200//ye bahar aa jayega
    const b2 = 20
}
//console.log(a2);//200
//Note: Global scope is different in console of webpage and in node(vs code).


function one(){
    const username = "Sarthak"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()
    console.log(website);
}
//one()
//Kisi bhi function ke andar tabhi jana hai jab use call kiya ho.
