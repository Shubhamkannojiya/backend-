import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser) //registerUser is a controller function that handles the request and response for the /register route.
export default router;