import React, {useContext, useEffect, useState} from "react";
import AppApi from '~apijs'
import UserCard from "../components/User/UserCard";
import Loading from "../components/Loading/Loading";
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/AuthStore";

function getFollowers(userId) {
    return AppApi.getUserFollowers(userId).then(r => r.data);
}

export default function Followers(props) {
    const [authState] = useAuthStore()
    const {user} = authState
    const [loading, setLoading] = useState(true)
    const [followers, setFollowers] = useState([])
    const navigate = useNavigate()
    // noinspection JSCheckFuncti   onSignatures
    useEffect(() => {
        let mounted = true

        getFollowers(user.id).then(
            r => {
                if (mounted) {
                    setLoading(false)
                    setFollowers(r)
                }
            }
        )

        return () => mounted = false
    }, [user])

    const followersSection = followers.map((follower) => {

        return <div key={follower.user.id}>
            <UserCard userDetails={follower.user}/>
            <div>{follower.date}</div>
        </div>

    })

    return <section className={"section"}>
        <Loading loading={loading}>
            <h1 className={"title"}>Followers</h1>
            <section className={"section"}>
                {
                    followers?.length ? followersSection : <p>You have no followers</p>
                }
            </section>
        </Loading>
    </section>


}