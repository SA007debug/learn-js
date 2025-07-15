"use strict";
// Majority data types ko code likte samay first letter capital mein likhte hai jaise Number,String,Boolean etc.

// String to number conversion:

let marks = "71"//This is string.
console.log(typeof marks)//string
let marksInNumber = Number(marks)//This converts it into a number.
console.log(typeof marksInNumber)//Number

//But,if:
let num = "123abc"//This is a string
let numInNumber = Number(num)
console.log(numInNumber)//This will give NaN(Not a Number)
//Therefore,JS converts it into a number but then says that it is not a number!!
