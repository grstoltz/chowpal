// var models = require("../models");
// var db = models.db
// var Op = models.Op

// Display list of all foods.
exports.food_list = function(req, res) {
    res.send('NOT IMPLEMENTED: food list');
};

// Display detail page for a specific food.
exports.food_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};

// Handle food create on POST.
exports.food_create = function(req, res) {
    res.send('NOT IMPLEMENTED: food create POST');
};

// Display food delete form on DELETE.
exports.food_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: food delete on DELETE' + req.params.id);
};

// Handle food update on Update.
exports.food_update = function(req, res) {
    res.send('NOT IMPLEMENTED: food update' + + req.params.id);
};
