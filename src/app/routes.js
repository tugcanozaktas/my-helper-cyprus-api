const express = require("express");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const editUser = require("./controllers/users/editUser");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const getUserTypes = require("./controllers/users/userTypes");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post("/register", postUser);
router.put("/edit/user", authentication, putUserDetails);
router.put("/edit/:id", editUser);
router.get("/user-types", getUserTypes);

module.exports = router;
