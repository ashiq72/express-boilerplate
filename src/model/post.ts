import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
