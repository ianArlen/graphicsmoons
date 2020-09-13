const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");

exports.register = async (req, res) => {
    const { article, percentage1, percentage2 } = req.body;
    const newsale = Sale({
      article : article,
      percentage1 : percentage1,
      percentage2 : percentage2
    });

    await newsale.save();
  
    res.json({
      message: "User [" + article + "] registered successfully!",
    });
};

exports.getAllVentas = async (req, res) => {
    const sale = await Sale.find({});
  
    res.json(sale);
};