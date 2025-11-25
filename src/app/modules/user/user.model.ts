import mongoose, { model, Model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// export default userSchema;

// export const User = mongoose.model("User", userSchema);
export const User = model<TUser>("User", userSchema);
