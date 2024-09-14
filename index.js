let bookIcon = document.querySelectorAll('.fa-book');
let starIcon = document.querySelectorAll('.fa-star');
let trashIcon = document.querySelectorAll('.fa-trash-can');

let bookIcons = Array.from(bookIcon);
let starIcons = Array.from(starIcon);
let trashIcons = Array.from(trashIcon);

let asideElement = document.querySelector('aside');
let addBookButton = document.querySelector('.add-book-btn');


addBookButton.addEventListener('click', () => {
    asideElement.classList.toggle('hide');
  });

//add a book to the reading list
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


//add a book to the favorite list
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