import { Router } from "express";
import { loginUser } from "../controllers/user.controller.js";
const router = Router();
router.post("/user-login", async (req, res) => {
    try {
        await loginUser(req, res);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
});
export default router;
