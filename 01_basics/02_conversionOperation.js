"use strict";
// Majority data types ko code likte samay first letter capital mein likhte hai jaise Number,String,Boolean etc.

// String to number conversion:

let marks = "71"//This is string.
//console.log(typeof marks)//string
let marksInNumber = Number(marks)//This converts it into a number.
//console.log(typeof marksInNumber)//Number

//But,if:
let num = "123abc"//This is a string
let numInNumber = Number(num)
//console.log(numInNumber)//This will give NaN(Not a Number)
//Therefore,JS converts it into a number but then says that it is not a number!!
// 1 => true;0 => false
// "" => false;
// any non-empty string => true

//Conversion to string:

let num2 = 7 //A number
let num2_string = String(num2)

//console.log(num2_string)
//console.log(typeof num2_string) //the number is converted to a string
let bool = 3
let bool_string = String(bool)

//console.log(typeof bool_string)
//console.log(bool_string)


let bool_bool = Boolean(bool)

//console.log(typeof bool_bool)
//console.log(bool_bool)
// Any non-zero number,whether +ve or -ve is boolean true and only 0 is boolean false.Also,null and undefined both are false.


console.log(1 + 2 + "2" + 4 + 1) //3241
// String ke pehle number ki tarah add karega,string par aate hi string ki tarah add karne lagega.
console.log(1+2+7+"3"+14+5+"2"+1+1) //103145211
