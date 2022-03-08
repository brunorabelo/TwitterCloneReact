import React from "react";
import {Link} from "react-router-dom";
import useUser from "../hooks/useUser";
import HomeLoggedIn from "../components/Home/HomeLoggedIn";
import HomeNoLogin from "../components/Home/HomeNoLogin";
import Welcome from "../components/Welcome/Welcome";
import Users from "./Users"
import { Alert } from "shards-react";

export default function Home() {
    const {user} = useUser()

    return (
        <div>
            <h1>Home</h1>
            <Welcome user={user}/>
            {
                user ?
                    <div>
                        <HomeLoggedIn user={user}/>
                        <Link to="/followers">Followers</Link>
                    </div>
                    : <div>
                        <HomeNoLogin/>
                        <Link to="/users">Users</Link>
                    </div>
            }

            {/*<Users />*/}
        </div>
    )
}