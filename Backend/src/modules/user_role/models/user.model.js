module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  nombre: {
      type: Sequelize.STRING,
      allowNull: false
  },
  apellidop: {
      type: Sequelize.STRING,
      allowNull: false
  },
  apellidom: {
      type: Sequelize.STRING,
      allowNull: false
  },
  username: {
      type: Sequelize.STRING,
      allowNull: false
  },
  permisos: {
      type: Sequelize.STRING,
      allowNull: false
  },
  password: {
      type: Sequelize.STRING,
      allowNull: false
  },
  imagen: {
      type: Sequelize.STRING,
      allowNull: true
  }
  });

  return User;
}