import Confession from "../models/Confession.js";

/**
 * Create confession
 */
export const createConfession = async (req, res) => {
  try {
    const confession = await Confession.create(req.body);
    res.status(201).json(confession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get all confessions (latest first)
 */
export const getConfessions = async (req, res) => {
  const confessions = await Confession.find().sort({ createdAt: -1 });
  res.json(confessions);
};

/**
 * Get confession by ID
 */
export const getConfessionById = async (req, res) => {
  const confession = await Confession.findById(req.params.id);
  if (!confession) {
    return res.status(404).json({ message: "Confession not found" });
  }
  res.json(confession);
};

/**
 * Add reaction
 */
export const reactToConfession = async (req, res) => {
  const { type } = req.body; // relate | support

  const confession = await Confession.findById(req.params.id);
  if (!confession) {
    return res.status(404).json({ message: "Confession not found" });
  }

  confession.reactions[type]++;
  await confession.save();

  res.json(confession.reactions);
};

/**
 * Add comment
 */
export const addComment = async (req, res) => {
  const confession = await Confession.findById(req.params.id);
  if (!confession) {
    return res.status(404).json({ message: "Confession not found" });
  }

  confession.comments.push({ text: req.body.text });
  await confession.save();

  res.status(201).json(confession.comments);
};
