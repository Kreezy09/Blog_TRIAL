const {isValidObjectId, Types} = require("mongoose");
const Post = require("../models/postModel");

const createPost = async (req, res) => {
    const {data} = req.body;
    console.log('data', data);
    Post.create(data).then((response) => {
        res.status(200).json(response);
    }).catch((e) => {
        res.status(400).json({
            message: "Failed to create post",
            error: e.message,
        });
    })
}

const getAllPosts = async (req, res) => {
    Post.find().then((response) => {
        res.status(200).json(response);
    }).catch((e) => {
        res.status(400).json({
            message: "Failed to create post",
            error: e.message,
        });
    })
}

module.exports = {
    createPost,
    getAllPosts,
};