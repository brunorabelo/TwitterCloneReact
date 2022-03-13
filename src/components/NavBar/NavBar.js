import React, {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/AuthStore";
import {routesMap} from "../../routes/RoutesMap";

import "./NavBar.css"
import OnlyAuth from "../Auth/OnlyAuth";

export default function NavBarComponent(props) {
    const [authState] = useAuthStore()
    const {user} = authState
    const navigate = useNavigate()
    const location = useLocation()

    const goHome = function () {
        navigate(routesMap('home'))
    }
    const goFollowers = function () {
        navigate(routesMap('followers'))
    }
    const goUsers = function () {
        navigate(routesMap('users'))
    }
    const goFollowing = function () {
        navigate(routesMap('following'))
    }

    function linkActive(name) {
        return (routesMap(name) === location.pathname)
    }


    return <nav className="hero-head" >
        <a onClick={goHome}>Home</a>
        <OnlyAuth><a onClick={goFollowers}>Followers</a></OnlyAuth>
        <OnlyAuth><a onClick={goFollowing}>Following</a></OnlyAuth>
        <a onClick={goUsers}>Users</a>
        <div className="right">
            {user ?
                <a onClick={() => {
                    navigate(routesMap("logout"))
                }}>
                    Logout
                </a> :

                <a onClick={() => {
                    navigate(routesMap("login"))
                }}>
                    Login
                </a>}
        </div>
    </nav>
}
