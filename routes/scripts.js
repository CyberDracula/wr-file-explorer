var express = require('express');
var router = express.Router();

router.get('/bootstrap.min.js', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/bootstrap/dist/js/bootstrap.min.js');
});

router.get('/bootstrap.min.js.map', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/bootstrap/dist/js/bootstrap.min.js.map');
});


router.get('/jquery.min.js', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/jquery/dist/jquery.min.js');
});


module.exports = router;
