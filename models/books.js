const db = require('../config/db');

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const Book = {};

// Create/Add Book
Book.create = (title, description, coverImage) => {
  let post = {
    title: title,
    description: description,
    coverImage: coverImage
  };

  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO books SET ?', post, (error, results, fields) => {
        if (error) {
          reject(error);
        }
        resolve();
        // resolve(results);
      })
    })
};


// Get All Books 
Book.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM books', (error, results, fields) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  })
};


// Get Book By ID
Book.get = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM books WHERE id = ?', id, 
    (error, results, fields) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  })
};


// Update a Book
Book.update = (id, title, description, coverImage) => {

  return new Promise((resolve, reject) => {
    let query = 'UPDATE books SET title = ?, description = ?, coverImage = ? WHERE id = ?';
    db.query(query, [title, description, coverImage, id], 
      (error, results, fields) => {
        if (error) {
          reject(error);
        }
        console.log(results);
        resolve(results);
      })
  })
  
};


// Delete a Book
Book.delete = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM books WHERE id = ?', id, 
    (error, results, fields) => {
      if (error) {
        reject(error);
      }
      console.log(results);
      resolve(results);
    })
  })
};


// Check if the id exists in the books table
// Book.checkID = (id) => {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT id FROM books WHERE id = ?', id, 
//     (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } 
//       resolve(results);
//     })
//   })
// };


module.exports = Book;