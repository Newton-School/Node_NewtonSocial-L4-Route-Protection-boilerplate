const express = require("express");

const {
    login, signup, decodeToken, logout
} = require("../controllers/authControllers");

const protectUserRoutes = require("../middlewares/protectUserRoute");
const isLoggedIn = require("../middlewares/isLoggedIn");

const router = express.Router();

/*
 - /logout should be protected by isLoggedIn middleware.
*/

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Restricted Routes
router.get('/decode', decodeToken);

module.exports = router;