let mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type: String,
        unique: true
    },
    password: String
})

module.exports = mongoose.model('users',UserSchema)