
import express from 'express';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router();

router.post('/posts', createPost);   // Create a new post
router.get('/posts', getAllPosts);   // Get all posts

export default router;
