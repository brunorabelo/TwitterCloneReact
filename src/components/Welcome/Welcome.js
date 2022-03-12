import React from "react";

export default function Welcome(props) {
    const user = props.user
    return <div>
        <h4><strong>Welcome {user.first_name}</strong></h4>
    </div>
}