module.exports = (sequelize, DataTypes) => {
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
    UPC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    store: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  Item.associate = (models) => {
    Item.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };
  return Item;
};
