import React, {useEffect, useState} from "react";
import AppApi from '~apijs'
import {Link, useParams} from "react-router-dom";
import UserCard from "../components/User/UserCard";
import Loading from "../components/Loading/Loading";

async function getAllUsers() {
    return await AppApi.getAllUsers().then(
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

    return (
        <Loading loading={loading}>
            {users.map((user) => {
                return <UserCard key={user.id} userDetails={user}/>
            })}
        </Loading>
    )
}