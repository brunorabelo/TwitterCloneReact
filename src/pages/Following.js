import React, {useContext, useEffect, useState} from "react";
import AppApi from '~apijs'
import UserCard from "../components/User/UserCard";
import Loading from "../components/Loading/Loading";
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/AuthStore";

function getFollowingUsers(userId) {
    return AppApi.getUserFollowing(userId).then(r => r.data);
}

export default function Following(props) {
    const [authState] = useAuthStore()
    const {user} = authState
    const [loading, setLoading] = useState(true)
    const [followingUsers, setFollowingUsers] = useState([])
    const navigate = useNavigate()
    // noinspection JSCheckFuncti   onSignatures
    useEffect(() => {
        let mounted = true

        getFollowingUsers(user.id).then(
            r => {
                if (mounted) {
                    setLoading(false)
                    setFollowingUsers(r)
                }
            }
        )

        return () => mounted = false
    }, [user])

    const followingUsersSection = followingUsers.map((following) => {

        return <div key={following.user.id}>
            <UserCard userDetails={following.user}/>
            <div>{following.date}</div>
        </div>

    })

    return <section className={"section"}>
        <Loading loading={loading}>
            <h1 className={"title"}>Following</h1>
            <section className={"section"}>
                <div className={"columns"}>
                    <div className={"column is-two-thirds"}>
                        {
                            followingUsers?.length ? followingUsersSection : "You are following no one"
                        }
                    </div>

                    <div className={"column"} />
                </div>
            </section>
        </Loading>
    </section>


}