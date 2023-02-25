const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./routes/books.router');
const PORT = process.env.PORT || 5006;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/books', books);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});