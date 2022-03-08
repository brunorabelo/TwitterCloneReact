const user1 = {
    id: 1,
    username: "markinho",
    first_name: 'Mark',
    last_name: 'Zuckerberg',
    email: 'zuck@facebook.com',
    followers_number: 3,
    following_number: 7
}

const user2 = {
    id: 2,
    username: "markinho2",
    first_name: 'Mark2',
    last_name: 'Zuckerberg2',
    email: 'zuck2@facebook.com',
    followers_number: 3,
    following_number: 7
}
const user3 = {
    id: 3,
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


const all_tweets = [
    {
        "id":3,
        "tweet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget accumsan orci, in tristique nunc. Nunc mauris ligula, placerat vel purus id, semper accumsan nulla. Sed in in.",
        "author_id": user1.id,
        "author_name": user1.first_name + " " + user1.last_name,
        "date": "2022-03-07T13:48:00"
    },
    {
        "id":2,
        "tweet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie in nisl ut semper. Quisque vitae laoreet urna, et volutpat mi. Sed fringilla magna a lectus viverra placerat.",
        "author_id": user2.id,
        "author_name": user2.first_name + " " + user2.last_name,
        "date": "2022-03-07T11:23:00"
    },
    {
        "id":1,
        "tweet": "Today I feel good",
        "author_id": user1.id,
        "author_name": user1.first_name + " " + user1.last_name,
        "date": "2022-03-08T10:00:00"
    },
    {
        "id":1,
        "tweet": "Today I feel good",
        "author_id": user3.id,
        "author_name": user3.first_name + " " + user3.last_name,
        "date": "2022-03-08T10:00:00"
    },
]
const following_table = {
    [user1.id]: [{user: user2, date:""}, {user:user3, date:""}],
    [user2.id]: [{user:user3, date:""}],
    [user3.id]: [],
}
const followers_table = {
    [user1.id]: [],
    [user2.id]: [{user:user1, date:""}],
    [user3.id]: [{user:user2, date:""}, {user:user3, date:""}],
}

export {user1, user2, user3, userDetails, following_table, followers_table, all_tweets}