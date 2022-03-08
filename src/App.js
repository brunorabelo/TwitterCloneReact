import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./pages/Users";
import User from "./pages/User";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Followers from "./pages/Followers";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "shards-react";
import useUser from "./hooks/useUser";


function App() {
    const {user} = useUser()

    // if (!token && false) {
    //     return <LoginPage setToken={setToken}/>
    // }

    return (
        <div className="wrapper">
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">TwitterClone</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink active href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    {
                        user ?
                        <NavItem>
                            <NavLink active href="/">
                                Followers
                            </NavLink>
                        </NavItem> : <></>
                    }
                </Nav>
            </Navbar>
                <h1>Application</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
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
