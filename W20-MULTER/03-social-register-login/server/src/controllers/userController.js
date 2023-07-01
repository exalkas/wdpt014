import User from "../model/User.js";

export const handleRegister = async (req, res) => {
  console.log("🚀 ~ handleRegister:", req.body);

  try {
    const newUser = await User.create(req.body);
    console.log("🚀 ~ handleRegister:", newUser);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error ADDING USER:", error.message);

    res.send({ success: false, message: error.message });
  }
};
export const handleLogin = async (req, res) => {
  console.log("🚀 ~ handleLogin:", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) return res.send({ success: false, errorId: 1 });

    const user = await User.findOne({ email, password });

    if (!user) return res.send({ success: false, errorId: 2 });

    console.log("🚀 ~ handleLogin USER:", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error Login:", error.message);

    res.send({ success: false, message: error.message });
  }
};

export const handleUpdateProfile = async (req, res) => {
  console.log("🚀 ~ handleUpdateProfile:", req.body);
  console.log("🚀 ~ handleUpdateProfile FILE:", req.file);

  try {
    console.log("🚀 ~ handleUpdateProfile FILENAME:", req.file.filename);

    req.body.image = req.file.filename;

    const editedUser = await User.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
    console.log("🚀 ~ editedUser:", editedUser);

    res.send("User Inserted into db");
  } catch (error) {
    console.log("🚀 ~ error handleUpdateProfile:", error.message);

    res.send("Error in handleUpdateProfile" + error.message);
  }
};
