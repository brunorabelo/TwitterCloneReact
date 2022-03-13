import React from "react";
import {useAuthStore} from "../../store/AuthStore";
import {Navigate, useLocation} from "react-router-dom"
import {routesMap} from "../../routes/RoutesMap";

export default function RequireAuth({children}){
    const [auth] = useAuthStore()
    const location = useLocation()

    if (!auth.user) {
        return <Navigate to={routesMap("login")} state={{from:location}} replace />
    }

    return children
}