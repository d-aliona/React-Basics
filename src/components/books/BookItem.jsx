import React  from "react";

const BookItem = function (props) {
    
    return (
        <li className="bookItem">
            <div className="bookItem_title">
                <strong>{props.index + 1}</strong>
                <span className={props.isRead ? "notIsRead" : "isRead"}>
                    {props.title}
                </span> 
                <span className="bookItem_checkbox">
                    <button className="bookItem_trash" onClick={() => props.onRemoveBook(props.index)}>
                        🗑
                    </button>
                    <input 
                        type="checkbox"
                        onChange={() => props.onChange(props.index)}
                    />
                </span>
            </div>
            <div className="bookItem_description">{props.description}</div>
        </li>
    )
}

export default BookItem;