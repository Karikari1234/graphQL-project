const userList = [{
        id: "abc123",
        name: "Naafiz",
        age: 27,
    },
    {
        id: "ab124",
        name: "Shian",
        age: 26,
    },
];

const postList = [{
        id: 1,
        title: "My First Post",
        body: "The body ......................",
        published: false,
        author: "abc123",
    },
    {
        id: 2,
        title: "My Second Post",
        body: "The body ......................",
        published: true,
        author: "abc123",
    },
    {
        id: 3,
        title: "My Third Post",
        body: "The body ......................",
        published: false,
        author: "ab124",
    },
];

const commentList = [{
        id: 1,
        body: "Hello World",
        author: "abc123",
        post: 1,
    },
    {
        id: 2,
        body: "Hi PReends",
        author: "abc123",
        post: 2,
    },
    {
        id: 3,
        body: "I LObe u",
        author: "ab124",
        post: 3,
    },
    {
        id: 4,
        body: "Kenooo???",
        author: "ab124",
        post: 1,
    },
];

const db = {
    userList,
    postList,
    commentList,
}


export {
    db as
    default
}