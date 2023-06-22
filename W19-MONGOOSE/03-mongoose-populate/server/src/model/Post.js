import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  image: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User", // Specifies the collection
  },
  //   address: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Address'
  //   },
  comments: [
    {
      comment: {
        type: String,
        required: true,
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

export default mongoose.model("Post", postSchema);
