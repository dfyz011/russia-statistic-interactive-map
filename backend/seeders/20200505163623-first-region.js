
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [{
      reg_id: '72',
      reg_alias_the_constitutional_name: 'Тюменская область',
      reg_alias_human_name: 'Тюменская область',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};
