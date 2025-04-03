import { Worker } from "bullmq";
import redisConnection from "../config/redis.js";
import transporter from "../config/nodemailer.js";

const worker = new Worker("emailQueue", async (job) => {
  console.log(`📩 Sending email to: ${job.data.email}`);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: job.data.email,
    subject: "Login Successful",
    text: "You have successfully logged into your account."
  });

  console.log(`✅ Email sent to ${job.data.email}`);
}, { connection: redisConnection });

export default worker;
