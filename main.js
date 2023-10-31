// Library Array
const myLibrary = [];
const libraryContainer = document.querySelector(".library-container");

// Book Constructor
function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

// Add new book to library
function addBookToLibrary(title, author, genre, read) {
    const book = new Book(title, author, genre, read);
    myLibrary.push(book);
}

// Display book to library
function displayBook(i) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    // Create Title
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = myLibrary[i].title;
    cardDiv.appendChild(title);
    // Create Author
    const author = document.createElement("p");
    author.classList.add("card-author");
    author.textContent = "by " + myLibrary[i].author;
    cardDiv.appendChild(author);
    // Create Genre
    const genre = document.createElement("p");
    genre.classList.add("card-genre");
    genre.textContent = myLibrary[i].genre;
    cardDiv.appendChild(genre);

    // Lastly append the card with the book info to the container div
    libraryContainer.appendChild(cardDiv);
}

// ADD NEW BOOK --------------------
const addBookBtn = document.querySelector(".add-button");
const modal = document.getElementById("modal");
const returnBtn = document.getElementById("return-btn");
const form = document.getElementById("add-book-form");
const formTitle = document.getElementById("new-title");
const formAuthor = document.getElementById("new-author");
const formGenre = document.getElementById("new-genre");

let modalOpen = false;

addBookBtn.addEventListener("mousedown", () => {
    modal.showModal();
    modalOpen = true;
    console.log(modalOpen);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary(formTitle.value, formAuthor.value, formGenre.value, false);
    displayBook(myLibrary.length - 1);
    modal.close();
    form.reset();
});

returnBtn.addEventListener("mousedown", () => {
    modal.close();
    form.reset();
});

// ------------------------------




// Manually create couple of books for testing and styling
addBookToLibrary("Atomic Habits", "James Clear", "Self Help", false);
addBookToLibrary("The Name Of The Wind", "Patrick Rothfuss", "Fantasy", true);
addBookToLibrary("A Wise Mans Tale", "Patrick Rothfuss", "Fantasy", false);
addBookToLibrary("The Everything Store", "Brad Stone", "Biography", true);
addBookToLibrary("Blood Sweat And Pixels", "Jason Schreier", "Business", true);
addBookToLibrary("The Subtle Art Of Not Giving A F*ck", "Mark Manson", "Self Help", false)

for (let i = 0; i < myLibrary.length; i++) {
    displayBook(i);
}
// Manual DONE!