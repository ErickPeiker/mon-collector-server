const models  = require('../models-mysql');
module.exports = {
	async find(req, res) {
		const idCompany = req.params.idcompany;
		const companies = await models.Company.findAll({
			where : {
				id: idCompany
			},
			raw: true
		});
		return res.json(companies);
	}  
}