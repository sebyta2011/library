let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
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

  for (let i = 0; i < myLibrary.length; i++) {
    let bookPost = document.createElement("div");
    let delButton = document.createElement("button");
    const del = document.getElementsByClassName("del-button");

    delButton.textContent = "Delete";

    delButton.classList.add(`del-button-${i}`);
    bookPost.classList.add(`book-post-${i}`);
    bookPost.setAttribute("title", `${myLibrary[i].title}`);

    delButton.type = "button";
    let bookInfo = document.createTextNode(
      `Title: ${myLibrary[i].title}\nAuthor: ${myLibrary[i].author}\nNumber of pages: ${myLibrary[i].pages}\nHave you read it?: ${myLibrary[i].read}`
    );

    bookPost.appendChild(bookInfo);
    bookPost.appendChild(delButton);
    bookContainer.appendChild(bookPost);
    let bookPostC = document.querySelector(`.book-post-${i}`);

    delButton.addEventListener("click", function (event) {
      bookPostC.remove();
      let bookIndex = myLibrary.findIndex(
        (ricardo) => ricardo.title == bookPostC.getAttribute("title")
      );
      myLibrary.splice(bookIndex, 1);
    });

    form.reset();
  }
});
