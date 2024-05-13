const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLenght: 2
    },
    last_name:{
        type: String,
        required: true,
        minLenght: 2
    },
    username:{
        type: String,
        required: true,
        minLenght: 5
    },
});

module.exports = mongoose.model('user', UserShema);