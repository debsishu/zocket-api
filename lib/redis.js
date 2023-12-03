const { Redis } = require("ioredis");
require("dotenv").config();

const getRedisURL = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }
  throw new Error("REDIS_URL not defined");
};

const redis = new Redis(getRedisURL());

module.exports = redis;
