'use strict';

const { faker } = require('@faker-js/faker');
// const fakeName = faker.name.findName();
// const fakerEmail = faker.internet.email()

let seed = [];
for (let i = 0; i < 10; i++) {
    seed.push({

        name: faker.name.findName(),
        email: faker.internet.email(),
        senha: '12345',
        apresentacao: 'blá blá blá',
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('psicologos', seed)
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};