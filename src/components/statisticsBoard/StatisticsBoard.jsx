import React from "react";
import './style.css';

const StatisticsBoard = function (props) {
        
    return (
        <div>
            <span className="statistic">All: {props.data.length}</span>
            <span className="statistic green">Read: {props.data.filter((book) => book.isRead).length}</span>
            <span className="statistic darkred">Not read: {props.data.filter((book) => !book.isRead).length}</span>
        </div>
    )
}

export default StatisticsBoard;