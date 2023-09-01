import mongoose from "mongoose";


const userSchema  = new mongoose.Schema({
    firstname:{type:String,required:[true,"First Name is required "]},
    lastname:{type:String,required:[true,"Last Name is required "]},
    email:{type:String,required:[true,"Email  is required "],unique:true},
    password:{type:String,required:[true,"Password  is required "]},
    isverified:{type:Boolean,default:false},
    role:{
        isadmin:{type:Boolean,default:false},
        iseditor:{type:Boolean,default:false}
    },
    forgotpasswordtoken:String,
    forgotpasswordtokenexpiry:Date,
    verifytoken:String,
    verifytokenexpiry:Date,
    },{timestamps : true});


const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;