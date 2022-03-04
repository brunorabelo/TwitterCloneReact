import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./pages/Users";
import User from "./pages/User";
import Home from './pages/Home';


function App() {
    // const {token, setToken} = useToken()

    // if (!token && false) {
    //     return <Login setToken={setToken}/>
    // }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/users/:userId" element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
