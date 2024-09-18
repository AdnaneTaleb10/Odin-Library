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


addBookButton.addEventListener('click', () => {
    asideElement.classList.toggle('hide');
  });

//Add a book to the reading list
bookIcons.forEach((book) => {
    book.addEventListener('click' , (e) => {
        if(e.target.classList.contains('fa-book')){
            e.target.classList.remove('fa-book');
            e.target.classList.add('fa-book-open-reader');
        }else{
            e.target.classList.remove('fa-book-open-reader');
            e.target.classList.add('fa-book');
        }
    })
})

//Add a book to the favorite list
starIcons.forEach((star) => {
    star.addEventListener('click' , (e) => {
        if(e.target.classList.contains('fa-regular')){
            e.target.classList.remove('fa-regular');
            e.target.classList.add('fa-solid');
        }else{
            e.target.classList.remove('fa-solid');
            e.target.classList.add('fa-regular');
        }
    })
})

//Add a new book to the library 
form.addEventListener('submit' , (e) => {

    e.preventDefault();

    let bookObject = {
        title : document.querySelector('#title').value,
        author : document.querySelector('#author').value,
        genre : document.querySelector('#genre').value,
        year : document.querySelector('#year').value,
        ageRange : document.querySelector('#age-range').value
    }

    
})

