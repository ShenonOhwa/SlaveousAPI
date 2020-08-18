var modelIndex = require('../models/MIndex');

exports.bonjour = (request, response/*, next*/) => {
	response.json(
		{
			message: modelIndex.hello(),
			methode: request.method
		}
	);
}

exports.infosCompte = (request, response) => {
	if(request.query.identifiant === undefined)
	{
		response.json(
			{
				message: "Veuillez saisir un identifiant pour obtenir les informations du compte associé.",
				methode: request.method
			}
		);
		
		return;
	}
	
	modelIndex.getCompte(
		request.query.identifiant,
		(err, resGC) => {
			if(err)
				throw err;
			
			response.json(
				{
					message: "Voici les informations du compte demandé.",
					identifiantCompte: request.query.identifiant,
					informations: resGC,
					methode: request.method
				}
			);
		}
	);
}

exports.listeComptes = (request, response) => {
	modelIndex.getTotaliteCompte(
		(err, resGTC) => {
			if(err)
				throw err;
			
			response.json(
				{
					message: "Voici les informations de la totalité des comptes.",
					informations: resGTC,
					methode: request.method
				}
			);
		}
	);
}