import React from "react";
import BookItem from "./BookItem";
import './style.css';

const BookList = function (props) {
    
    return (
        <ul className="bookList">
            {props.data.length === 0 ? <p className="noBooks">There are no books in the list</p> :
                props.data.map((book, index) => 
                <BookItem 
                    key={book.id} 
                    title={book.title} 
                    description={book.description} 
                    index={index}
                    onChange={props.onToggle}
                    onRemoveBook={props.removeBook}
                    isRead={!book.isRead}
                />)
            }
        </ul>
    )
}

export default BookList;