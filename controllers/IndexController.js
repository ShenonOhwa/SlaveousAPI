var modelIndex = require('../models/MIndex');

exports.bonjour = (request, response/*, next*/) => {
	response.json(
		{
			message: modelIndex.hello(),
			methode: request.method
		}
	);
}