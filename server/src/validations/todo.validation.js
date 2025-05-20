const {body} = require("express-validator");


const todoValidator = [
    body("title").notEmpty().isString(),
    body("user").notEmpty().isMongoId()
]




const userValidator = [
    body("email").notEmpty().isString(),
    body("password").notEmpty().isString()
]

module.exports = {todoValidator, userValidator}