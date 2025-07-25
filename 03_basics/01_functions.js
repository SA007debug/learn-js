//If you don't know the exact amount of arguments in the function and you want to add the arguments dynamically(like in a shopping cart),then you can use rest operator:
function printValues(...num){
    return num
}
//console.log(printValues(100,200,300,400));
//Jahan se rest operator shuru hota hai,vahan se multiple arguments allowed hai aur vo arguments ek array ke andar aa jate hai.
function printValues2(num1,num2,...num){
    return num
}
console.log(printValues2(1,2,3,4,5,6,7));//[3,4,5,6,7]
console.log(typeof printValues2(1,2,3,4,5,6,7));//object
