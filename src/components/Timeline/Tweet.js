import React from "react";
import "./Tweet.css"
import {Card, CardContainer} from "../commons/Card";

export default function Tweet(props) {
    const tweet = props.tweet;
    const date = tweet.date;
    const dateObj = new Date(date)
    return <Card>
        <CardContainer>
            <p>{props.tweet.tweet}</p>
            <p><strong>{props.tweet.author_name}</strong> at {dateObj.toString()}</p>
        </CardContainer>
    </Card>
}