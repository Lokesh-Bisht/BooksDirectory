// REQUIRE MODEL
const Book = require('../models/books.js');

// Get all Books
function getAllBooks(req, res, next) {
  Book.getAll()
  .then(data => res.status(200).json({ sucess: true, books: data }))
  .catch(err => res.status(400).json({ err }));
}


// Get a book by id
function getBook(req, res, next) {
  let id = req.params.id;

  Book.get(id)
  .then(data => {
    if (data.length === 0) {
      res.status(404).json({success: false, msg: `Failed to find book for id: ${id}`});
    } else {
      res.status(200).json({ success: true, book: data });
    }
  })
  .catch(err => res.status(400).json({ err }));
}


// Add a book
function addBook(req, res, next) {
  const { title, description, coverImage } = req.body;

  // If title, summary or coverImage is null
  if (!title || !description || !coverImage) {
    return res.status(400).json({success: false, msg: 
      'Incomplete info. Failed to add this book.'});
  }

  Book.create(title, description, coverImage)
  .then(() => res.status(200).json({ success: true, msg: 'Book added' }))
  .catch(err => res.status(400).json({ err }));
    
}


// Update a book
function updateBook(req, res, next) {
  const { title, description, coverImage } = req.body;
  let id = req.params.id;

  // If title, summary or coverImage is null
  if (!title || !description || !coverImage) {
    return res.status(400).json({success: false, msg: 
      'Update failed. Incomplete info.'});
  }
  

  Book.update(id, title, description, coverImage)
  .then((data) => {
    if (data.changedRows === 0) {
      res.status(404).json({success: false, msg: `Failed to find book for id: ${id}`});
    } else {
      res.status(200).json({ success: true, msg: 'Book updated' });
    }
  })
  .catch(err => res.status(400).json({ err }));
}


// Delete a book
function deleteBook(req, res, next) {
  let id = req.params.id;

  Book.delete(id)
  .then((data) => {
    if (data.affectedRows === 0) {
      res.status(404).json({success: false, msg: `Failed to find book for id: ${id}`});
    } else {
      res.status(200).json({ success: true, msg: 'Book deleted' });
    }
  })
  .catch(err => res.status(400).json({ err }));
}

module.exports = {getAllBooks, getBook, addBook, updateBook, deleteBook};