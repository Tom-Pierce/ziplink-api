const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// one week from now for expiry
const oneWeekFromNow = () => {
  const now = new Date();
  return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
};

const ShortUrlSchema = new Schema({
  key: { type: String, required: true },
  url: { type: String, required: true },
  visits: { type: Number, required: true, default: 0 },
  lastVisit: { type: Date, required: true, default: Date.now },
  expiry: { type: Date, required: true, default: oneWeekFromNow },
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("shortUrl", ShortUrlSchema);
