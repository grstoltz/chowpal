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
}, {
    timestamps: false
});
  Item.associate = (models) => {
  Item.belongsTo(models.User, {
    foreignKey: "uploadedBy"
  })
}
  return Item;
};