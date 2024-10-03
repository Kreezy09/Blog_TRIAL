const {Router} = require('express');
const postRoutes = require('./postRouter');

const router = Router();
router.use("/post", postRoutes);

module.exports = router;