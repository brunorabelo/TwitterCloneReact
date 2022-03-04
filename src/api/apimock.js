import {user1, user2, user3} from "./db";

var logged_user = null;

function mockasync(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({data: data}), 600)
    })
}

const apimock = {
    login({username, password}) {
        if (password) {
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                token: "token123",
                permissions: {
                    ADMIN: username === 'admin',
                    STAFF: username === 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout() {
        logged_user = null;
        return mockasync({});
    },
    whoami() {
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask) {
        return mockasync({description: newtask, done: false});
    },
    list_todos() {
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },
    getAllUsers() {
        return mockasync([user1, user2, user3])
    },
    getUserDetails(userId) {
        const a = [user1, user2, user3]
        return mockasync(a[userId - 1])
    },
    follow(userId) {

    }
};

export default apimock;