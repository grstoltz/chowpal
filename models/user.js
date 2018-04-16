module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  User.associate = (models) => {
    User.belongsToMany(models.Food, {
<<<<<<< HEAD
      through: models.User_Food,
=======
      through: 'user_food',
>>>>>>> cedd314753cc9a55c621c0b65faaa207ce1fdb1b
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  };
  return User;
};

