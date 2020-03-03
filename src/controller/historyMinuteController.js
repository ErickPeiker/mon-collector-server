const mongoose = require('mongoose');
const HistoryMinuteValue = mongoose.model('HistoryMinute');

module.exports = {
	async create(req, res) {
		try {
			const bulkOps = req.body;
			console.log('Início '+new Date());
			let bulkExec = await HistoryMinuteValue.collection.insertMany(bulkOps, {ordered: false})
			console.log('Fim '+new Date());
			res.json(bulkExec);
		} catch (errors) {
			console.log("Erro de gravação do BULK: "+errors);
		}
	}	
}
