const mongoose = require("mongoose");
const schema = mongoose.Schema;

const saleSchema = schema(
  {
    article: {
      type: String,
      required: "Ariculo is required!",
    },
    percentage1: {
      type: String,
      required: "percentage is required!",
    },

    percentage2: {
      type: String,
      required: "percentage is required!",
    }
  }
);

module.exports = mongoose.model("Sale", saleSchema);
