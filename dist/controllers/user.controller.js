import jwt from "jsonwebtoken";
import emailQueue from "../queues/email.queue.js";
import User from "../models/user.model.js";
export const loginUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET ?? (() => { throw new Error("JWT_SECRET is not defined in environment variables"); })(), { expiresIn: "1h" });
        await emailQueue.add("loginEmail", { email });
        res.json({ message: "Login successful", token });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
        return;
    }
};
