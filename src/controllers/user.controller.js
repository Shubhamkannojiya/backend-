import {asyncHandler} from  "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req,res) =>{ //asyncHandler is a high order function that takes a function as an argument and returns a new function that wraps the original function in a try/catch block. This allows us to handle errors in a consistent way across our application.
    res.status(200) .json({
        message :"ok"
    })
})

export {registerUser}