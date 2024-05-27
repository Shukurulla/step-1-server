const { Router } = require("express");
const cors = require("cors");
const Acceptance = require("../models/acceptance");
const router = Router();

router.post("/post-acceptance", cors(), async (req, res) => {
  const acceptance = await Acceptance.create(req.body);
  if (!acceptance) {
    req.status(501).json({ status: "Failure", mag: "Error" });
  } else {
    req
      .status(200)
      .json({ data: acceptance, status: "Success", msg: "Successful" });
  }
});

module.exports = router;
