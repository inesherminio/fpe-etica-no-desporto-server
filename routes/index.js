const router = require("express").Router();
const Score = require("../models/Score.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/addScore", (req, res, next) => {
  const { totalScore } = req.body;
  Score.create({ totalScore })
    .then((score) => res.json("New score added to DB"))
    .catch((err) => next(err));
});

module.exports = router;
