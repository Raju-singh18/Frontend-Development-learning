
// Temporary in-memory array to store blog posts
let posts = [];

// Create a new post
export const createPost = (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = {
    id: posts.length + 1, // simple incremental ID
    title,
    content,
    author,
    date: new Date(),
  };

  posts.push(post);
  res.status(201).json({ message: "Post created successfully", post });
};

// Get all posts
export const getAllPosts = (req, res) => {
  res.json(posts);
};
