const models = require('../models-mysql');
const equipmentTypeController = require(__dirname +'/equipmentTypeController');

module.exports = {
	async create(req, res) {
		const equipment = req.body;
		const equipmentType = equipment.equipmentType;
		const resultFindEquipmentType = await equipmentTypeController.findBySlug(equipmentType.slug);
		var newEquipmentType = {};
		if (resultFindEquipmentType != "") {
			newEquipmentType = resultFindEquipmentType[0];
		} else {
			newEquipmentType = await equipmentTypeController.create(equipmentType);
		}
		
		equipment.equipmentTypeId = newEquipmentType.id;
		console.log("equipmentController :"+JSON.stringify(equipment));
		await models.Equipment.create(equipment)
		.then((newEquipment, errors) => {
			if(!errors){
				console.log('newEquipment: '+newEquipment);
				return res.json(newEquipment.id);
			} else {
				console.log(errors);
				return res.json(errors);
			}
		});
	}
}
