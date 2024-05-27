const { Router } = require("express");
const cors = require("cors");
const SpecialityModel = require("../models/speciality");

const router = Router();

router.get("/specialities", cors(), async (req, res) => {
  const specialities = await SpecialityModel.find();
  res.json(specialities);
});
router.post("/specialities", cors(), async (req, res) => {
  await SpecialityModel.create(req.body);
  const specialities = await SpecialityModel.find();
  res.json(specialities);
});

module.exports = router;
