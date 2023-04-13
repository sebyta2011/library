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

  addBookToLibrary(title, author, pages, read);
  form.reset();
});
