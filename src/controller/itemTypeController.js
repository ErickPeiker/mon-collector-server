const models  = require('../models-mysql');
module.exports = {
	async find(req, res) {
		const itemTypes = await models.ItemType.findAll({raw: true});
		return res.json(itemTypes);
	}  
}