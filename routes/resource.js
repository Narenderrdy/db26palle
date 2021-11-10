var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Hat_controller = require('../controllers/Hat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a Hat.
router.post('/Hat', Hat_controller.Hat_create_post);
// DELETE request to delete Hat.
router.delete('/Hat/:id', Hat_controller.Hat_delete);
// PUT request to update Hat.
router.put('/Hat/:id', Hat_controller.Hat_update_put);
// GET request for one Hat.
router.get('/Hat/:id', Hat_controller.Hat_detail);
// GET request for list of all Hat items.
router.get('/Hat', Hat_controller.Hat_list);
module.exports = router;