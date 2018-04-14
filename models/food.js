module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
    },
    UPC: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
    },
    category: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  Food.associate = (models) => {
    Food.belongsToMany(models.User, {
      through: 'user-food',
      foreignKey: 'food_id',
      onDelete: 'cascade',
    });
  };
  return Food;
};
