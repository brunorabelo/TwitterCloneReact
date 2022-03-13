import React from "react";

import "./Card.css"

export function Card({children}){
    return <div className="card">{children}</div>
    // return <CardMt>{children}</CardMt>
}


export function CardContainer({children}){
    return <div className="card-content">{children}</div>
}