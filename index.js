const express = require("express");
const { router } = require("./routes/url");
const { connectToMongoDb } = require("./connect");
const URL = require("./models/url");

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("DB connected")
);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/url", router);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const urlDetail = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(urlDetail.redirectUrl);
});

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
