import express from "express";

//controllers
import {createUser, loginUser, logoutCurrentUser} from "../controllers/userControllers.js";
//middleware

const router = express.Router();

router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

export default router