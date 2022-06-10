'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('pacientes', [{
                name: 'John Doe',
                email: 'jhon@teste.com',
                idade: '2022/01/01',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mary Doe',
                email: 'mary@teste.com',
                idade: '2018/01/01',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: ' Maria Silva',
                email: 'ms@teste.com',
                idade: '2000/01/01',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'José Santoas',
                email: 'jose@teste.com',
                idade: '2003/08/01',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: ' Catarina Santos',
                email: 'cs@teste.com',
                idade: '2011/07/01',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Luiz Serra',
                email: 'ls@teste.com',
                idade: '2022/05/05',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cintia Paola',
                email: 'cp@teste.com',
                idade: '2022/01/01',
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