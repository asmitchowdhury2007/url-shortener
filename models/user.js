const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    email : {
        type : String,
        required:true, 
        unique:true,
    },
    password :{
        type: String,
        required:true,
    },

},
    {
        date : new Date()
    }
);

const user = mongoose.model("users", userSchema);
module.exports = user;