
const map = {
    home: "/",
    login: "/login",
    followers: "/followers",
    following: "/following",
    users: "/users",
    user: "/users/:userId",
    logout: "/logout"
}

export function routesMap(name){
    return map[name] || "/"
}
