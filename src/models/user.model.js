import mongoose  ,{Schema} from "mongoose";
const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim: true,
        index: true,// to make any field searchable we make index true, so that it can be searched easily in the database.
        lowercase:true

    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim: true,//meansremove extra whitespace from the beginning and end of the string before saving it.
        lowercase:true
    },
fullName:{
        type: String,
        required:true,
         trim: true,
          index:true
        
    },
    avatar:{
        type: String, // cloudinary url of the image
        required:true,
     },
     coverImage:{
        type: String, // cloudinary url of the image

     },
     watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
     }],  
     password :{
        type : String,
        required : [true, "password is required"]
     },
     refreshToken : {
        type : string
     }
    
},{timestamps:true})
export const User =mongoose.model("User",userSchema);