const express = require("express");
const cors = require("cors");
const { Connection } = require("./src/config/db");
const { userRouter } = require("./src/routes/user.routes");
const { todoRouter } = require("./src/routes/todo.routes");
require("dotenv").config();
const app = express();

app.use(cors())
app.use(express.json());


app.use("/users", userRouter);
app.use("/todo", todoRouter)

app.listen(process.env.PORT,async()=>{
 try {
    await Connection();
    console.log(`connecting to the port ${process.env.PORT}`)
 } catch (error) {
    console.log(error)
 }
})