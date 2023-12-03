const express = require("express");
const redis = require("../lib/redis");
const user = express.Router();

user.get("/user", async (req, res) => {
  try {
    const userData = await redis.get("zocket-user");
    res.status(200).json(JSON.parse(userData));
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

module.exports = user;
