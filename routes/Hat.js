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

module.exports = router;