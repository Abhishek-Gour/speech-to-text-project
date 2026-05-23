const Transcript = require("../models/Transcript");

exports.saveTranscript = async (req, res) => {
  try {
    const transcript = new Transcript({ text: req.body.text });
    await transcript.save();
    res.json(transcript);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTranscripts = async (req, res) => {
  try {
    const transcripts = await Transcript.find();
    res.json(transcripts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};