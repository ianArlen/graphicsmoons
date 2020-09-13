const router = require("express").Router();
const { catchErrors } = require("../handlers/errorhandlers");
const saleController = require("../controllers/saleController");

router.post("/register", catchErrors(saleController.register));
router.get("/donut", catchErrors(saleController.getAllVentas));

module.exports = router;
