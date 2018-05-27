var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('registration_select_membership', {title: 'Registration - Select Membership'});
});

router.get('/products', function(req, res, next) {
    res.render('registration_products', {title: 'Registration - Products'});
});

router.get('/checkout', function(req, res, next) {
    res.render('registration_checkout', {title: 'Registration - Checkout'});
});

router.get('/dealer', function(req, res, next) {
    res.render('registration_dealer', {title: 'Dealer Registration'});
});

router.get('/panel', function(req, res, next) {
    res.render('registration_panel', {title: 'Panel Registration'});
});

module.exports =  router;
