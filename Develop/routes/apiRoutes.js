const express = require('express');
const router = express.Router();
const store = require('../db/store');

// GET route //
router.get('/notes', (req, res) => {
  const notes = store.readData();
  res.json(notes);
});

// POST route //
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { id: Date.now(), title, text };
  const notes = store.readData();
  notes.push(newNote);
  store.writeData(notes);
  res.json(newNote);
});

// PUT route //
// router.put('/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const { title, text } = req.body;
//   const notes = store.readData();
//   const note = notes.find((note) => note.id === parseInt(id));
//   if (!note) {
//     res.status(404).json({ message: 'Note not found' });
//   } else {
//     note.title = title;
//     note.text = text;
//     store.writeData(notes);
//     res.json(note);
//   }
// });

// DELETE route //
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const notes = store.readData();
  const noteIndex = notes.findIndex((note) => note.id === parseInt(id));
  if (noteIndex === -1) {
    res.status(404).json({ message: 'Note not found' });
  } else {
    const deletedNote = notes.splice(noteIndex, 1);
    store.writeData(notes);
    res.json({ message: 'Note deleted', note: deletedNote });
  }
});

module.exports = router;
