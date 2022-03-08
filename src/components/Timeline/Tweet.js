import React from "react";

export default function Tweet(props) {
    const tweet = props.tweet;
    const date = tweet.date;
    const dateObj = new Date(date)
    return <div>
        <h3>Tweet</h3>
        <p>{props.tweet.tweet}</p>
        <p><strong>{props.tweet.author_name}</strong> at {dateObj.toString()}</p>
    </div>
}