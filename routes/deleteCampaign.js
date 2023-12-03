const express = require("express");
const redis = require("../lib/redis");
const deleteCampaign = express.Router();

deleteCampaign.delete("/campaign/:index", async (req, res) => {
  try {
    const index = req.params.index;
    const redisCall = await redis.get("zocket-user-campaigns");
    const campaignData = JSON.parse(redisCall);
    campaignData.splice(index, 1);
    await redis.set("zocket-user-campaigns", JSON.stringify(campaignData));
    res.status(200).json("SUCCESS");
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

module.exports = deleteCampaign;
