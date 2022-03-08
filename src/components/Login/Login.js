import React, {useState} from "react";
import "./Login.css"
import PropTypes from "prop-types";
import AppApi from '~apijs'
import Loading from "../Loading/Loading";

async function loginUser(credentials) {
    return await AppApi.login(credentials).then(
        res => {
            return res.data
        }
    )
}


export default function Login({setUser, handleLogin}) {
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const user = await loginUser({username, password})
        setUser(user)
        setLoading(false)
        if (user)
            handleLogin()
    }

    return (
        <div className="login-wrapper">
            <Loading loading={loading}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username:</p>
                        <input type="text" onChange={e => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type={"password"} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type={"submit"}>Submit</button>
                    </div>
                </form>
            </Loading>
        </div>
    )
}


Login.propTypes = {
    setUser: PropTypes.func.isRequired
}