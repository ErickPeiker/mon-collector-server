const models = require('../models-mysql');

module.exports = {
		
	async create(req, res) {
		const incident = req.body;
		const returnInsert = await models.Incident.create(incident);
		return res.json(returnInsert._id);
	},
	
	async remove(req, res) {
		const dateNow = new Date();
		const whereIncident = {
			'_id': req.query.id
		}
		const incident = {'deletedAt':dateNow};
		const returnInsert = await models.Incident.updateOne(whereIncident, incident);
		return res.json(returnInsert.nModified);
	}
		
}