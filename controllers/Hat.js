var Hat = require('../models/Hat');

// List of all Hat
exports.Hat_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Hat list');
};

// for a specific Hat. 
exports.Hat_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Hat detail: ' + req.params.id);
};

// Handle Hat create on POST. 
exports.Hat_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Hat create POST');
};

// Handle Hat delete form on DELETE. 
exports.Hat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Hat delete DELETE ' + req.params.id);
};

// Handle Hat update form on PUT. 
exports.Hat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Hat update PUT' + req.params.id);
};