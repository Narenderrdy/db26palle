var express = require('express');
const Hat_controlers = require('../controllers/Hat');
var router = express.Router();

/* GET Hat */
router.get('/', Hat_controlers.Hat_view_all_Page);
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('Hat', { title: 'Search Results Hat' });
});
/* GET detail Hat page */
router.get('/detail', Hat_controlers.Hat_view_one_Page);
/* GET create Hat page */
router.get('/create', Hat_controlers.Hat_create_Page);

module.exports = router;