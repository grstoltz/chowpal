module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    directions: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return Recipe;
};
