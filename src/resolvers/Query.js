const Query = {
    users: (parent, {
        query
    }, {
        db
    }, info) => {
        if (query) return db.userList.filter((user) => user.name === query);
        else return db.userList;
    },

    posts: (parent, {
        query
    }, {
        db
    }, info) => {
        if (query) return db.postList.filter((post) => post.author == query);
        else return db.postList;
    },

    add: (parent, {
        a,
        b
    }) => a + b,

    greeting: (parent, args) => `Hello, ${args.name || "user"} !`,

    me: () => ({
        id: "abc123",
        name: "Naafiz",
        age: 27,
    }),

    post: () => ({
        id: 1,
        title: "My First Post",
        body: "The body ......................",
        published: false,
        author: "abc123",
    }),

    comments: (parent, args, {
        db
    }, info) => db.commentList,
}

export {
    Query as
    default
}