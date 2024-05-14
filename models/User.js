import {Schema, model, models} from "mongoose"

const UserSchema= new Schema({
    email: {
        type:String, required:[true, "Please provide an email"],
        unique:true
    },
    password:{
        type:String, required:true
    }
}, {timestamps:true})

export const User = models?.User || model("User", UserSchema)