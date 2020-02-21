var express = require('express');
var router = express.Router();

router.get('/fontawesome-webfont.woff', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/font-awesome/fonts/fontawesome-webfont.woff');
});

router.get('/fontawesome-webfont.woff2', function(req, res) {
    res.sendFile(process.cwd() + '/node_modules/font-awesome/fonts/fontawesome-webfont.woff2');
});

module.exports = router;