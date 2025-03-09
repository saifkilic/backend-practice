import { Router } from "express";
import { registerUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/register", (req, res) => res.send("User routes are working!"));
router.route("/register").post(registerUser);


export default router;