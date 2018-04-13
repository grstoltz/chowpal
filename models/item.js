module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define( "Item", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UPC: DataTypes.STRING,
    store: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
    uploaded_by: DataTypes.STRING
}, {
    timestamps: false
});
  return Item;
};