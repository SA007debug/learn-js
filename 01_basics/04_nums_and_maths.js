// Similar to string,there are methods in Number also.Also,we can declare a Number by two ways just like string.
// Just like string,a number also has methods which you can check in the console(see the screenshot).The following are some methods:

// 1.toString()->converts the number into a string.
const num = 100
const numtostring = num.toString();
//console.log(typeof numtostring);


// 2.toFixed()->converts the number into a string with a specified number of decimal places.
const num2 = 123.456789;
const num2fixed = num2.toFixed(2);
console.log(num2fixed); // "123.46"
console.log(typeof num2fixed); // "string"

// 3.toPrecision()->converts the number into a string with a specified number of significant digits(round off to the specified precision).
const num3 = 123.456789;
const num3precision = num3.toPrecision(4);
console.log(num3precision); // "123.5"
console.log(typeof num3precision); // "string"


// 4.toExponential()->converts the number into a string in exponential notation.
const num4 = 123456789;
const num4exponential = num4.toExponential(2);
console.log(num4exponential); // "1.23e+8"
console.log(typeof num4exponential); // "string"


// 5.valueOf()->returns the primitive value of the number object.
const num5 = new Number(100);
const num5value = num5.valueOf();
console.log(num5value); // 100
console.log(typeof num5value); // "number"


// 6.isNaN()->checks if the value is NaN (Not a Number).
const num6 = NaN;
const isNum6NaN = Number.isNaN(num6);
console.log(isNum6NaN); // true


// 7. toLocaleString()->converts the number into a string with a language-sensitive representation.
const num7 = 1234567.89;
const num7LocaleString = num7.toLocaleString();
console.log(num7LocaleString); // "1,234,567.89" (in US English locale)
// for Indian locale:
const num7LocaleStringIN = num7.toLocaleString('en-IN');
console.log(num7LocaleStringIN); // "12,34,567.89" (in Indian locale)


// 8. Number.MAX_VALUE -> returns the largest possible number in JavaScript.
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308


// 9. Number.MIN_VALUE -> returns the smallest possible number in JavaScript (closest to zero).
console.log(Number.MIN_VALUE); // 5e-324


// Math.abs() -> returns the absolute value of a number.
const num8 = -42;
const num8Abs = Math.abs(num8);
console.log(num8Abs); // 42


// Math.round() -> rounds a number to the nearest integer.
const num9 = 4.7;
const num9Rounded = Math.round(num9);
console.log(num9Rounded); // 5


// Math.random() -> returns a random number between 0 (inclusive) and 1 (exclusive).
const randomNum = Math.random();
console.log(randomNum); // e.g., 0.123456789


// Very Important formula to generate a random number between a range (min and max):
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Example usage:
const randomInRange = getRandomNumber(1, 10);
console.log(randomInRange); // e.g., 5 (random number between 1 and 10)


