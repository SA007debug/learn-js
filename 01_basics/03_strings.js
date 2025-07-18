"use strict";
// Don't use the concatinate method of joining strings,instead use backticks:

const name = "Aman"
let age = 25
//console.log(`My name is ${name} and my age is ${age}.`);


const name1 = "Tushar"
const name2 = new String("Ajay")//"Ajay" is not a string,it is an object(this wraps the string "Ajay" inside a String object, not a primitive string) with the following properties:
// 0:'A'
// 1:'j'
// 2:'a'
// 3:'y'
//console.log(typeof name1);//string
//console.log(typeof name2);//object
//console.log(name2[2]);//a
let name3 = name2//Copy of name2 is created.
name3 = "Aman"
//console.log(name3);//Aman
//console.log(name2);//Ajay,original mein koi change nhi aya.
// => Jab bhi kisi string ko new keyword se declare karte hain,to vo stack mein store hota hai.
// Jab bhi kisi string ko new se declare karte hai to vo ek char array ki tarah kam karne lgta hai(but actually it is not an array,it is an object), there are many functions(also called methods) which you can then apply on the string,some of these functions are(you can check these functions in console):
// NOTE: In functions ko apply karne ke baad original mein koi effect nhi hota hai.
// NOTE: Agar normal tarike se string declare kiya hai to bhi ye functions apply kar sakte hai.

// 1.toUppercase()(similar is toLowercase()).
const Hisname = new String("Aragorn")
console.log(Hisname.toUpperCase());//ARAGORN
console.log(Hisname);// Original will not change even after applying the function.

// 2.length(isme bracket nhi lagta).
console.log(Hisname.length);//7

// 3.charAt(index)->tells you the character at the index.
console.log(Hisname.charAt(4));//o

// 4.indexof(char)->tells you the index of first appearence of the char,if the char is not present,it will return -1.
console.log(Hisname.indexOf('g'));//3
console.log(Hisname.indexOf('z'));//-1

// 5.substring and slice->both are same except that in slice you can use negative indices but in substring,there is no effect of that(it will treat -ve as zero).
console.log(Hisname.substring(-6,5));//Arago
console.log(Hisname.slice(-6,5));//rago
console.log(Hisname.slice(-6,-1));//ragor

// 6.trim()->it removes the start AND end spaces.
const example = "    World    "
console.log(example);
console.log(example.trim());
console.log(example.trimEnd());// Only removes the end space.
console.log(example.trimStart());// Only removes the start space.

// 7.replace(sub1,sub2)->sub1 is a substring and sub2 is any string.Ye function sub1 ke first appearence ko sub2 se replace kar dega.
const example1 = "Hi%how%are%you?"
console.log(example1.replace("Hi%how","Hello "));
console.log(example1.replace("%","_"));

// 8.split:
const example2 = "I am doing fine."
console.log(example2.split(" "));//This will split the string on the basis of spaces.
