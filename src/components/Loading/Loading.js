import React from "react";
import "./Loading.css"

export default function Loading(props) {
    const loadingComponent = <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    const pageLayout = <div className={"hero is-fullheight-with-navbar"}>
        <div className={"hero-body"}>
            <div className={"container has-text-centered"}>{loadingComponent}</div>
        </div>
    </div>

    const children = props.children || <></>

    return (props.loading ? pageLayout : children)
}