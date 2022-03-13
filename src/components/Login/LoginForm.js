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

    return (<div className="login-wrapper hero is-fullheight-with-navbar">
            <Loading loading={loading}>
                <div className={"hero-body"}>
                    <div className={"container"}>
                        <div className="card">
                            <div className="card-content">
                                <p>Login</p>
                                <br/>
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <label className="label">Username</label>
                                        <input type="text" className="input" name="username"
                                               onChange={handleInputOnchange}/>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <input className="input" name="password" type="password"
                                               onChange={handleInputOnchange}/>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link" type={"submit"}>Submit</button>
                                        </div>
                                        <div className="control">
                                            <button className="button is-link is-light">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Loading>
        </div>
    )
}

