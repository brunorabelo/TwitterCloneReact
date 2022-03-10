import React, {useContext} from "react";
import {Link} from "react-router-dom";
import HomeLoggedIn from "../components/Home/HomeLoggedIn";
import HomeNoLogin from "../components/Home/HomeNoLogin";
import Welcome from "../components/Welcome/Welcome";
import Users from "./Users"
import { Alert } from "shards-react";
import AuthContext from "../context/AuthContext";

export default function Home(props) {
    const user = useContext(AuthContext)

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