import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = {
    name:{
        type:String,
        required:true,
    },
    email:{
        type:string,
        required:true,
    },
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    }
}
const User = mongoose.model('User', userSchema);
export  default   User ;