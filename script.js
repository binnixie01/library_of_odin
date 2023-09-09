const myLibrary = [
  { name: "12 Rules for Life", author: "Jordan Peterson", pages: 200 },
];
function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBook() {
  let name = prompt("enter name");
  let author = prompt("enter author");
  let pages = prompt("enter pages");
  myLibrary.push(new Book(name, author, pages));
  add()
}

function add() {myLibrary.forEach((element) => {
    document.getElementById("container").innerHTML = `<div><div>${element.name}</div><div>${element.author}</div><div>${element.pages}</div></div>`
    })
    
}

myLibrary.forEach((element) => {
document.getElementById("container").innerHTML = `<div><div>${element.name}</div><div>${element.author}</div><div>${element.pages}</div></div>`
})
