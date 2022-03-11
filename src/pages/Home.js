import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import HomeLoggedIn from "../components/Home/HomeLoggedIn";
import HomeNoLogin from "../components/Home/HomeNoLogin";
import Welcome from "../components/Welcome/Welcome";
import {useAuthStore} from "../store/AuthStore";

export default function Home() {
    const [authState] = useAuthStore()
    const {user} = authState

    return (
        <div>
            <h1>Home</h1>
            {
                user ?
                    <div>
                        <Welcome user={user}/>
                        <HomeLoggedIn user={user}/>
                        <Link to="/followers">Followers</Link>
                    </div>
                    : <div>
                        {/*<HomeNoLogin/>*/}
                        <div>Restrito</div>
                        <Link to="/users">Users</Link>
                    </div>
            }

            {/*<Users />*/}
        </div>
    )
}