const books = require("./books.json");

function priceOfBook(bookName) {
  for (let key in books) {
    if (books[key].title === bookName) {
      return books[key].price;
    }
  }
}

function affordableBooks(budget) {
  let result = [];
  for (let key in books) {
    if (books[key].price <= budget) {
      result.push(books[key].title);
    }
  }
  return result;
}

function findBookByGenre(genre) {
  const result = [];
  for (let bookKey in books) {
    let genres = books[bookKey].genres;
    for (let genreKey in genres) {
      if (genres[genreKey] === genre) {
        result.push(books[bookKey].title);
      }
    }
  }
  return result;
}

function groupByGenre() {
  const groupedBooks = {};
  for (let bookKey in books) {
    const book = books[bookKey];
    for (let genre of book.genres) {
      if (!groupedBooks[genre]) {
        groupedBooks[genre] = [];
      }
      groupedBooks[genre].push(book.title);
    }
  }
  return groupedBooks;
}
console.log(groupByGenre());

function sortBooksByPrice() {
  const sortedBooks = [];
  for (let key in books) {
    sortedBooks.push(books[key]);
  }
  for (let i = 0; i < sortedBooks.length - 1; i++) {
    for (let j = i + 1; j < sortedBooks.length; j++) {
      if (sortedBooks[i].price > sortedBooks[j].price) {
        const temp = sortedBooks[i];
        sortedBooks[i] = sortedBooks[j];
        sortedBooks[j] = temp;
      }
    }
  }
  return sortedBooks;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
