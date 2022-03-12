import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import Users from "./pages/Users";
import User from "./pages/User";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Followers from "./pages/Followers";


import NavBarComponent from "./components/NavBar/NavBar";
import React from "react";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBarComponent/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/logout" element={<LogoutPage/>}/>
                    <Route path="/followers" element={<Followers/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/users/:userId" element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
