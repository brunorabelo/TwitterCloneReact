const ACTION_SAVE_USER = "AUTH_STORE/SAVE_USER"
const ACTION_LOGOUT_USER = "AUTH_STORE/LOGOUT_USER"

export const getUser = () => {
    const authStateString = localStorage.getItem('authState');
    return JSON.parse(authStateString)
}
export const initialState = getUser() || {"user": null}

export const saveUser = (user) => ({
    type: ACTION_SAVE_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION_LOGOUT_USER
})

export const authReducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case ACTION_SAVE_USER:
            return {
                ...state,
                user: action.user
            }
            break
        case ACTION_LOGOUT_USER:
            return {
                ...state,
                user:null
            }
        default:
            throw Error("Invalid action")
    }
}