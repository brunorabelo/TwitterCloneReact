import React, {useEffect} from "react";
import LoginForm from "../components/Login/LoginForm";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuthStore} from "../store/AuthStore";
import {routesMap} from "../routes/RoutesMap";

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth] = useAuthStore();
    const homeRoute = routesMap("home")
    const from = location.state?.from?.pathname || homeRoute;

    useEffect(()=>{
        if (auth.user)
            navigate(homeRoute)
    }, [])

    const handleOnLoginSuccess = () => {
        navigate(from, { replace: true});
    }
    return <LoginForm handleLogin={handleOnLoginSuccess}/>
}