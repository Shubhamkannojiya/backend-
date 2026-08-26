import mongoose  ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
//to encrept password
userSchema.pre("save", async function(next){ // function is complex and time taken that,s why async is used 
   if (this.isModifird("password") )return next();//it check if modifed pr not
   this.password = bcrypt.hass(this.password ,10) // possword  encrept krke save krdo isko 2 
   // chhez chahiye hoti hai kiso ko encreptr(this.password) or kitne round me(10)
   next()
})
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
} 
userSchema.methods.generateAcessToken = function (){
   return jwt.sign({  //jwt.sign() is a function from the jsonwebtoken package that creates a JWT (JSON Web Token).

   _id: this._id,
   email: this.email,
   name: this.name,
   fullName: this.fullName
}, 
process.env.ACCESS_TOKEN_SECRET,
{
   expiresIn:ACCESS_TOKEN_EXPIRY
}
)
}
userSchema.methods.generateRefereshToken = function (){
 return  jwt.sign({      
   _id : this._id

},
process.env.REFRESH_TOKEN_SCRET,
{

   expiresIn:REFRESH_TOKEN_EXPIRY
})

}

export const User =mongoose.model("User",userSchema);