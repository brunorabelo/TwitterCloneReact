import React from "react";
import Login from "../components/Login/Login";
import {useNavigate} from "react-router-dom";

export default function LoginPage(props) {
    const setUser = props.setUser
    const navigate = useNavigate();
    const handleLogin = () => navigate('/');
    return <Login setUser={setUser} handleLogin={handleLogin}/>
}