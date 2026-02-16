import express from "express";
import {
  createConfession,
  getConfessions,
  getConfessionById,
  reactToConfession,
  addComment
} from "../controllers/confession.controller.js";

const router = express.Router();

router.post("/", createConfession);
router.get("/", getConfessions);
router.get("/:id", getConfessionById);
router.post("/:id/react", reactToConfession);
router.post("/:id/comments", addComment);

export default router;
