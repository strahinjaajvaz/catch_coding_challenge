const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const url =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

app.get("/api/products", async function (req, res) {
  const { data } = await axios.get(url);
  return res.json(data);
});

app.listen(4000, function () {
  console.log("running on port 4000");
});
