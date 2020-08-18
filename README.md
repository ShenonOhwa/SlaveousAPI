# SlaveousAPI

Une API -en test et en développement- d'une application mobile.

# Sommaire

* [Installation](#installation)
* [Lancement en local](#lancement-en-local)
	* [Lancement en développement](#lancement-en-développement)
	* [Lancement en production](#lancement-en-production)
* [Utilisation](#utilisation)
	* [Obtention des informations d'un compte](#obtention-des-informations-dun-compte)
	* [Obtention des informations de la totalité des comptes](#obtention-des-informations-de-la-totalité-des-comptes)

# Installation

Afin de pouvoir utiliser l'API en mode local, il est important d'installer ses dépendances ainsi que ses dépendances de développement.

L'installation des dépendances se fait via la commande `npm i --save`, et celle des dépendances de développement se fait via la commande `npm i --save-dev`.

# Lancement en local

En local, il y a deux commandes possibles pour lancer l'application gérant l'API. Une commande pour le démarrage en production et une autre pour le démarrage en développement.

## Lancement en développement

Un linter (outil d'analyse statique de code) pour le JavaScript est configuré pour l'API. Il s'agit de ESLint, et il tourne automatiquement lorsque l'API est lancée en développement.

Ceci est dû au fait qu'un outil de live-reload (outil permettant de relancer un serveur local lorsqu'un fichier JS du code source est modifié), nodemon est utilisé, en production et en développement. Nodemon relance ESLint à chaque modification d'un fichier JS.

Le lancement de l'API en "mode développement" se fait via la commande `npm run dev`.

## Lancement en production

La version en production, elle, n'utilise pas de linter. Elle utilise uniquement l'outil de live-reload Nodemon.

Afin de lancer l'API en "mode production", il suffit de saisir la commande `npm start`.

# Utilisation

L'API est reliée à une base de données, avec laquelle elle va interagir afin de fournir des données, présentées pour la plupart sous le format JSON (sauf quelques cas exceptionnels commes des erreurs).

L'adresse URL de l'API, lors de sa première version de tests, est la suivante : `https://slaveous-api.herokuapp.com`.

Néanmoins, lors de l'utilisation en local, son URL est : `http://localhost:8081`.

## Obtention des informations d'un compte

L'obtention des données d'un seul compte se fait via l'URI `/infosCompte?identifiant=identifiantDuCompte`.

Par exemple, pour obtenir les données du compte de Shenon Ohwa, il faudra saisir l'URL `https://slaveous-api.herokuapp.com/infosCompte?identifiant=ShenonOhwa`, si vous utilisez la version en ligne, ou saisir l'URL `http://localhost:8081/infosCompte?identifiant=ShenonOhwa` si vous utilisez la version en local.

Les données JSON ressembleront alors à ceci :

```
{
	"message": "Voici les informations du compte demandé.",
	"identifiantCompte": "ShenonOhwa",
	"informations": {
		"identifiant": "ShenonOhwa",
		"motDePasse": "47c478d5993fcfe294f53751a81c396cf6403d9726723b4301ae583bcd627e32",
		"mail": "ShenonOhwa@outlook.fr",
		"nom": "Ohwa",
		"prenom": "Shenon",
		"dateNaissance": "2000-11-03T23:00:00.000Z"
	},
	"methode": "GET"
}
```

Il semble cependant y avoir une erreur sur les dates, soit au niveau de la base de données, soit au niveau de l'application en Node.js, soit les deux, car je suis né le 4 Novembre 2000 et non le 3 ! Et c'est clairement indiqué dans le jeu de données de la base de données de l'API.

## Obtention des informations de la totalité des comptes

L'obtention des données d'un seul compte se fait via l'URI `/listeComptes`.

L'URL à saisir pour obtenir lesdites informations suit donc le même modèle que décrit précédemment, à savoir :

- `https://slaveous-api.herokuapp.com/listeComptes` si l'on utilise l'API en ligne ;
- `http://localhost:8081/listeComptes` si l'on utilise l'API en local.

Les données JSON ressembleront alors à ceci :

```
{
	"message": "Voici les informations de la totalité des comptes.",
	"informations": [
		{
			"identifiant": "gadeto9265",
			"motDePasse": "2c979289cc14e6204b287628c63c70cb9c84da196747b740f4d50881edc7691a",
			"mail": "gadeto9265@accordmail.net",
			"nom": "Eto",
			"prenom": "Gad",
			"dateNaissance": "1986-06-27T22:00:00.000Z"
		},
		{
			"identifiant": "kahaha4054",
			"motDePasse": "8dd41714c635da6284fc1ae38b411b20ddfbe7998ade54f044e2c6e7d744aa80",
			"mail": "kahaha4054@accordmail.net",
			"nom": "Haha",
			"prenom": "Ka",
			"dateNaissance": "1997-08-12T22:00:00.000Z"
		},
		{
			"identifiant": "ShenonOhwa",
			"motDePasse": "47c478d5993fcfe294f53751a81c396cf6403d9726723b4301ae583bcd627e32",
			"mail": "ShenonOhwa@outlook.fr",
			"nom": "Ohwa",
			"prenom": "Shenon",
			"dateNaissance": "2000-11-03T23:00:00.000Z"
		}
	],
	"methode": "GET"
}
```

Par ailleurs, il semble toujours y avoir le même problème de dates ici aussi.