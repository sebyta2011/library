let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("book-title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("has-read");
  let bookContainer = document.getElementById("books-container");

  addBookToLibrary(title, author, pages, read);

  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }

  myLibrary.forEach(function (book) {
    let bookPost = document.createElement("div");
    let bookInfo = document.createTextNode(`Title: ${book.title}`);

    bookPost.appendChild(bookInfo);
    bookContainer.appendChild(bookPost);
  });

  form.reset();
});

// myLibrary.forEach(function (book) {
//     let bookContainer = document.getElementById("books-container");
//     let bookPost = document.createElement("div");
//     let bookInfo = document.createTextNode(`Title: ${book.title}`);

//     bookPost.appendChild(bookInfo);
//     bookContainer.appendChild(bookPost);
//   });

// const lastIndex = myLibrary[myLibrary.length - 1];

// hacer un array que sea igual al index 1 del array libreria

// let index1 = myArray[myArray.length - 1]
