module.exports = (sequelize, DataTypes) => {
  const Food_LookUp = sequelize.define('Food_LookUp', {
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
    brand: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return Food_LookUp;
};
