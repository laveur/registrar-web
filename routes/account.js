var express = require('express');
var router = express.Router();

router.get('/details', function(req, res, next) {
    res.render('account_details', {title: 'Account Details'})
});

router.get('/edit', function(req, res, next) {
    res.render('account_edit', {title: 'Edit Account'})
});

module.exports = router;
