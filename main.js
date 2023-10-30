// Library Array
const myLibrary = [];

// Book Constructor
function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

// Add new book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}


// Manually create couple of books for testing and styling
const atomicHabits = new Book("Atomic Habits", "James Clear", "Self Help", false);
const nameOfTheWind = new Book("The Name Of The Wind", "Patrick Rothfuss", "Fantasy", true);
const aWiseMansTale = new Book("A Wise Mans Tale", "Patrick Rothfuss", "Fantasy", false);
const theEverythingStore = new Book("The Everything Store", "Brad Stone", "Biography", true);
const bloodSweatAndPixels = new Book("Blood Sweat And Pixels", "Jason Schreier", "Business", true);
const theSutleArtOfNotGivingAFuck = new Book("The Subtle Art Of Not Giving A F*ck", "Mark Manson", "Self Help", false)

addBookToLibrary(atomicHabits);
addBookToLibrary(nameOfTheWind);
addBookToLibrary(aWiseMansTale);
addBookToLibrary(theEverythingStore);
addBookToLibrary(bloodSweatAndPixels);
addBookToLibrary(theSutleArtOfNotGivingAFuck);

console.table(myLibrary);

// Turn myLibrary into Cards and display them on the page
const libraryContainer = document.querySelector(".library-container");

for (let i = 0; i < myLibrary.length; i++) {
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

console.log(libraryContainer);
