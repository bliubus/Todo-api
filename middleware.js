var cryptojs = require('crypto-js');

module.exports = function(db) {

	return {
		requireAuthentication: function(req, res, next) {
			var token = req.get('Auth') || '';
			console.log('---> ' + token);

			db.token.findOne({
				where: {
					tokenHash: cryptojs.MD5(token).toString()
				}
			}).then(function(tokenInstance) {
				if (!tokenInstance) {
					throw new Error();
				}
				console.log("found token tokenInstance");

				req.token = tokenInstance;
				return db.user.findByToken(token);
			}).then(function(user) {
				console.log("found token token");
				req.user = user;
				next();
			}).catch(function(e) {
				console.log("not found token: " + e);
				res.status(401).send();
			});

			// db.user.findByToken(token).then(function(user) {
			// 	req.user = user;
			// 	next();
			// }, function(e) {
			// 	res.status(401).send();
			// });
		},

	};

}