module.exports = {
  up: async (queryInterface) => {
    const productsList = [];
    productsList.push({
      name: 'DMSO',
      description: 'Dimethyl Sulfoxide, sterile',
      price: 152,
      amount: 10,
      min: 2,
      created_at: new Date(),
      updated_at: new Date(),
    });

    productsList.push({
      name: 'FBS',
      description: 'Fetal Bovine Serum, USA origin, sterile, suitable for cell culture and hybridoma.',
      price: 288,
      amount: 10,
      min: 2,
      created_at: new Date(),
      updated_at: new Date(),
    });

    queryInterface.bulkInsert('products', productsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
