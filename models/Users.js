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
    }
)

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;