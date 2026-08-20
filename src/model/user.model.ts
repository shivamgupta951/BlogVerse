import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

interface userI {
  u_id?: mongoose.Types.ObjectId;
  name: String;
  email: String;
  password: String;
  image?: String;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema<userI>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
