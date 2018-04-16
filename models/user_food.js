module.exports = (sequelize, DataTypes) => {
  const User_Food = sequelize.define('User_Food', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return User_Food;
};
