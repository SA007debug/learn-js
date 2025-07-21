"use strict";

/********************Objects in Javascript********************/
//Two ways of declaring objects->literals and constructors.
//Singleton is created in the constructor case but not in the literal case.

const JsUser = {//this is the literal case(non-singleton).
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
//console.log(objCorrect.sym);//USA
//console.log(typeof objCorrect.sym);//string
//objCorrect.sym tries to access a property with the string key "sym", whose value is "USA".
//The correct way is to use square bracket to access the value of a symbol key:
//console.log(objCorrect[sym]);//India
//console.log(typeof objCorrect[sym]);//string
//==> yadi key ek symbol hai to uski value ko access karne ke liye square bracket use karo,na ki dot.Dot use karoge to JS string key ko dhundne lagega.

//You can add key-value pairs in the object:
objCorrect.greeting = function(){
    console.log("Hello!");
    
}

objCorrect.age2 = 5
//console.log(objCorrect);
//console.log(objCorrect.greeting);//[Function(anonymous)],this is the reference of the function.
//console.log(objCorrect.greeting());//Hello! and undefined.

//Freezing the object:
Object.freeze(objCorrect)//The object is locked now.

//this:
//whenever you are referring to the same object,you use 'this':
const objthis = {
  name: "India",//data property
  getName() {
    return this.name;//this points to the object that called the function.Here,this points to objthis.
  }//accessor property:here, getname() is the key and the return of the function is the value.
};

//console.log(objthis.getName()); // India


//Singleton Object(another way of declaring an object):

const AmazonUser = new Object()
//==> An object is created whose name is AmazonUser.
//Now we can add some properties in this object:
AmazonUser.name = "John"
AmazonUser.id = "John@google.com"
AmazonUser.IsLoggenIn = true
// console.log(AmazonUser);

//When the value of an object is an object itself(nesting of objects):
const User = {
  email:"user@google.com",
  fullname: {
    Userfullname : {
      firstname:"John",
      lastname:"Cena",
    }
  }
}
//console.log(User.fullname.Userfullname.firstname);


//How to combine multiple objects:
//1.Use assign:
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
//const obj3 = Object.assign({},obj1,obj2)//Always use empty curly braces before the objects.
//console.log(obj3);

//2.Use spread(more preffered):
const obj3 = {...obj1,...obj2}
console.log(obj3);

//*********IMPORTANT*****************:
//Object.keys(obj_name)->one parameter which is an object.Us object ki saari keys ek array mein store ho jati hai jisme baadme loop lgaya ja skta hai aur access kiya ja skta hai.
//Object.values(obj_name)->same as Object.keys(),but this stores the values in an array.

//Object.entries(obj_name)->converts all the key-value pairs into individual arrays => converts the whole object into arrays inside array.

//obj_name.hasOwnProperty(key)->tells you whether the property exists inside the object or not(returns a boolean).


//De-structuring of objects->if you want to extract any value of the object in a 'cleaner way'.We already know the dot and square bracket method but de-structuring is cleaner than them(it is a syntactical sugar).