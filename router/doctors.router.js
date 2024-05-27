const { Router } = require("express");
const cors = require("cors");

const DoctorModel = require("../models/doctors.js");
const router = Router();

router.get("/doctors", cors(), async (req, res) => {
  const doctors = await DoctorModel.find();
  res.json(doctors);
});

router.post("/add-doctor", cors(), async (req, res) => {
  await DoctorModel.create(req.body);
  const doctors = await DoctorModel.find();
  res.json(doctors);
});
router.post("/edit-doctor/:id", cors(), async (req, res) => {
  await DoctorModel.findByIdAndUpdate(req.params.id, req.body);
  const doctors = await DoctorModel.find();
  res.json(doctors);
});
router.post("/delete-doctor/:id", cors(), async (req, res) => {
  await DoctorModel.findByIdAndDelete(req.params.id);
  const doctors = await DoctorModel.find();
  res.json(doctors);
});

module.exports = router;
