import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book) => {
    this.setState(() => ({
        books: state.books.concat(
            c => c.id !== book.id
        )
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks
                books={this.state.books}
                moveBook={this.moveBook}
            />
        )}/>
        <Route path="/search" render={() => (
            <SearchBooks

            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
