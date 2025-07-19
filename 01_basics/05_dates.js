"use strict";

// Declare a Date:
let date = new Date()//No parameter.
//console.log(date);//This will give date and time in ISO format:
//YYYY-MM-DDTHH:mm:ss.sssZ,T is the seperator b/w date and time,sss are the milliseconds. 

// The date and time that will be outputed will be according to GMT time.

//console.log(typeof date);//object


// Convert this into a string to make it readable:
//console.log(date.toString());// GMT time and day also(the original will not change).
//console.log(typeof date.toString());//string


//console.log(date.toLocaleString('en-IN'));//Even after doing 'en-IN',it still shows the GMT time,but the date month year format will be according to India,i.e,DD/MM/YYYY
//console.log(date.toLocaleString());//According to US.


//console.log(date.toDateString());//This will only show date(time will not be shown).

//console.log(date.toTimeString());//This will only show time(date will not be shown).

//console.log(date.toISOString());//This will be same as first one,except that it is now a string whereas first one was object.

//console.log(date.toJSON());//Returns a string in the form as ISO(no parameters).

//console.log(date.toUTCString());//Note the difference b/w this and date.toString().


//Create your own date(Month is zero indexing):
let CreatDate = new Date(2023,7,31);//YYYY-MM-DD format.
console.log(CreatDate);
console.log(CreatDate.toDateString());
// If we give more values,then they will become Hours,Minutes,Seconds and Milliseconds.
let CreatDate2 = new Date(2023,7,31,14,30,21,237)
console.log(CreatDate2);
console.log(CreatDate2.toString());
// If you want to change the format:
//let OwnFormat = new Date("14-03-2025")//Invalid date,you have to type it in month,date and year.
let OwnFormat = new Date("12-25-2024")
console.log(OwnFormat.toString());


//Timestamp:
let MyTimestamp = Date.now()
console.log(MyTimestamp);
