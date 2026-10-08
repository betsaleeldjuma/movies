import express from "express";

//controllers
import {createUser, loginUser, logoutCurrentUser, getAllUsers} from "../controllers/userControllers.js";
//middleware
import {authenticate, authorizeAdmin} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.route('/').post(createUser).get(authenticate, authorizeAdmin, getAllUsers)

router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

export default router