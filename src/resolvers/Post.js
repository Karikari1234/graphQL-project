const Post = {
    author: (parent, args, {
            db
        }, info) =>
        db.userList.find((user) => user.id == parent.author),
    comments: (parent, args, {
            db
        }, info) =>
        db.commentList.filter((comment) => comment.post == parent.id),
}

export {
    Post as
    default
}