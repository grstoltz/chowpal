const router = require("express").Router();
const foodRoutes = require("./food");
const itemRoutes = require("./item");
const userRoutes = require("./user");
const awsRoutes = require("./aws");
const upcRoutes = require("./upc");

router.use("/food", foodRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes);
router.use("/aws", awsRoutes);
router.use("/upc", upcRoutes);

///New text
module.exports = router;
