'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'role', {
      type: Sequelize.STRING,
      defaultValue: 'client'
    });
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'role');
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    });
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
