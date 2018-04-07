const router = require("express").Router();
const foodRoutes = require("./food");
const itemRoutes = require("./item");
const userRoutes = require("./user");
const awsRoutes = require("./aws")

router.use("/food", foodRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes);
router.use("/aws", awsRoutes)

///New text
module.exports = router;
