import React, {useEffect, useState} from "react";
import AppApi from '~apijs'
import OnlyAuth from "../Auth/OnlyAuth";
import {useAuthStore} from "../../store/AuthStore";
import Loading from "../Loading/Loading";

function checkUserFollowing(userId, checkUserId) {
    return AppApi.checkUserFollowing(userId, checkUserId).then(r => r.data)
}

function followUser(userId) {
    return AppApi.follow(userId).then(r => r.data)
}
function unFollowUser(userId) {
    return AppApi.unfollow(userId).then(r => r.data)
}

export default function FollowComponent(props) {
    const [auth] = useAuthStore()
    const [following, setFollowing] = useState(false)
    const userShowing = props.user
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true
        if (!auth.user)
            return () => {
            }
        if (mounted) {
            setLoading(true)

            checkUserFollowing(auth.user.id, userShowing?.id).then(
                (res) => {
                    setFollowing(res)
                    setLoading(false)
                }
            )
        }
    }, [auth])

    const handleFollowSubmit = () => {
        setLoading(true)
        followUser(userShowing?.id).then(r=>{
            setLoading(false)
            setFollowing(true)
        })
    }
    const handleUnFollowSubmit = () => {
        setLoading(true)
        unFollowUser(userShowing?.id).then(r=>{
            setLoading(false)
            setFollowing(false)
        })
    }

    const follow = <button variant={"outlined"} color="primary" onClick={handleFollowSubmit}>Follow</button>
    const unfollow = <button color="error" onClick={handleUnFollowSubmit}>Unfollow</button>
    const loadingButton = <button variant={"outlined"} loading>Follow</button>
    const button = following ? unfollow : follow
    return <OnlyAuth>{loading ? loadingButton : button}</OnlyAuth>
}