import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import Users from "./pages/Users";
import User from "./pages/User";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Followers from "./pages/Followers";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import NavBarComponent from "./components/NavBar/NavBar";


function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBarComponent/>
                <div className="wrapper">
                    <h1>Application</h1>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/logout" element={<LogoutPage />}/>
                        <Route path="/followers" element={<Followers/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/users/:userId" element={<User/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
