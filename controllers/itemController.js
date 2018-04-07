var models = require("../models");
var db = models.db
var Op = models.Op

// Display list of all items.
exports.findAll = function(req, res) {
    res.send('NOT IMPLEMENTED: item list');
};

// Display detail page for a specific item.
exports.findOne = function(req, res) {
    res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
    
};

// Handle item create on POST.
exports.createOne = function(req, res) {
    res.send('NOT IMPLEMENTED: item create POST');
};

exports.findOrCreate = function(req, res) {
    console.log(req.body.product_name)
    // db.Items.findOrCreate({where: {
    //     product_name: req.body.product_name
    //         }, 
    //     defaults: {
    //         product_name: req.body.product_name,
    //         store: req.body.store,
    //         UPC: req.body.UPC,
    //         product_id: req.body.product_id
    //         }
    //     }).spread((item, created) => {
    //         console.log(item.get({
    //             plain: true
    //         }))
    //         console.log(created)
    //   });
    res.send(req.body.product_name)
};

// Display item delete form on DELETE.
exports.deleteOne = function(req, res) {
    res.send('NOT IMPLEMENTED: item delete on DELETE' + req.params.id);
};

// Handle item update on Update.
exports.findOneAndUpdate = function(req, res) {
    res.send('NOT IMPLEMENTED: item update' + req.params.id);
};
