
const map = {
    home: "/",
    login: "/login",
    followers: "/followers",
    users: "/users",
    user: "/users/:userId",
    logout: "/logout"
}

export function routesMap(name){
    return map[name] || "/"
}
