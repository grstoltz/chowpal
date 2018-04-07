module.exports = function(sequelize, DataTypes) {
  var User_Foods = sequelize.define("User_Foods", {
    id:  {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: [1]
      }
    },
    food_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: [1]
      }
    },
  }, {
      timestamps: false
  });

  return User_Foods;
};