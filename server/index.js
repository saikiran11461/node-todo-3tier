const express = require("express");
const cors = require("cors");
const { Connection } = require("./src/config/db");
const { userRouter } = require("./src/routes/user.routes");
const { todoRouter } = require("./src/routes/todo.routes");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,             
}));
app.use(cookieParser());


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