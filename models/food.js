module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
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
    brand: DataTypes.STRING,
    purchase_date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return Food;
};
