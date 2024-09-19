//Icons for different manipulations for books 
let bookIcon = document.querySelectorAll('.fa-book');
let starIcon = document.querySelectorAll('.fa-star');
let trashIcon = document.querySelectorAll('.fa-trash-can');

let bookIcons = Array.from(bookIcon);
let starIcons = Array.from(starIcon);
let trashIcons = Array.from(trashIcon);

//Different sections of the website 
let asideElement = document.querySelector('aside');
let addBookButton = document.querySelector('.add-book-btn');

//Target the form 
let form = document.querySelector('form');

//Function to create and display a book card
function createBookCard(bookObject){
    //Create a div element with the class 'card'
    let card = document.createElement('div');
    card.classList.add('card');

    //Create and append the book title
    let title = document.createElement('h3');
    title.textContent = bookObject.title;
    card.appendChild(title);

    //Create and append the book author
    let author = document.createElement('h5');
    author.textContent = bookObject.author;
    card.appendChild(author);

    //Create and append the book year
    let year = document.createElement('p');
    year.textContent = bookObject.year;
    card.appendChild(year);

    //Create and append the book genre
    let genre = document.createElement('p');
    genre.textContent = bookObject.genre;
    card.appendChild(genre);

    //Create and append the book age range 
    let ageRange = document.createElement('p');
    ageRange.textContent = bookObject.ageRange;
    card.appendChild(ageRange);

    // Create a div for icons and append it to the card
    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');

    // Create the book icon and append it
    let bookIcon = document.createElement('i');
    bookIcon.classList.add('fa-solid', 'fa-book');
    iconsDiv.appendChild(bookIcon);

    // Create the star icon and append it
    let starIcon = document.createElement('i');
    starIcon.classList.add('fa-regular', 'fa-star');
    iconsDiv.appendChild(starIcon);

    // Create the trash icon and append it
    let trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-regular', 'fa-trash-can');
    iconsDiv.appendChild(trashIcon);

    // Append the iconsDiv to the card
    card.appendChild(iconsDiv);

    // Set initial opacity for the fade-in animation
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s'; // Set transition for opacity changes

    document.querySelector('article').appendChild(card);

    // Fade in the card
    setTimeout(() => {
        card.style.opacity = '1';
    } , 200);

    // Attach event listeners to the newly created icons
    addBookIconListener(bookIcon);
    addStarIconListener(starIcon);
    addTrashIconListener(trashIcon);
}

// Function to handle book icon click (reading list)
function addBookIconListener(bookIcon) {
    bookIcon.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-book')) {
            e.target.classList.remove('fa-book');
            e.target.classList.add('fa-book-open-reader');
        } else {
            e.target.classList.remove('fa-book-open-reader');
            e.target.classList.add('fa-book');
        }
    });
}

// Function to handle star icon click (favorites)
function addStarIconListener(starIcon) {
    starIcon.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-regular')) {
            e.target.classList.remove('fa-regular');
            e.target.classList.add('fa-solid');
        } else {
            e.target.classList.remove('fa-solid');
            e.target.classList.add('fa-regular');
        }
    });
}

// Function to handle trash icon click (deleting)
function addTrashIconListener(trashIcon) {
    trashIcon.addEventListener('click', (e) => {
        let card = e.target.closest('.card');

        // Add a fade-out animation before removing the card
        card.style.opacity = '0'; // Start fade-out
        setTimeout(() => {
            card.remove(); // Remove card after the fade-out
        }, 500); // Matches the transition duration
    });
}

// Attach listeners to the initial set of icons
bookIcons.forEach(addBookIconListener);
starIcons.forEach(addStarIconListener);
trashIcons.forEach(addTrashIconListener);

//Display the aside element to add new books
addBookButton.addEventListener('click', () => {
    asideElement.classList.toggle('hide');
});

//Add a new book to the library 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let bookObject = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        genre: document.querySelector('#genre').value,
        year: document.querySelector('#year').value,
        ageRange: document.querySelector('#age-range').value
    };

    createBookCard(bookObject);
});
