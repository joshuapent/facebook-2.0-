const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema (
    {
        comment: {
            type: String,
            required: true
        }, 
        likes: {},
        dislikes: {}
    },
    {
        timestamps: true,
    }
)
const postsSchema = new mongoose.Schema (
    {
        text: {
            type: String,
            required: true
        }, 
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        img: {},
        comments: [commentsSchema],
        likes: {
            type: Number
        },
        dislikes: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
)

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;