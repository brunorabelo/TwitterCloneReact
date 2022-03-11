import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import AppApi from '~apijs'
import Loading from "../components/Loading/Loading";
import {useAuthStore} from "../store/AuthStore";
import {saveUser} from "../store/AuthReducer";

async function logoutUser() {
    return await AppApi.logout().then()
}

export default function LogoutPage() {
    const [, dispatch] = useAuthStore()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();


    useEffect(() => {
        logoutUser().then(r => {
            setLoading(false)
            console.log(r)
            dispatch(saveUser(null))
            navigate('/')
        })
    }, [])
    return <Loading loading={loading}/>
}