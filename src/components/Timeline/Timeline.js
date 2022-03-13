import React from "react";
import Tweet from "./Tweet";

export default function Timeline(props) {
    return <div>

        <div className={"columns"}>
            <div className={"column"}/>
            <div className={"column is-four-fifths"}>
                <h1>Timeline</h1>
                <ul>
                    {(props.tweets || []).map((tweet, index) => <Tweet key={tweet.key || index} tweet={tweet}/>)}
                </ul>
            </div>
            <div className={"column"}/>
        </div>
    </div>
}