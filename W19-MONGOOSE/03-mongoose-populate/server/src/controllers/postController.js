import Post from "../model/Post.js";

export const handleListPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .select("-__v")
      .populate({ path: "owner", select: "-password -__v" })
      .limit(2)
      .skip(0)
      .sort({ _id: "desc" });

    console.log("🚀 ~ users:", posts);
    res.send(posts);
  } catch (error) {
    console.log("🚀 ~ error LIST POSTS:", error.message);
    res.send("Error in listing posts" + error.message);
  }
};

export const handleAddPost = async (req, res) => {
  console.log("🚀 ~ handleAddPost:", req.body);

  try {
    const newPost = await Post.create(req.body);
    console.log("🚀 ~ newPost:", newPost);

    res.send("Post Inserted into db");
  } catch (error) {
    console.log("🚀 ~ error ADDING POST:", error.message);

    res.send("Error in adding a post" + error.message);
  }
};

// export const handleDeleteUser = async (req, res) => {
//   console.log("🚀 ~ handleDeleteUser:", req.params);

//   try {
//     const deleteUser = await User.findByIdAndDelete(req.params.id);
//     console.log("🚀 ~ deleteUser:", deleteUser);

//     res.send("User deleted into db");
//   } catch (error) {
//     console.log("🚀 ~ error DELETING USER:", error.message);

//     res.send("Error in deleting a user" + error.message);
//   }
// };

// export const handleEditUser = async (req, res) => {
//   console.log("🚀 ~ handleEditUser:", req.body);

//   try {
//     const editedUser = await User.findByIdAndUpdate(req.body._id, req.body, {
//       new: true,
//     });
//     console.log("🚀 ~ editedUser:", editedUser);

//     res.send("User edited");
//   } catch (error) {
//     console.log("🚀 ~ error EDITING USER:", error.message);

//     res.send("Error in deleting a user" + error.message);
//   }
// };
