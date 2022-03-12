import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import HomeLoggedIn from "../components/Home/HomeLoggedIn";
import HomeNoLogin from "../components/Home/HomeNoLogin";
import Welcome from "../components/Welcome/Welcome";
import {useAuthStore} from "../store/AuthStore";
import {Col, Row, Container} from "shards-react";

export default function Home() {
    const [authState] = useAuthStore()
    const {user} = authState

    return (
        <div>
            {
                user ?
                    <div>
                        <Welcome user={user}/>
                        <hr/>
                        <HomeLoggedIn user={user}/>
                    </div>
                    : <Container fluid>
                        <Col>
                            <h2>Restrito</h2>
                        </Col>
                    </Container>
            }
        </div>
    )
}