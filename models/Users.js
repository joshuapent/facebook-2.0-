const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            unique: true
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
        information: {
            bio: {},
            profilePic: {},
            age: {},
            homeTown: {}
        }
    },
    {
        timestamps: true,
    }
)

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;