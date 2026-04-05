import express from "express";
import cors from "cors";
import "dotenv/config";
import rateLimit from "express-rate-limit";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const aiLimiter = rateLimit({ windowMs: 60 * 1000, max: 10 });

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiLimiter, aiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});