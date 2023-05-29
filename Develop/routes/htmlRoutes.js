const express = require('express');
const path = require('path');
const router = express.Router();

// Serves the index.html page, yum! //
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serves the notes.html page, just like mom used to make. //
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
