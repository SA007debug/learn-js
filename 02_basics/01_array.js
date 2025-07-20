"use strict";

/***********Arrays in Javascript*********************/


//Difference between deep copy and shallow copy:
//Shallow copy->the original object and copy point to the same reference,so,changing one of them will change the other as well.
//Deep copy->the original object and the copy are independent of each other,so changing one will not change the other.
//The array-copy operations in JS are shallow copies.

const myArr = [1,2,3,4,5,6,7,"home"]//array can take any data type in them,even other arrays.
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
//console.log(newArr.slice(2,7));//this will return 3 to 7.
//console.log(newArr);//slice() will not change the original.
const newArr2 = newArr.splice(2,6)
//console.log(newArr2);//this will return the deleted elements.
//console.log(newArr);//this will change the original array and will return the remaining elements.

//6.Merging two or more arrays:
const numArr = [1,2,3]
const charArr = ['a','b','c']
const stringArr = ["Hello","World"]

//(a)push() will not merge them exactly,instead, it will create an array inside array.
// numArr.push(charArr)
// console.log(numArr);

//(b)concat()->only two arrays can be merged at a time.
// const merged_arr = numArr.concat(charArr)
// console.log(merged_arr);

//(c)spread operator(three dots)->any number of arrays can be merged at once.
const spreadArr = [...stringArr,...numArr,...charArr]
//console.log(spreadArr);

//7.flat()->if there is an array inside array inside array and so on,then you can use flat() to convert it into a single array.There is one parameter which is the depth upto which you want to make it flat.
const ArrArr = [1,2,3,[4,5,6],7,[1,2,3,[1,2,[3,4,5]]]]
const flatArr = ArrArr.flat(Infinity)
//console.log(flatArr);

//8.If you want to convert another data type into an array:

//(a)Array.from():
const string1 = "Hello"
const string2 = "Hi"
const arr = Array.from(string1)
const arr2 = Array.from(string2)
console.log(arr);
console.log(typeof arr);

//(b)Array.of()->it can take more than one parameter.
const arr3 = Array.of(string1,string2)
console.log(arr3);
const arr4 = Array.of(arr,arr2)//This will create an array inside array.
console.log(arr4);
const arr5 = [...arr,...arr2]
console.log(arr5);
