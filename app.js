var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
//var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');
//var objectHash = require('object-hash');
var logger = require('morgan');

var app = express();


//Configuration du serveur

app.use(logger('dev'));
app.use(express.json());

app.use(
	express.urlencoded(
		{
			extended: false
		}
	)
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuration des sessions
let ses = session(
	{
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false
		}
	}
);


app.use(ses);

app.session = ses;

// Import des routes
var indexRouter = require('./routes/index');

// Configuration des routes
app.use('/', indexRouter);


app.post(
	'/',
	(/*request, response*/) => {
		
	}
);


// Attrape les erreurs 404 et les lances vers le gestionnaire d'erreurs
app.use(
	function(req, res, next)
	{
		console.log('app.js erreur 404');
		console.log('erreur 404 (req) : ' + req);
		console.log('erreur 404 (res) : ' + res);
		console.log('erreur 404 (next) : ' + next);
		next(createError(404));
	}
);

// Gestionnaires d'erreurs
app.use(
	function(err, req, res) 
	{
		// Définit des locales, seulement pour la gestion d'erreurs pendant le développement
		res.locals.message = err.message;
		res.locals.error = ((req.app.get('env') === 'development') ? err : {});
		
		// Renvoie la page d'erreurs
		res.status(err.status || 500);
		res.render('error.ejs');
	}
);

module.exports = app;