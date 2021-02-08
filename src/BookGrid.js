import React from 'react'
import Book from './Book.js'

const BookGrid = (props) => {
  const books = props.books

  return (
    <ol className="books-grid">
      {
        books.map(book => <li key={book.id}><Book book={book} updateBook={props.updateBook} /></li>)
      }
    </ol>
  );
}

export default BookGrid
