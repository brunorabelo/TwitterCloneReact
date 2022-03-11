import React from "react";
import LoginForm from "../components/Login/LoginForm";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const handleOnLoginSuccess = () => navigate('/');
    return <LoginForm handleLogin={handleOnLoginSuccess}/>
}