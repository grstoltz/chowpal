module.exports = function (sequelize, DataTypes) {
  const User_Food = sequelize.define('User_Food', {
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
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
    },
  }, {
    timestamps: false,
  });

  return User_Food;
};
