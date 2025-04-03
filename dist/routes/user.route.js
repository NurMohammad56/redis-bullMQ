import { Router } from "express";
import { loginUser } from "../controllers/user.controller.js";
const router = Router();
router.post("/user-login", loginUser);
export default router;
