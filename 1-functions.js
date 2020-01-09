const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
/* function hello() {
   return "hello world";
 } */

const hello = () => ("hello world");

// Assertions (do not change)
assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name) {
  let greet;
  greet = name ? "hello " + name : "hello world";
  return greet; 
};

// Assertions (do not change)
assertEquals(greet("tom"), "hello tom");
assertEquals(greet(), "hello world");

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
function add2Numbers(num1, num2) {
  return num1 + num2;
};

// Assertions (do not change)
assertEquals(add2Numbers(1, 1), 2);
assertEquals(add2Numbers(100, 1), 101);

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted
function invertCase(someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if(someString[i] === someString[i].toLowerCase()){
      newString += someString[i].toUpperCase();
    }else {
      newString += someString[i].toLowerCase();
    }
  }
  console.log(newString);  
  return newString;
};

// Assertions (do not change)
assertEquals(invertCase("Hello"), "hELLO");
assertEquals(invertCase("hELLO wORLD"), "Hello World");