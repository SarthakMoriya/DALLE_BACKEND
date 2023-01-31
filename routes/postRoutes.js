import express from "express";
import { v2 as cloudinary } from "cloudinary"
import Posts from '../models/post.js'
import * as dotenv from 'dotenv';

dotenv.config();
const postRouter = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

//Get all Posts
postRouter.route('/').get(async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json({ message: "success", data: posts })
    } catch (error) {
        res.status(500).json({ message: "error", data: error })
    }
})
//Get post by id

postRouter.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Posts.create({
            name,
            prompt,
            photo: photoUrl.url
        })

        res.status(200).json({ message: "success", data: newPost })

    } catch (error) {
        res.status(500).json({ message: "error", data: error })
    }
})

export default postRouter;