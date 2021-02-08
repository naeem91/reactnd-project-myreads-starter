import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearchScreen from './BookSearch.js'
import BookListScreen from './BookListScreen.js'


class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
      BooksAPI.getAll()
      .then((data)=> {
        this.setState({books: data})
      })
  }
  updateBook = (updatedbook) => {
    this.setState((currState) => {
        const books = currState.books.filter(book => book.id !== updatedbook.id)
        return {
          books: books.concat([updatedbook])
        }
    })

    BooksAPI.update(updatedbook, updatedbook.shelf)
  }
  render(){
    return(
      <div className="app">
          <div>
            <Route exact path='/' render={() => (
              <BookListScreen books={this.state.books} updateBook={this.updateBook} />
            )}
            />
            <Route path='/search' render={() => (
              <BookSearchScreen updateBook={this.updateBook} />
            )}
            />
          </div>
      </div>
    );
  }
}

export default BooksApp
