// dataTypes in JS:

// A. Primitive Data Types
// 1 String : strings represent textual data and are enclosed in single or double quotes.
let name = "John Doe";

// 2 Number : numbers represent both integer and floating-point values.
let age = 30;

// 3 Boolean : booleans represent logical values and can be either true or false.
let isStudent = false;

// 4 Undefined : a variable that has been declared but not assigned a value.
let address;

// 5 Null : null is an assignment value that represents no value or no object.
let phoneNumber = null;

// 6 Symbol : symbols are unique and immutable data types used to create unique identifiers for object properties.
let uniqueId = Symbol("id");

// B. Non-Primitive Data Types

// 1 Object : objects are collections of key-value pairs, used to store multiple values in a single variable. Key value means each key is associated with a specific value.

let person = {
  name: "Jane Doe",
  age: 25,
};

// 2 Array : arrays are ordered collections of values, which can hold multiple data types.
let colors = ["red", "green", "blue"];

// 3 Function : functions are blocks of reusable code that can be called with different arguments to perform specific tasks.
function greet() {
  return "Hello!";
}

// Displaying the data types
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // undefined
console.log(typeof phoneNumber); // object (null is considered an object in JS)
console.log(typeof uniqueId); // symbol
console.log(typeof person); // object
console.log(typeof colors); // object (arrays are objects in JS)
console.log(typeof greet); // function
