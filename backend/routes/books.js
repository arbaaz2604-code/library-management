const express = require('express');
const router = express.Router();
const { books, borrowed } = require('../data/library');

// Get all books in library
router.get('/', (req, res) => {
  res.json(books);
});

// Get borrowed books
router.get('/borrowed', (req, res) => {
  res.json(borrowed);
});

// Borrow a book
router.post('/borrow', (req, res) => {
  const { id } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  // Check if already borrowed
  if (borrowed.find(b => b.id === id)) {
    return res.status(400).json({ error: "Already borrowed this book" });
  }
  if (borrowed.length >= 2) {
    return res.status(400).json({ error: "Borrowing limit reached" });
  }

  // Borrow logic
  book.count -= 1;
  borrowed.push({ id: book.id, title: book.title, count: 1 });
  if (book.count === 0) {
    const idx = books.findIndex(b => b.id === id);
    books.splice(idx, 1);
  }
  res.json({ success: true });
});

// Return a book
router.post('/return', (req, res) => {
  const { id } = req.body;
  const idx = borrowed.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: "Book not borrowed" });

  // Return logic
  const [returnedBook] = borrowed.splice(idx, 1);
  const libBook = books.find(b => b.id === id);
  if (libBook) {
    libBook.count += 1;
  } else {
    books.push({ id: returnedBook.id, title: returnedBook.title, count: 1 });
  }
  res.json({ success: true });
});

module.exports = router;