let bookIcon = document.querySelector('.fa-book');
let starIcon = document.querySelector('.star');
let trashIcon = document.querySelector('.fa-trash-can');

let asideElement = document.querySelector('aside');
let addBookButton = document.querySelector('.add-book-btn');


addBookButton.addEventListener('click', () => {
    asideElement.classList.toggle('hide');
  });

//add a book to the reading list
bookIcon.addEventListener('click' , (e) => {
    if(e.target.classList.contains('fa-book')){
        e.target.classList.remove('fa-book');
        e.target.classList.add('fa-book-open-reader');
    }else{
        e.target.classList.remove('fa-book-open-reader');
        e.target.classList.add('fa-book');
    }
})