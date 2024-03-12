const express = require("express");

const router = express.Router();
const{likePost,unLikePost} = require("../controllers/likeControllor");
const{createComment} = require("../controllers/commentController");
const{createPost,getAllPosts} = require("../controllers/postController");

router.post("/comments/create",createComment);

router.post("/posts/create",createPost);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unLikePost);
router.get("/posts",getAllPosts);

module.exports = router;
