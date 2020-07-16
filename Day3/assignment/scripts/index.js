// Question1  even or odd

num = prompt("Enter a number");

let ans;
if (num % 2 == 0) {
  ans = "Even";
} else {
  ans = "odd";
}

console.log(ans);

// Question 2

// input : "Android 9"
// output: The os name is Android and version is 9.

let version = prompt(
  "Enter your mobile version name and number separated by a space"
);

str = version.split(" ");
console.log(`The os name is ${str[0]} and version is ${str[1]} `);

// Question 3

// input : 50
// output ; marks are 50 and grade is B

let marks = prompt("Enter marks");
let grade;

if (marks > 50 && marks < 80) {
  grade = "B";
} else if (marks > 80) {
  grade = "A";
} else if (marks < 30) {
  grade = "D";
} else {
  grade = "C";
}

console.log(`Marks are ${marks} and grade is ${grade} `);

// using switch case:

switch (marks) {
  case "40":
    grade = "D";
    break;
  case "50":
    grade = "C";
    break;
  case "70":
    grade = "B";
  case "80":
    grade = "A";
  default:
    grade = "wrong chocie";
    break;
}

console.log(grade);
