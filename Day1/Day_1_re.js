// 1 Log() function
// Generally print on console whatever we write inside " "
console.log("hello world");
console.log([1, 2, 3, 4, 5]);
var obj = {
  name: "honey",
  age: 14,
};
console.log(obj);

// 2. Error Function
// How error displays
console.error("error here");

// 3. Warn Function
// Just create a artificial warning
console.warn("warning  here...");

// 4. Clear function
// clear all the console
// console.clear()

// 5.Time and timeEnd Function
// counts the execution of time
// Whenever we want to know the amount of time spend by a block or
// a function, we can make use of the time() and timeEnd()
//  methods provided by the javascript console object

console.time("a");

func = () => {
  console.log("HAppy coding");
};
func = () => {
  console.log("HAppy");
};

func1 = () => {
  a = 3;
  b = 4;
  console.log(a + b);
};
console.timeEnd("a");

// 6.Table Function
let a = "honey";
let b = "h";
let info = {
  name: "honey",
  age: 14,
};
console.table({ a, b, info });

// console.group() and console.groupEnd() method
// it groups the contents
console.group("simple");
console.warn("Hy Warning!");
console.error("By error");
console.log("Ty Ty");
console.groupEnd("simple");
console.log("new section");

// Custom Console Logs

const styles = `font-size:1rem; color:blue ;font-weight:bold;`;
console.log("%c Honey", styles);

var global = "honey";

{
  let global = "sanskar";
  console.log(global);
}
console.log(global);

// Var scope is functional based while let scope in block based

// const once defined cant change

const name = "honey singh";
name='bittu';
console.log(name)

// DataTypes

// below are 9 types of new Ecma script 

// Six Data Types that are primitives, checked by typeof operator:
// undefined : typeof instance === "undefined"
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// null : typeof instance === "object". 
// Special primitive type having additional usage for it's value: if object is not inherited, then null is shown;
// Object : typeof instance === "object". Special non-data but structural type for any
//  constructed object instance also used as 
// data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost everything made with new keyword;
// Function non data structure, though it also answers for typeof operator: typeof instance === "function".
//  This answer is done as a special shorthand for Functions, though every Function constructor is derived from Object constructor.