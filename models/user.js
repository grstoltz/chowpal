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

  User.associate = (models) => {
    User.hasMany(models.Food, {
      through: "user-food",
      foreignKey: "user_id",
      onDelete: "cascade",
    })
  }
  return User;
};
