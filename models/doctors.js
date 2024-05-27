const mongoose = require("mongoose");

const DoctorModel = mongoose.model("Doctor", {
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

module.exports = DoctorModel;
