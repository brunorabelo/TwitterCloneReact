import React, {useEffect, useState} from "react";
import AppApi from '~apijs'
import {Link, useParams} from "react-router-dom";


export default function UserDetails(props) {
    const user = props.user
    return (
            <div>
                <h1>User Details</h1>
                <div>
                    <h3>Username: </h3>
                    <p>{user.username}</p>
                </div>
                <div>
                    <h3>Name: </h3>
                    <p>{user.first_name || "" + user.last_name}</p>
                </div>
                <div>
                    <h3>email: </h3>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h3>Followers: </h3>
                    <p>{user.followers_number}</p>
                </div>
                <div>
                    <h3>Following: </h3>
                    <p>{user.following_number}</p>
                </div>
            </div>
    )
}