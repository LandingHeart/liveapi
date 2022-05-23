const router = require("express").Router();
const { User } = require("../models/users.model");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await User.findByPk(id);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.query;
  try {
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
