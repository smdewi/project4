module.exports = {
  up: async (queryInterface) => {
    const projectsList = [];
    projectsList.push({
      name: 'Project 1',
      description: 'Lab Maintenance and Operations',
      budget: 50000,
      created_at: new Date(),
      updated_at: new Date(),
    });

    projectsList.push({
      name: 'Project 2',
      description: 'Alzheimer Disease',
      budget: 100000,
      created_at: new Date(),
      updated_at: new Date(),
    });

    queryInterface.bulkInsert('projects', projectsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null, {});
  },
};
