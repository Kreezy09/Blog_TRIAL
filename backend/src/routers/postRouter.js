const {Router} = require("express");

const {createPost,getAllPosts} = require('../controllers/postController');

const router = Router();

router.post("/", createPost);
router.get("/", getAllPosts);

module.exports = router;