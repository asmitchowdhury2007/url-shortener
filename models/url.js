const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

const urlSchema = new mongoose.Schema({
    shortID : {
        type: String,
        required : true,
    },
    redirectURL : {
        type:String,
        required:true,
    },
    history:[{
        _id: false,
        timeStamp :{
            type:Number,
        }
    }]
}, 
    {
        timeStamp: true
    }
)
const url = mongoose.model("urls",urlSchema);
module.exports = url;
