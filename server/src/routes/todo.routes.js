const express = require("express");

const todoRouter = express.Router();
const {todoValidator} = require("../validations/todo.validation")
const {todoController} = require("../controllers/todo.controller");
const {authentication} = require("../middlewares/authenctation")

todoRouter.get("/", todoController.getTodo);
todoRouter.get("/:id", todoController.getSingleTodo);
todoRouter.post("/add",authentication, todoValidator, todoController.createTodo);
todoRouter.patch("/:id", todoController.patchTodo);
todoRouter.delete("/:id", todoController.deleteTodo)


module.exports = {todoRouter}