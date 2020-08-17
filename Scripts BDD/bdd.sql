CREATE TABLE IF NOT EXISTS Compte
(
	identifiant VARCHAR(150) NOT NULL PRIMARY KEY,
	motDePasse VARCHAR(64) NOT NULL, -- 64 caractères car longueur d'un hash sha-256
	nom VARCHAR(50) NOT NULL,
	prenom VARCHAR(50) NOT NULL,
	dateNaissance DATE NOT NULL
);

-- Lien du hashage SHA-256 en ligne pour les mots de passe du jeu de données de tests : https://emn178.github.io/online-tools/sha256.html

INSERT INTO `Compte`(`identifiant`, `motDePasse`, `nom`, `prenom`, `dateNaissance`) VALUES ('ShenonOhwa@outlook.fr', '47c478d5993fcfe294f53751a81c396cf6403d9726723b4301ae583bcd627e32', 'Ohwa', 'Shenon', '2000-11-04'); -- Mot de passe : shenon2ohwa
INSERT INTO `Compte`(`identifiant`, `motDePasse`, `nom`, `prenom`, `dateNaissance`) VALUES ('kahaha4054@accordmail.net', '8dd41714c635da6284fc1ae38b411b20ddfbe7998ade54f044e2c6e7d744aa80', 'Haha', 'Ka', '1997-08-13'); -- Mot de passe : 958XE$[b&nR!k6fk
INSERT INTO `Compte`(`identifiant`, `motDePasse`, `nom`, `prenom`, `dateNaissance`) VALUES ('gadeto9265@accordmail.net', '2c979289cc14e6204b287628c63c70cb9c84da196747b740f4d50881edc7691a', 'Eto', 'Gad', '1986-06-28'); -- Mot de passe : 4VK+nzshF()hF%g"