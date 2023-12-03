const express = require("express");
const route = express.Router();

const user = require("./routes/user");
const yourCampaigns = require("./routes/yourCampaigns");
const products = require("./routes/products");
const readyToGo = require("./routes/readyToGo");
const createCampaign = require("./routes/createCampaign");
const deleteCampaign = require("./routes/deleteCampaign");
const updateCampaignState = require("./routes/updateCampaignState");

route.use("/", user);
route.use("/", yourCampaigns);
route.use("/", products);
route.use("/", readyToGo);
route.use("/", createCampaign);
route.use("/", deleteCampaign);
route.use("/", updateCampaignState);

module.exports = route;
