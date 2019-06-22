// Database
const db = require('../db');

module.exports = (req, res) => {
	//check what the request from browser is
	//console.log('reg', reg.params.id);

	db.query(`SELECT * FROM categories WHERE category = ${reg.params.id}`,
		(err, result) => {
			if (err) {
				console.log('err', err)
			} else {
			res.send(result.rows)
		}
	});
};
