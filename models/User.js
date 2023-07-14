const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    reg_date:{
        required: true,
        type: Date
    },
    age:{
        required: true,
        type: Number
    },
    address:{
        required: true,
        type: String
    },
    contact:{
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('user',userSchema);