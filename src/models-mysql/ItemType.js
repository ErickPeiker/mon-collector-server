let uuid = require('uuid');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItemType', {
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
    valueType: {
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
    equipmentTypeId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'EquipmentType',
        key: 'id'
      }
    }
  }, {
    tableName: 'ItemType'
  });
};
