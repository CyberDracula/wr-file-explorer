var express = require('express');
var router = express.Router();


router.get('/bootstrap.min.css', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/bootstrap/dist/css/bootstrap.min.css');
});

router.get('/bootstrap.min.css.map', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/bootstrap/dist/css/bootstrap.min.css.map');
});

router.get('/font-awesome.min.css', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/font-awesome/css/font-awesome.min.css');
});

router.get('/font-awesome.min.css.map', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/font-awesome/css/font-awesome.min.css.map');
});

module.exports = router;