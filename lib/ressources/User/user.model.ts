import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: "string",
      default: function () {
        let randomN = Math.floor(Math.random() * 99999).toString();
        return `user+${randomN}`;
      },
    },
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;
