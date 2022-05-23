const router = require("express").Router();

router.use("/users", require("./routes/user.route"));
router.use("/products", require("./routes/products.route"));
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
