import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
})

const Post = mongoose.model('Post', PostSchema)
export default Post