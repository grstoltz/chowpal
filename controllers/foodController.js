var models = require("../models");
var db = models.db
var Op = models.Op

// Display list of all foods.
exports.findAll = function(req, res) {
    res.send('NOT IMPLEMENTED: food list');
};

// Display detail page for a specific food.
exports.findOne = function(req, res) {
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};

// Handle food create on POST.
exports.createOne = function(req, res) {
    db.Foods.findOrCreate({where: {
        UPC: req.body.UPC
            }, 
        defaults: {
            name: req.body.product_name,
            UPC: req.body.UPC,
            product_id: req.body.product_id
            }
        }).spread((item, created) => {
            (created ? 
                res.send({created: created}) : 
                res.send(item.get({plain: false}))
            )
      })
};

// Display food delete form on DELETE.
exports.deleteOne = function(req, res) {
    res.send('NOT IMPLEMENTED: food delete on DELETE' + req.params.id);
};

// Handle food update on Update.
exports.findOneAndUpdate = function(req, res) {
    res.send('NOT IMPLEMENTED: food update' + req.params.id);
};
