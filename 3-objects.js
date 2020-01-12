const assertEquals = require("./assert-helper");

const books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
  const titleArray = books.map(b => b.title)
  return titleArray;
};

// Assertions (do not change)
assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
and returns an array of authors (strings) */

function listAuthors(booksArray) {
  const authorArray = books.map(b => b.author)
  return authorArray;
}

// Assertions (do not change)
assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
of book objects and returns an array of authors (strings) */

function listValues(booksArray, key) {
//   const newArray = books.map(b => b[key])
//   return newArray;
// }
     switch (key) {
       case "author":
         return listAuthors(books);
         break;
       case "title":
         return listTitles(books);
         break;
     }
    }

// Assertions (do not change)
assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books

function getAvailableBooks(booksArray) {
  const isAvailableArray = books.filter(b => b.isAvailable).map(b => b.title)
  return isAvailableArray;
}

// Assertions (do not change)
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])
