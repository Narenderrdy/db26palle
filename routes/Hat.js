var express = require('express');
const Hat_controlers = require('../controllers/Hat');
var router = express.Router();
// redirect to login. 
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

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
/* GET create update page */
router.get('/update', secured, Hat_controlers.Hat_update_Page);
/* GET create costume page */
router.get('/delete', Hat_controlers.Hat_delete_Page);

module.exports = router;