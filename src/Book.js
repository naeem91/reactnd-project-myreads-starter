import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'

const Book = (props) => {
  const book = props.book

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}></div>
        <BookShelfChanger book={book} updateBook={props.updateBook} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
    </div>
  )
}

export default Book
