import React, {useEffect, useState} from "react";
import mockapi from "../api/mockapi";
import {Link, useParams} from "react-router-dom";
import UserGeneral from "../components/User/UserGeneral";

async function getAllUsers() {
    return await mockapi.getAllUsers().then(
        res => res.data
    )
}


export default function User({userId}) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const usersResult = await getAllUsers()
            setUsers(usersResult)
            setLoading(false)
        }
        fetchData().catch(console.error)
    }, [])

    if (loading)
        return <p>Loading</p>

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Users Page</h1>
            {users.map((user) => <UserGeneral key={user.id} userDetails={user}/>)}
        </div>
    )
}