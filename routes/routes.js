const food_controller = require('../controllers/Food_controller');
const item_controller = require('../controllers/Item_controller');
const user_controller = require('../controllers/User_controller');

module.exports = function(app){

///Item Routes////

//Returns all items
app.get("/api/items", item_controller.item_list)

//Gets one itemm
app.get("/api/items/:id", item_controller.item_detail)

//Creates one item
app.post("/api/items", item_controller.item_create)

//Deletes one item
app.delete("/api/items/:id", item_controller.item_delete)

//Updates one item
app.put("/api/items/:id", item_controller.item_update)


////Food Routes////

//Returns all food
app.get("/api/foods", food_controller.food_list)

//Gets one food
app.get("/api/foods/:id", food_controller.food_detail)

//Creates one food
app.post("/api/foods", food_controller.food_create)

//Deletes one food
app.delete("/api/foods/:id", food_controller.food_delete)

//Updates one food
app.put("/api/foods/:id", food_controller.food_update)


////User Routes////

//Gets all user
app.get("/api/users", user_controller.user_list)

//Gets one user
app.get("/api/users/:id", user_controller.user_detail)

//Creates one user
app.post("/api/users", user_controller.user_create)

//Deletes one user
app.delete("/api/users/:id", user_controller.user_delete)

//Updates one user
app.put("/api/users/:id", user_controller.user_update)

}