const {Schema, model} = require("mongoose");

const userdetail =  new Schema(
    {
        email:{
            type: String,
            required: true,
        },
        mobile:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        message: {
            type: String,
        },
        emailsub: {
            type: String,
        },
    },
    { timestamps: true }
);

const Userdetail = model("users", userdetail);

module.exports = Userdetail;