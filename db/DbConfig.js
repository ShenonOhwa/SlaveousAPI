var mysql = require("mysql");

var connexionBDD = mysql.createConnection(
	{
		host: "mysql-slaveous.alwaysdata.net",
		port: 3306,
		user: "slaveous",
		password: "shenon2ohwa",
		database: "slaveous_123"
	}
);

connexionBDD.connect(
	err => {
		if(err)
			throw err;

		console.log("Connexion à la BDD réussie !");
	}
);

module.exports = connexionBDD;