const myLibrary = [
  { name: "12 Rules for life", author: "Jordan Peterson", pages: 300 },
  { name: "How to make her cum", author: "Binson Thangjam", pages: 69 },
  { name: "Virginity 101", author: "Binson Thangjam", pages: 69 },
  {name: "Journey to the Pleasure Cave", author:"Binson Thangjam",pages:69},
  {name:"Make her beg for more",author:"Binson Thangjam",pages:69}
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
  const bookContainer = document.querySelector(".book-container");

  const card = document.createElement("div");

  card.innerHTML = `<div class="Books card"><div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Author: ${author}</p>
                    <p class="card-text">Pages: ${pages}</p>
                    <button onclick="removeBook(parentElement.parentElement.parentElement)" class="remove btn btn-danger">remove</button>
                    </div></div>`;
  bookContainer.appendChild(card);
}

displayBook();

function removeBook(element) {
  console.log(element);
  // myLibrary.splice()
  element.remove();
}
