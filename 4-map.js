var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in array of strings with every element converted to uppercase
function convertToUpperCase(array) {
  return array.map(element => element.toUpperCase());
}

// Assertions (do not change)
assertEquals(convertToUpperCase(["hello"]), ["HELLO"]);
assertEquals(convertToUpperCase(["hello", "gOOdBYE"]), ["HELLO", "GOODBYE"]);


/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that multiplies all elements in an array by 10
function multiplyBy10(array) {
  return array.map(element => element * 10);
}

// Assertions (do not change)
assertEquals(multiplyBy10([1, 2]), [10, 20]);
assertEquals(multiplyBy10([3, 5, 7]), [30, 50, 70]);
assertEquals(multiplyBy10([-1, 0, 1]), [-10, 0, 10]);


/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in an array objects and returns only an array of strings of the name field

function onlyNames(array) {
  return array.map(b => b.name);
}

// Assertions (do not change)
var input = [
  {
    name: "homer",
    favorite: "donuts"
  },
  {
    name: "marge",
    favorite: "family"
  },
  {
    name: "lisa",
    favorite: "school"
  }
];

assertEquals(onlyNames(input), ["homer", "marge", "lisa"]);

/* ---------------------- EXERCISE 3 ---------------------- */
// define a function that removes any non-vowel character from words in an array
function keepOnlyVowels(array) {
  return array.map(b => {
    return b.split("").filter(b => {
      switch (b) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          return 1;
        default:
          return 0;
      }
    }).join("")
  })
}
// Assertions (do not change)
assertEquals(keepOnlyVowels(["abc"]), ["a"]);
assertEquals(keepOnlyVowels(["exceptional"]), ["eeioa"]);
assertEquals(keepOnlyVowels(["average", "exceptional", "amazing"]), [
  "aeae",
  "eeioa",
  "aai"
]);
