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
    return <div>
        {props.loading ? loadingComponent : props.children}
    </div>
}