const express = require('express');
const multer = require('multer');
const axios = require('axios');
const Report = require('../models/Report');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('report'), async (req, res) => {
  try {
    const response = await axios.post(
      'https://medical-ml-onrender-com.onrender.com',
      {
        path: req.file.path,
      }
    );

    const report = await Report.create({
      fileUrl: req.file.path,
      extractedText: response.data.text,
      summary: response.data.summary,
      abnormalities: response.data.abnormalities,
    });

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Analysis failed' });
  }
});

module.exports = router;