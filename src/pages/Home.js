import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import HomeLoggedIn from "../components/Home/HomeLoggedIn";
import HomeNoLogin from "../components/Home/HomeNoLogin";
import Welcome from "../components/Welcome/Welcome";
import {useAuthStore} from "../store/AuthStore";
import OnlyAuth from "../components/Auth/OnlyAuth";

export default function Home() {
    const [authState] = useAuthStore()
    const {user} = authState

    const noLogin = <div className={"hero is-link is-fullheight-with-navbar"}>
        <div className="hero-body">
            <div className="container has-text-centered">
                <p className={"title"}>Restrito</p>
            </div>
        </div>
    </div>

    return (
        <div>
            <OnlyAuth noAuth={noLogin}>
                <section className={"section"}>
                    <Welcome user={user}/>
                </section>
                <section className={"section"}>
                    <HomeLoggedIn user={user}/>
                </section>
            </OnlyAuth>
        </div>
    )
}