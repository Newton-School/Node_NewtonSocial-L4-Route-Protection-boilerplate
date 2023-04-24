const express = require("express");

const {
    followUser,
    unfollowUser,
    removeFollower,
    getAllFollowers,
    getAllFollowing
} = require("../controllers/followControllers");

const protectUserRoutes = require("../middlewares/protectUserRoute");
const isLoggedIn = require("../middlewares/isLoggedIn");

const router = express.Router();

/*
 - all routes should be protected by isLoggedIn and protectUserRoutes middlewares.
*/

router.post('/follow', followUser);
router.delete('/unfollow', unfollowUser);
router.delete('/remove-follower', removeFollower);
router.get('/followers', getAllFollowers);
router.get('/following', getAllFollowing);

module.exports = router;