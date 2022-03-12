import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card, CardContainer} from "../commons/Card";

export default function UserGeneral({userDetails = {}}) {

    return (
        <Card>
            <CardContainer>
                <strong>{userDetails.first_name + " " + userDetails.last_name}</strong> <br />
                <Link to={`/users/${userDetails.id}`}>@{userDetails.username}</Link><br />
                {userDetails.email}<br />
                <strong>Followers: </strong> {userDetails.followers_number}
                <div>
                    <strong>Following: </strong> {userDetails.following_number}
                </div>
            </CardContainer>
        </Card>

    )
}