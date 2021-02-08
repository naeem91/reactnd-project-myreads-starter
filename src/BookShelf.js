import React from 'react'
import BookGrid from './BookGrid.js'

const BOOK_SHELVES = [
  {name: 'Currently Reading', id: 'currentlyReading'},
  {name: 'Want to Read', id: 'wantToRead'},
  {name: 'Read', id: 'read'},
]

const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={props.books} updateBook={props.updateBook} />
      </div>
    </div>
  );
}

export { BookShelf, BOOK_SHELVES }
