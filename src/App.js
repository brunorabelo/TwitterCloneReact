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
import RequireAuth from "./components/Auth/RequireAuth";
import Following from "./pages/Following";
import {routesMap} from "./routes/RoutesMap";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBarComponent/>
                {/*<div className="wrapper">*/}
                <Routes>
                    <Route path={routesMap('home')} element={<Home/>}/>
                    <Route path={routesMap('login')} element={<LoginPage/>}/>
                    <Route path={routesMap('logout')} element={<LogoutPage/>}/>
                    <Route path={routesMap('followers')} element={<RequireAuth><Followers/></RequireAuth>}/>
                    <Route path={routesMap('following')} element={<RequireAuth><Following/></RequireAuth>}/>
                    <Route path={routesMap('users')} element={<Users/>}/>
                    <Route path={routesMap('user')} element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
