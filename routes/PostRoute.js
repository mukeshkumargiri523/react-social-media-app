import express from "express";
import {
  commentPost,
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../controller/PostController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.put("/comment/:id", commentPost);
router.delete("/:id", deletePost);
router.put("/like/:id", likePost);
router.get("/timeline/:id", getTimelinePosts);

export default router;
