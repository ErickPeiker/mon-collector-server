const models  = require('../models-mysql');
module.exports = {
		
	async find(req, res) {
		const equipmentTypes = await models.EquipmentType.findAll({raw: true});
		return res.json(equipmentTypes);
	}, 
	
	async findBySlug(slug) {
		return await models.EquipmentType.findAll({
			where:{"slug": slug},
			raw: true
		});
	}, 
	
	async create(equipmentType) {
		return await models.EquipmentType.create(equipmentType);
	}
	
};