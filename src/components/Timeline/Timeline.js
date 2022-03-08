import React from "react";
import Tweet from "./Tweet";

export default function Timeline(props) {
    return <div>
        <h1>Timeline</h1>

        <div>
            <ul>
                {(props.tweets || []).map((tweet, index) => <Tweet key={tweet.key || index} tweet={tweet}/>)}
            </ul>
        </div>
    </div>
}