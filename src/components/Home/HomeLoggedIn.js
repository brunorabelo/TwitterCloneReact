import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";
import Timeline from "../Timeline/Timeline";
import AppApi from '~apijs'


function getUserTimeline(userId) {
    return AppApi.getFollowingTweets(userId).then(r => r.data)
}

export default function HomeLoggedIn(props) {
    const [loading, setLoading] = useState(true)
    const [tweets, setTweets] = useState([])
    const user = props.user

    useEffect(() => {
        let mounted = true
        getUserTimeline(user.id).then(res => {
            if (mounted) {
                setLoading(false)
                setTweets(res)
            }
        })
        return () => mounted = false
    }, [])


    return <div>
        <Loading loading={loading}>
            <div>
                <Timeline tweets={tweets}/>
            </div>
        </Loading>
    </div>

}