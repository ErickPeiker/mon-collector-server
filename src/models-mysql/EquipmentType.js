let uuid = require('uuid');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EquipmentType', {
	id: {
        type: DataTypes.UUID,
        defaultValue: uuid(),
        allowNull: false,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
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
    }
  }, {
    tableName: 'EquipmentType'
  });
};
