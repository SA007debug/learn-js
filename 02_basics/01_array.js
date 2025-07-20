"use strict";

//***********Arrays in Javascript*********************

//Difference between deep copy and shallow copy:
//Shallow copy->the original object and copy point to the same reference,so,changing one of them will change the other as well.
//Deep copy->the original object and the copy are independent of each other,so changing one will not change the other.
//The array-copy operations in JS are shallow copies.

const myArr = [1,2,3,4,5,6,7,"home"]
//console.log(typeof myArr);//object
//console.log(myArr);
const myArr2 = ["thor","superman"]
//console.log(typeof myArr2);//object
//=>Array is an object.
//You can also declare an array using new keyword:
const myArr3 = new Array(1,2,3,4,5,6,7,8,9,10)
//console.log(typeof myArr3);//object

//Some array methods:

//1.push() and pop().

//2.unshift() and shift():
//unshift->inserts the value(s) at the first position,this may take time in large arrays since the computer has to shift all the elements(you can also unshift more than one value at a time).
//shift->it removes the first element(no parameter).
myArr.unshift("Hello","Hi")
//console.log(myArr);
myArr.shift()
//console.log(myArr);

//3.includes()->tells you whether the value is present in the array or not(it returnS a boolean).
//console.log(myArr.includes(100));

//4.join()->converts the array into string.
const myArr_string = myArr.join()
const myArr2_string = myArr2.join()
// console.log(myArr_string);
// console.log(myArr2_string);
// console.log(typeof myArr_string);//string
// console.log(typeof myArr2_string);//string

//5.slice() and splice():
//(a)slice() works as usual(like in string).
//(b)splice() has two parameters: first is the start index and second is the number of elements to be deleted.
const newArr = [1,2,3,4,5,6,7,8,9]
console.log(newArr.slice(2,7));//this will return 3 to 7.
console.log(newArr);//slice() will not change the original.
const newArr2 = newArr.splice(2,6)
console.log(newArr2);//this will return the deleted elements.
console.log(newArr);//this will change the original array and will return the remaining elements.
