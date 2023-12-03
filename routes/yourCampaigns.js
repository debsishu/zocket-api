const express = require("express");
const redis = require("../lib/redis");
const campaigns = express.Router();

campaigns.get("/your-campaigns", async (_, res) => {
  try {
    const campaignData = await redis.get("zocket-user-campaigns");
    res.status(200).json(JSON.parse(campaignData));
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

// const temp = [
//   {
//     id: 0,
//     isEnabled: true,
//     image:
//       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Blueberry cake Campaign",
//     createdOn: new Date(),
//     startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
//     endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     clicks: Math.floor(Math.random() * 900) + 100,
//     budget: Math.floor(Math.random() * 9000) + 1000,
//     location: "Chennai",
//     platform: "FB",
//     status: "Live Now",
//   },
//   {
//     id: 1,
//     isEnabled: false,
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Chocolate cake Campaign",
//     createdOn: new Date(),
//     startDate: new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000),
//     endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     clicks: Math.floor(Math.random() * 900) + 100,
//     budget: Math.floor(Math.random() * 9000) + 1000,
//     location: "Coimbatore",
//     platform: "FB",
//     status: "Paused",
//   },
//   {
//     id: 2,
//     isEnabled: false,
//     image:
//       "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Brownie cake Campaign",
//     createdOn: new Date(),
//     startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
//     endDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
//     clicks: Math.floor(Math.random() * 900) + 100,
//     budget: Math.floor(Math.random() * 9000) + 1000,
//     location: "Erode",
//     platform: "FB",
//     status: "Exhausted",
//   },
//   {
//     id: 3,
//     isEnabled: true,
//     image:
//       "https://plus.unsplash.com/premium_photo-1700695638130-5cbe5f878fd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Pumpkin cake Campaign",
//     createdOn: new Date(),
//     startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
//     endDate: new Date(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000),
//     clicks: Math.floor(Math.random() * 900) + 100,
//     budget: Math.floor(Math.random() * 9000) + 1000,
//     location: "Coimbatore",
//     platform: "YouTube",
//     status: "Live Now",
//   },
//   {
//     id: 4,
//     isEnabled: true,
//     image:
//       "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Cup cakes Campaign",
//     createdOn: new Date(),
//     startDate: new Date(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000),
//     endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     clicks: Math.floor(Math.random() * 900) + 100,
//     budget: Math.floor(Math.random() * 9000) + 1000,
//     location: "Coimbatore",
//     platform: "Google",
//     status: "Live Now",
//   },
// ];

module.exports = campaigns;
