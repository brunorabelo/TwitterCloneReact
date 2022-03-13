import React from "react";
import {Card, CardContainer} from "../commons/Card";

export default function Tweet(props) {
    const tweet = props.tweet;
    const date = tweet.date;
    const dateObj = new Date(date)
    return <Card>
        <CardContainer>
            <div className={"content"}>
                <p>{props.tweet.tweet}</p>
                <p><strong>{props.tweet.author_name}</strong> at {dateObj.toString()}</p>
            </div>
        </CardContainer>
    </Card>
}