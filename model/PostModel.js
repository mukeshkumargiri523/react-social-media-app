import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Users",
    },
    desc: String,
    comment: [String],
    likes: [],
    image: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Posts", PostSchema);
export default PostModel;
