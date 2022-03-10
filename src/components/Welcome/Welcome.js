import React from "react";

export default function Welcome(props) {
    const user = props.user
    return <div>
        <p><strong>Welcome{user ? " " + user.first_name + "," : ","}</strong></p>
    </div>
}