const express = require("express");

const {
    searchUser, getAllUsers, editProfile
} = require("../controllers/userControllers");

const protectUserRoutes = require("../middlewares/protectUserRoute");
const isLoggedIn = require("../middlewares/isLoggedIn");

const router = express.Router();

/*
 - /edit should be protected by isLoggedIn and protectUserRoutes middleware.
*/

router.get("/search", searchUser);
router.put("/edit", editProfile);


// Restricted Routes:
router.get("/", getAllUsers);


module.exports = router;