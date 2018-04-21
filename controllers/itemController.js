const models = require('../models');
const request = require('request');

const db = models.db;
const Op = models.Op;

// Display list of all items.
exports.findAll = function (req, res) {
  db.Item.findAll({
    where: {
      user_id: req.query.id,
      // UPC: '',
    },
  }).then(results => res.send(results));
};

// Display detail page for a specific item.
exports.findOne = function (req, res) {
  db.Item.findAll({
    where: {
      id: req.params.id,
    },
  }).then(results => res.send(results));
};


// Handle item create on POST.
exports.createOne = function (req, res) {
  console.log(req.body);
  db.Item.findOne({
    where: {
      product_name: req.body.product_name,
    },
  }).then((result) => {
    console.log(result);
    (result !== null && result.UPC ?
      getUPCData({ UPC: result.UPC })
        .then(data => createFood(req.body.user_id, data.results[0]))
        .then(result => console.log(result)) :
      createItem(req.body).then(result => res.json(result))
    );
  });
};

// Takes in a parsed product name and creates it if it isn't in the database -
// currently will only return if an item has been created or not
exports.findOrCreate = function (req, res) {
  console.log(req.body);
  db.Item.findOrCreate({
    where: {
      product_name: req.body.product_name,
    },
    defaults: {
      product_name: req.body.product_name,
      user_id: req.body.user_id,
      store: req.body.store,
      UPC: '',
    },
  }).then((result) => {
    const [ instance, wasCreated ] = result;
    const UPCData = {
      UPC: instance.UPC,
    };
    console.log(UPCData);
    (instance.UPC !== '' ?
      getUPCData(UPCData)
        .then(data => createFood(req.body.user_id, data.results[0]))
        .then(result => res.send(result)) : res.send('No associated food'));
  });
};

// Display item delete form on DELETE.
exports.deleteOne = function (req, res) {
  db.Item.destroy({
    where: {
      id: req.query.id,
    },
  }).then((result) => {
    res.json(result);
  }).catch(err => console.log(err));
};

// Handle item update on Update.
exports.findOneAndUpdate = function (req, res) {
  // res.send('NOT IMPLEMENTED: item update' + req.params.id);
  db.Item.update({
    UPC: req.body.UPC,
  }, {
    where: { id: req.body.id },
  }).then((result) => {
    getUPCData(req.body)
      .then(data => createFood(req.body.user_id, data.results[0]))
      .then(result => res.send(result));
  });
};

const getUPCData = function (requestBody) {
  const params = {
    UPC: requestBody.UPC,
  };

  const options = {
    method: 'post',
    body: params,
    json: true,
    url: '/api/upc/data',
  };

  // Sends a quests to update the item with the UPC that was parsed
  return new Promise((resolve) => {
    request(options, (err, httpResponse, body) => {
      if (err) {
        console.log(err);
      }
      resolve(body);
    });
  });
};

const createFood = function (user_id, data) {
  const params = {
    UPC: data.upc,
    user_id,
    name: data.name,
    brand: data.brand,
  };

  const options = {
    method: 'post',
    body: params,
    json: true,
    url: 'http://localhost:3000/api/food/',
  };

  // Sends a quests to update the item with the UPC that was parsed
  return new Promise((resolve) => {
    request(options, (err, httpResponse, body) => {
      if (err) {
        console.log(err);
      }
      console.log(body);
      resolve(body);
    });
  });
};

const createItem = function (body) {
  return db.Item.create({
    product_name: body.product_name,
    user_id: body.user_id,
    store: body.store,
    UPC: '',
  }).then(result => result);
};
