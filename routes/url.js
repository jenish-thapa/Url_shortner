const express = require("express");
const { handleGenerateShortURL, handleURLAnalytics } = require("../contollers/url");

const router = express.Router();

router.post("/", handleGenerateShortURL);
router.get("/analytics/:shortId", handleURLAnalytics);

module.exports = { router };
