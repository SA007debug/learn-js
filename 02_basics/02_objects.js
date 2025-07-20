"use strict";

/********************Objects in Javascript********************/
//Two ways of declaring objects->literals and constructors.
//Singleton is created in the constructor case but not in the literal case.

const JsUser = {
    0:"John",//commas after each property are necessary.
    "location":"India",
    email:"john@Yahoo.co.in",
    age:20,
    "full_name":"John Cena",
}
//Two ways of accessing the value:
//1.Using dot:
//console.log(JsUser.location);
//2.Using square bracket(this is the more preferred one):
// console.log(JsUser["location"]);
// console.log(JsUser.full_name);
//A nice observation:
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof location);
// console.log(typeof 0);
// console.log(typeof hehe);
// console.log(typeof JsUser.age);
// console.log(JsUser[0]);//You can't use dot if the key is a number.


//How to use a Symbol as a key:
//You can't use a symbol name directly as a key:
const sym = Symbol("Hello")//the symbol name is sym,i.e,the variable sym stores a symbol in it.
const obj = {
    sym:"India",
}
//The above object is wrong.JavaScript interprets sym: "India" as a key "sym" (a string), not the Symbol("Hello").
//console.log(obj["sym"]);
//console.log(typeof obj.sym);

//The correct way is to put square brackets around sym:
//Symbol ko jab bhi key banao to square bracket use karo.
const objCorrect = {
    [sym]:"India",//here,the key is a symbol.
    sym:"USA"//here,the key is a string.
}//Now the object has a Symbol key, not a string key.
console.log(objCorrect.sym);//USA
console.log(typeof objCorrect.sym);//string
//objCorrect.sym tries to access a property with the string key "sym", whose value is "USA".
//The correct way is to use square bracket to access the value of a symbol key:
console.log(objCorrect[sym]);//India
console.log(typeof objCorrect[sym]);//string
//==> yadi key ek symbol hai to uski value ko access karne ke liye square bracket use karo,na ki dot.Dot use karoge to JS string key ko dhundne lagega.
