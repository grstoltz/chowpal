module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define( "Items", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UPC: DataTypes.STRING,
    store: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
}, {
    timestamps: false
});
  return Items;
};