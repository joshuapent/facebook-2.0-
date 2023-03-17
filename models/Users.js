const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        DOB: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        friends: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        information: {
            bio: {default: 'New JEV Media User'},
            profilePic: {
                type: String,
                default: 'https://toppng.com/uploads/thumbnail/yoda-silhouette-11562913728qpwtuuynq1.png'
            },
            age: {},
            homeTown: {}
        },
        posts: {}
    },
    {
        timestamps: true,
    }
)

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;