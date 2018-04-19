module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [ 1 ],
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [ 1 ],
      },
    },
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  // User.associate = function (models) {
  //   // Associating User with Food
  //   // When an User is deleted, also delete any associated Foods
  //   User.hasMany(models.Food, {
  //     onDelete: 'CASCADE',
  //   });
  // };
  return User;
};

