import Post from "../model/Post.js";

export const handleListPosts = async (req, res) => {
  console.log("🚀 ~ handleListPosts:");

  try {
    const posts = await Post.find()
      .populate({
        path: "owner",
        select: "username email image",
      })
      .populate({
        path: "likes",
        select: "username email image",
      });
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
export const handleLikejs = async (req, res) => {
  console.log("🚀 ~ handleLikejs:", req.body);

  try {
    const post = await Post.findById(req.body.post);
    console.log("🚀 ~ post:", post);

    let newLikes = [];

    if (post.likes.includes(req.user)) {
      console.log("🚀 ~ includes is true");

      newLikes = post.likes.filter((item) => item.toString() !== req.user);
    } else {
      console.log("🚀 ~ includes is false");
      newLikes = [...post.likes, req.user]; // add the user to the array
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.body.post,
      { likes: [...newLikes] },
      { new: true }
    );
    console.log("🚀 ~ updatedPost:", updatedPost);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error handleLikejs:", error.message);

    res.send("Error in handleLikejs" + error.message);
  }
};
export const handleLike = async (req, res) => {
  console.log("🚀 ~ handleLike:", req.body);

  try {
    const post = await Post.findOne({
      _id: req.body.post,
      likes: { $elemMatch: { $eq: req.user } }, // find the current user inside the array
    });
    console.log("🚀 ~ post:", post);

    let newPost = {};

    if (!post) {
      newPost = await Post.findByIdAndUpdate(
        req.body.post,
        {
          $push: { likes: req.user }, // adds an item to the specific array
        },
        { new: true }
      )
        .populate({
          path: "owner",
          select: "username email image",
        })
        .populate({
          path: "likes",
          select: "username email image",
        });
      console.log("🚀 ~ newPost:", newPost);
    } else {
      newPost = await Post.findByIdAndUpdate(
        req.body.post,
        {
          $pull: { likes: req.user }, // removes an item from the array
        },
        {
          new: true,
        }
      )
        .populate({
          path: "owner",
          select: "username email image",
        })
        .populate({
          path: "likes",
          select: "username email image",
        });
      console.log("🚀 ~ newPost:", newPost);
    }

    res.send({ success: true, post: newPost });
  } catch (error) {
    console.log("🚀 ~ error handleLikejs:", error.message);

    res.send("Error in handleLikejs" + error.message);
  }
};
