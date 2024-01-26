const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        validate:{
            validator:function(value){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(value);
            },
            message: props => `${props.value} is not a valid Email!`
        },
        required:true
    },
    Password:{
        type:String,
        required:true,
        minLength:[3,"You passmust be atleast 3 characters long"]
    }
});

module.exports = mongoose.model("User",userSchema);