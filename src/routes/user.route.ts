import { Router, Request, Response } from "express";
import { loginUser } from "../controllers/user.controller.js";

const router = Router();

// ✅ Explicitly define request and response types
router.post("/user-login", loginUser);

export default router;
