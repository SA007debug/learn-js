"use strict";//helps you write safer and cleaner code by catching common mistakes and preventing the use of certain bad practices,basically it makes JS stricter.
//alert() --> it shows a pop-up message to the user,it contains only plain texts,without any style.The webpage becomes blocked until the user clicks OK.We are using Nodejs,not browser console.
// 7 primitive data types-> string,number,bigint,boolean,symbol(for uniqueness),null(it is an object),undefined.
let mobileNumber = 123
let name = "Rahul"
let address//this is undefined
// typeof tells you the data type:
console.table([typeof name,typeof address,typeof mobileNumber,typeof null]);
// => null is not a type,it is an object.
