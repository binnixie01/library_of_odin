const myLibrary = [
  { name: "12 Rules for Life", author: "Jordan Peterson", pages: 200 },
  { name: "12 Rules for Life", author: "Jordan Peterson", pages: 200 },
];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

// display book on first load
function displayBook() {
  myLibrary.forEach((element) => {
    showBook(element.name, element.author, element.pages);
  });
}

// add book
function addBook() {
  let name = prompt("enter name");
  let author = prompt("enter author");
  let pages = prompt("enter pages");
  myLibrary.push(new Book(name, author, pages));

  showBook(name, author, pages);
}

function showBook(name, author, pages) {
  const bookContainer = document.querySelector(".container");

  const card = document.createElement("div");

  card.innerHTML = `<div class="Books"><div>Book: ${name}</div><div>Author: ${author}</div><div>Pages: ${pages}</div><button onclick="removeBook(parentElement)" class="remove">remove</button></div>`;
  bookContainer.appendChild(card);
}

displayBook();

function removeBook(element) {
//   const but = document.querySelector(".remove");
//   but.addEventListener("click", (e) => removeBook(e));
//   const bookContainer = document.querySelector(".container");
  element.remove();
}
