const router = require("express").Router();
const foodRoutes = require("./food");
const itemRoutes = require("./item");
const userRoutes = require("./user");

router.use("/food", foodRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;
