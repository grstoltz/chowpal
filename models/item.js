module.exports = function (sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
    },
    UPC: DataTypes.STRING,
    store: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
}, {
    timestamps: false,
    freezeTableName: true,
});
  Item.associate = (models) => {
  Item.belongsTo(models.User, {
    foreignKey: "uploadedBy"
  })
}
  return Item;
};
