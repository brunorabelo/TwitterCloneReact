import React, {useState} from "react";
import "./Login.css"
import AppApi from '~apijs'
import Loading from "../Loading/Loading";
import {useAuthStore} from "../../store/AuthStore";
import {saveUser} from "../../store/AuthReducer";

async function loginUser(credentials) {
    console.log("credentials", credentials)
    return await AppApi.login(credentials).then(res => {
        return res.data
    })
}


export default function LoginForm({handleLogin}) {
    const [, dispatch] = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "", password: ""
    })

    const handleInputOnchange = ({currentTarget: {name, value}}) =>
        setLoginData((state) => ({...state, [name]: value}))


    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        const user = await loginUser(loginData)
        setLoading(false)
        dispatch(saveUser(user))
        if (user) handleLogin()
    }

    return (<div className="login-wrapper">
        <Loading loading={loading}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username:</p>
                    <input type="text" name="username" onChange={handleInputOnchange}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input name="password" type={"password"} onChange={handleInputOnchange}/>
                </label>
                <div>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        </Loading>
    </div>)
}

