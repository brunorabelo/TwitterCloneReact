import React, {useEffect, useState} from "react";
import AppApi from '~apijs'
import {Link, useParams} from "react-router-dom";
import Loading from "../components/Loading/Loading";
import UserDetails from "../components/User/UserDetails";
import {Card, CardContainer} from "../components/commons/Card";
import FollowComponent from "../components/Follow/FollowComponent";

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


    return (
        <Loading loading={loading}>
            <Card>
                <CardContainer>
                    <UserDetails user={userDetails}/>
                    <FollowComponent user={userDetails}>Follow</FollowComponent>
                </CardContainer>
            </Card>
        </Loading>
    )
}