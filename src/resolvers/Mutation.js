import {
    v4 as uuid
} from "uuid";

const Mutation = {
    createUser: (parent, args, {
        db
    }, info) => {
        const nameTaken = db.userList.some((user) => user.name === args.data.name);
        if (nameTaken) {
            throw new Error("Name Taken!");
        }
        const user = {
            id: uuid(),
            ...args.data,
        };
        db.userList.push(user);

        return user;
    },
    createPost: (parent, args, {
        db
    }, info) => {
        const userExists = db.userList.some((user) => user.id == args.post.author);
        if (!userExists) {
            throw new Error("User doesnt exist!");
        }
        const post = {
            id: uuid(),
            ...args.post,
        };

        db.postList.push(post);
        return post;
    },

    createComment: (parent, args, {
        db
    }, info) => {
        const userExists = db.userList.some(
            (user) => user.id == args.comment.author
        );
        const postExists = db.postList.some((post) => post.id == args.comment.post);

        if (!userExists || !postExists) {
            throw new Error("Cant comment invalid post or author");
        }

        const comment = {
            id: uuid(),
            ...args.comment,
        };

        db.commentList.push(comment);
        return comment;
    },
    updateUser: (parent, args, {
        db
    }, info) => {
        const {
            id,
            data
        } = args;
        const user = db.userList.find(user => user.id === id);
        if (!user) {
            throw new Error("User doesn't exist");
        }
        if (typeof data.name === "string") {
            user.name = data.name;
        }

        if (typeof data.age !== "undefined") {
            user.age = data.age;
        }

        return user;
    },

    updatePost: (parent, args, {
        db
    }, info) => {
        const {
            id,
            data
        } = args;
        const post = db.postList.find(post => post.id == id);
        if (!post) {
            throw new Error("Post doesnt exist");
        }

        if (typeof data.title === "string") {
            post.title = data.title;
        }


        if (typeof data.body === "string") {
            post.body = data.body;
        }

        if (typeof data.published === "boolean") {
            post.published = data.published;
        }

        return post;
    },

    updateComment: (parent, args, {
        db
    }, info) => {
        const {
            id,
            data
        } = args;
        const comment = db.commentList.find(comment => comment.id == id);

        if (!comment) {
            throw new Error("Comment not found")
        }

        if (typeof data.body === "string") {
            comment.body = data.body;
        }

        return comment;
    },
    deleteUser: (parent, args, {
        db
    }, info) => {
        const userIndex = db.userList.findIndex((user) => user.id === args.id);
        if (userIndex == -1) {
            throw new Error("User doesnt exist");
        }
        const deletedUser = db.userList.splice(userIndex, 1);
        db.postList = db.postList.filter((post) => {
            const match = post.author == args.id;
            if (match) {
                db.commentList = db.commentList.filter(
                    (comment) => comment.post != match.id
                );
            }
            return !match;
        });
        db.commentList = db.commentList.filter((comment) => comment.author != args.id);

        return deletedUser[0];
    },
    deletePost: (parent, args, {
        db
    }, info) => {
        const postIndex = db.postList.findIndex((post) => post.id == args.id);
        if (postIndex == -1) {
            throw new Error("Post not found");
        }
        const deletedPost = db.postList.splice(postIndex, 1);
        db.commentList = db.commentList.filter((comment) => comment.post != args.id);
        return deletedPost[0];
    },
    deleteComment: (parent, args, {
        db
    }, info) => {
        const commentIndex = db.commentList.findIndex(
            (comment) => comment.id == args.id
        );
        if (commentIndex == -1) {
            throw new Error("comment not found");
        }
        const deletedComment = db.commentList.splice(commentIndex, 1);
        return deletedComment[0];
    },
}

export {
    Mutation as
    default
}