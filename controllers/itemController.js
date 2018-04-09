var models = require("../models");
const request = require("request")
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
    console.log(req.body)
    db.Items.findOrCreate({where: {
        product_name: req.body.product_name
            }, 
        defaults: {
            product_name: req.body.product_name,
            store: req.body.store,
            UPC: null,
            product_id: req.body.product_id,
            //user_id: req.body.userid
            }
        }).then(
            (result) => {
              const [instance, wasCreated] = result;
              (wasCreated ? 
                res.send("Item Created") : res.send("Item already in database")
                )
            }
          );
};

// Display item delete form on DELETE.
exports.deleteOne = function(req, res) {
    res.send('NOT IMPLEMENTED: item delete on DELETE' + req.params.id);
};

// Handle item update on Update.
exports.findOneAndUpdate = function(req, res) {
    //res.send('NOT IMPLEMENTED: item update' + req.params.id);
    db.Items.update({
        UPC: req.body.UPC
    },{
        where: {id: req.body.id}
    }).then(
        result => console.log(result)
    )

};
