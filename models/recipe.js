module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define( "Recipes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    directions: DataTypes.STRING
}, {
    timestamps: false
});
  return Recipes;
};