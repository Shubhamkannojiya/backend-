import express from "express" ;
import cors from "cors";
import cookieparser from "cookie_parser";

const app = express ();
app.use(cors({
    origin : process.env.CORS_ORIGIN,// origin tells which domain is allowed to access the server by backend server.
    // It is used to prevent cross-origin resource sharing issues.
        credentials: true

}))

app.use(express.json({limit: "16kb"}));//Server ko bolo ki incoming request ke andar jo JSON data aa raha hai, usko read/parse karo,
// aur maximum 16kb tak ka JSON data accept karo kyu ki agar koi bahut bada JSON data aa jaye toh server crash ho sakta hai,
app.use(urlencoded({extended:true , limit: "16kb"}));
app.use(express.static("public"))//public bas ek common convention hai, kyunki us 
//folder mein woh files rakhi jaati hain jo browser/client ko publicly access karni hoti hain.
app.use(cookieparser());//cookieparser middleware ko use karne ka reason ye hai ki jab bhi koi client server
// ko request bhejta hai, toh uske saath cookies bhi aa sakti hain.


export { app }