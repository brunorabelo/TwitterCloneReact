import {all_tweets, followers_table, following_table, user1, user2, user3} from "./db";

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
                id: 2,
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

        const a = [user1, user2, user3]
        return mockasync(a[username-1] || user1);
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
    getUserFollowers(userId) {
        return mockasync(followers_table[userId])
    },
    getUserFollowing(userId) {
        return mockasync(following_table[userId])
    },
    follow(userId) {
        return mockasync({res: ""})
    },
    getAllTweets() {
        return mockasync(all_tweets)
    },
    getFollowingTweets(userId) {
        const following = (following_table[userId] || []).map(x => x.user.id)
        const tweets = all_tweets.filter(x => following.includes(x.author_id));
        console.log(tweets)
        return mockasync(tweets)
    },
    unfollow(userId) {
        return mockasync({res: ""})
    }
};

export default apimock;