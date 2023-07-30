const mongoose = require("mongoose");
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email: {
        type : String,
        required : true,
        unique:[true,"Already Present email"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    phone: {
        type : Number,
        min : 10
    },
    Address: {
        type : String,
        required:true
    }
})

const Student = mongoose.model('Student',UserSchema);

module.exports = Student;