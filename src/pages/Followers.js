import React, {useContext, useEffect, useState} from "react";
import AppApi from '~apijs'
import UserGeneral from "../components/User/UserGeneral";
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

        if (!user) {
            navigate('/')
        } else {
            getFollowers(user.id).then(
                r => {
                    if (mounted) {
                        setLoading(false)
                        setFollowers(r)
                    }
                }
            )
        }
        return () => mounted = false
    }, [user])


    return <div>
        <Loading loading={loading}>
            <Link to="/">Home</Link>
            <h1>Followers Page</h1>
            {followers.map((follower) => {

                return <div key={follower.user.id}>
                    <UserGeneral  userDetails={follower.user}/>
                    <div>{follower.date}</div>
                </div>

            })}
        </Loading>
    </div>


}