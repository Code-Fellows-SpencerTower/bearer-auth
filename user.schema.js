'use strict';

const UserSchema = (sequelize, DataTypes) => {
  let model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  model.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password);
  });

  model.authenticateBasic = async function(username, password) {
    this.findOne({where: });
  };

}