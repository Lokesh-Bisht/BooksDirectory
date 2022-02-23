require('dotenv').config()
const express = require('express')
const app = express()
const booksRouter = require('./routes/books');

const port = process.env.PORT || '3000'; // INITIALIZE DEFAULT PORT OR PORT FROM ENVIRONMENT VARIABLE


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/books', booksRouter)


app.get('*', function(req, res){
  res.send('Page Not Found', 404);
});

app.listen(port)