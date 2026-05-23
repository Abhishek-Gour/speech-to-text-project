const express = require("express");
const router = express.Router();
const { saveTranscript, getTranscripts } = require("../controllers/transcriptController");

router.post("/", saveTranscript);
router.get("/", getTranscripts);

module.exports = router;