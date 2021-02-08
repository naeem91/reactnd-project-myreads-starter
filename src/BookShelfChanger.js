import React from 'react'
import * as BooksAPI from './BooksAPI.js'
import { BOOK_SHELVES } from './BookShelf.js'


class BookShelfChanger extends React.Component {
  state = {
    value: ''
  }
  componentDidMount(){
    this.setBookShelf()
  }
  setBookShelf(){
    if(this.props.book.shelf === undefined){
      BooksAPI.get(this.props.book.id)
      .then((book) => {
        this.setState({value: book.shelf})
      })
    }else{
      this.setState({value: this.props.book.shelf})
    }
  }
  handleChange = (event) => {
    event.preventDefault()

    this.setState({value: event.target.value})
    this.props.updateBook({...this.props.book, shelf: event.target.value})
  }
  render(){
    const options = [<option key='move' id='move' disabled>Move to...</option>]
    for(let shelf of BOOK_SHELVES){
      options.push(<option key={shelf.id} value={shelf.id}>{shelf.name}</option>)
    }
    options.push(<option key='none' value='none'>None</option>)

    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          {
            options.map(option => option)
          }
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
