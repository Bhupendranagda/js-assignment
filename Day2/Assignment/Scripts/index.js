console.log("Hey day 2");

// Question 1
//  Write a code which takes input from the user and logs it in console

// let ans = prompt("Enter you age bhaiya??");
// console.log(`My age is : ${ans}`);

// ****************************************************
// Question 2
// Explain with examples the remaining methods of string and array
let str = "honey ";
let str1 = "i the very am the am best";

// 1.CharAt
console.log(str.charAt(3));

// CharCodeAt return ascii value of the character
console.log(str1.charCodeAt(2));

// Concat
str2 = str.concat(str1);
console.log(str2);

// Includes --> determines whether the calling string contains searchString
console.log(str2.includes("best"));

// Index OF --> returns the index within the calling string object
console.log(str1.indexOf("am"));

// Last Index of ----> returns the last index of calling string object
console.log(str1.lastIndexOf("am"));

// Replace ----> used to replace occurences of searchfor using replacewith.
// String.prototype.replace(searchFor, replaceWith)
console.log(str1.replace("am", "ma"));
// console.log(str1.replaceAll("am", "ma"));

// *************************************************

// Question 3
// Ask the user if he is 21+ and log the value "can drik" "cant drink"

let age = prompt("Enter age");
if (age > 21) {
  console.log("Can Drink");
} else {
  console.log("cant drink");
}
