const { userModel } = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userController = {
  getUsers: async (req, res) => {
    try {
      let users = await userModel.find();
      return res.status(200).send({ message: "fetched users success", users });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },
  register: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        return res.status(200).send({ message: "user already exist" });
      }

      let hashedPassword = await bcrypt.hash(password, 10);

      let new_user = await userModel({
        name: name,
        email: email,
        password: hashedPassword,
      });

      await new_user.save();

      return res
        .status(201)
        .send({ message: "user created successfully", new_user });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      let user = await userModel.findOne({ email });
      console.log(user);
      if (!user) {
        return res.status(400).send({ message: "user not found" });
      }
      let checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res
          .status(400)
          .send({ message: "please check the email or password" });
      }
      let token = jwt.sign(
        { email: user.email, _id: user._id },
        process.env.JWT_SECRET
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });

      return res.status(200).send({ message: "user logged in success" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },
};

module.exports = { userController };
