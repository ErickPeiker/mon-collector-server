let uuid = require('uuid/v4');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Equipment', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    observation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parameters: {
      type: DataTypes.JSON,
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
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
    equipmentTypeId: {
    	type: DataTypes.UUID,
        allowNull: false,
        references: {
        	model: 'EquipmentType',
        	key: 'id'
        }
    }
  }, {
    tableName: 'Equipment'
  });
};
