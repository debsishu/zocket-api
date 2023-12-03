const express = require("express");
const redis = require("../lib/redis");
const createCampaign = express.Router();

createCampaign.post("/create-campaign", async (req, res) => {
  try {
    const {
      budget,
      createdOn,
      endDate,
      startDate,
      image,
      location,
      name,
      platform,
    } = req.body;
    const redisCall = await redis.get("zocket-user-campaigns");
    const campaignData = JSON.parse(redisCall);

    const newCampaign = {
      id: campaignData[campaignData.length - 1].id + 1,
      isEnabled: true,
      image: image,
      name: name,
      createdOn: createdOn,
      startDate: startDate,
      endDate: endDate,
      clicks: Math.floor(Math.random() * 900) + 100,
      budget: budget,
      location: location,
      platform: platform,
      status: "Live Now",
    };
    campaignData.push(newCampaign);
    await redis.set("zocket-user-campaigns", JSON.stringify(campaignData));
    res.status(200).json("SUCCESS");
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

module.exports = createCampaign;
