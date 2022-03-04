const user1 = {
    id:1,
    username: "markinho",
    first_name: 'Mark',
    last_name: 'Zuckerberg',
    email: 'zuck@facebook.com',
    followers_number: 3,
    following_number: 7
}
const user2 = {
    id:2,
    username: "markinho2",
    first_name: 'Mark2',
    last_name: 'Zuckerberg2',
    email: 'zuck2@facebook.com',
    followers_number: 3,
    following_number: 7
}
const user3 = {
    id:3,
    username: "markinho3",
    first_name: 'Mark3',
    last_name: 'Zuckerberg3',
    email: 'zuck3@facebook.com',
    followers_number: 3,
    following_number: 7
}

const userDetails = {
    ...user1,
    followers: [
        user2, user3
    ],
    following: [user2]
}

export {user1, user2, user3, userDetails}