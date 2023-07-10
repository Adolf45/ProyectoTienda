'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

return queryInterface.bulkInsert('Categories', [
{ name: "Golosinas", src: "categorias/Golosina.jpg", createdAt:new Date(),updatedAt:new Date()},
{ name: "Limpieza", src: "categorias/TOC-limpieza.jpg",createdAt:new Date(),updatedAt:new Date() },
{ name: "Higiene personal", src: "categorias/hingiene.jpeg",createdAt:new Date(),updatedAt:new Date()  },
{ name: "Botanas", src: "categorias/botanas.jpg",createdAt:new Date(), updatedAt:new Date()},
{ name: "Abarrotes", src: "categorias/aba.jpg",createdAt:new Date(),updatedAt:new Date()  },
{ name: "Bebidas", src: "categorias/bebi.jpeg",createdAt:new Date(),updatedAt:new Date() }
  

]);


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await  queryInterface.bulkDelete('Categories', null, {});
  }
};
