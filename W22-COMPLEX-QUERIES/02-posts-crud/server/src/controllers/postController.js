import Post from "../model/Post.js";

export const handleListPosts = async (req, res) => {
  console.log("🚀 ~ handleListPosts:");

  try {
    const posts = await Post.find();
    console.log("🚀 ~ posts:", posts);
    res.send({ success: true, posts });
  } catch (error) {
    console.log("🚀 ~ error handleListPosts:", error.message);

    res.send("Error in handleListPosts" + error.message);
  }
};

export const handleAddPost = async (req, res) => {
  console.log("🚀 ~ handleAddPost:", req.body);
  console.log("🚀 ~ handleAddPost:", req.user);

  try {
    if (!req.body.text) return res.send({ success: false, errorId: 2 });

    const newPost = await Post.create({
      owner: req.user,
      text: req.body.text,
    });
    console.log("🚀 ~ newPost:", newPost);
    res.send({ success: true, post: newPost });
  } catch (error) {
    console.log("🚀 ~ error handleAddPost:", error.message);

    res.send("Error in handleAddPost" + error.message);
  }
};
