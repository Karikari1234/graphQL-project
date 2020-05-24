const Comment = {
    author: (parent, args, {
            db
        }, info) =>
        db.userList.find((user) => user.id == parent.author),
    post: (parent, args, {
            db
        }, info) =>
        db.postList.find((post) => post.id == parent.post),
}

export {
    Comment as
    default
}