const express = require("express");
const redis = require("../lib/redis");
const products = express.Router();

products.get("/products", async (_, res) => {
  try {
    const campaignData = await redis.get("zocket-user-products");
    res.status(200).json(JSON.parse(campaignData));
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Something went wrong" });
  }
});

// const temp = [
//   {
//     id: 0,
//     image:
//       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Bluberry cake with raw toppings",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Ferro rocher cake",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Green cup cakes",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Chocolate truffle cake",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Custurd mixed with fruit cake",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1618426703623-c1b335803e07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Blueberry topping cakes",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 6,
//     image:
//       "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Browine cake with fluffy cream",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 7,
//     image:
//       "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Best raw topping choco cake",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
//   {
//     id: 6,
//     image:
//       "https://images.unsplash.com/photo-1559553156-2e97137af16f?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Strawberry cakes with blueberry",
//     amount: Math.floor(Math.random() * 3000) + 1000,
//   },
// ];

module.exports = products;
