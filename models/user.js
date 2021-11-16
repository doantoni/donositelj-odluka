const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    info: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema)