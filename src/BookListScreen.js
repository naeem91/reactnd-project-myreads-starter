import React from 'react'
import { Link } from 'react-router-dom'
import { BookShelf, BOOK_SHELVES } from './BookShelf.js'

const BookListScreen = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {
          BOOK_SHELVES.map(shelf =>
            <BookShelf
              key={shelf.id}
              title={shelf.name}
              books={props.books.filter(book => book.shelf === shelf.id)}
              updateBook={props.updateBook}
          />)
        }
      </div>
      <div className="open-search">
        <Link to="/search"><button>Add a book</button></Link>
      </div>
    </div>
  )
}

export default BookListScreen
