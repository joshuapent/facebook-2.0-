const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema (
    {
        text: {
            type: String,
            required: [true, "..."]
        }, 
        img: {},
        comments: {},
        likes: {},
        dislikes: {}
    },
    {
        timestamps: true,
    }
)

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;