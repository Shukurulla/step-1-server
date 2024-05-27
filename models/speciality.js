const mongoose = require("mongoose");

const SpecialityModel = mongoose.model("speciality", {
  title: {
    type: String,
    required: true,
  },
});

module.exports = SpecialityModel;
