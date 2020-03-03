let uuid = require('uuid');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Incident', {
    id: {
		type: DataTypes.UUID,
	    defaultValue: uuid(),
        allowNull: false,
        primaryKey: true
    },
    companyId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    incidentType: {
      type: DataTypes.JSON,
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
    }
  }, {
    tableName: 'Incident'
  });
};
