import React, {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../store/AuthStore";
import {routesMap} from "../../routes/RoutesMap";

import "./NavBar.css"

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

    function linkActive(name) {
        return (routesMap(name) === location.pathname)
    }


    return <nav>
        <a onClick={goHome}>Home</a>
        {user ? <a onClick={goFollowers}>
                Followers
            </a>
            : <></>}
        <a  onClick={goUsers}>Users</a>
        <div className="right">
            {user ?
                <a  onClick={() => {
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
