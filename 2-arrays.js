const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
//Method 1: For Loop
function sum(array) {
    let addArray = 0;
    for (let i = 0; i < array.length; i++) {
        addArray += array[i];
    }
    console.log(addArray);
    return addArray;
};
// Method 2: Reduce method
const sum1 = (array) => array.reduce((a, b) => a + b, 0)
console.log(sum1([1, 2, 3, 4]));

// Method 3: forEach
function sum2(array) {
    let total = 0;
    array.forEach(i => {
        total += i;
    });
    return total;
};
// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([]), 0);
assertEquals(sum1([1, 2]), 3);
assertEquals(sum1([1, 2, 3, 4]), 10);
assertEquals(sum2([1, 2]), 3);
assertEquals(sum2([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
// Method 1: For and If
function evenNumbersOnly(array) {
    let evenArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    console.log(evenArray);
    return evenArray;
}

// Method 2: forEach
function evenNumbersOnly1(array) {
    const evenArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            evenArray.push(element)
        };
    });
    console.log(evenArray);
    return evenArray;
}
// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);
assertEquals(evenNumbersOnly1([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly1([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
// Method 1: For, If and Reduce
function sumEvenNumbers(array) {
    let evenArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    console.log(evenArray);
    return evenArray.reduce((a, b) => a + b, 0);
    };
// Method 2: Use previous code
function sumEvenNumbers1(array) {
    return sum(evenNumbersOnly(array));
}
// Method 3: Use filter and reduce
function sumEvenNumbers2(array) {
    const isEven = n => n % 2 === 0;
    const sum = (a, b) => a + b; 
    return array.filter(isEven).reduce(sum, 0);
}
// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);
assertEquals(sumEvenNumbers1([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers1([10, 11, 12]), 22);
assertEquals(sumEvenNumbers2([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers2([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
// Method 1 - non unique
function sortedUnion(arr1, arr2) {
const newArray = arr1.concat(arr2);
return newArray.sort((a, b) => a - b);
}

// Method 2 - unique values only
function sortedUnion1(arr1, arr2) {
const newArray = arr1.concat(arr2);
const newSortedArray = newArray.sort((a, b) => a - b);
    for (let i = 0; i < newSortedArray.length; i++) {
        for (let j = i + 1; j < newSortedArray.length; j++) {
            if (newSortedArray[i] === newSortedArray[j]) {
                newSortedArray.splice[i, 1]
            }
        }
    }
    return newSortedArray;
};
// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion1([1, 3], [1, 11, 2]), [1, 2, 3, 11]);

const set = new set([...arr1, ...arr2]);
const array = [...set].sort((a, b) => a - b);
return array;



