var models = require("../models");
var db = models.db

// Display list of all foods.
exports.findAll = function(req, res) {
    db.Food.findAll().then(function(result){
        res.send(result);
        })
};

// Display detail page for a specific food.
exports.findOne = function(req, res) {
    db.Food.findOne({
        where: {
            id: req.params.id
        }
        }).then(function(result) {
        res.send(result);
    });
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
    db.Food.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(result) {
        res.send(result);
    });
};

// Handle food update on Update.
exports.findOneAndUpdate = function(req, res) {
    db.Food.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(results) {
            res.send(results);
        });
};
