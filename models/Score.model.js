const { Schema, model } = require("mongoose");

const scoreSchema = new Schema(
  {
    totalScore: Number,
  },
  {
    timestamps: true,
  }
);

const Score = model("Score", scoreSchema);

module.exports = Score;
