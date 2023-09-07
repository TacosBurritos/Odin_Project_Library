function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + ' ' + ' by  ' + author + ", " + pages + ' pages, ' + read;
    }
}
//showing that I can console.log object.info() in order to print out the contents of the book

// console.log(book1.info());
let library = [];
//must write a code that logs or stores the value of new objects that the user inputs
let books;
function addBookToLibrary(){
    const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
    library.push(book1);
}

function display(){
    let content = document.querySelector(".content");
    let div = document.createElement("div");
    div.classList.add("eachBook");
    for(let i = 0; i < library.length; i++){
        div.textContent = library[i];
        content.appendChild(div);
    }
}