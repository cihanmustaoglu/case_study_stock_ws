module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    name: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
  });

  return Tutorial;
};
