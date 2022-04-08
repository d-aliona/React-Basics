import React, {useState} from "react";
import AddBook from "./components/addForm/AddBook";
import BookList from "./components/books/BookList";
import StatisticsBoard from "./components/statisticsBoard/StatisticsBoard";
import book_list from "./store/books.json";
import './style.css';

function App() {
  let [booklist, setBooklist] = useState(book_list);

  function onToggle(id) {
    setBooklist (
        booklist.map((book, index) => {
            if (index === id) {
                book.isRead = !book.isRead
            }
            return book;
        })
    )
  }

  function removeBook(id) {
    setBooklist (
        booklist.filter((book, index) => index !== id)
    )
  }

  function onRemoveAll() {
    setBooklist (booklist = [])
    return (
      <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>
    )
  }
 
  function addBook(title, description) {
        setBooklist(
          booklist.concat(
            [{
              "id": Date.now(),
              "isRead": false,
              "title": title,
              "description": description
            }]
          )
        )
        return (
          <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>
        )
  }

  return (
    <div>
      <h1>The Booklist</h1>
      <AddBook onRemoveAll={onRemoveAll} onCreate={addBook}/>
      <StatisticsBoard data={booklist} />
      <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>
    </div>
  );
}

export default App;