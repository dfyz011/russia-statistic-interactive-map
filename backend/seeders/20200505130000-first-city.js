module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [{
      city_id: 1,
      reg_id: 72,
      city_name: 'Тюмень',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
