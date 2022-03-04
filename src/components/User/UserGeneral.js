import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function UserGeneral({userDetails = {}}) {

    return (
        <div>
            <h1>User {userDetails.username}</h1>
            <div>
                <h3>Name: </h3>
                <p>{userDetails.first_name || "" + userDetails.last_name}</p>
            </div>
            <div>
                <h3>email: </h3>
                <p>{userDetails.email}</p>
            </div>
            <div>
                <h3>Followers: </h3>
                <p>{userDetails.followers_number}</p>
            </div>
            <div>
                <h3>Following: </h3>
                <p>{userDetails.following_number}</p>
            </div>
            <div>
                <Link to={`/users/${userDetails.id}`}>Visit Page</Link>
            </div>
        </div>
    )
}