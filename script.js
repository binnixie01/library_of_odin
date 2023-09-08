const myLibrary = []
function Book(name,author,pages) {
    this.name=name;
    this.author=author;
    this.pages=pages;
    
}

function addBook() {
    let name = prompt("enter name")
    let author=prompt("enter author")
    let pages=prompt("enter pages")
    myLibrary.push(new Book(name,author,pages))
    
}
addBook()