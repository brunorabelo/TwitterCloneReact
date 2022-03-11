import {createContext, useContext, useEffect, useReducer} from "react";


const AuthStore = createContext()
AuthStore.displayName = "AuthStore"

export const useAuthStore = () => useContext(AuthStore)

export const AuthStoreProvider = ({children, initialState, reducer}) => {
    const [authState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem("authState", JSON.stringify(authState))
    }, [authState])

    return (
        <AuthStore.Provider value={[authState, dispatch]}>{children}</AuthStore.Provider>
    )
}


