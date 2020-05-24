const User = {
    posts: (parent, args, {
            db
        }, info) =>
        db.postList.filter((post) => post.author == parent.id),
    comments: (parent, args, ctx, info) =>
        db.commentList.filter((comment) => comment.author == parent.id),
}

export {
    User as
    default
}