import {createContext, useState} from "react";

const getUser = () => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    console.log(`getuser: ${userString}`)
    return user
}

// const saveUser = user => {
//     console.log(`setuser: ${user?.toString()}`)
//     localStorage.setItem('user', JSON.stringify(user));
//     setUser(user);
// };

function authReducer(state, action) {
    switch (action.type) {
        default: {

        }
    }
}

// function authProvider({children}){
//     const [state, setState] = React.useReducer(authReducer, {user: getUser()})
//
//
// }

const AuthContext = createContext(null)

export default AuthContext