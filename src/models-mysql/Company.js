let uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Company', {
    id: {
    	type: DataTypes.UUID,
        defaultValue: uuid(),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    companyId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    legalPersonId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'LegalPerson',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'Company'
  });
};
