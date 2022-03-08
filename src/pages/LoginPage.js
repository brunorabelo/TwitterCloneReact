import React from "react";
import Login from "../components/Login/Login";
import useUser from "../hooks/useUser";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const {setUser} = useUser()

    const navigate = useNavigate();
    const handleLogin = () => navigate('/');
    return <Login setUser={setUser} handleLogin={handleLogin}/>
}