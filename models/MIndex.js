var connexionBDD = require('../db/DbConfig');

class MIndex
{
	static hello()
	{
		return "hello";
	}
	
	static getCompte(identifiant, callback)
	{
		connexionBDD.query(
			String((String("SELECT * FROM Compte WHERE identifiant = '") + String(identifiant) + String("';"))),
			(err, rows) => {
				callback(err, rows[0]);
			}
		);
	}
	
	static getTotaliteCompte(callback)
	{
		connexionBDD.query(
			String((String("SELECT * FROM Compte;"))),
			(err, rows) => {
				callback(err, rows);
			}
		);
	}
}

module.exports = MIndex;