import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card, CardBody, CardSubtitle, CardTitle} from "shards-react";

export default function UserGeneral({userDetails = {}}) {

    return (
        <Card>
            <Link to={`/users/${userDetails.id}`}>
                <CardBody>
                    <CardTitle>
                        <strong>{userDetails.first_name + " " + userDetails.last_name}</strong>
                    </CardTitle>
                    <CardSubtitle>
                        <Link to={`/users/${userDetails.id}`}>@{userDetails.username}</Link>
                    </CardSubtitle>
                    {userDetails.email}<br/>
                    <strong>Followers: </strong> {userDetails.followers_number}
                    <div>
                        <strong>Following: </strong> {userDetails.following_number}
                    </div>
                    <div>
                    </div>
                </CardBody>
            </Link>
        </Card>
    )
}