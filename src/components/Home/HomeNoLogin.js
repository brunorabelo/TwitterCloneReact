import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import AppApi from '~apijs'
import Loading from "../Loading/Loading";

function getAllTweets() {
    return AppApi.getAllTweets().then(r => r.data)
}

export default function HomeNoLogin() {
    const [loading, setLoading] = useState(true)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        let mounted = true
        getAllTweets().then(res => {
            if (mounted) {
                setLoading(false)
                setTweets(res)
            }
        })
        return () => mounted = false
    }, [])


    return <div>
        <Loading loading={loading}>
            <Link to="/login">Sign In</Link>
            <div>
                <Timeline tweets={tweets}/>
            </div>
        </Loading>
    </div>
}