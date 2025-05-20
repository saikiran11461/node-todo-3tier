const express = require("express");

const userRouter = express.Router();

const {userController} = require("../controllers/user.controller");

userRouter.get("/", userController.getUsers)
userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)


module.exports = {userRouter}