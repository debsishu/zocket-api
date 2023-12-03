const express = require("express");
const redis = require("../lib/redis");
const updateCampaignState = express.Router();

updateCampaignState.patch("/campaign/:index", async (req, res) => {
  try {
    const index = req.params.index;
    const redisCall = await redis.get("zocket-user-campaigns");
    const campaignData = JSON.parse(redisCall);
    campaignData[index].isEnabled = !campaignData[index].isEnabled;
    if (!campaignData[index].isEnabled) {
      campaignData[index].status = "Paused";
    } else {
      campaignData[index].status = "Live Now";
    }
    await redis.set("zocket-user-campaigns", JSON.stringify(campaignData));
    res.status(200).json("SUCCESS");
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

module.exports = updateCampaignState;
