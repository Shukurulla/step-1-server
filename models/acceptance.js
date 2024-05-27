const mongoose = require("mongoose");
const Acceptance = mongoose.model("Acceptance", {
  doctorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  typeOfPain: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  passportID: {
    type: String,
    required: true,
  },
});

module.exports = Acceptance;
