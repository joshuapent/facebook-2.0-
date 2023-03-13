const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema (
    {
        text: {
            type: String,
        }, 
        img: {},
        comments: {},
        likes: {},
        dislikes: {}
    }
)

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;