export const ACTION_SAVE_USER = "AUTH_STORE/SAVE_USER"

const getUser = () => {
    const authStateString = localStorage.getItem('authState');
    return JSON.parse(authStateString)
}
export const initialState = getUser() || {"user": null}

export const saveUser = (user) => ({
    type: ACTION_SAVE_USER,
    user
})

export const authReducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case ACTION_SAVE_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            throw Error("Invalid action")
    }
}