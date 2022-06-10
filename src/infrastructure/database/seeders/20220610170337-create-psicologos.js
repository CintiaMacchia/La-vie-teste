'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('psicologo', [{
                nome: 'John Doe',
                email: 'John@gmail.com',
                senha: '12345',
                apresentacao: 'John Doe',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Tomas Benso',
                email: 'Tomas@gmail.com',
                senha: '123456',
                apresentacao: 'Tomas Benso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Nina Nunes',
                email: 'NunesNina@gmail.com',
                senha: '54612',
                apresentacao: 'Nina Nunes',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Carlos Fisher',
                email: 'Carlos@gmail.com',
                senha: '54ds58ad4a',
                apresentacao: 'Carlos Fisher',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});

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