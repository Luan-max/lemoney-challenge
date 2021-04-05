"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Offers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      advertiser_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Advertisers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      advertiser_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startAt: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      endsAt: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      state: {
        type: Sequelize.BOOLEAN,
        allowNull: null,
        defaultValue: false,
      },
      premium: {
        type: Sequelize.BOOLEAN,
        allowNull: null,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Offers");
  },
};
