const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid.generate();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}

async function handleURLAnalytics(req, res) {
  const shortId = req.params.shortId;
  if (!shortId) return res.status(400).json({ error: "Invalid url ID" });
  const analytics = await URL.findOne({ shortId });
  return res.json({
    clicks: analytics.visitHistory.length,
    visitHistory: analytics.visitHistory,
  });
}

module.exports = { handleGenerateShortURL, handleURLAnalytics };
