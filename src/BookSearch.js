import React from 'react'
import BookGrid from './BookGrid.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'


class BookSearchScreen extends React.Component {
  state = {
    query: '',
    results: []
  }
  searchBooks = (event) => {
    event.preventDefault()
    const query = event.target.value
    this.setState({query: query})

    if(this.isValidQuery(query)){
      BooksAPI.search(query)
      .then((data) => {
        if(data instanceof Array){
          this.setState({results: data})
        }else{
          // an empty response - no books found
          this.setState({results: []})
        }
      })
    }else{
      this.setState({results: []})
    }
  }
  isValidQuery = (query) => {
    // strings & spaces only
    const re  = /[^a-z ]/i
    return query !== '' && !re.test(query)
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={this.searchBooks}
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid
            books={this.state.results}
            updateBook={this.props.updateBook} />
        </div>
      </div>
    )
  }
}

export default BookSearchScreen
