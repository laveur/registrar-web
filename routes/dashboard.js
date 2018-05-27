var express = require('express');
var router = express.Router();

router.get('/main', function(req, res, next) {
    res.render('dashboard_main', {title: 'Dashboard - Home'});
});

router.get('/organization', function(req, res, next) {
    res.render('dashboard_org', {title: 'Dashboard - Organization'})
});

router.get('/organization/edit', function(req, res, next) {
    res.render('dashboard_org_edit', {title: 'Dashboard - Modify Organization'});
});

router.get('/events', function(req, res, next) {
    res.render('dashboard_events_list', {title: 'Dashboard - Events'});
});

router.get('/events/modify', function(req, res, next) {
    res.render('dashboard_event_modify', {title: 'Dashboard - Event Modify'})
});

router.get('/membership/modify', function(req, res, next) {
    res.render('dashboard_membership_modify', {title: 'Dashboard - Membership Edit'});
});

router.get('/products', function(req, res, next) {
    res.render('dashboard_products_list', {title: 'Dashboard - Products'});
});

router.get('/products/modify', function(req, res, next) {
    res.render('dashboard_products_modify', {title: 'Dashboard - Modify Product'});
});

module.exports = router;
