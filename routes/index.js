var express = require('express');
var router = express.Router();
const fs = require("fs");

const searchController = require('../controllers/search.controllers');
const pdfController = require('../controllers/pdf.controllers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parts Catalog' });
});


router.get('/search/:type', searchController.find);

router.get('/pdf', pdfController.pdf);
router.get('/generatejpg',pdfController.pdf2jpg);

module.exports = router;
