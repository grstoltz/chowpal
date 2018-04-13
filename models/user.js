module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id:  {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
      }
    },
    user_name: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1]
      }
    },
  }, {
      timestamps: false
  });
  
  // User.associate = function(models) {
  //   // Associating User with Pins
  //   // When an User is deleted, also delete any associated Boards
  //   User.hasMany(models.Food, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};
