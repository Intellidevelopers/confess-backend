import express from "express";
import cors from "cors";
import confessionRoutes from "./src/routes/confession.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/confessions", confessionRoutes);

export default app;
