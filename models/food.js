module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define( "Food", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    UPC: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: DataTypes.STRING
}, {
    timestamps: false
});
  return Food;
};