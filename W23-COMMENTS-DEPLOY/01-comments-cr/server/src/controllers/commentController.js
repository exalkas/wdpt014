import Post from "../model/Post.js";

export const handleAddComment = async (req, res) => {
  console.log("🚀 ~ handleAddComment:", req.body);

  try {
    const newPost = await Post.findByIdAndUpdate(
      req.body.post,
      {
        $push: {
          comments: {
            text: req.body.text,
            owner: req.user,
          },
        },
      },
      { new: true }
    ).populate({
      path: "comments.owner",
      select: "username email image",
    });
    console.log("🚀 ~ newPost:", newPost);

    res.send({ success: true, post: newPost });
  } catch (error) {
    console.log("🚀 ~ error handleAddComment:", error.message);

    res.send("Error in handleAddComment" + error.message);
  }
};
