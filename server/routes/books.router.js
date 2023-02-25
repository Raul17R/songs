const express = require('express');
const router = express.Router();
const books = require('../modules/books.data');

router.get('/', (req, res)=>{
    res.send(books);
})

module.exports = router;