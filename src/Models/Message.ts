import { Schema } from "mongoose"; 

export const Message = new Schema({
  room: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
  username: String,
});
