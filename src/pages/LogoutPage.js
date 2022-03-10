import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import AppApi from '~apijs'
import Loading from "../components/Loading/Loading";

async function logoutUser() {
    return await AppApi.logout().then()
}

export default function LogoutPage(props) {
    const [loading, setLoading] = useState(true)
    const setUser = props.setUser
    const navigate = useNavigate();


    useEffect(() => {
        logoutUser().then(r => {
            setLoading(false)
            console.log(r)
            setUser(null)
            navigate('/')
        })
    }, [])
    return <Loading loading={loading}/>
}