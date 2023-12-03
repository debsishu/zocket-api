const express = require("express");
const redis = require("../lib/redis");
const readyToGo = express.Router();

readyToGo.get("/ready-to-go", async (_, res) => {
  try {
    const readyToGoData = await redis.get("zocket-user-ready-to-go");
    res.status(200).json(JSON.parse(readyToGoData));
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

// const temp = [
//   {
//     id: 1,
//     name: "Mukund Cake Shop",
//     userImage:
//       "https://images.unsplash.com/photo-1621424093521-eec9a43df158?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
//     productImage:
//       "https://images.unsplash.com/photo-1615837136007-701de6015cfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     name: "Mukund Cake Shop",
//     userImage:
//       "https://images.unsplash.com/photo-1621424093521-eec9a43df158?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
//     productImage:
//       "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     name: "Mukund Cake Shop",
//     userImage:
//       "https://images.unsplash.com/photo-1621424093521-eec9a43df158?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
//     productImage:
//       "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     name: "Mukund Cake Shop",
//     userImage:
//       "https://images.unsplash.com/photo-1621424093521-eec9a43df158?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
//     productImage:
//       "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

module.exports = readyToGo;
