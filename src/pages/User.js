import React, {useEffect, useState} from "react";
import AppApi from '~apijs'
import {Link, useParams} from "react-router-dom";

async function getUserDetails(id) {
    return await AppApi.getUserDetails(id).then(
        res => res.data
    )
}


export default function User({userId}) {
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            console.log(params)
            const userDetails = await getUserDetails(params.userId)
            setUserDetails(userDetails)
            setLoading(false)
        }
        fetchData().catch(console.error)
    }, [params])

    if (loading){
        return <div>Loading</div>
    }

    return (
        <div>
            <Link to="/users">Users</Link>
            <h1>User Details</h1>
            <div>
                <h3>Username: </h3>
                <p>{userDetails.username}</p>
            </div>
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
            <button>Follow</button>
        </div>
    )
}