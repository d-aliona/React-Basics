import React, {useState}  from "react";
import './style.css';

const AddBook = function ({onCreate, onRemoveAll}) {
    
    const [value1, setValue1] = useState('Title of book');
    const [value2, setValue2] = useState('Add the description of the book');

    function submitHandler(event) {
        event.preventDefault();
        onCreate(value1, value2);
    }
    
    return (
        <div className="addBook">
            <form  onSubmit={submitHandler} >
                <input 
                    className="addBook_title" 
                    type="text" 
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                /> 
                <textarea 
                    className="addBook_description" 
                    rows="5" 
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
                <button className="addBook_button" type="submit" >
                    Add new book
                </button>
            </form>
            <button className="removeAll_button" onClick={(e) => onRemoveAll()}>
                Remove all
            </button>
        </div>
    )
}

export default AddBook;