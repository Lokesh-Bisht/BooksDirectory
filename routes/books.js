const express = require('express')
const router = express.Router()
const bookController = require('../controllers/books')


router.get('/all', (req, res, next) => bookController.getAllBooks(req, res, next));

router.get('/:id', (req, res, next) => bookController.getBook(req, res, next));

router.post('/new', (req, res, next) => bookController.addBook(req, res, next));

router.put('/:id', (req, res, next) => bookController.updateBook(req, res, next));

router.delete('/:id', (req, res, next) => bookController.deleteBook(req, res, next));

module.exports = router;