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
  let read = formData.get("has-read");
  let bookContainer = document.getElementById("books-container");

  if (!read) {
    read = "no";
  }
  addBookToLibrary(title, author, pages, read);

  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }

  myLibrary.forEach(function (book) {
    let bookPost = document.createElement("div");
    bookPost.classList.add("book-post");
    let lineBreak = document.createElement("br");
    let bookInfo = document.createTextNode(
      `Title: ${book.title}\nAuthor: ${book.author}\nNumber of pages: ${book.pages}\nHave you read it?: ${book.read}`
    );

    bookPost.appendChild(bookInfo);
    bookContainer.appendChild(bookPost);
  });

  form.reset();
});
