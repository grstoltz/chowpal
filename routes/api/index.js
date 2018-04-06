const router = require("express").Router();
const foodRoutes = require("./food");
const itemRoutes = require("./item");
const userRoutes = require("./user");

router.use("/food", articleRoutes);
router.use("/item", itemRoutes);
router.user("/user". userRoutes);

module.exports = router;
